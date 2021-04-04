import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import DealPage from './Components/DealsPage'
import Register from './Components/Register'
import Login from './Components/Login'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='background-img'>
        <DealPage />
        <Register />
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default App;