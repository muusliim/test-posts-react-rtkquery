import loader from '../../assets/images/loader.svg'

export const Loader = () => {
    return (
        <div className="container">
            <div className="loader">
                <img className='w-30' src={loader} alt="loading" />
            </div>
        </div>
    )
}