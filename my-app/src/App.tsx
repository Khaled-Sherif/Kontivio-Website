import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { AboutUs } from './components/AboutUs';
import { OurStoryPage } from './components/OurStoryPage';
import { BoardOfDirectorsPage } from './components/BoardOfDirectorsPage';
import { ServicesPage } from './components/ServicesPage';
import { CustomerSupportSolutions } from './components/CustomerSupportSolutions';
import { TechnologySolutionsPage } from './components/TechnologySolutionsPage';
import { TechnologyPartnersPage } from './components/TechnologyPartnersPage';
import { BusinessDevelopmentPage } from './components/BusinessDevelopmentPage';
import { Industries } from './components/Industries';
import { Careers } from './components/Careers';
import { ApplyNow } from './components/ApplyNow';
import { Blog } from './components/Blog';
import { ContactUs } from './components/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<HomePage />} />

        {/* About */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about/our-story" element={<OurStoryPage />} />
        <Route path="/about/board" element={<BoardOfDirectorsPage />} />

        {/* Services */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/customer-support" element={<CustomerSupportSolutions />} />
        <Route path="/services/technology" element={<TechnologySolutionsPage />} />
        <Route path="/services/technology-partners" element={<TechnologyPartnersPage />} />
        <Route path="/services/business-development" element={<BusinessDevelopmentPage />} />

        {/* Industries */}
        <Route path="/industries" element={<Industries />} />

        {/* Careers */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/apply" element={<ApplyNow />} />

        {/* Resources */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
