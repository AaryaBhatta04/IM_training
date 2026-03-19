import { useRef, useState } from 'react';
import { Counter } from './Counter';
import { CounterAlt } from './CounterAlt';

const CounterRoot = () => {
    const [message, setMessage] = useState("");
    const counterRef = useRef(null);

    const updateMessage = (flag) => {
        if (flag)
            setMessage("Max click reached, please reset to continue...")
        else
            setMessage("");
    }

    const p_reset = () => {
        if (counterRef.current)
            counterRef.current.reset();
    }

    return (
        <>
            {message && <h2 className='text-center text-primary'>{message}</h2>}
            <div className="row">
                <div className="col-6">
                    <Counter onMax={updateMessage} ref={counterRef} />
                    <div className="d-grid gap-2 mx-auto col-6 mt-4">
                        <button className="btn btn-warning" onClick={p_reset}>
                            <span className='fs-4'>Parent Reset</span>
                        </button>
                    </div>
                </div>
                <div className="col-6">
                    <CounterAlt interval={5} onMax={updateMessage} />
                </div>
            </div>

        </>
    );
}

export default CounterRoot;
