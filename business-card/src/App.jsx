import Information from "./components/Information.jsx"
import About from "./components/About.jsx"
import Interests from "./components/Interests.jsx"
import Footer from "./components/Footer.jsx"
function App(){
  return(
    <>
    <main className="app-content">
    <Information />
    <About/>
    <Interests/>
    <Footer />
    </main>
    </>
  )
}
export default App