
import './App.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Getproducts from './components/Getproducts';
import Addproducts from './components/Addproducts';
import Signin from './components/signin';
import Signup from './components/Signup';
import Notfound from './components/Notfound';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <Router>
       <div className="App">
      <header className="App-header">
        <h1 >welcome to sokogarden</h1>
      </header>

      <Routes>
          <Route path='/' element={<Getproducts/>}/>
          {/* This matches localhost:3000/add */}
          <Route path='/add' element={<Addproducts/>}/> 
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
