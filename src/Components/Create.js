import './Register.css'

function Create() {
    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();
    }
    return(
        <div className='form'>
            <form onSubmit={onRegisterSubmitHandler}>
                <h1>Create deal</h1>

                <label htmlFor="dealName">DealName</label>
                <input type="text"></input>
                <label htmlFor="price">Price</label>
                <input type="text"></input>
                <label htmlFor="discount">Discount</label>  
                <input type="text"></input>
                <label htmlFor="untile">Untile</label>
                <input type="text"></input>
                <label htmlFor="imgUrl">Image</label>
                <input type="text"></input>

                <p>
                <input className='button' type="submit" value='Create'></input>
                </p>

            </form>
        </div>
    )
}

export default Create;