import { Tooltip as TooltipMUI } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Assets
import { ChartContainer, ChartHeader } from '../css';
import { MoreInfo } from 'assets/icons';

const data = [
    {
        name: 'Jan',
        P50: -100,
        P95: -10,
        P99: 60
    },
    {
        name: 'Feb',
        P50: 70,
        P95: -100,
        P99: 85
    },
    {
        name: 'Mar',
        P50: 60,
        P95: -20,
        P99: 0
    },
    {
        name: 'Apr',
        P50: -25,
        P95: -100,
        P99: 30
    },
    {
        name: 'Mai',
        P50: 16,
        P95: 0,
        P99: 100
    },
    {
        name: 'Jun',
        P50: 98,
        P95: -100,
        P99: 42
    }
];

const CheckDuration = () => {
    return (
        <>
            <ChartHeader>
                <p>
                    <span>Check duration</span>
                    <span>Secondary text</span>
                </p>
                <div>
                    <TooltipMUI
                        title='This duration determines the maximum
                                amount of time a check can be in a
                                retrying state before giving up on
                                retries. It includes each retry interval
                                and the subsequent check duration of
                                the retried check.'
                    >
                        <span className='more-details'>
                            <MoreInfo />
                        </span>
                    </TooltipMUI>
                </div>
            </ChartHeader>
            <ChartContainer>
                <ResponsiveContainer>
                    <LineChart width={300} height={300} data={data}>
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='name' padding={{ left: 30, right: 30 }} />
                        <YAxis width={20} />
                        <Tooltip />
                        <Legend />
                        <Line type='linear' dataKey='P50' stroke='#F6465D' activeDot={{ r: 8 }} />
                        <Line type='linear' dataKey='P95' stroke='#089981' />
                        <Line type='linear' dataKey='P99' stroke='#608aee' />
                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>
        </>
    );
};

export default CheckDuration;
