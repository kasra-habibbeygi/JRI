import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Assets
import { TrendDown } from '../images';
import { MonitoringResultsContainer } from '../css';

const data = [
    {
        name: 'Jan',
        Failed: 1.8,
        Passed: 4.2
    },
    {
        name: 'Feb',
        Failed: 1.7,
        Passed: 2.3
    },
    {
        name: 'Mar',
        Failed: 7.5,
        Passed: 4.6
    },
    {
        name: 'Apr',
        Failed: 4.6,
        Passed: 8.6
    },
    {
        name: 'Mai',
        Failed: 9.6,
        Passed: 7.2
    },
    {
        name: 'Jun',
        Failed: 2.2,
        Passed: 4.5
    },
    {
        name: 'Jul',
        Failed: 3.3,
        Passed: 3.2
    },
    {
        name: 'Aug',
        Failed: 2.5,
        Passed: 7.5
    },
    {
        name: 'Sep',
        Failed: 5.2,
        Passed: 4.6
    },
    {
        name: 'Oct',
        Failed: 6.3,
        Passed: 5.4
    },
    {
        name: 'Nov',
        Failed: 8.75,
        Passed: 9.2
    },
    {
        name: 'Dec',
        Failed: 2.5,
        Passed: 1.3
    }
];
const MonitoringResults = () => {
    return (
        <MonitoringResultsContainer>
            <h4>Monitoring Results</h4>
            <p>
                Check Retries Percentage: <span className='discount'>1.8%</span>
                <span className='pill red-pill'>
                    <TrendDown />
                    <small>1.9%</small>
                </span>
            </p>
            <div className='bar-chart'>
                <ResponsiveContainer>
                    <BarChart data={data} width={300} height={300}>
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='name' />
                        <YAxis width={10} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey='Failed' fill='#F86377' />
                        <Bar dataKey='Passed' fill='#0BD5B4' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </MonitoringResultsContainer>
    );
};

export default MonitoringResults;
