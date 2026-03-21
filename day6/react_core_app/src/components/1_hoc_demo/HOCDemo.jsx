
const ComponentOne = () => {
    // throw new Error("Check Error");
    return (
        <>
            <h1 className="text-primary">Hello From Component One</h1>
            <p className="text-muted">This is the first component with some extra content.</p>
            <ul className="list-group mb-3">
                <li className="list-group-item">Item A</li>
                <li className="list-group-item">Item B</li>
                <li className="list-group-item">Item C</li>
            </ul>
            <button className="btn btn-primary">Click Me</button>
        </>
    );
};

const ComponentTwo = () => {
    return (
        <>
            <h1 className="text-warning">Hello From Component Two</h1>
            <p className="text-muted">This is the second component with different content.</p>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">Card Title</h5>
                    <p className="card-text">Some quick example text for Component Two.</p>
                </div>
            </div>
            <button className="btn btn-warning">Learn More</button>
        </>
    );
};

const HOCDemoRoot = () => {
    return (
        <div className="row">
            <div className="col">
                <ComponentOne />
            </div>
            <div className="col">
                <ComponentTwo />
            </div>
        </div>
    );
};

export default HOCDemoRoot;