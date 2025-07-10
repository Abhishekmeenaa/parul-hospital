// import React from 'react'
// import Header from './Components/Header'
// import Hero from './Components/Hero'
// // import Departments from './assets/Components/Departments'
// import Footer from './Components/Footer'
// import AboutUs from './Components/AboutUs'
// import Services from './Components/Services'
// import ContactUs from './Components/ContactUs'


// const App = () => {
//   return (
//     <div>
//     <Header/>
//     <Hero/>
//     <AboutUs/>o
//     {/* <Departments/> */}
//     <Services/>
//     <ContactUs/>
//     {/* <DoctorsPage/> */}
//     <Footer/>
   
//     </div>
//   )
// }



// export default App



// App.js
import { Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
// import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import HomePage from "./Home/HomePage";
import Doctor from "./Components/DoctorsPage"
// import DoctorProfile from "./Components/DoctorProfile'";
import Departments from "./Components/Departments";
import EnquiryPage from "./Components/EnquiryPage ";
import FacilityGallery from "./Components/FacilityGallery";
import LegalPage from "./Components/LegalPage";
import AdminPanel from "./Components/Admin/AdminPanel";
import AppointmentPage from "./Components/AppointmentPage";
import Login from "./Components/Login";
import OurMilestone from "./Components/OurMilestone";
import Scrolltop from "./Components/Scroll-Top/Scrolltop";


function App() {
  return (
    <>
    <Scrolltop/>
      <Routes>
                  <Route path="Adminpanel" element={<AdminPanel/>}/>
                  <Route path="/login" element={<Login/>} />
                  

        <Route  path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/doctor" element={<Doctor/>} />
          {/* <Route path="doctor/:slug" element={<DoctorProfile/>} /> */}
          <Route path="/departments" element={<Departments/>} />
          <Route path="/enquiryPage" element={<EnquiryPage/>} />
          <Route path="/facilitygallery" element={<FacilityGallery/>} />
          <Route path="/legalpage" element={<LegalPage/>} />
          {/* <Route path="Admin-panel" element={<AdminPanel/>} /> */}
          
               <Route path="/appointment" element={<AppointmentPage />} />
  <Route path="/appointment/:doctorId" element={<AppointmentPage />} />

          


        </Route>
      </Routes>
    </>

  );
} 

export default App;
