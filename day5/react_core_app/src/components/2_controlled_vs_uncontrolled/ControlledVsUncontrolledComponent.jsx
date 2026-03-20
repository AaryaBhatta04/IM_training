import { useRef, useState } from "react";

const ControlledVsUncontrolledComponent = () => {
    const [name, setName] = useState("Manish");
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleClick = (e) => {
        if (inputRef.current) {
            setName(inputRef.current.value);
        }
    }

    return (
        <div className='text-center'>
            <h1 className="text-info">Controlled & Uncontrolled Component</h1>

            <div className="d-grid gap-2 col-6 mx-auto mt-5">
                {/* <input type="text" className="form-control" />
                <input type="text" className="form-control" value="Abhijeet" readOnly />
                <input type="text" className="form-control" defaultValue={"Ramakant"} /> */}

                {/* <input type="text" className="form-control" value={name} readOnly />
                <input type="text" className="form-control" defaultValue={name} /> */}

                {/* Controlled Component */}
                {/* <input type="text" className="form-control" value={name} onChange={handleChange}/>
                <h1>Hello, {name}</h1> */}

                <input type="text" className="form-control" defaultValue={name} ref={inputRef} />
                <h1>Hello, {name}</h1>
                <button className='btn btn-primary' onClick={handleClick}>Update Name</button>
            </div>
        </div>
    );
};

export default ControlledVsUncontrolledComponent;