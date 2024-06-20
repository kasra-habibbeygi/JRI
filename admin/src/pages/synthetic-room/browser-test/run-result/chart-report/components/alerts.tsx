import { FC } from 'react';

// Assets
import { AlertsContainer, FilterContainer } from '../css';
import { Calender } from 'assets/icons';
import { Clock, TrendDown, TrendUp } from '../images';

// Components
import { Checkbox } from 'commons/components';

interface AlertsProps {}

const Alerts: FC<AlertsProps> = () => {
    return (
        <>
            <FilterContainer>
                <h4>Alerts</h4>
                <p> Filter by:</p>
                <div className='form'>
                    <Checkbox
                        checked={true}
                        name=''
                        onChange={() => {}}
                        label={
                            <p className='label-checkbox'>
                                <span className='green'></span>
                                <small>Recoveries: 1</small>
                                <span className='pill green-pill'>
                                    <TrendUp />1
                                </span>
                            </p>
                        }
                    />
                    <Checkbox
                        checked={false}
                        name=''
                        onChange={() => {}}
                        label={
                            <p className='label-checkbox'>
                                <span className='red'></span>
                                <small>Failures: 1</small>
                                <span className='pill red-pill'>
                                    <TrendDown />1
                                </span>
                            </p>
                        }
                    />
                    <Checkbox
                        checked={false}
                        name=''
                        onChange={() => {}}
                        label={
                            <p className='label-checkbox'>
                                <span className='yellow'></span>
                                <small>Degradations: 0</small>
                                <span className='pill '>0 </span>
                            </p>
                        }
                    />
                </div>
            </FilterContainer>
            <AlertsContainer>
                <div className='date-field'>
                    <Calender />
                    Monday, May 13th
                </div>
                <span className='line'></span>
                <div className='card-field'>
                    <header>
                        <div className='left-side'>
                            <b>Browser Check #1</b>
                            <small>Recovered at location</small>
                            <p>Ohio</p>
                        </div>
                        <div className='right-side'>May 13 03:30:32 (UTC+3.5)</div>
                    </header>
                    <p className='time'>
                        9.58s
                        <Clock />
                    </p>
                </div>
                <div className='card-field'>
                    <header>
                        <div className='left-side'>
                            <b>Browser Check #1</b>
                            <small>Recovered at location</small>
                            <p>Ohio</p>
                        </div>
                        <div className='right-side'>May 13 03:30:32 (UTC+3.5)</div>
                    </header>
                    <p className='time'>
                        9.58s <Clock />
                    </p>
                    <p className='error-field'>
                        message: Error: should respond with correct status code expect(received).toBeLessThan(expected) Expected: 400
                        Received: 503stack: Error: should respond with correct status code expect(received).toBeLessThan(expected) Expected:
                        400 Received: 503 /tmp/1gmngy1lw46ngq5/script.js:29:71isSoft: false
                    </p>
                </div>
                <p className='show-more'>No More Alerts found for the selected filters</p>
            </AlertsContainer>
        </>
    );
};

export default Alerts;
