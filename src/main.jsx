import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from '@/components/ui/provider'
import './index.css'
import App from './App.jsx'
import { registerSW } from "virtual:pwa-register";

registerSW({ immediate: true });


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)
