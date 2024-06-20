// Components
import { Table } from 'commons/components';

// Assets
import { LocationsContainer } from '../css';
import { Chart } from '../images';

// Contacts
const tableHeaders = ['#', 'Location', 'P50 Trend', 'P50', 'P95', 'P99'];

const Locations = () => {
    return (
        <LocationsContainer>
            <h4 className='title'>Locations</h4>
            <span className='sub-title'>Your test is running in these selected locations</span>
            <Table headerItems={tableHeaders} name='browserTest'>
                <tr>
                    <td>1</td>
                    <td>Shiraz</td>
                    <td>
                        <span className='chart'>
                            <Chart />
                        </span>
                    </td>
                    <td>11.86s</td>
                    <td>15.52</td>
                    <td>19.1s</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tehran</td>
                    <td>
                        <span className='chart'>
                            <Chart />
                        </span>
                    </td>
                    <td>11.86s</td>
                    <td>15.52</td>
                    <td>19.1s</td>
                </tr>
            </Table>
        </LocationsContainer>
    );
};

export default Locations;
