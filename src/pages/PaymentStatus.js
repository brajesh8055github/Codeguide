import error from '../image/4041.png'
function PaymentStatus() {
    return (
        <div className="payment">
            <img src={error} className='error-img' alt=''></img>
            <h1>Ooops...</h1>
            <p>404, The page you are looking for does not exist.</p>
            <a href='/'><button className='error-btn'>Go Back</button></a>
        </div>
    )
}
export default PaymentStatus;

