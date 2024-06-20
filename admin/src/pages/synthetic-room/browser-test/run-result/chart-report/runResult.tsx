import { Link } from 'react-router-dom';

// Assets
import { RunResultContainer } from './css';
import { Assign, Calender, CheckCircle, CrossCircle, Exclamation, Location } from 'assets/icons';

// Components
import {
    Alerts,
    FilterAndResult,
    Interactivity,
    Locations,
    MainResultHeader,
    MonitoringResults,
    PerformanceResult,
    VisualStability
} from './components';
import { Header } from 'commons/components';

const RunResult = () => {
    return (
        <>
            <Header title='Run Result' />
            <RunResultContainer>
                <div className='main-result container'>
                    <MainResultHeader />
                    <FilterAndResult />
                    <MonitoringResults />
                    <Alerts />
                    <PerformanceResult />
                    <Interactivity />
                    <VisualStability />
                    <Locations />
                </div>
                <div className='run-result-content '>
                    <div className='parent container'>
                        <h4>Run Result</h4>
                        <div className='filter-list'>
                            <p>
                                <Calender />
                                <span>Last 30 days</span>
                            </p>
                            <p>
                                <Location />
                                <span>All locations</span>
                            </p>
                            <p>
                                <Assign />
                                <span>All Statuses</span>
                            </p>
                        </div>
                        <ul>
                            {mocData.map(item => (
                                <li key={item.id}>
                                    <Link to='test-session/id4code'>
                                        {item.status === 'Passed' ? (
                                            <CheckCircle className='table_row_pill green' />
                                        ) : item.status === 'degraded' ? (
                                            <Exclamation className='table_row_pill yellow' />
                                        ) : (
                                            <CrossCircle className='table_row_pill red' />
                                        )}
                                        <p>
                                            <span>{item.location}</span>
                                            <small>{item.createAt}</small>
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </RunResultContainer>
        </>
    );
};

export default RunResult;

const mocData = [
    {
        id: 'dsf23423d',
        location: 'Shiraz',
        createAt: 'May 13 - 03:30:32',
        status: 'degraded'
    },
    {
        id: 'dsf2ss23d',
        location: 'Isfahan',
        createAt: 'May 13 - 03:30:32',
        status: 'Failed'
    },
    {
        id: 'efsddsf2ss23d',
        location: 'Shiraz',
        createAt: 'May 13 - 03:30:32',
        status: 'degraded'
    },
    {
        id: 'dsf2sdds23d',
        location: 'Mashhad',
        createAt: 'May 13 - 03:30:32',
        status: 'degraded'
    },
    {
        id: 'dsf24423d',
        location: 'Tehran',
        createAt: 'May 13 - 03:30:32',
        status: 'Passed'
    },
    {
        id: 'dsf42323d',
        location: 'Shiraz',
        createAt: 'May 13 - 03:30:32',
        status: 'degraded'
    },
    {
        id: 'dsfsdf4d',
        location: 'Mashhad',
        createAt: 'May 13 - 03:30:32',
        status: 'degraded'
    },
    {
        id: 'ds34r3423d',
        location: 'Shiraz',
        createAt: 'May 13 - 03:30:32',
        status: 'Passed'
    }
];
