import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const Table = pgTable("", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
});
