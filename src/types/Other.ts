import type { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface FormSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export interface ChuckResponse {
  value: string;
  icon_url: string;
}

export interface ButtonProps {
  onClick?: () => void;
  type?: "submit";
  className?: string;
  children: React.ReactNode;
}
