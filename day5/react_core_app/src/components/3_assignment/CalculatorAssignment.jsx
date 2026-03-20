import { useState } from "react";

const CalculatorOne = () => {
    
    const [nums,setNums]=useState({num_1:0,num_2:0});
    const [res,setRes]=useState(0);

    const handleAdd = (e) => {
        e.preventDefault();
        
        const additionResult = Number(nums.num_1) + Number(nums.num_2);
        setRes(additionResult);
    };

    const handleReset = (e) => {
        e.preventDefault(); 
        setRes(0);
        setNums({ num_1: 0, num_2: 0 });
    };

    return (
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <form className="justify-content-center">
                    <fieldset>
                        <legend className="text-center">Calculator One</legend>
                        <div className="form-group mb-1">
                            <label className="mb-0" htmlFor="t1">Number One</label>
                            <input type="text" className="form-control" value={nums.num_1} onChange={(e)=>{
                                setNums({...nums,num_1:e.target.value})
                            }} />
                        </div>
                        <div className="form-group mb-1">
                            <label className="mb-0" htmlFor="t2">Number Two</label>
                            <input type="text" className="form-control" value={nums.num_2} onChange={(e)=>{
                                setNums({...nums,num_2:e.target.value})
                            }} />
                        </div>
                        <div className="form-group mb-2 mt-2">
                            <h3>Result: {res} </h3>
                        </div>
                        <div className="d-grid gap-2 mx-auto">
                            <button type="submit" className="btn btn-success" onClick={handleAdd}>Add</button>
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
            <CalculatorOne />
        </>
    );
}

export default CalculatorAssignment;