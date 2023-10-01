import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';

// pages
import Main from './pages/main';
import Signin from './pages/signin';
import Signup from './pages/entry/signup';

import Welcome from './pages/entry/welcome';
import Register from './pages/entry/register';
import Term from './pages/entry/term';
import Final from './pages/entry/final';

import LoadingPage from './components/LoadingPage';

function App() {
  const [language, setLanguage] = useState('');
  const [isLogin, setLogin] = useState(false);
  const isFirstUse = useSelector((state : any)=>state.context.isFirstUse);
  const [isLoading, setLoading] = useState(false);

  const setStateLogin = ()=>{
    setLogin(!isLogin);
  }

  return (
    <BrowserRouter>
      {!isLogin ?
        <>
          {isLoading && <LoadingPage/>}
          <Routes>
            <Route path='/' element={<Signin setStateLogin={setStateLogin} />}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        </>
        :
        <>
        {isLoading && <LoadingPage/>}
        { isFirstUse &&
          <Routes>
            <Route path='/' element={<Welcome/>} />
            <Route path='/term' element={<Term/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/final' element={<Final/>}/>
          </Routes>
        }
        { !isFirstUse &&
          <Routes>
            <Route path='/' element={<Main/>}/>
          </Routes>
        }
        </>
      }

    </BrowserRouter>
  )
}

export default App;
