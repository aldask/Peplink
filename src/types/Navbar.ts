export interface NavbarProps {
  onAddClick: () => void;
  sortOption?: string;
  onSortChange?: (value: string) => void;
  closeMenu?: () => void;
}
