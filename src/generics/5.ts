export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type RoleUser = Record<UserRole, string>;

const RoleDescription: RoleUser = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

console.log(RoleDescription);
