import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Meals from './components/Meals/Meals';
import Contact from './components/Contact/Contact';
import Order from './components/Orders/Order';
import SingleMeal from './components/SingleMeal/SingleMeal';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/home'  element={<Home></Home>}></Route>
       <Route path = '/about' element={<About></About>}></Route>
       <Route path = '/meals' element={<Meals></Meals>}></Route>
       <Route path = '/contact' element={<Contact></Contact>}></Route>
       <Route path = '/orders' element={<Order></Order>}></Route>
       <Route path='/meals/:mealid' element={<SingleMeal></SingleMeal>}></Route>
     </Routes>
    </div>
  );
}

export default App;
