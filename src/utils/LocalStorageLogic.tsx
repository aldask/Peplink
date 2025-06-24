import type { User } from "../types/User";

export function getUsersFromLocalStorage(): User[] {
  const users = localStorage.getItem("users");
  if (users) {
    return JSON.parse(users);
  }
  console.log("No users in the storage");
  return [];
}

export function addUserToLocalStorage(user: User[]): void {
  const users = getUsersFromLocalStorage();
  users.push(...user);
  localStorage.setItem("users", JSON.stringify(users));
}
