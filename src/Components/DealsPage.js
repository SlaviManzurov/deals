import { useState, useEffect, useContext } from 'react'
import AuthContext from '../contexts/AuthContext'
import Deal from './Deal'
import * as dealServices from './services/dealServices'
import { Link } from 'react-router-dom'

function DealsPage() {

    const { isAuth } = useContext(AuthContext)

    const [deals, setDeals] = useState({})

    useEffect(() => {
        if (isAuth) {
            dealServices.getAll()
                .then(res => setDeals(res))
        } else {
            dealServices.get3()
                .then(res => setDeals(res))
        }

    }, [isAuth])

    console.log(deals);
    return (
        <div>
            {Object.entries(deals).map(([key, value]) =>
                <Deal key={key} {...value} />
            )}
            {!isAuth
                ? (<h1> <Link to='/login'>LogIn here for more offers</Link></h1>)
                : (null)
            }
        </div>
    )
}

export default DealsPage;