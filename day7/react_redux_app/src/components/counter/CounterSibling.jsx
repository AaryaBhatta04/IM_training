import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice";

const CounterSibling = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <>
            <div className="text-center">
                <h3 className="text-success">Counter Component Using Redux</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" value={count} readOnly />
                <button className="btn btn-success" onClick={() => { dispatch(increment()); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-success" onClick={() => { dispatch(decrement()); }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
};

export default CounterSibling;