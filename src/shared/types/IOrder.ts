 type IStatus = "Pending" | "Shipped" | "Delivered" | "Cancelled" | "Completed";


export type IOrder = {
    id: string;
    item: string;
    status: IStatus;
    nextStatus: IStatus;
    description: string;
    timeout: number;
};

