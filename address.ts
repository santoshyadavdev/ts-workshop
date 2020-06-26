export interface Address {
    empId: number;
    id: number;
    addrLine1: string;
    addrLine2: string;
    city: string;
}

export const threshold = 50;

export function save() {
    return 1;
} 