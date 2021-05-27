import './Deal.css'

function Deal({
    store,
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
            <h2>{store}</h2>
            <h3>{dealName}</h3>
            <p>{Number(price).toFixed(2)}lv</p>
            <p>{Number(discount).toFixed(2)}lv</p>
            <p>{untile}</p>
        </div>
    )
}

export default Deal;