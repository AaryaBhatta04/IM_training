import { Link, useLocation } from 'react-router-dom';
const img404 = require('../../assets/http-404.jpg');

const NoMatchComponent = () => {
    const location = useLocation();

    return (
        <div className='text-center'>
            <h1 className='text-danger'>No match found for <code>{location.pathname}</code></h1>
            <h4 className="text-danger">Please check your Route Configuration</h4>
            <div className="mt-5">
                <img src={img404} alt="Not Found" className='rounded' />
            </div>
            <h2 className="mt-5">
                <Link className='nav-link' to="/">Go to Home</Link>
            </h2>
        </div>
    );
};

export default NoMatchComponent;