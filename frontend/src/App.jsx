import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="app">
        <Hero />
      </main>
    </div>
  )
}

export default App