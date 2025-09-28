import { db } from "./db";
import { leads, partners, matches, type Lead, type InsertLead, type Partner, type InsertPartner, type Match, type InsertMatch } from "../shared/schema";
import { eq } from "drizzle-orm";

// Storage interface for database operations
export interface IStorage {
  // Lead operations
  createLead(insertLead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  getLeadById(id: string): Promise<Lead | undefined>;
  
  // Partner operations (for future use)
  createPartner(insertPartner: InsertPartner): Promise<Partner>;
  getPartners(): Promise<Partner[]>;
  getPartnerById(id: string): Promise<Partner | undefined>;
  
  // Match operations (for future use)
  createMatch(insertMatch: InsertMatch): Promise<Match>;
  getMatches(): Promise<Match[]>;
}

export class DatabaseStorage implements IStorage {
  // Lead operations
  async createLead(insertLead: InsertLead): Promise<Lead> {
    const [lead] = await db
      .insert(leads)
      .values(insertLead)
      .returning();
    return lead;
  }

  async getLeads(): Promise<Lead[]> {
    return await db.select().from(leads);
  }

  async getLeadById(id: string): Promise<Lead | undefined> {
    const [lead] = await db.select().from(leads).where(eq(leads.id, id));
    return lead;
  }

  // Partner operations
  async createPartner(insertPartner: InsertPartner): Promise<Partner> {
    const [partner] = await db
      .insert(partners)
      .values(insertPartner)
      .returning();
    return partner;
  }

  async getPartners(): Promise<Partner[]> {
    return await db.select().from(partners);
  }

  async getPartnerById(id: string): Promise<Partner | undefined> {
    const [partner] = await db.select().from(partners).where(eq(partners.id, id));
    return partner;
  }

  // Match operations
  async createMatch(insertMatch: InsertMatch): Promise<Match> {
    const [match] = await db
      .insert(matches)
      .values(insertMatch)
      .returning();
    return match;
  }

  async getMatches(): Promise<Match[]> {
    return await db.select().from(matches);
  }
}

export const storage = new DatabaseStorage();