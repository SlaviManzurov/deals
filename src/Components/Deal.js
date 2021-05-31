import './Deal.css'

function Deal({
    store,
    address,
    dealName,
    price,
    discount,
    until,
    imageUrl
}) {

    console.log(price);
    return (
        <div className="deal">
            <img src={imageUrl} alt="" />
            <h2>{dealName}</h2>
            <div>
                <h3>{store}</h3>
                <p>{address}</p>
            </div>
            <div className ="price">
                <p><strong>Price</strong></p>
                <p>{Number(price).toFixed(2)} lv.</p>
            </div>
            <div>
                <p><strong>Discount</strong></p>
                <p>{Number(discount).toFixed(2)} lv.</p>
            </div>
            <div>
                <p><strong>Take it until!</strong></p>
                <p>{until}</p>
            </div>
        </div>
    )
}

export default Deal;