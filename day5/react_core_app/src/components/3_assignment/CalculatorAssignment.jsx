import { useRef, useState } from "react";
import TextInput from "../common/TextInput";

const CalculatorOne = () => {
    const t1 = useRef(null);
    const t2 = useRef(null);

    const [result, setResult] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const v1 = parseInt(t1.current.value) || 0;
        const v2 = parseInt(t2.current.value) || 0;
        setResult(v1 + v2);
    }

    const handleReset = () => {
        t1.current.value = "0";
        t2.current.value = "0";
        setResult(0);
    }

    return (
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <form className="justify-content-center">
                    <fieldset>
                        <legend className="text-center">Calculator One - Uncontrolled</legend>
                        <div className="form-group mb-1">
                            <label className="mb-0" htmlFor="t1">Number One</label>
                            <input type="text" className="form-control" defaultValue={0} ref={t1} />
                        </div>
                        <div className="form-group mb-1">
                            <label className="mb-0" htmlFor="t2">Number Two</label>
                            <input type="text" className="form-control" defaultValue={0} ref={t2} />
                        </div>
                        <div className="form-group mb-2 mt-2">
                            <h3>Result: {result}</h3>
                        </div>
                        <div className="d-grid gap-2 mx-auto">
                            <button type="submit" className="btn btn-success" onClick={handleSubmit}>Add</button>
                            <button type="reset" className="btn btn-primary" onClick={handleReset}>Reset</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

const CalculatorTwo = () => {
    const [data, setData] = useState({ t1: "0", t2: "0" });
    const [result, setResult] = useState(0);

    const handleChange1 = (e) => {
        var obj = { ...data };
        obj.t1 = parseInt(e.target.value);
        setData(obj);
    }

    const handleChange2 = (e) => {
        var obj = { ...data };
        obj.t2 = parseInt(e.target.value);
        setData(obj);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setResult(data.t1 + data.t2);
    }

    const handleReset = () => {
        setData({ t1: "0", t2: "0" });
        setResult(0);
    }

    return (
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <form className="justify-content-center">
                    <fieldset>
                        <legend className="text-center">Calculator Two - Controlled</legend>
                        <div className="form-group mb-1">
                            <label className="mb-0" htmlFor="t1">Number One</label>
                            <input type="text" className="form-control" value={data.t1} onChange={handleChange1} />
                        </div>
                        <div className="form-group mb-1">
                            <label className="mb-0" htmlFor="t2">Number Two</label>
                            <input type="text" className="form-control" value={data.t2} onChange={handleChange2} />
                        </div>
                        <div className="form-group mb-2 mt-2">
                            <h3>Result: {result}</h3>
                        </div>
                        <div className="d-grid gap-2 mx-auto">
                            <button type="submit" className="btn btn-success" onClick={handleSubmit}>Add</button>
                            <button type="reset" className="btn btn-primary" onClick={handleReset}>Reset</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

const CalculatorThree = () => {
    const [data, setData] = useState({ t1: "0", t2: "0" });
    const [result, setResult] = useState(0);

    // const handleChange = (e) => {
    //     const field = e.target.name;
    //     var obj = { ...data };
    //     obj[field] = parseInt(e.target.value);
    //     setData(obj);
    // }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: parseInt(value) }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setResult(data.t1 + data.t2);
    }

    const handleReset = () => {
        setData({ t1: "0", t2: "0" });
        setResult(0);
    }

    return (
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <form className="justify-content-center">
                    <fieldset>
                        <legend className="text-center">Calculator Three - Controlled - Single Change Handler</legend>
                        <div className="form-group mb-1">
                            <label className="mb-0" htmlFor="t1">Number One</label>
                            <input type="text" className="form-control" id="t1" name="t1" value={data.t1} onChange={handleChange} />
                        </div>
                        <div className="form-group mb-1">
                            <label className="mb-0" htmlFor="t2">Number Two</label>
                            <input type="text" className="form-control" id="t2" name="t2" value={data.t2} onChange={handleChange} />
                        </div>
                        <div className="form-group mb-2 mt-2">
                            <h3>Result: {result}</h3>
                        </div>
                        <div className="d-grid gap-2 mx-auto">
                            <button type="submit" className="btn btn-success" onClick={handleSubmit}>Add</button>
                            <button type="reset" className="btn btn-primary" onClick={handleReset}>Reset</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

const CalculatorFour = () => {
    const [data, setData] = useState({ t1: "0", t2: "0" });
    const [result, setResult] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: parseInt(value) }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setResult(data.t1 + data.t2);
    }

    const handleReset = () => {
        setData({ t1: "0", t2: "0" });
        setResult(0);
    }

    return (
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <form className="justify-content-center">
                    <fieldset>
                        <legend className="text-center">Calculator Four - Controlled - UI Composition</legend>
                        <TextInput name="t1" label="Number One" placeholder="Enter Number One" value={data.t1} onChange={handleChange} />
                        <TextInput name="t2" label="Number Two" placeholder="Enter Number Two" value={data.t2} onChange={handleChange} />
                        <div className="form-group mb-2 mt-2">
                            <h3>Result: {result}</h3>
                        </div>
                        <div className="d-grid gap-2 mx-auto">
                            <button type="submit" className="btn btn-success" onClick={handleSubmit}>Add</button>
                            <button type="reset" className="btn btn-primary" onClick={handleReset}>Reset</button>
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
            {/* <CalculatorOne /> */}
            {/* <CalculatorTwo /> */}
            {/* <CalculatorThree /> */}
            <CalculatorFour />
        </>
    );
}

export default CalculatorAssignment;