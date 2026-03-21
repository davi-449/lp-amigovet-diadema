import { HeroSection } from './components/sections/HeroSection'
import { ExpertiseGrid } from './components/sections/ExpertiseGrid'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { LocationSection } from './components/sections/LocationSection'
import { FloatingWhatsApp } from './components/sections/FloatingWhatsApp'

function App() {
  return (
    <main className="min-h-screen bg-surface-base">
      <HeroSection />
      <ExpertiseGrid />
      <TestimonialsSection />
      <LocationSection />
      <FloatingWhatsApp />
      
      <footer className="bg-surface-base py-12 border-t border-white/5 text-center px-4">
        <p className="font-sans text-text-muted text-sm tracking-wide">
          © {new Date().getFullYear()} AmigoVet Clínica Veterinária II. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  )
}

export default App
