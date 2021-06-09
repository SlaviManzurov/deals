import { useState, useEffect } from 'react'
import Deal from './Deal'
import * as dealServices from './services/dealServices'
import { Link } from 'react-router-dom'

function DealsPageGuest() {

    const [deals, setDeals] = useState({})


    useEffect(() => {
        dealServices.get3()
            .then(res => setDeals(res))

    }, [])

    return (
        <div>
            {Object.entries(deals).map(([key, value]) =>
                <Deal key={key} {...value} />
            )}
            <h1> <Link to='/login'>LogIn here for more offers</Link></h1>
        </div>
    )
}

export default DealsPageGuest;