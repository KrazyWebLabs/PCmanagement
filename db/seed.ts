import { Area, db, Major, PC, User } from 'astro:db';

export default async function seed() {
	await db.insert(Area).values([
    { id: 1, name: "Sala 1" },
    { id: 2, name: "Sala 2" },
  ]);

  await db.insert(Major).values([
    { id: 1, name: "Ing. de software" },
    { id: 2, name: "Ing. mecatronica" },
  ])
  
	await db.insert(User).values([
    { id: 1, fullName: "Gabriel Osorio", majorID: 1,},
    { id: 2, fullName: "Edgar Torres", majorID: 1,},
  ])
	
	await db.insert(PC).values([
    {
			id: 1,
			name: "PC-1",
			areaID: 1,
		},
  ])
}
