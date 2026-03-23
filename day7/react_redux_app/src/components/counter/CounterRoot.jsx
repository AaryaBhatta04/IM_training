import Counter from "./Counter";
import CounterSibling from "./CounterSibling";

const CounterRoot = () => {
    return (
        <>
            <Counter />
            <hr />
            <CounterSibling />
        </>
    );
};

export default CounterRoot;