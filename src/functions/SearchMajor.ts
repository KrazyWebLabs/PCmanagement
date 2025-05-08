import { turso } from '../turso'

export default async function searchMajor(majorName: string){
  const { rows } = await turso.execute(`SELECT * FROM Major WHERE name == '${majorName}'`)
  return rows;
}