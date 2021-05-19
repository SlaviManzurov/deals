import Deal from './Deal'
import * as dealServices from './services/dealServices'

function DealsPage() {
    dealServices.getAll().then(res => console.log(res))
    return (
        <div>
            <Deal store='tesco' dealName ='cola' untile = '20.05.2021' price = '1' discount = '0.5' imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/15-09-26-RalfR-WLC-0098.jpg/170px-15-09-26-RalfR-WLC-0098.jpg' />
        </div>
    )
}

export default DealsPage;