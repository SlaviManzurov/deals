import './Deal.css'

function Deal({
    store,
    dealName,
    price,
    discount,
    untile,
    imageUrl
}) {
    return(
        <div className="deal">
            <img src={imageUrl} alt=""/>
            <h2>{store}</h2>
            <h3>{dealName}</h3>
            <span>{price}</span><span>{discount}</span><span>{untile}</span>
        </div>
    )
}

export default Deal;