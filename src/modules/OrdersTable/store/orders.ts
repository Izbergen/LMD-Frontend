import { create } from 'zustand';
import { IOrder } from "@/shared/types/IOrder";
import { toast } from 'sonner';

interface OrdersState {
    orders: IOrder[];
    startMockUpdates: () => void;
}

export const useOrdersStore = create<OrdersState>((set, get) => ({
    orders: [
        {
            id: 'JU-14a',
            item: 'IPhone 14',
            status: 'Pending',
            nextStatus: 'Shipped',
            description: 'Ожидается подтверждение заказа от клиента.',
            timeout: 1000000
        },
        {
            id: 'JU-15b',
            item: 'IPhone 15',
            status: 'Shipped',
            nextStatus: 'Delivered',
            description: 'Заказ отправлен и находится в пути к клиенту.',
            timeout: 120000
        },
        {
            id: 'JU-16c',
            item: 'IPhone 16',
            status: 'Delivered',
            nextStatus: 'Completed',
            description: 'Заказ успешно доставлен клиенту.',
            timeout: 9000
        },
        {
            id: 'JU-17d',
            item: 'IPhone 17',
            status: 'Pending',
            nextStatus: 'Cancelled',
            description: 'Клиент не подтвердил заказ. Возможна отмена.',
            timeout: 90000
        },
        {
            id: 'JU-18e',
            item: 'IPhone 18',
            status: 'Cancelled',
            nextStatus: 'Pending',
            description: 'Заказ был отменён. Возможно, требуется повторное подтверждение.',
            timeout: 800000
        },
        {
            id: 'JU-19f',
            item: 'IPhone 19',
            status: 'Pending',
            nextStatus: 'Shipped',
            description: 'Заказ ожидает упаковки перед отправкой.',
            timeout: 100000
        },
        {
            id: 'JU-20g',
            item: 'IPhone 20',
            status: 'Shipped',
            nextStatus: 'Delivered',
            description: 'Заказ в пути. Клиент уведомлён о доставке.',
            timeout: 1200012
        },
        {
            id: 'JU-21h',
            item: 'IPhone 21',
            status: 'Delivered',
            nextStatus: 'Completed',
            description: 'Доставка выполнена. Ожидается подтверждение завершения.',
            timeout: 20000
        },
        {
            id: 'JU-22i',
            item: 'IPhone 22',
            status: 'Pending',
            nextStatus: 'Shipped',
            description: 'Заказ на стадии обработки. Готовится к отправке.',
            timeout: 105000
        },
        {
            id: 'JU-23j',
            item: 'IPhone 23',
            status: 'Cancelled',
            nextStatus: 'Pending',
            description: 'Клиент запросил отмену. Возможен новый заказ.',
            timeout: 18000
        }
    ],

    startMockUpdates: () => {
        const orders = get().orders;

        orders.forEach((order) => {
            setTimeout(() => {
                const updatedOrders = get().orders.map((o) => {
                    if (o.id === order.id && o.status !== o.nextStatus) {
                        toast(`Обновление заказа ${o.id}`, {
                            description: `Статус изменён на ${o.nextStatus}`,
                            action: {
                                label: 'Закрыть',
                                onClick: () => console.log('Закрыто'),
                            },
                        });

                        return {
                            ...o,
                            status: o.nextStatus,
                            nextStatus: o.nextStatus,
                        };
                    }
                    return o;
                });

                set({ orders: updatedOrders });
            }, order.timeout);
        });
    },
}));
