import { Route, Switch, Redirect } from 'react-router-dom'
import firebase from './utils/firebase'

import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import DealPage from './Components/DealsPage'
import Register from './Components/Register'
import Login from './Components/Login'
import Create from './Components/Create'
import { useEffect, useState } from 'react'
import AuthContext from './contexts/AuthContext'

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser)
  }, [])

  const authInfo = {
    isAuth: Boolean(user),
    username: user?.email
  }

  return (
    <div className="App">
      <AuthContext.Provider value={authInfo}>
        <Header />
        <div className='background-img'>

          <Switch>
            <Route path="/" exact component={DealPage} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/create" exact component={Create} />
            <Route path="/logout" render={() => {
              firebase.auth().signOut();
              return <Redirect to="/" />
            }} />
          </Switch>

        </div>
        <Footer />
      </AuthContext.Provider>
z
    </div>
  );
}

export default App;