import { useState } from "react"

const Counter1=({interval=1})=>{
    const [cnt,setCnt]=useState(0);

    const handlePlusClick=()=>{
        setCnt(cnt+interval);
    }
    const handleMinusClick=()=>{
        setCnt(cnt-interval);
    }
    const handleResetClick=()=>{
        setCnt(0);
    }
    
    return(
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                {/* <input type="text" className="form-control form-control-lg" value={cnt} /> */}
                <p>{cnt}</p>
                <CounterControls1 onAdd={handlePlusClick} onMinus={handleMinusClick} onReset={handleResetClick} />
            </div>
        </>
    )
}

const CounterControls1=({onAdd,onMinus,onReset})=>{
    
    const [clickCount,setClickCount]=useState(0);

    const handleIncrementClick=()=>{
        if(clickCount<10){
            setClickCount(clickCount+1);
            onAdd();
            // console.log(clickCount);
        }
    }

    const handleDecrementClick=()=>{
        if(clickCount<10){
            setClickCount(clickCount+1);
            onMinus();
            // console.log(clickCount);
        }
    }

    const handleReset=()=>{
        if(clickCount===10){
            setClickCount(0);
            onReset();
            // console.log(clickCount);
        }
    }

    return(
        <>
            <div className="d-grid gap-2">
                <button className="btn btn-info" onClick={handleIncrementClick}>
                    <span className="fs-4">+</span>
                </button>
                <button className="btn btn-info" onClick={handleDecrementClick}>
                    <span className="fs-4">-</span>
                </button>
                <button className="btn btn-secondary" onClick={handleReset}>
                    <span className="fs-4">Reset</span>
                </button>
            </div>
        </>
    )
}

const CounterAssignment1=()=>{
    return (
        <>
            <div>
                <Counter1 />
                <hr />
                <Counter1 interval={10}/>
            </div>
        </>
    )
}

export default CounterAssignment1;