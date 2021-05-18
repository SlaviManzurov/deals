const url = "https://deals-adc43-default-rtdb.firebaseio.com/deal.json"

export const create = (store, dealName, price, discount, untile, imagUrl) => {
    let deal = {
        store: store,
        dealName: dealName,
        price: price,
        discount: discount,
        utile: untile,
        imagUrl: imagUrl
    }

    return fetch(url,{
        method:'POST',
        headers: {
            'content-type' : 'aplication/json'
        },
        body: JSON.stringify(deal)
    })
}