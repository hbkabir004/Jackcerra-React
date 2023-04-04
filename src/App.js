import { RouterProvider } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/effect-coverflow";
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { routes } from './Routes/Routes';
import './assets/css/main.css';

function App() {
  return (
    <div className="page-wrapper">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
