import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shared/components/ui/table"
import {Link} from 'react-router-dom'
import {useOrdersStore} from "@/modules/OrdersTable/store/orders.ts";
import {useEffect} from "react";
import {buttonVariants} from "@/shared/components/ui/button.tsx";

export default function OrdersTable() {
    const orders = useOrdersStore(state => state.orders);
    const updateOrderStatus = useOrdersStore(state => state.updateOrderStatus);
    useEffect(() => {
        setTimeout(() => {
            updateOrderStatus('JU-14a', "Cancelled" );
        },1000)
    },
    []
    )

    return (
        <>

            <Table>
                <TableCaption>A list of your orders.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Order Id</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Item</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        orders.length > 0 ?
                        orders.map((order) => (
                        <TableRow key={order.id}>
                            <TableCell className="font-medium">
                                <Link to={'/'} >
                                    {order.id}
                                </Link></TableCell>
                            <TableCell>{order.item}</TableCell>
                            <TableCell>{order.status}</TableCell>
                            <TableCell className="text-right">{
                                <Link className={buttonVariants({variant: 'outline'})} to={`/orders/${order.id}`}>Details</Link>
                            }</TableCell>
                        </TableRow>
                    ))
                            : <div>You don't any Orders</div>

                    }
                </TableBody>

            </Table>

        </>

    )
}
