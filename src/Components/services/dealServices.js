const url = `https://deals-adc43-default-rtdb.firebaseio.com/deal.json`

export const create = (dealName, store, address, price, discount, until, imageUrl) => {
    let deal = {
        dealName: dealName,
        store: store,
        address: address,
        price: price,
        discount: discount,
        until: until,
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



export const get3 = () => {
    return fetch(url + `?orderBy="$key"&limitToLast=3`)
        .then(res => res.json())
}

export const getAll = () => {
    return fetch(url)
        .then(res => res.json())
}