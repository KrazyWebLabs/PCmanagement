import { column, defineDb, defineTable, NOW } from "astro:db";

const Area = defineTable({
  columns: {
    id: column.number({ unique: true }),
    name: column.text({ default: "Sala -" }),
    _createdAt: column.date({ default: NOW }),
  },
});

const Status = defineTable({
  columns: {
    id: column.number({ unique: true }),
    name: column.text(),
    _createdAt: column.date({ default: NOW }),
  },
});

const Major = defineTable({
  columns: {
    id: column.number({ unique: true }),
    name: column.text({ default: "Ingeniería de Software" }),
    _createdAt: column.date({ default: NOW }),
  },
});

const User = defineTable({
  columns: {
    id: column.number({ unique: true }),
    fullName: column.text({ default: "John Doe" }),
    majorName: column.text({ default: "Ing de Software" }),
    majorID: column.number({ default: 1 }),
    statusID: column.number({ default: 5 }),
    _createdAt: column.date({ default: NOW }),
  },
  foreignKeys: [
    {
      columns: ["majorID"],
      references: () => [Major.columns.id],
    },
    {
      columns: ["statusID"],
      references: () => [Status.columns.id],
    },
  ],
});

const PC = defineTable({
  columns: {
    id: column.number({ unique: true }),
    name: column.text({ default: "PC" }),
    areaID: column.number(),
    userID: column.number({ optional: true }),
    statusID: column.number({ default: 1 }),
    _createdAt: column.date({ default: NOW }),
  },
  foreignKeys: [
    {
      columns: ["areaID"],
      references: () => [Area.columns.id],
    },
    {
      columns: ["userID"],
      references: () => [User.columns.id],
    },
    {
      columns: ["statusID"],
      references: () => [Status.columns.id],
    },
  ],
});

const AssignmentRegister = defineTable({
  columns: {
    id: column.number({ unique: true }),
    areaID: column.number(),
    userID: column.number(),
    pcID: column.number(),
    statusID: column.number({ default: 3 }),
    _createdAt: column.date({ default: NOW }),
    _updatedAt: column.date({ optional: true }),
  },

  foreignKeys: [
    {
      columns: ["areaID"],
      references: () => [Area.columns.id],
    },
    {
      columns: ["userID"],
      references: () => [User.columns.id],
    },
    {
      columns: ["pcID"],
      references: () => [PC.columns.id],
    },
    {
      columns: ["statusID"],
      references: () => [Status.columns.id],
    },
  ],
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Area,
    Status,
    Major,
    User,
    PC,
    AssignmentRegister,
  },
});
