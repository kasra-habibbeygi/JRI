import { useState } from 'react';
import moment from 'moment';

// Assets
import { DateFilterContainer, FilterAndResultContainer } from '../css';
import { TrendDown, TrendUp } from '../images';
import { Angle, Cross } from 'assets/icons';

// Components
import { Button, DatePicker, Modal, Select } from 'commons/components';

//Utils
import { Tools } from 'commons/utils';

interface IDateFilter {
    startDate: number | null;
    endDate: number | null;
    day: number | null;
}

interface IOption {
    name: string;
    id: number;
}

const FilterAndResult = () => {
    const [modalStatus, setModalStatus] = useState(false);
    const [swapDate, setSwapDate] = useState(new Date().getTime());
    const [filterDate, setFilterDate] = useState<IDateFilter>({
        startDate: null,
        endDate: null,
        day: null
    });
    const [location, setLocation] = useState({
        city: null
    });

    const clearAllFilters = () => {
        setSwapDate(new Date().getTime());
        setLocation({ city: null });
    };

    const onClose = () => {
        setModalStatus(false);
        setFilterDate({
            startDate: null,
            endDate: null,
            day: null
        });
    };

    const setPeriod = (days: number) => {
        setFilterDate(currentFilter => ({
            ...currentFilter,
            day: days
        }));
    };

    return (
        <>
            <FilterAndResultContainer>
                <div className='filter-content'>
                    <div className='date-filter'>
                        <Button buttonType='ghost' onClick={() => setSwapDate(moment(swapDate).add(1, 'days') as unknown as number)}>
                            <Angle className='left-arrow' />
                        </Button>
                        <DatePicker
                            placeholder='Start Date'
                            onChange={(e, name) => Tools.dateValueHandler(e, name, setSwapDate)}
                            value={swapDate}
                            name='startData'
                            className='input-container'
                            disabled
                        />
                        <Button buttonType='ghost' onClick={() => setSwapDate(moment(swapDate).subtract(1, 'days') as unknown as number)}>
                            <Angle />
                        </Button>
                    </div>
                    <Button onClick={() => setModalStatus(true)}>Date Filter</Button>
                    <Select<IOption>
                        options={[
                            {
                                name: 'Shiraz',
                                id: 1
                            },
                            {
                                name: 'Isfahan',
                                id: 1
                            },
                            {
                                name: 'Tehran',
                                id: 1
                            },
                            {
                                name: 'Mashhad',
                                id: 1
                            }
                        ]}
                        className='input-container'
                        onChange={e => Tools.selectValueHandler('city', e, setLocation)}
                        value={location.city}
                        placeholder='locations'
                        returnOption='all'
                        name='city'
                        renderOption={option => option.name}
                    />
                    <Button buttonType='ghost' onClick={clearAllFilters}>
                        Clear All Filter
                    </Button>
                </div>
                <div className='details'>
                    <div className='item'>
                        <small>Availability</small>
                        <p>
                            98.75%
                            <span className='green-pill pill'>
                                <TrendUp />
                                98.7%
                            </span>
                        </p>
                    </div>
                    <div className='item'>
                        <small>P50</small>
                        <p>
                            11.71 s<span className='ghost-pill pill'>98.7%</span>
                        </p>
                    </div>
                    <div className='item'>
                        <small>P95</small>
                        <p>
                            15.46 s<span className='ghost-pill pill'>98.7%</span>
                        </p>
                    </div>
                    <div className='item'>
                        <small>Failure Alerts</small>
                        <p>
                            98.75%
                            <span className='red-pill pill'>
                                <TrendDown />
                                98.7%
                            </span>
                        </p>
                    </div>
                </div>
            </FilterAndResultContainer>
            <Modal maxWidth='xs' onClose={onClose} open={modalStatus}>
                <DateFilterContainer>
                    <header className='modal-header'>
                        <h3>Filter Date</h3>
                        <Cross onClick={onClose} />
                    </header>
                    <small>you can choose start date and end date or choose period of time</small>
                    <div className='period-of-date'>
                        <DatePicker
                            placeholder='Start Date'
                            onChange={(e, name) => Tools.dateValueHandler(e, name, setFilterDate)}
                            value={filterDate.startDate}
                            name='startDate'
                            className='input-container'
                        />
                        <DatePicker
                            placeholder='End Date'
                            onChange={(e, name) => Tools.dateValueHandler(e, name, setFilterDate)}
                            value={filterDate.endDate}
                            name='endDate'
                            className='input-container'
                        />
                    </div>
                    <div className='period-of-time'>
                        <span onClick={() => setPeriod(2)} className={filterDate.day === 2 ? 'active' : ''}>
                            2 days
                        </span>
                        <span onClick={() => setPeriod(5)} className={filterDate.day === 5 ? 'active' : ''}>
                            5 days
                        </span>
                        <span onClick={() => setPeriod(7)} className={filterDate.day === 7 ? 'active' : ''}>
                            1 week
                        </span>
                        <span onClick={() => setPeriod(14)} className={filterDate.day === 14 ? 'active' : ''}>
                            2 weeks
                        </span>
                        <span onClick={() => setPeriod(30)} className={filterDate.day === 30 ? 'active' : ''}>
                            1 month
                        </span>
                        <span onClick={() => setPeriod(90)} className={filterDate.day === 90 ? 'active' : ''}>
                            3 months
                        </span>
                        <span onClick={() => setPeriod(180)} className={filterDate.day === 180 ? 'active' : ''}>
                            6 months
                        </span>
                    </div>
                    <Button>Apply</Button>
                </DateFilterContainer>
            </Modal>
        </>
    );
};

export default FilterAndResult;
