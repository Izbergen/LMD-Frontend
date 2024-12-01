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
    const userID = localStorage.getItem("id");
    const orders = useOrdersStore(state => state.orders);
    const startMockUpdates = useOrdersStore(state => state.startMockUpdates);
    useEffect(() => {
        startMockUpdates()
    },[orders])

    return (
        <>

            <Table>
                <TableCaption>A list of your orders.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Order Id</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Item</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        orders.length > 0 && userID === '12345678' ?
                        orders.map((order) => (
                        <TableRow key={order.id}>
                            <TableCell className="font-medium">
                                <Link to={'/'} >
                                    {order.id}
                                </Link></TableCell>
                            <TableCell>{order.status}</TableCell>
                            <TableCell>{order.item}</TableCell>
                            <TableCell>{order.description}</TableCell>
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
