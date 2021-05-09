import { Route, Switch, Redirect } from 'react-router-dom'
import firebase from './utils/firebase'

import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import DealPage from './Components/DealsPage'
import Register from './Components/Register'
import Login from './Components/Login'
import Create from './Components/Create'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='background-img'>

        <Switch>
          <Route path="/" exact component ={DealPage}/>
          <Route path="/register" exact component ={Register}/>
          <Route path="/login" exact component ={Login}/>
          <Route path="/create" exact component ={Create}/>
          <Route path="/logout" render={() => {
              firebase.auth().signOut();
              return <Redirect to="/" />
            }} />
        </Switch>

      </div>
      <Footer />
    </div>
  );
}

export default App;