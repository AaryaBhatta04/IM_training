import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementBy, increment, incrementBy } from "../../features/counter/counterSlice";

const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Component Using Redux</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" value={count} readOnly />
                <button className="btn btn-info" onClick={() => { dispatch(increment()); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info" onClick={() => { dispatch(decrement()); }}>
                    <span className='fs-4'>-</span>
                </button>
                <button className="btn btn-info" onClick={() => { dispatch(incrementBy(5)); }}>
                    <span className='fs-4'>+5</span>
                </button>
                <button className="btn btn-info" onClick={() => { dispatch(decrementBy(5)); }}>
                    <span className='fs-4'>-5</span>
                </button>
            </div>
        </>
    );
};

export default Counter;