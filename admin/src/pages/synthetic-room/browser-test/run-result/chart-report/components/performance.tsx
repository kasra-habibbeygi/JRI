// Assets
import { PerformanceResultContainer } from '../css';

// Components
import CheckDuration from './checkDuration';
import Errors from './errors';
import Loading from './loading';

const PerformanceResult = () => {
    return (
        <PerformanceResultContainer>
            <h4>Performance</h4>
            <CheckDuration />
            <Loading />
            <Errors />
        </PerformanceResultContainer>
    );
};

export default PerformanceResult;
