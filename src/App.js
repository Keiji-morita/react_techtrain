import logo from './logo.svg';
import './App.css';
// import { BrowserRouter, div, Route, useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Register from './components/register'
import Login from './components/login'

const App = () => {
    // const navigate = useNavigate()
  return (
    <div className="App">


      <BrowserRouter>
    <div>
      <Link to="/components/register">
        <button>
          サインイン
        </button>
      </Link>
    </div>

    <div>
      <Link to="/components/login">
        <button>
          ログイン
        </button>
      </Link>
    </div>

      
            <Routes>
                <Route path="/components/register" element={<Register />}/>
                <Route path="/components/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    


    </div>
    
  );
}

export default App;
