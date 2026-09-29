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




function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <Header />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* --- ADMIN ROUTES (No Header/Footer) --- */}
        <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/car-bookings" element={<ProtectedRoute><AdminCarRentalBookings /></ProtectedRoute>} />
        <Route path="/admin/tour-bookings" element={<ProtectedRoute><AdminTourBookings /></ProtectedRoute>} />
        <Route path="/admin/contacts" element={<ProtectedRoute><AdminContactDashboard /></ProtectedRoute>} />

        {/* --- PUBLIC ROUTES (With Header/Footer) --- */}
        <Route path="/" element={<PublicLayout><Hero /><Categories /><Stats /><RecentTours /><Testimonials /><BookingSection /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/domestic" element={<PublicLayout><Domestic /></PublicLayout>} />
        <Route path="/packages" element={<PublicLayout><Packages /></PublicLayout>} />
        <Route path="/car-rental" element={<PublicLayout><CarRental /></PublicLayout>} />
        <Route path="/car-rental/selection" element={<PublicLayout><CarRentalSelection /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />

        {/* --- KERALA ROUTES --- */}
        <Route path="/domestic/kerala/wayanad" element={<PublicLayout><Wayanad /></PublicLayout>} />
        <Route path="/domestic/kerala/munnar" element={<PublicLayout><Munnar /></PublicLayout>} />
        <Route path="/domestic/kerala/alappuzha" element={<PublicLayout><Alappuzha /></PublicLayout>} />
        <Route path="/domestic/kerala/kochi" element={<PublicLayout><Kochi /></PublicLayout>} />
        <Route path="/domestic/kerala/vagamon" element={<PublicLayout><Vagamon /></PublicLayout>} />
        <Route path="/domestic/kerala/varkala" element={<PublicLayout><Varkala /></PublicLayout>} />
        <Route path="/domestic/kerala/kerala" element={<PublicLayout><Kerala /></PublicLayout>} />

        {/* --- KARNATAKA ROUTES --- */}
        <Route path="/domestic/karnataka/coorg" element={<PublicLayout><Coorg /></PublicLayout>} />
        <Route path="/domestic/karnataka/chikkamagaluru" element={<PublicLayout><Chikkamagaluru /></PublicLayout>} />
        <Route path="/domestic/karnataka/dandeli" element={<PublicLayout><Dandeli /></PublicLayout>} />
        <Route path="/domestic/karnataka/gokarna" element={<PublicLayout><Gokarna /></PublicLayout>} />
        <Route path="/domestic/karnataka/mysuru" element={<PublicLayout><Mysuru /></PublicLayout>} />
        <Route path="/domestic/karnataka/hampi" element={<PublicLayout><Hampi /></PublicLayout>} />

        {/* --- NORTH INDIA ROUTES --- */}
        <Route path="/domestic/northindia/pune" element={<PublicLayout><Pune /></PublicLayout>} />
        <Route path="/domestic/northindia/goa" element={<PublicLayout><Goa /></PublicLayout>} />
        <Route path="/domestic/northindia/manali" element={<PublicLayout><Manali /></PublicLayout>} />
        <Route path="/domestic/northindia/golden-triangle" element={<PublicLayout><GoldenTriangle /></PublicLayout>} />
        <Route path="/domestic/northindia/rajasthan" element={<PublicLayout><Rajasthan /></PublicLayout>} />
        <Route path="/domestic/northindia/kashmir" element={<PublicLayout><Kashmir /></PublicLayout>} />

        {/* --- TAMIL NADU ROUTES --- */}
        <Route path="/domestic/tamilnadu/ooty" element={<PublicLayout><Ooty /></PublicLayout>} />
        <Route path="/domestic/tamilnadu/kodaikanal" element={<PublicLayout><Kodaikanal /></PublicLayout>} />
        <Route path="/domestic/tamilnadu/pondy" element={<PublicLayout><Pondy /></PublicLayout>} />
        <Route path="/domestic/tamilnadu/rameshwaram" element={<PublicLayout><Rameshwaram /></PublicLayout>} />
        <Route path="/domestic/tamilnadu/kanyakumari" element={<PublicLayout><Kanyakumari /></PublicLayout>} />
        <Route path="/domestic/tamilnadu/madurai" element={<PublicLayout><Madurai /></PublicLayout>} />

        {/* --- PACKAGES ROUTES --- */}
        <Route path="/packages/family" element={<PublicLayout><FamilyTour /></PublicLayout>} />
        <Route path="/packages/honeymoon" element={<PublicLayout><HoneymoonTour /></PublicLayout>} />
        <Route path="/packages/devotional" element={<PublicLayout><DevotionalTour /></PublicLayout>} />
        <Route path="/packages/educational" element={<PublicLayout><EducationalTour /></PublicLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;