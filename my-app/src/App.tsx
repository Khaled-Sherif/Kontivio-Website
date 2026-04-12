import { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { TechnologySolutions } from './components/TechnologySolutions';
import { BusinessDevelopment } from './components/BusinessDevelopment';
import { AboutUs } from './components/AboutUs';
import { OurStory } from './components/OurStory';
import { TechnologyPartners } from './components/TechnologyPartners';
import { Blog } from './components/Blog';
import { BoardOfDirectors } from './components/BoardOfDirectors';
import { ContactUs } from './components/ContactUs';
import { Pricing } from './components/Pricing';
import { Careers } from './components/Careers';
import { LanguageProvider } from './contexts/LanguageContext';

type Page = 'home' | 'services' | 'technology' | 'businessDev' | 'aboutUs' | 'ourStory' | 'techPartners' | 'blog' | 'pricing' | 'boardOfDirectors' | 'howItWorks' | 'survey' | 'careers' | 'applyNow' | 'contactUs';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateToServices = () => {
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToTechnology = () => {
    setCurrentPage('technology');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToBusinessDev = () => {
    setCurrentPage('businessDev');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAboutUs = () => {
    setCurrentPage('aboutUs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToOurStory = () => {
    setCurrentPage('ourStory');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToTechnologyPartners = () => {
    setCurrentPage('techPartners');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToBoardOfDirectors = () => {
    setCurrentPage('boardOfDirectors');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToBlog = () => { 
    setCurrentPage('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToContactUs = () => {
    setCurrentPage('contactUs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPricing = () => {
    setCurrentPage('pricing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCareers = () => {
    setCurrentPage('careers');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigateToServices={navigateToServices} onNavigateToContactUs={navigateToContactUs} onNavigateHome={navigateHome} />;
      case 'services':
        return <ServicesPage onNavigateHome={navigateHome} onNavigateToContactUs={navigateToContactUs} />;
      case 'technology':
        return <TechnologySolutions onNavigateHome={navigateHome} onNavigateToContactUs={navigateToContactUs} />;
      case 'businessDev':
        return <BusinessDevelopment onNavigateHome={navigateHome} />;
      case 'aboutUs':
        return <AboutUs onNavigateHome={navigateHome} onNavigateToContactUs={navigateToContactUs} />;
      case 'ourStory':
        return <OurStory onNavigateHome={navigateHome} />;
      case 'techPartners':
        return <TechnologyPartners onNavigateHome={navigateHome} />;
      case 'boardOfDirectors':
        return <BoardOfDirectors onNavigateHome={navigateHome} />;
      case 'blog':
        return <Blog onNavigateHome={navigateHome} />;
      case 'contactUs':
        return <ContactUs />;
      case 'pricing':
        return <Pricing onNavigateHome={navigateHome} />;
      case 'careers':
        return <Careers />;
      default:
        return <HomePage onNavigateToServices={navigateToServices} onNavigateToContactUs={navigateToContactUs} onNavigateHome={navigateHome} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header 
          onNavigateHome={navigateHome}
          onNavigateToServices={navigateToServices}
          onNavigateToTechnology={navigateToTechnology}
          onNavigateToBusinessDev={navigateToBusinessDev}
          onNavigateToAboutUs={navigateToAboutUs} 
          onNavigateToOurStory={navigateToOurStory}
          onNavigateToTechPartners={navigateToTechnologyPartners}
          onNavigateToBoardOfDirectors={navigateToBoardOfDirectors}
          onNavigateToBlog={navigateToBlog}
          onNavigateToContactUs={navigateToContactUs}
          onNavigateToPricing={navigateToPricing}
          onNavigateToCareers={navigateToCareers}
        />
        {renderPage()}
      </div>
    </LanguageProvider>
  );
}