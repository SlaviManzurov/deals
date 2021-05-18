import './Register.css'

import { useHistory, useHistry } from "react-router-dom"


import * as dealServices from './services/dealServices'

function Create() {
    let history = useHistory();
    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        const store = e.target.store.value
        const dealName = e.target.dealName.value
        const price = e.target.price.value
        const discount = e.target.discount.value
        const untile = e.target.untile.value
        const imagUrl = e.target.imagUrl.value


        dealServices.create(store, dealName, price, discount, untile, imagUrl)
            .then(() => {
                history.push('/')
            })

    }

    return (
        <div className='form'>
            <form onSubmit={onRegisterSubmitHandler}>
                <h1>Create deal</h1>
                <label htmlFor="store">Store</label>
                <input type="text" name="store"></input>
                <label htmlFor="dealName">DealName</label>
                <input type="text" name="dealName"></input>
                <label htmlFor="price">Price</label>
                <input type="text" name="price"></input>
                <label htmlFor="discount">Discount</label>
                <input type="text" name="discount"></input>
                <label htmlFor="untile">Untile</label>
                <input type="text" name="untile"></input>
                <label htmlFor="imgUrl">Image</label>
                <input type="text" name="imagUrl"></input>

                <p>
                    <input className='button' type="submit" value='Create'></input>
                </p>

            </form>
        </div>
    )
}

export default Create;