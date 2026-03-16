import { turso } from '../turso'

export default async function searchPC(areaID: number){
  const { rows } = await turso.execute(`SELECT * FROM PC WHERE statusID == 1 AND areaID == ${areaID}`)
  return rows;
}