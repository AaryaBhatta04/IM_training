import { CounterAlt } from './CounterAlt';
import CounterContextProvider, { useCounter } from './CounterContext';
import { CounterMonitor } from './CounterMonitor';

const CounterLayout = () => {
    const { message } = useCounter();

    return (
        <>
            {message && <h2 className='text-center text-primary'>{message}</h2>}
            <div className="row">
                <div className="col-6">
                    <CounterAlt interval={5} />
                </div>
                <div className="col-6">
                    <CounterMonitor />
                </div>
            </div>
        </>
    );
}

const CounterRoot = () => {
    return (
        <CounterContextProvider>
            <CounterLayout />
        </CounterContextProvider>
    );
}

export default CounterRoot;