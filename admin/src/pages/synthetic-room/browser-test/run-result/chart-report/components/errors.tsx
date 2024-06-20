import { Tooltip as TooltipMUI } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Assets
import { ChartContainer, ChartHeader } from '../css';
import { MoreInfo } from 'assets/icons';

const data = [
    {
        name: 'Jan',
        ConsoleErrors: 100,
        NetworkErrors: 10,
        ScriptErrors: 60,
        DocumentErrors: 20
    },
    {
        name: 'Feb',
        ConsoleErrors: 70,
        NetworkErrors: 100,
        ScriptErrors: 85,
        DocumentErrors: 5
    },
    {
        name: 'Mar',
        ConsoleErrors: 60,
        NetworkErrors: 20,
        ScriptErrors: 0,
        DocumentErrors: 34
    },
    {
        name: 'Apr',
        ConsoleErrors: 25,
        NetworkErrors: 120,
        ScriptErrors: 30,
        DocumentErrors: 7
    },
    {
        name: 'Mai',
        ConsoleErrors: 16,
        NetworkErrors: 0,
        ScriptErrors: 11,
        DocumentErrors: 88
    },
    {
        name: 'Jun',
        ConsoleErrors: 98,
        NetworkErrors: 100,
        ScriptErrors: 42,
        DocumentErrors: 47
    }
];

const Errors = () => {
    return (
        <>
            <ChartHeader>
                <p>
                    <span>Errors</span>
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
                    <BarChart width={300} height={300} data={data} reverseStackOrder>
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='name' />
                        <YAxis width={20} />
                        <Tooltip />
                        <Legend />
                        <Bar maxBarSize={30} dataKey='ConsoleErrors' fill='#5C8DFF' stackId='a' />
                        <Bar maxBarSize={30} dataKey='NetworkErrors' fill='#0BD5B4' stackId='a' />
                        <Bar maxBarSize={30} dataKey='ScriptErrors' fill='#FEE686' stackId='a' />
                        <Bar maxBarSize={30} dataKey='DocumentErrors' fill='#F86377' stackId='a' />
                    </BarChart>
                </ResponsiveContainer>
            </ChartContainer>
        </>
    );
};

export default Errors;
