import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './component/About/About';
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact';
import Products from './component/Products/Products';
import Main from './component/Layout/Main';
import Friends from './component/Friends/Friends';
import FriendDetails from './component/FriendDetails/FriendDetails';
import Posts from './component/Posts/Posts';
import PostDetail from './component/PostDetail/PostDetail';

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
          {
            path:'/friend/:friendId',
            loader: async({params})=>{
              console.log(params)
              return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
            },
            element: <FriendDetails></FriendDetails>
          },
          {
            path: '/posts',
            loader: async()=>{
              return fetch('https://jsonplaceholder.typicode.com/posts')

          },
          element: <Posts></Posts>
        },
        {
          path: '/post/:postId',
          loader: async({params})=>{
           return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}` )
          },
          element: <PostDetail></PostDetail>
        }
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