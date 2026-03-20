const EventComponent = () => {
    function handleClick1(e) {
        console.log("event: ", e);
        e.preventDefault();
    }

    function handleClick2(name, e) {
        console.log("name: ", name);
        console.log("event: ", e);
        e.preventDefault();
    }

    return (
        <div className='text-center'>
            <h2 className="text-primary">Synthetic Event Object</h2>
            <div className="mt-2">
                <a href="https://www.google.com" onClick={handleClick1}>Click One</a>
            </div>
            <div className="mt-2">
                <a href="https://www.google.com" onClick={(e) => {
                    handleClick2("IndiaMart", e);
                }}>Click Two</a>
            </div>
            <div className="mt-2">
                <a href="https://www.google.com" onClick={function (e) {
                    handleClick2("IndiaMART", e);
                }}>Click Three</a>
            </div>
        </div>
    );
};

export default EventComponent;