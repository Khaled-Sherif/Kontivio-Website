import { useState } from 'react'
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { LanguageProvider } from './contexts/LanguageContext'; // Import your provider
import './globals.css'

type Page = 'home'

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigateHome={navigateHome} onNavigateToServices={function (): void {
          throw new Error('Function not implemented.');
        } } />;      
    }
  }  
      return (
        <LanguageProvider>
          <div className="min-h-screen bg-white">
            <Header 
            onNavigateHome={navigateHome}
            />
            {renderPage()}
          </div>
        </LanguageProvider>
      );
}
  
