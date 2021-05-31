import './Deal.css'

function Deal({
    store,
    address,
    dealName,
    price,
    discount,
    untile,
    imageUrl
}) {

    console.log(price);
    return(
        <div className="deal">
            <img src={imageUrl} alt=""/>
            <h2>{dealName}</h2>
            <h3>{store}</h3>
            <h4>{address}</h4>
            <p>Price{Number(price).toFixed(2)}lv</p>
            <p>Discount:{Number(discount).toFixed(2)}lv</p>
            <p>{untile}</p>
        </div>
    )
}

export default Deal;