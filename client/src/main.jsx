import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import toast, { Toaster } from 'react-hot-toast';
import { RecoilRoot } from 'recoil';


import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <Toaster />
      <App />
    </RecoilRoot>
  </React.StrictMode>
)
