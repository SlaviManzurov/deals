import { useState, useEffect, useContext } from 'react'
import AuthContext from '../contexts/AuthContext'
import Deal from './Deal'
import * as dealServices from './services/dealServices'

function DealsPage() {

    const { isAuth } = useContext(AuthContext)

    const [deals, setDeals] = useState([])

    useEffect(() => {
        if (isAuth) {
            dealServices.getAll()
                .then(res => setDeals(res))
        } else {
            dealServices.get3()
            .then(res => setDeals(res))
        }

    }, [isAuth])

    return (
        <div>
            {Object.entries(deals).map(([key, value]) =>
                <Deal key={key} {...value} />
            )}
        </div>
    )
}

export default DealsPage;