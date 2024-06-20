import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Tooltip as TooltipMUI } from '@mui/material';

// Assets
import { ChartContainer, ChartHeader } from '../css';
import { MoreInfo } from 'assets/icons';

const data = [
    {
        name: 'Jan',
        TBT: 10.5
    },
    {
        name: 'Feb',
        TBT: 7.0
    },
    {
        name: 'Mar',
        TBT: 6.0
    },
    {
        name: 'Apr',
        TBT: 2.5
    },
    {
        name: 'Mai',
        TBT: 1.6
    },
    {
        name: 'Jun',
        TBT: 2
    }
];

const Interactivity = () => {
    return (
        <>
            <ChartHeader>
                <p>
                    <span>Interactivity</span>
                    <span>Secondary text</span>
                </p>
                <div>
                    <TooltipMUI
                        title='Shows the Web Vitals relevant to how quickly your initial page load become responsive to user input.
                    A high valuecan indicate a sluggish experience.'
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
                        <Line type='monotone' dataKey='TBT' stroke='#F6465D' activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>
        </>
    );
};

export default Interactivity;
