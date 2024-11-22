import {FC} from "react";
import {Outlet} from "react-router-dom";

import Header from '@/shared/components/Header';
import Footer from '@/shared/components/Footer';


const Layout: FC = () => (
    <>
        <Header />
        <main className={'main'}>
            <Outlet />
        </main>
        <Footer />
    </>
)

export default Layout;