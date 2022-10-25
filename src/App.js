import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './layout/Router';

function App() {
  return (
    <div className='bg-dark'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
