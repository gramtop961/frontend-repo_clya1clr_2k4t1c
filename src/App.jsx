import Hero from './components/Hero'
import DonateWidget from './components/DonateWidget'
import StoryAbout from './components/StoryAbout'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-extrabold text-emerald-700">Mosque Fundraiser</a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
            <a href="#donate" className="hover:text-emerald-700">Donate</a>
            <a href="#about" className="hover:text-emerald-700">About</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <DonateWidget />
        <StoryAbout />
        <Contact />
      </main>

      <footer className="border-t border-gray-100 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Our Mosque. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
