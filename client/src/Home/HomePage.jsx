// components/HomePage.jsx
import Hero from "../Components/Hero";
import AboutUs from "../Components/AboutUs";
import Services from "../Components/Services";
import ContactUs from "../Components/ContactUs";
import FacilityGallery from "../Components/FacilityGallery";
import PatientStories from "../Components/PatientStories";
import DoctorFAQ from "../Components/DoctorFAQ";
import DoctorBoxes from "../Components/DoctorBoxes";
import OurMilestone from "../Components/OurMilestone";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <DoctorBoxes/>
      <Services />
      <FacilityGallery/>
      <OurMilestone/>
      <PatientStories/>
      <ContactUs />
      
      {/* <DoctorFAQ/> */}
    </>
  );
};

export default HomePage;
