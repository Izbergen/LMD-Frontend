import {create} from 'zustand';
import {Socket , io} from 'socket.io-client';
import {IOrder} from "@/shared/types/IOrder.ts";
import {toast} from 'sonner';

interface OrdersState {
    orders: IOrder[];
    socket: Socket | null;
    initializeSocket: () => void;
    updateOrderStatus: (id: string, status: IOrder['status']) => void;
}

export const useOrdersStore = create<OrdersState>(
    (set , get) => ({
            orders: [
                {
                    id: 'JU-14a',
                    item: 'IPhone 14',
                    status: 'Pending',
                    description: 'Test',
                }
            ],
            socket: null,
            initializeSocket: () => {
                const socket = io('http://localhost:4000');
                socket.on('orders:update', (orders: IOrder[]) => {
                    set({ orders });
                });

                set({ socket });
            },
            updateOrderStatus: (id, status) => {
                const { socket, orders } = get();

                if (socket) {
                    socket.emit('orders:updateStatus', { id, status });

                    const updatedOrder = orders.find((order) => order.id === id);

                    if (updatedOrder) {
                        updatedOrder.status = status;
                        toast(`Order status updated for ${id}`, {
                            description: `To ${status}. Date: ${Date.now().toString()}`,
                            action: {
                                label: "Close",
                                onClick: () => console.log('Close'),
                            },
                        })
                    }
                    else console.error(`Error updating order ${id}`, {});
                }}
    }))