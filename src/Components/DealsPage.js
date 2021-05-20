import { useState, useEffect } from 'react'
import Deal from './Deal'
import * as dealServices from './services/dealServices'

function DealsPage() {

    const [deals, setDeals] = useState([])

    useEffect(() => {
        dealServices.getAll()
            .then(res => setDeals(res))
    }, [])

    console.log(deals);
    return (
        <div>
            {Object.entries(deals).map(([key,value]) =>
                <Deal key={key} {...value}/>
            )}
        </div>
    )
}

export default DealsPage;