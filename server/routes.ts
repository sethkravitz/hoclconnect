import { Router } from 'express';
import { storage } from './storage';
import { insertLeadSchema, type InsertLead } from '../shared/schema';
import { z } from 'zod';

export const router = Router();

// POST /api/leads - Create a new lead
router.post('/leads', async (req, res) => {
  try {
    console.log('Received lead data:', req.body);
    
    // Parse and validate the request body
    const leadData = insertLeadSchema.parse(req.body) as InsertLead;
    
    // Create the lead in the database
    const newLead = await storage.createLead(leadData);
    
    console.log('Created lead:', newLead.id);
    res.status(201).json({ 
      success: true, 
      data: newLead,
      message: 'Lead created successfully'
    });
  } catch (error) {
    console.error('Error creating lead:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: 'Validation error',
        details: error.errors
      });
    }
    
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// GET /api/leads - Get all leads (for future admin use)
router.get('/leads', async (req, res) => {
  try {
    const leads = await storage.getLeads();
    res.json({
      success: true,
      data: leads
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// GET /api/leads/:id - Get a specific lead
router.get('/leads/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const lead = await storage.getLeadById(id);
    
    if (!lead) {
      return res.status(404).json({
        success: false,
        error: 'Lead not found'
      });
    }
    
    res.json({
      success: true,
      data: lead
    });
  } catch (error) {
    console.error('Error fetching lead:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});