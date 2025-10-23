import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import OrderSummary from './components/OrderSummary';
import NotFound from './components/NotFound';
import Products from './components/Products';
import Featured from './components/Featured';
import New from './components/New';
import Users from './components/users/Users';
import Admin from './components/users/Admin';
import UserDetails from './components/users/UserDetails';
import React, { Suspense } from 'react';
import Profile from './components/authentication/Profile';
import useAuth, { AuthProvider } from './components/authentication/authContext';
import Login from './components/authentication/LogIn';
import WithAuth from './components/authentication/WithAuth';

const LazyAbout = React.lazy(() => import("./components/About"));

function App() {  
  return (
    <AuthProvider>
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

          {/* dynamic routes */}
          <Route path='users' element={<Users />}>
              <Route path=':userId' element={<UserDetails />} />
              <Route path='admin' element={<Admin />} />
          </Route>

          <Route path='lazy-about' element={
            <Suspense fallback={<h3>Loading...🔆</h3>}>
              <LazyAbout />
            </Suspense>} 
          />

          <Route path='profile' element={
            <WithAuth>
              <Profile />
            </WithAuth>} 
          />

          <Route path='login' element={<Login />} />

          <Route path='*' element={<NotFound />}></Route> 
        </Routes>
        
      </div>
    </AuthProvider>
  );
}

export default App;
