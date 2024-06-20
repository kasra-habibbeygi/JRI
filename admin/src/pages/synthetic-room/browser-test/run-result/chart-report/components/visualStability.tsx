import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Tooltip as TooltipMUI } from '@mui/material';

// Assets
import { ChartContainer, ChartHeader } from '../css';
import { MoreInfo } from 'assets/icons';

const data = [
    {
        name: 'Jan',
        'CLS(Cumulative Layout Shift)': 10.5
    },
    {
        name: 'Feb',
        'CLS(Cumulative Layout Shift)': 7.0
    },
    {
        name: 'Mar',
        'CLS(Cumulative Layout Shift)': 6.0
    },
    {
        name: 'Apr',
        'CLS(Cumulative Layout Shift)': 2.5
    },
    {
        name: 'Mai',
        'CLS(Cumulative Layout Shift)': 1.6
    },
    {
        name: 'Jun',
        'CLS(Cumulative Layout Shift)': 2
    }
];

const VisualStability = () => {
    return (
        <>
            <ChartHeader>
                <p>
                    <span>Visual Stability</span>
                    <span>Secondary text</span>
                </p>
                <div>
                    <TooltipMUI
                        title='Shows the Web Vitals relevant to how stable your initial page renders.
                    A high value indicates jumpiness of content elements.'
                    >
                        <span className='more-details'>
                            <MoreInfo />
                        </span>
                    </TooltipMUI>
                </div>
            </ChartHeader>
            <ChartContainer>
                <ResponsiveContainer>
                    <LineChart width={500} height={300} data={data}>
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='name' padding={{ left: 10, right: 10 }} />
                        <YAxis width={20} />
                        <Tooltip />
                        <Legend />
                        <Line type='monotone' dataKey='CLS(Cumulative Layout Shift)' stroke='#3772FF' activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>
        </>
    );
};

export default VisualStability;
