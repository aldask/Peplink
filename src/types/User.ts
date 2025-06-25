import type { ReactNode } from "react";

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
}

export interface AddUserProps {
  onAddUser: (user: User) => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface FormSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface UserSortionProps {
  sortOption: string;
  onChange: (value: string) => void;
}

export interface ChuckResponse {
  value: string;
  icon_url: string;
}
