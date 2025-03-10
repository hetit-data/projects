import React from "react";
import Home from "./Website/layout/Home";
import About from "./Website/layout/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./Website/layout/Service";
import Carlisting from "./Website/layout/Carlisting";
import NotFound from "./Website/layout/NotFound";
import Cardetils from "./Website/layout/Cardetils";
import Carbooking from "./Website/layout/Carbooking";
import Contact from "./Website/layout/Contact";
import Dashboard from "./Admin/pages/Dashboard";
import Carmanage from "./Admin/pages/Carmanage";
import Caradd from "./Admin/pages/Caradd";
import AService from "./Admin/pages/AService";
import Addservice from "./Admin/pages/Addservice";
import Bookingmanage from "./Admin/pages/Bookingmanage";
import Carinfo from "./Admin/pages/Carinfo";
import Seebooking from "./Website/layout/Seebooking";
import Registration from "./Website/layout/Registration";
// import User_manage from "./Website/layout/User_manage";
import Manage_user from "./Admin/pages/Manage_user";
import Alogin from "./Admin/pages/Alogin";
import { ToastContainer } from "react-toastify";
import Userlogin from "./Website/layout/Userlogin";
import Editprofile from "./Website/layout/Editprofile";
import Contactmanage from "./Admin/pages/Contactmanage";
// import Update from "./Admin/pages/Update";




function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/carlisting" element={<Carlisting />} />
          <Route path="/cardetail" element={<Cardetils />} />
          <Route path="/carbooking" element={<Carbooking />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/register" element={<Registration />} />
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/editprofile" element={<Editprofile />} />

        

          {/*  * not path location */}
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/user" element={<User_manage />} /> */}
          {/* admin */}
          <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contactmanage" element={<Contactmanage/>}/>
          <Route path="/carlistingmanage" element={<Carmanage />} />
          <Route path="/caradd" element={<Caradd />} />
          <Route path="/bookingmanage" element={<Bookingmanage />} />
          <Route path="/aservice" element={<AService />} />
          <Route path="/serviceadd" element={<Addservice />} />
          <Route path="/:id" element={<Carinfo />} />
          <Route path="/seebooking" element={<Seebooking />} />
          {/* <Route path="/update/:id" element={<Update />} /> */}

          <Route path="/manageuser" element={<Manage_user />} />


          <Route path="/alogin" element={<Alogin />} />

        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>

  );
}

export default App;
