import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { AboutUs } from './components/AboutUs';
import { ServicesPage } from './components/ServicesPage';
import { Careers } from './components/Careers';
import { ApplyNow } from './components/ApplyNow';
import { Blog } from './components/Blog';
import { ContactUs } from './components/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<HomePage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/apply" element={<ApplyNow />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;