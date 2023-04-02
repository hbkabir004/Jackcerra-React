import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import './assets/css/main.css';

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
