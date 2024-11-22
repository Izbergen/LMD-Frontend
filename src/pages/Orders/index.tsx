import {FC} from "react";
import OrdersTable from '@/modules/OrdersTable'

const Orders: FC = () => {
    return (
        <div className={'container'}>
        <OrdersTable />
        </div>
    )
}
export default Orders;