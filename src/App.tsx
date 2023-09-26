import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Main from './pages/main';
import Signin from './pages/signin';
import Signup from './pages/entry/signup';
import Register from './pages/entry/register';

import LoadingPage from './components/LoadingPage';

function App() {
  const [language, setLanguage] = useState('');
  const [isLogin, setLogin] = useState(true);
  const [isFirst, setFirst] = useState(true);
  const [isLoading, setLoading] = useState(false);

  return (
    <>
      {!isLogin && 
        <BrowserRouter>
          {isLoading && <LoadingPage/>}
          <Routes>
            <Route path='/' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </BrowserRouter>
      }
      {isLogin && isFirst ?
        <Register/>
        :
        <BrowserRouter>
          {isLoading && <LoadingPage/>}
          <Routes>
            <Route path='/' element={<Main/>}/>
          </Routes>
        </BrowserRouter>
      }
    </>
  )
}

export default App;
