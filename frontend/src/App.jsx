import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// --- MAIN COMPONENTS ---
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import About from "./components/About";

import Packages from "./components/Packages";

import Contact from "./components/Contact";
import Stats from "./components/Stats";
import RecentTours from "./components/RecentTours";
import Testimonials from "./components/Testimonials";
import BookingSection from "./components/BookingSection";
import Domestic from "./components/Domestic";

// --- ADMIN COMPONENTS ---
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminCarRentalBookings from "./components/admin/AdminCarRentalBookings";
import AdminTourBookings from "./components/admin/AdminTourBookings";
import AdminContactDashboard from "./components/admin/AdminContactDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import CarRentalSelection from "./components/CarRentalSelection";

// --- CAR RENTAL SUB-PAGES ---



// --- KERALA IMPORTS ---
import Wayanad from "./components/kerala/Wayanad"; 
import Munnar from "./components/kerala/Munnar";
import Alappuzha from "./components/kerala/Alappuzha";
import Kochi from "./components/kerala/Kochi";
import Vagamon from "./components/kerala/Vagamon"; 
import Varkala from "./components/kerala/Varkala";


// --- KARNATAKA IMPORTS ---
import Coorg from "./components/karnataka/Coorg";
import Chikkamagaluru from "./components/karnataka/Chikkamagaluru";
import Dandeli from "./components/karnataka/Dandeli";
import Gokarna from "./components/karnataka/Gokarna";
import Mysuru from "./components/karnataka/Mysuru"; 
import Hampi from "./components/karnataka/Hampi";

// --- NORTH INDIA IMPORTS ---
import Pune from "./components/northindia/Pune";
import Goa from "./components/northindia/Goa";
import Manali from "./components/northindia/Manali";
import GoldenTriangle from "./components/northindia/Golden Triangle";
import Rajasthan from "./components/northindia/Rajasthan";
import Kashmir from "./components/northindia/kashmir";

// --- TAMIL NADU IMPORTS ---
import Ooty from "./components/taminadu/Ooty"; 
import Kodaikanal from "./components/taminadu/Kodaikanal";
import Pondy from "./components/taminadu/Pondy";
import Rameshwaram from "./components/taminadu/Rameshwaram";
import Kanyakumari from "./components/taminadu/Kanyakumari";
import Madurai from "./components/taminadu/Madurai";

// --- INTERNATIONAL IMPORTS ---
// import Bali from "./components/international/Bali";
// import Thailand from "./components/international/Thailand";
// import Malaysia from "./components/international/Malaysia";
// import SriLanka from "./components/international/SriLanka";
// import Dubai from "./components/international/Dubai";
// import Maldives from "./components/international/Maldives";
// import Singapore from "./components/international/Singapore";

// --- PACKAGES IMPORTS ---
import FamilyTour from "./components/packages/FamilyTour";
import HoneymoonTour from "./components/packages/HoneymoonTour";
import DevotionalTour from "./components/packages/DevotionalTour";
import EducationalTour from "./components/packages/EducationalTour"; 
import Kerala from "./components/kerala/Kerala";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
 import CarRental from "./components/CarRental";




function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        {/* --- ADMIN ROUTES (No Header/Footer) --- */}
        <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin/car-bookings" element={
          <ProtectedRoute>
            <AdminCarRentalBookings />
          </ProtectedRoute>
        } />
        <Route path="/admin/tour-bookings" element={
          <ProtectedRoute>
            <AdminTourBookings />
          </ProtectedRoute>
        } />
        <Route path="/admin/contacts" element={
          <ProtectedRoute>
            <AdminContactDashboard />
          </ProtectedRoute>
        } />

        {/* --- PUBLIC ROUTES (With Header/Footer) --- */}
        <Route path="/*" element={
          <>
            <Navbar/>
            <Header />
            <Routes>
        

        {/* --- HOME PAGE --- */}
        <Route path="/" element={
          <>
            <Hero />
            <Categories />
            <Stats/>
            <RecentTours/>
            <Testimonials/>
            <BookingSection/>
      
          
            

          </>
        } />
        
        {/* --- MAIN MENU PAGES --- */}
        <Route path="/about" element={<About />} />
        <Route path="/domestic" element={<Domestic/>} />
     
        <Route path="/packages" element={<Packages />} />
        <Route path="/car-rental" element={<CarRental />} />
        <Route path="/contact" element={<Contact />} />

        {/*  CAR RENTAL ROUTES  */}
        {/* <Route path="/car-rental" element={<Ca />} /> */}
        <Route path="/car-rental/selection" element={<CarRentalSelection />} />
    
        {/* <Route path="/car-rental/chennai" element={<CarRentalChennai />} />
        <Route path="/car-rental/madurai" element={<CarRentalMadurai/>} />
         */}
        {/* --- KERALA ROUTES --- */}
        <Route path="/domestic/kerala/wayanad" element={<Wayanad />} />
        <Route path="/domestic/kerala/munnar" element={<Munnar/>} />
        <Route path="/domestic/kerala/alappuzha" element={<Alappuzha />} />
        <Route path="/domestic/kerala/kochi" element={<Kochi />} />
        <Route path="/domestic/kerala/vagamon" element={<Vagamon />} />
        <Route path="/domestic/kerala/varkala" element={<Varkala />} />
        <Route path="/domestic/kerala/kerala" element={<Kerala/>}/>

        {/* --- KARNATAKA ROUTES --- */}
        <Route path="/domestic/karnataka/coorg" element={<Coorg />} />
        <Route path="/domestic/karnataka/chikkamagaluru" element={<Chikkamagaluru />} />
        <Route path="/domestic/karnataka/dandeli" element={<Dandeli/>} />
        <Route path="/domestic/karnataka/gokarna" element={<Gokarna/>} />
        <Route path="/domestic/karnataka/mysuru" element={<Mysuru/>} />
        <Route path="/domestic/karnataka/hampi" element={<Hampi/>} />

        {/* --- NORTH INDIA ROUTES --- */}
        <Route path="/domestic/northindia/pune" element={<Pune/>} />
        <Route path="/domestic/northindia/goa" element={<Goa/>} />
        <Route path="/domestic/northindia/manali" element={<Manali/>} />
        <Route path="/domestic/northindia/golden-triangle" element={<GoldenTriangle/>} />
        <Route path="/domestic/northindia/rajasthan" element={<Rajasthan/>} />
        <Route path="/domestic/northindia/kashmir" element={<Kashmir/>} />

        {/* --- TAMIL NADU ROUTES --- */}
        <Route path="/domestic/tamilnadu/ooty" element={<Ooty/>} />
        <Route path="/domestic/tamilnadu/kodaikanal" element={<Kodaikanal/>} />
        <Route path="/domestic/tamilnadu/pondy" element={<Pondy/>} />
        <Route path="/domestic/tamilnadu/rameshwaram" element={<Rameshwaram/>} />
        <Route path="/domestic/tamilnadu/kanyakumari" element={<Kanyakumari/>} />
        <Route path="/domestic/tamilnadu/madurai" element={<Madurai/>} />

       

        {/* --- PACKAGES ROUTES --- */}
        <Route path="/packages/family" element={<FamilyTour/>}/>
        <Route path="/packages/honeymoon" element={<HoneymoonTour/>} />
        <Route path="/packages/devotional" element={<DevotionalTour/>}/>
        <Route path="/packages/educational" element={<EducationalTour/>}/>

        
      </Routes>
      <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;