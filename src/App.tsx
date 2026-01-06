import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Speakers from './components/Speakers'
import Schedule from './components/Schedule'
import Tickets from './components/Tickets'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white selection:bg-purple-500/30">
      {/* Global Background */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{ backgroundImage: `url('/BG.jpg')` }}
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Tickets />
        <Footer />
      </div>
    </div>
  )
}

export default App
