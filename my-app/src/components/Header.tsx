import { Mail, Linkedin, Instagram, Phone, ChevronDown, Headphones, Laptop, TrendingUp, Info, BookText, Users, Award, Book, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import logo from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
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

export function Header({ onNavigateToServices, onNavigateHome, onNavigateToTechnology, onNavigateToBusinessDev, onNavigateToAboutUs, onNavigateToOurStory, onNavigateToTechPartners, onNavigateToBlog, onNavigateToPricing, onNavigateToBoardOfDirectors, onNavigateToHowItWorks, onNavigateToCareers, onNavigateToContactUs }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#3b9ac9] text-white px-6 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span className="text-sm">contactus@kontivio.com</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white border-b px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onNavigateHome}>
            <div className="w-8 h-8 from-[#3b9ac9] to-[#2d7a9e]">
                <img src={logo} alt="Logo" className="w-32 h-auto" />
            </div>
            <span className="text-2xl font-extrabold font-sans text-gray-800">Kontivio</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-[#3b9ac9] transition-colors cursor-pointer outline-none">
                {t('nav.services')} <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 p-2">
                <DropdownMenuItem onClick={onNavigateToServices} className="cursor-pointer p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Headphones className="w-5 h-5 text-[#3b9ac9]" />
                    <div>
                      <div className="mb-1">{t('services.customerSupport')}</div>
                      <div className="text-xs text-gray-500">{t('services.customerSupport.desc')}</div>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onNavigateToTechnology} className="cursor-pointer p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Laptop className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="mb-1">{t('services.technology')}</div>
                      <div className="text-xs text-gray-500">{t('services.technology.desc')}</div>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onNavigateToBusinessDev} className="cursor-pointer p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="mb-1">{t('services.businessDev')}</div>
                      <div className="text-xs text-gray-500">{t('services.businessDev.desc')}</div>
                    </div>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-[#3b9ac9] transition-colors cursor-pointer outline-none">
                {t('nav.about')} <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 p-2">
                <DropdownMenuItem onClick={onNavigateToAboutUs} className="cursor-pointer p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Info className="w-5 h-5 text-[#3b9ac9]" />
                    <div>
                      <div className="mb-1">{t('about.aboutUs')}</div>
                      <div className="text-xs text-gray-500">{t('about.aboutUs.desc')}</div>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onNavigateToOurStory} className="cursor-pointer p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <BookText className="w-5 h-5 text-amber-600" />
                    <div>
                      <div className="mb-1">{t('about.ourStory')}</div>
                      <div className="text-xs text-gray-500">{t('about.ourStory.desc')}</div>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onNavigateToTechPartners} className="cursor-pointer p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Laptop className="w-5 h-5 text-indigo-600" />
                    <div>
                      <div className="mb-1">{t('about.techPartners')}</div>
                      <div className="text-xs text-gray-500">{t('about.techPartners.desc')}</div>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onNavigateToBoardOfDirectors} className="cursor-pointer p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-rose-600" />
                    <div>
                      <div className="mb-1">{t('about.board')}</div>
                      <div className="text-xs text-gray-500">{t('about.board.desc')}</div>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onNavigateToBlog} className="cursor-pointer p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Book className="w-5 h-5 text-emerald-600" />
                    <div>
                      <div className="mb-1">{t('about.blog')}</div>
                      <div className="text-xs text-gray-500">{t('about.blog.desc')}</div>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onNavigateToContactUs} className="cursor-pointer p-3 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-teal-600" />
                    <div>
                      <div className="mb-1">{t('about.contact')}</div>
                      <div className="text-xs text-gray-500">{t('about.contact.desc')}</div>
                    </div>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#pricing" onClick={onNavigateToPricing} className="text-gray-700 hover:text-[#3b9ac9] transition-colors cursor-pointer">{t('nav.pricing')}</a>
            <a href="#careers" onClick={onNavigateToCareers} className="text-gray-700 hover:text-[#3b9ac9] transition-colors cursor-pointer">{t('nav.careers')}</a>
            <a href="#how-it-works" onClick={onNavigateToHowItWorks} className="text-gray-700 hover:text-[#3b9ac9] transition-colors cursor-pointer">{t('nav.howItWorks')}</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="hidden md:inline-flex border-[#3b9ac9] text-[#3b9ac9] hover:bg-[#3b9ac9] hover:text-white" 
              onClick={onNavigateToContactUs}
            >
              {t('common.contactUs')}
            </Button>
            <select 
              className="border rounded px-2 py-1 text-sm" 
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