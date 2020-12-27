import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const emptyFormInfo = () =>
  toast.error('Please enter name of song for search!', {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
