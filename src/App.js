import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './component/Header/Header';
import About from './component/About/About';
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact';
import Products from './component/Products/Products';

function App() {
  const router = createBrowserRouter([
    { path:'/', element: <Header></Header>},
    { path:'home', element: <Home></Home>},
    { path:'about', element: <About></About>},
    { path:'contact', element: <Contact></Contact>},
    { path: 'products', element: <Products></Products>},
  ])
  return (
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;