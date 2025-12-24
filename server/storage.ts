import { db } from "./db";
import {
  admissions,
  type InsertAdmission,
  type Admission
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  createAdmission(admission: InsertAdmission): Promise<Admission>;
}

export class DatabaseStorage implements IStorage {
  async createAdmission(insertAdmission: InsertAdmission): Promise<Admission> {
    const [admission] = await db
      .insert(admissions)
      .values(insertAdmission)
      .returning();
    return admission;
  }
}

export const storage = new DatabaseStorage();
