import { Header } from './components/Header';
import { LanguageProvider } from './contexts/LanguageContext'; // Import your provider
import './globals.css'

function App() {

  return (
    <LanguageProvider>
      <Header />
    </LanguageProvider>
  )
}

export default App