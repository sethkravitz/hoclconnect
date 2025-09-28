import { pgTable, varchar, text, boolean, integer, timestamp, json } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

// Leads table - storing form submissions
export const leads = pgTable("leads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  intent: varchar("intent", { enum: ["supplier", "private-label"] }).notNull(),
  industry: text("industry").notNull(),
  amountBand: text("amount_band"),
  cadence: text("cadence"),
  timeline: text("timeline"),
  strengthChoice: text("strength_choice"),
  format: text("format"),
  packagingGoal: text("packaging_goal"),
  ackPurity: boolean("ack_purity").default(false).notNull(),
  notes: text("notes"),
  companionInterest: boolean("companion_interest").default(false).notNull(),
  regionPref: text("region_pref"),
  company: text("company"),
  contactName: text("contact_name"),
  email: text("email"),
  phone: text("phone"),
  experienceLevel: text("experience_level"),
  unknownFields: json("unknown_fields").$type<Record<string, any>>(),
  score: integer("score").default(0).notNull(),
  status: text("status").default("new").notNull(),
});

// Partners table - storing suppliers and manufacturers
export const partners = pgTable("partners", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  companyName: text("company_name").notNull(),
  type: varchar("type", { enum: ["supplier", "private-label"] }).notNull(),
  industries: json("industries").$type<string[]>().notNull(),
  regions: json("regions").$type<string[]>().notNull(),
  containers: json("containers").$type<string[]>().notNull(),
  ppmRanges: json("ppm_ranges").$type<string[]>().notNull(),
  moqNotes: text("moq_notes"),
  leadtimeRangeWeeks: text("leadtime_range_weeks"),
  certsSummary: text("certs_summary"),
  contactEmail: text("contact_email"),
  active: boolean("active").default(true).notNull(),
});

// Matches table - connecting leads with partners
export const matches = pgTable("matches", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  leadId: varchar("lead_id").notNull().references(() => leads.id),
  partnerId: varchar("partner_id").notNull().references(() => partners.id),
  matchedAt: timestamp("matched_at").defaultNow().notNull(),
  reason: text("reason"),
});

// Relations
export const leadsRelations = relations(leads, ({ many }) => ({
  matches: many(matches),
}));

export const partnersRelations = relations(partners, ({ many }) => ({
  matches: many(matches),
}));

export const matchesRelations = relations(matches, ({ one }) => ({
  lead: one(leads, { fields: [matches.leadId], references: [leads.id] }),
  partner: one(partners, { fields: [matches.partnerId], references: [partners.id] }),
}));

// Zod schemas for validation
export const insertLeadSchema = createInsertSchema(leads);
export const selectLeadSchema = createSelectSchema(leads);
export const insertPartnerSchema = createInsertSchema(partners);
export const selectPartnerSchema = createSelectSchema(partners);
export const insertMatchSchema = createInsertSchema(matches);
export const selectMatchSchema = createSelectSchema(matches);

// TypeScript types
export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;
export type Partner = typeof partners.$inferSelect;
export type InsertPartner = typeof partners.$inferInsert;
export type Match = typeof matches.$inferSelect;
export type InsertMatch = typeof matches.$inferInsert;