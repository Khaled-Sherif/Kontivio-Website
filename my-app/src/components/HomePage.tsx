import { Hero } from './Hero';
import { WhyPartner } from './WhyPartner';
import { Services } from './Services';
import { Stats } from './Stats';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';

interface HomePageProps {
  onNavigateToServices: () => void;
  onGetStarted?: () => void;
  onNavigateToContactUs?: () => void;
  onNavigateHome?: () => void;
}

export function HomePage({ onNavigateToServices, onGetStarted, onNavigateToContactUs, onNavigateHome }: HomePageProps) {
  return (
    <>
      <Hero onGetStarted={onGetStarted} />
      <WhyPartner />
      <Services onNavigateToServices={onNavigateToServices} />
      <Stats />
      <ContactForm />
      <Footer onNavigateToContactUs={onNavigateToContactUs} onNavigateHome={onNavigateHome} />
    </>
  );
}