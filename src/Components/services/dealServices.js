const url = "https://deals-adc43-default-rtdb.firebaseio.com/deal.json"

export const create = (store, dealName, price, discount, untile, imageUrl) => {
    let deal = {
        store: store,
        dealName: dealName,
        price: price,
        discount: discount,
        utile: untile,
        imageUrl: imageUrl
    }

    return fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'aplication/json'
        },
        body: JSON.stringify(deal)
    })
}

export const getAll = () => {
    return fetch(url)
        .then(res => res.json())
}