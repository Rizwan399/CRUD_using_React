// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom" ;
import LoginForm from './frontPage';
import Login from './signinapp';
import Home from './Home';
import Temp from './temp';
import EditUser from './up';
function App() {
  return (
   <Router>
    <Routes>

      <Route path='/temp' element={<Home />} />
      <Route path='/' element={<Temp />} />
      <Route path='/signup' element={<LoginForm />} />
      <Route path='/signin' element={<Login />} />
      <Route path='/edit' element={<EditUser />} />
    </Routes>
   </Router>
  );
}

export default App;
