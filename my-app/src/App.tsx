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

  const navigateToContactUs = () => {
    setCurrentPage('contactUs');
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
      case 'blog':
        return <Blog onNavigateHome={navigateHome} />;
      default:
        return <HomePage onNavigateToServices={navigateToServices} onNavigateToContactUs={navigateToContactUs} onNavigateHome={navigateHome} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header 
          onNavigateToServices={navigateToServices}
          onNavigateHome={navigateHome}
          onNavigateToTechnology={navigateToTechnology}
          onNavigateToBusinessDev={navigateToBusinessDev}
          onNavigateToContactUs={navigateToContactUs}
        />
        {renderPage()}
      </div>
    </LanguageProvider>
  );
}