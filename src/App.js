import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
       <Router>
         <Routes>
            <Route exact path='./home'>
              <Home></Home>
            </Route>
         </Routes>
       </Router>
    </div>
  );
}

export default App;