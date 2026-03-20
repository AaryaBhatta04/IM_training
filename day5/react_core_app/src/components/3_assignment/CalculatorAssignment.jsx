const CalculatorOne = () => {
    return (
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <form className="justify-content-center">
                    <fieldset>
                        <legend className="text-center">Calculator One</legend>
                        <div className="form-group mb-1">
                            <label className="mb-0" htmlFor="t1">Number One</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group mb-1">
                            <label className="mb-0" htmlFor="t2">Number Two</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group mb-2 mt-2">
                            <h3>Result: </h3>
                        </div>
                        <div className="d-grid gap-2 mx-auto">
                            <button type="submit" className="btn btn-success">Add</button>
                            <button type="reset" className="btn btn-primary">Reset</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

const CalculatorAssignment = () => {
    return (
        <>
            <CalculatorOne />
        </>
    );
}

export default CalculatorAssignment;