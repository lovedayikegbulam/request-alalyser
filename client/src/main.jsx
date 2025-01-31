import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from "@nextui-org/react";
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
    <RecoilRoot>
      <App/>
    </RecoilRoot>
    </NextUIProvider>
  </React.StrictMode>,
)
