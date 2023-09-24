import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Main from './pages/main';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Register from './pages/register';

function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <>
      {!isLogin ? 
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </BrowserRouter>
        : 
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main/>}/>
          </Routes>
        </BrowserRouter>
      }
    </>
  )
}

export default App;
