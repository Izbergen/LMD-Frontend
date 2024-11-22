import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './shared/style/global.css'
import store from '@/shared/store'

import App from './app'

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {Toaster} from "@/shared/components/ui/sonner.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <  App />
              <Toaster />
          </BrowserRouter>
      </Provider>
  </StrictMode>,
)
