import {Route , Routes } from 'react-router';

import Layout from "./layout.tsx";

import AuthPage from '@/pages/Auth';
import HomePage from '@/pages/Home';
import OrdersPage from '@/pages/Orders';

function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path={'orders/'}>
              <Route index element={<OrdersPage />} />
              <Route path={':id'} element={<></>} />
          </Route>
      </Route>
        <Route path={'/auth/:id'} element={<AuthPage />} />
    </Routes>
  )
}

export default App;
