import {FC} from "react";
import {Outlet} from "react-router-dom";

import Header from '@/shared/components/Header';
import Footer from '@/shared/components/Footer';


const Layout: FC = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
)

export default Layout;