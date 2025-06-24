export interface User {
  id: number;
  f_name: string;
  l_name: string;
  gender: string;
  age: number;
  role: string;
  email: string;
}

export interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}
