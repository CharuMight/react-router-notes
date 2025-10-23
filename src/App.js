import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import OrderSummary from './components/OrderSummary';
import NotFound from './components/NotFound';
import Products from './components/Products';
import Featured from './components/Featured';
import New from './components/New';

function App() {
  return (
    <div className="App">

      <NavBar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
        
        {/* Nested routes to switch view of portion of a page */}
        <Route path='products' element={<Products />}>
            <Route index element={<Featured />} />

            <Route path='featured' element={<Featured />} />
            <Route path='new' element={<New />} />
        </Route>

        <Route path='*' element={<NotFound />}></Route> 
      </Routes>
      
    </div>
  );
}

export default App;
