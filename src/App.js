import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import OrderSummary from './components/OrderSummary';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">

      <NavBar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />

        <Route path='*' element={<NotFound />}></Route> 
      </Routes>
      
    </div>
  );
}

export default App;
