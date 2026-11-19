import { useState, createContext, useContext, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SignatureDishes from './components/SignatureDishes'
import NinetiesVibe from './components/NinetiesVibe'
import MenuHighlights from './components/MenuHighlights'
import HowToOrder from './components/HowToOrder'
import BookTable from './components/BookTable'
import RatingBadge from './components/RatingBadge'
import VisitUs from './components/VisitUs'
import Footer from './components/Footer'
import StickyActions from './components/StickyActions'

export const LangContext = createContext({ isTelugu: false, toggleLang: () => {} })
export const useLang = () => useContext(LangContext)

function App() {
  const [isTelugu, setIsTelugu] = useState(false)
  const toggleLang = () => setIsTelugu(p => !p)

  useEffect(() => {
    document.documentElement.lang = isTelugu ? 'te' : 'en'
  }, [isTelugu])

  return (
    <LangContext.Provider value={{ isTelugu, toggleLang }}>
      <div className="min-h-screen bg-cream overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <SignatureDishes />
          <NinetiesVibe />
          <MenuHighlights />
          <HowToOrder />
          <BookTable />
          <RatingBadge />
          <VisitUs />
        </main>
        <Footer />
        <StickyActions />
      </div>
    </LangContext.Provider>
  )
}

export default App
