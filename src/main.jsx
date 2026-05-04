import Modal from 'react-modal';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import './index.css';
import App from './components/App/App.jsx';

Modal.setAppElement('#root');

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
  </>
);
