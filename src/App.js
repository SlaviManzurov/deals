import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import DealPage from './Components/DealsPage'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='background-img'>
        <DealPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;