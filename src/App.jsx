import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import OccasionSection from './components/OccasionSection.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import ProductDetailModal from './components/ProductDetailModal.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import AboutSection from './components/AboutSection.jsx'
import OffersSection from './components/OffersSection.jsx'
import ReviewSection from './components/ReviewSection.jsx'
import CustomCakeForm from './components/CustomCakeForm.jsx'
import CelebrationClubForm from './components/CelebrationClubForm.jsx'
import InstagramSection from './components/InstagramSection.jsx'
import LocationSection from './components/LocationSection.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloatButton from './components/WhatsAppFloatButton.jsx'
import StickyMobileBar from './components/StickyMobileBar.jsx'

export default function App() {
  const [activeProduct, setActiveProduct] = useState(null)
  const [occasionFilter, setOccasionFilter] = useState(null)

  const handleSelectOccasion = (occId) => {
    setOccasionFilter(occId)
    document.getElementById('cakes')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="has-sticky-bar">
      <a href="#cakes" className="skip-link">Skip to cake catalogue</a>

      <Header />

      <main>
        <Hero />
        <OccasionSection onSelectOccasion={handleSelectOccasion} />
        <ProductGrid
          onViewProduct={setActiveProduct}
          occasionFilter={occasionFilter}
          onClearOccasion={() => setOccasionFilter(null)}
        />
        <WhyChooseUs />
        <AboutSection />
        <OffersSection />
        <ReviewSection />
        <CelebrationClubForm />
        <CustomCakeForm />
        <InstagramSection />
        <LocationSection />
        <FinalCta />
      </main>

      <Footer />

      {activeProduct && (
        <ProductDetailModal product={activeProduct} onClose={() => setActiveProduct(null)} />
      )}

      <WhatsAppFloatButton />
      <StickyMobileBar />
    </div>
  )
}
