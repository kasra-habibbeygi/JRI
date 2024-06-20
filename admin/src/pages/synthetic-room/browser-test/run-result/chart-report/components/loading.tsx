import { Tooltip as TooltipMUI } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Assets
import { ChartContainer, ChartHeader } from '../css';
import { MoreInfo } from 'assets/icons';

const data = [
    {
        name: 'Jan',
        TTFB: -100,
        LCP: -10,
        FCP: 60,
        DOMContentLoaded: 20,
        loaded: -30
    },
    {
        name: 'Feb',
        TTFB: 70,
        LCP: -100,
        FCP: 85,
        DOMContentLoaded: 5,
        loaded: -15
    },
    {
        name: 'Mar',
        TTFB: 60,
        LCP: -20,
        FCP: 0,
        DOMContentLoaded: 34,
        loaded: -25
    },
    {
        name: 'Apr',
        TTFB: -25,
        LCP: -100,
        FCP: 30,
        DOMContentLoaded: 7,
        loaded: -10
    },
    {
        name: 'Mai',
        TTFB: 16,
        LCP: 0,
        FCP: 100,
        DOMContentLoaded: 88,
        loaded: -88
    },
    {
        name: 'Jun',
        TTFB: 98,
        LCP: -100,
        FCP: 42,
        DOMContentLoaded: 47,
        loaded: -96
    }
];

const Loading = () => {
    return (
        <>
            <ChartHeader>
                <p>
                    <span>Loading</span>
                    <span>Secondary text</span>
                </p>
                <div>
                    <TooltipMUI
                        title=' Shows the Web Vitals relevant to the first page load in your browser session.
                     Low numbers are a good indication visitors get quick feedback that your page is loading meaningful content.'
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
                        <Line type='linear' dataKey='TTFB' stroke='#F6465D' activeDot={{ r: 8 }} />
                        <Line type='linear' dataKey='LCP' stroke='#089981' />
                        <Line type='linear' dataKey='FCP' stroke='#608aee' />
                        <Line type='linear' dataKey='DOMContentLoaded' stroke='#f1c304' />
                        <Line type='linear' dataKey='loaded' stroke='#A155B9' />
                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>
        </>
    );
};

export default Loading;
