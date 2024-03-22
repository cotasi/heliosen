import * as React from 'react';
import Head from './Head/Head';
import Main from './Main/Main';

import Company from './Company/Company';
import Performance from './Company/Performance';
import Road from './Company/Road';

import Dtwin from './Business/Digitaltwin';

import Jobposition from './Employee/Jobposition';

import { Route,Routes } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();

  const Root = location.pathname === '/';

  document.body.style.overflow = Root ? 'hidden': 'visible';


  
  return (
    <>
      <Head />
      <Routes>
        <Route path="/" element={<Main />}></Route>

        <Route path="/company/" element={<Company nums={0}></Company>}></Route>
        <Route path="/company/company" element={<Company nums={0}></Company>}></Route>
        <Route path="/company/performance" element={<Performance img={'http://localhost:3000/static/media/About.9e594a37d34170e288db.png'} nums={1}></Performance>}></Route>
        <Route path="/company/howtovisit" element = {<Road img={'http://localhost:3000/static/media/About.9e594a37d34170e288db.png'} nums={2}></Road>}></Route>

        <Route path="/business" element={<Dtwin img={'../images/Business.png'} nums={0}></Dtwin>}></Route>
        <Route path="/business/dtwin" element={<Dtwin img={'../images/Business.png'} nums={0}></Dtwin>}></Route>
        <Route path="/business/geoiot" element={<></>}></Route>

        <Route path="/employee/jobposition" element={<Jobposition img={'https://www.heliosen.co.kr/static/media/DitapRecruit.677a0971a0befd6d6b67.png'} nums={1} />}></Route>
      </Routes>
    </>
  )
}

export default App;