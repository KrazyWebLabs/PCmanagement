import {
  Area,
  db,
  Major,
  PC,
  User,
  Status,
  AssignmentRegister,
} from "astro:db";

export default async function seed() {
  await db.insert(Area).values([
    { id: 1, name: "Asesoria" },
    { id: 2, name: "Sala 1" },
    { id: 3, name: "Sala MAC" },
    { id: 4, name: "Sala 3" },
    { id: 5, name: "Sala 4" },
  ]);

  await db.insert(Status).values([
    { id: 1, name: "libre" },
    { id: 2, name: "baja" },
    { id: 3, name: "en uso" },
    { id: 4, name: "en mantenimiento" },
    { id: 5, name: "inscrito" },
    { id: 6, name: "graduado" },
  ]);

  await db.insert(Major).values([
    { id: 1, name: "Ingeniería de software" },
    { id: 2, name: "Ingeniería mecatronica" },
  ]);

  await db.insert(User).values([
    {
      id: 20106746,
      fullName: "Jorge Gabriel García Osorio",
      majorID: 1,
    },
    {
      id: 20109625,
      fullName: "Edgar Torres Nuñez",
      majorID: 1,
      statusID: 6,
    },
  ]);

  await db.insert(PC).values([
    {
      id: 1,
      name: "PC-1",
      areaID: 1,
    },
    {
      id: 2,
      name: "PC-2",
      areaID: 2,
    },
  ]);

  await db.insert(AssignmentRegister).values([
    {
      id: 1,
      areaID: 1,
      userID: 20109625,
      pcID: 1,
      statusID: 3,
      _createdAt: new Date("2024-11-20T10:15:00Z"),
    },
    {
      id: 2,
      areaID: 2,
      userID: 20106746,
      pcID: 2,
      statusID: 3,
      _createdAt: new Date("2024-12-05T08:30:00Z"),
    },
    {
      id: 3,
      areaID: 3,
      userID: 20109625,
      pcID: 1,
      statusID: 3,
      _createdAt: new Date("2025-01-10T14:45:00Z"),
    },
    {
      id: 4,
      areaID: 3,
      userID: 20106746,
      pcID: 2,
      statusID: 3,
      _createdAt: new Date("2025-02-22T09:00:00Z"),
    },
    {
      id: 5,
      areaID: 5,
      userID: 20109625,
      pcID: 1,
      statusID: 3,
      _createdAt: new Date("2025-03-15T16:20:00Z"),
    },
  ]);
}
