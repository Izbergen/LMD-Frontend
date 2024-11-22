export type IOrder = {
    id: string;
    item: string;
    description: string;
    status: 'Pending' | 'Paid' | 'Cancelled';
};