import { db } from "~/db/db.server";
import { Table } from "~/db/schema";

export async function loader() {
  return { stages: await db.select().from(Table) };
}