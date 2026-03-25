import { HeroSection } from './components/sections/HeroSection'
import { ExpertiseGrid } from './components/sections/ExpertiseGrid'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { LocationSection } from './components/sections/LocationSection'
import { FloatingWhatsApp } from './components/sections/FloatingWhatsApp'
import { VaccineScroll } from './components/ui/VaccineScroll'
import { DaviCodeBadge } from './components/ui/DaviCodeBadge';


function App() {
  return (
    <main className="min-h-screen bg-surface-base">
      <HeroSection />
      <ExpertiseGrid />
      <TestimonialsSection />
      <LocationSection />
      <FloatingWhatsApp />
      <VaccineScroll />
      
      <footer className="bg-surface-base py-12 border-t border-emerald-100 text-center px-4">
        <p className="font-sans text-text-secondary text-sm tracking-wide">
          © {new Date().getFullYear()} AmigoVet Clínica Veterinária II. Todos os direitos reservados.
        </p>
        <DaviCodeBadge />
      </footer>
    </main>
  )
}

export default App
