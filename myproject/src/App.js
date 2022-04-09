import React from "react";
import {BrowserRouter,Route,Link,Routes} from 'react-router-dom'
import Home from './HomePage/HomePage'



export default function App() {
  return (
   <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Route exact path='/AboutPage'component={About}/>
        <Route exact path='/ContactPage'component={Contact}/>
        <Route exact path='/CelsusPage'component={Celsus}/> */}
     </Routes>
   </BrowserRouter>
  );
}


