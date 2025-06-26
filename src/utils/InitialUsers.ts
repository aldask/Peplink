import type { User } from "../types/User";

export const InitialUsers: User[] = [
  {
    id: Date.now(),
    f_name: "Jonas",
    l_name: "Donas",
    email: "jonas.donas@mail.com",
    age: 30,
    gender: "Male",
    role: "Accountant",
  },
  {
    id: Date.now() + 1,
    f_name: "Jane",
    l_name: "Janauske",
    email: "jane.janauske@mail.com",
    age: 25,
    gender: "Female",
    role: "Manager",
  },
  {
    id: Date.now() + 2,
    f_name: "Tomas",
    l_name: "Komas",
    email: "tomas.komas@mail.com",
    age: 35,
    gender: "Male",
    role: "Developer",
  },
];
