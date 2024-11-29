import {Route , Routes } from 'react-router';

import Layout from "./layout.tsx";

import AuthPage from '@/pages/Auth';
import HomePage from '@/pages/Home';
import OrdersPage from '@/pages/Orders';
import OrderDetailsPage from '@/pages/OrderDetails';

function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={'orders/'} element={<OrdersPage />} />
          <Route path={'orders/:id'} element={<OrderDetailsPage />} />
      </Route>
        <Route path={'/auth/:id'} element={<AuthPage />} />
    </Routes>
  )
}

export default App;
