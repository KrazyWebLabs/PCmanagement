import { db, eq, PC, User } from "astro:db";
import { turso } from "src/turso";

export async function verifyUser(userID: number){
  const { rows } = await turso.execute(`SELECT * FROM User WHERE id == ${userID}`)

  if (rows.length === 0) return false
  return true
}

export async function userHasSession(userID: number){
  const { rows } = await turso.execute(`SELECT * FROM PC WHERE userID == ${userID}`)

  if (rows.length === 0) return false
  return true
}