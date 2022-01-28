import React from "react";
import Header from './Components/Common/Header'
import Footer from './Components/Common/Footer'
import Home from './Components/Home'
import "./App.css";

function App() {
  return (      
    <React.Fragment>
        <Header></Header> 
        <div className="main-container btb-1">
            <div className="container">
              <Home></Home>
            </div>
        </div>                                                    
        <Footer></Footer>
    </React.Fragment>                         
  );
}

export default App;
