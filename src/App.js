import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './component/About/About';
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact';
import Products from './component/Products/Products';
import Main from './component/Layout/Main';
import Friends from './component/Friends/Friends';

function App() {
  const router = createBrowserRouter([
    { 
      path:'/', 
      element: <Main></Main>, 
      children: [
         { path:'/', element: <Home></Home>},
         { path:'home', element: <Home></Home>},
         { path: 'products', element: <Products></Products>},
         { 
          path: 'friends', 
          loader: async()=>{
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friends></Friends>},
    ]},
    
    { path:'about', element: <About></About>},
    { path:'contact', element: <Contact></Contact>}, 
    { path: '*', element: <div>This route not found 404</div>}, 
  ])
  return (
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;