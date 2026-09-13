import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Section, MainContent } from './components/Content'

function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Section />
      </MainContent>
      <Footer />
    </>
  )
}
export default App
