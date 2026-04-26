import { Mail, Linkedin, Instagram, Phone, Headphones, Laptop, TrendingUp, Info, BookText, Users, Book, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import logo from "@/assets/logo.png";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuViewport
} from './ui/navigation-menu';
import { useLanguage, type Language } from '../contexts/LanguageContext';

interface HeaderProps {
  onNavigateToServices?: () => void;
  onNavigateHome?: () => void;
  onNavigateToTechnology?: () => void;
  onNavigateToBusinessDev?: () => void;
  onNavigateToAboutUs?: () => void;
  onNavigateToOurStory?: () => void;
  onNavigateToTechPartners?: () => void;
  onNavigateToBlog?: () => void;
  onNavigateToPricing?: () => void;
  onNavigateToBoardOfDirectors?: () => void;
  onNavigateToHowItWorks?: () => void;
  onNavigateToCareers?: () => void;
  onNavigateToContactUs?: () => void;
}

export function Header({
  onNavigateToServices,
  onNavigateHome,
  onNavigateToTechnology,
  onNavigateToBusinessDev,
  onNavigateToAboutUs,
  onNavigateToOurStory,
  onNavigateToTechPartners,
  onNavigateToBlog,
  onNavigateToPricing,
  onNavigateToBoardOfDirectors,
  onNavigateToHowItWorks,
  onNavigateToCareers,
  onNavigateToContactUs,
}: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="w-full">
      {/* Top bar */}
      <div data-testid="top-bar" className="bg-[#3b9ac9] text-white px-8 py-2">
        <div className="max-w-8xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4" />
            <span>contactus@kontivio.com</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Phone" className="hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white border-b px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={onNavigateHome}>
            <div className="w-8 h-8">
              <img src={logo} alt="Kontivio Logo" />
            </div>
            <span className="text-3xl font-medium text-gray-800">Kontivio</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="flex gap-8">

                {/* Services */}
                <NavigationMenuItem >
                  <NavigationMenuTrigger className="font-['Roboto'] text-lg font-medium text-gray-700 hover:text-[#3b9ac9] relative after:absolute after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#3b9ac9] after:transition-all hover:after:w-full cursor-pointer flex items-center gap-1">
                    {t('nav.services')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="mt-4 w-78 p-0">
                    <div className="flex flex-col gap-2 p-3">
                      <div onClick={onNavigateToServices} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
                        <Headphones className="w-5 h-5 text-[#838387]" />
                        <div>
                          <div className="mb-1 font-semibold text-base text-slate-900">{t('services.customerSupport')}</div>
                          <div className="text-xs text-gray-500">{t('services.customerSupport.desc')}</div>
                        </div>
                      </div>
                      <div onClick={onNavigateToTechnology} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
                        <Laptop className="w-5 h-5 text-[#838387]" />
                        <div>
                          <div className="mb-1 font-semibold text-base text-slate-900">{t('services.technology')}</div>
                          <div className="text-xs text-gray-500">{t('services.technology.desc')}</div>
                        </div>
                      </div>
                      <div onClick={onNavigateToBusinessDev} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
                        <TrendingUp className="w-5 h-5 text-[#838387]" />
                        <div>
                          <div className="mb-1 font-semibold text-base text-slate-900">{t('services.businessDev')}</div>
                          <div className="text-xs text-gray-500">{t('services.businessDev.desc')}</div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* About */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-['Roboto'] text-lg font-medium text-gray-700 hover:text-[#3b9ac9] relative after:absolute after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#3b9ac9] after:transition-all hover:after:w-full cursor-pointer flex items-center gap-1">
                    {t('nav.about')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-78 p-0">
                    <div className="flex flex-col gap-2 p-3">
                      <div onClick={onNavigateToAboutUs} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
                        <Info className="w-5 h-5 text-[#838387]" />
                        <div>
                          <div className="mb-1 font-semibold text-base text-slate-900">{t('about.aboutUs')}</div>
                          <div className="text-xs text-gray-500">{t('about.aboutUs.desc')}</div>
                        </div>
                      </div>
                      <div onClick={onNavigateToOurStory} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
                        <BookText className="w-5 h-5 text-[#838387]" />
                        <div>
                          <div className="mb-1 font-semibold text-base text-slate-900">{t('about.ourStory')}</div>
                          <div className="text-xs text-gray-500">{t('about.ourStory.desc')}</div>
                        </div>
                      </div>
                      <div onClick={onNavigateToTechPartners} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
                        <Laptop className="w-5 h-5 text-[#838387]" />
                        <div>
                          <div className="mb-1 font-semibold text-base text-slate-900">{t('about.techPartners')}</div>
                          <div className="text-xs text-gray-500">{t('about.techPartners.desc')}</div>
                        </div>
                      </div>
                      <div onClick={onNavigateToBoardOfDirectors} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
                        <Users className="w-5 h-5 text-[#838387]" />
                        <div>
                          <div className="mb-1 font-semibold text-base text-slate-900">{t('about.board')}</div>
                          <div className="text-xs text-gray-500">{t('about.board.desc')}</div>
                        </div>
                      </div>
                      <div onClick={onNavigateToBlog} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
                        <Book className="w-5 h-5 text[#6b6b6b]" />
                        <div>
                          <div className="mb-1 font-semibold text-base text-slate-900">{t('about.blog')}</div>
                          <div className="text-xs text-gray-500">{t('about.blog.desc')}</div>
                        </div>
                      </div>
                      <div onClick={onNavigateToContactUs} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
                        <MessageCircle className="w-5 h-5 text[#6b6b6b]" />
                        <div>
                          <div className="mb-1 font-semibold text-base text-slate-900">{t('about.contact')}</div>
                          <div className="text-xs text-gray-500">{t('about.contact.desc')}</div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Simple Links */}
                <a href="#pricing" onClick={onNavigateToPricing} className="text-lg font-medium text-gray-700 hover:text-[#3b9ac9] transition-colors cursor-pointer">{t('nav.pricing')}</a>
                <a href="#careers" onClick={onNavigateToCareers} className="text-lg font-medium text-gray-700 hover:text-[#3b9ac9] transition-colors cursor-pointer">{t('nav.careers')}</a>
                <a href="#how-it-works" onClick={onNavigateToHowItWorks} className="text-lg font-medium text-gray-700 hover:text-[#3b9ac9] transition-colors cursor-pointer">{t('nav.howItWorks')}</a>

              </NavigationMenuList>
              <div className="absolute top-full left-0 flex w-full justify-center mt-12">
                <NavigationMenuViewport />
              </div>
            </NavigationMenu>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-6">
            <Button 
              variant="outline" 
              className="hidden py-1 px-4 md:inline-flex border-[#3b9ac9] text-[#3b9ac9] hover:bg-[#3b9ac9] hover:text-white" 
              onClick={onNavigateToContactUs}
            >
              {t('common.contactUs')}
            </Button>
            <select 
              className="border rounded p-1.5 px-2 py-1 text-sm" 
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
            >
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="nl">Nederlands</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
