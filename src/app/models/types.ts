export interface DropdownItem {
    label: string;
    value: string;
    photo: string;
}

export interface DropdownProps {
    text: string;
    photo: string;
    items: DropdownItem[];
    onSelect: (value: string, photo: string) => void;
}