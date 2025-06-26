export interface User {
  id: number;
  f_name: string;
  l_name: string;
  gender: string;
  age: number;
  role: string;
  email: string;
}

export interface UsersListProps {
  users: User[];
  onDeleteUser: (id: number) => void;
}

export interface UserFormData {
  f_name: string;
  l_name: string;
  gender: string;
  role: string;
  email: string;
  age: string;
}

export interface FormErrors {
  f_name: string;
  l_name: string;
  gender: string;
  age: string;
  role: string;
  email: string;
}

export interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
}

export interface AddUserProps {
  onAddUser: (user: User) => void;
}

export interface UserSortingProps {
  sortOption: string;
  onChange: (value: string) => void;
}
