/* eslint-disable prettier/prettier */
import { FC } from 'react';

// Assets
import { TestListContainer } from '../css';
import { Api, Website } from '../images';
import { CheckCircle, CrossCircle } from 'assets/icons';

// Components
import { Filters, Table } from 'commons/components';
import MenuTable from './menu';

// Contacts
const tableHeaders = ['#', 'Name', 'Test Type', ' Locations', '24H', '7D', 'AVG', 'P95', '△T', 'Options'];

// Types
interface TestListProps {}

const TestList: FC<TestListProps> = () => {
    return (
        <TestListContainer >
            <Filters
                filterItems={['tags', 'status', 'search', 'type']}
                statusItem={[
                    {
                        id: 0,
                        name: 'Passing'
                    },
                    {
                        id: 0,
                        name: 'Degraded'
                    },
                    {
                        id: 0,
                        name: 'Failing'
                    },
                    {
                        id: 0,
                        name: 'Inprogress'
                    },
                    {
                        id: 0,
                        name: 'Deactivated'
                    },
                    {
                        id: 0,
                        name: 'Muted'
                    }
                ]}
                tagItem={[
                    {
                        id: 0,
                        name: 'typeItems'
                    }
                ]}
                typeItems={[
                    {
                        id: 0,
                        name: 'API Test'
                    },
                    {
                        id:1,
                        name: ' Browser Test'
                    },
                    {
                        id:3,
                        name: ' Mobile Test'
                    }
                ]}
            />
            <Table headerItems={tableHeaders} name='browserTest'>
                <tr>
                    <td>1</td>
                    <td className='table-row-max-width'>
                        <div className='name'>
                            <CrossCircle className='red' />
                            <p>
                                <span>
                                    test 1{' '}<small>(16h ago)</small>
                                </span>
                                <small>www.digikala.com </small>
                            </p>
                        </div>
                        <div className='tags'>
                            <span className='table-row-pill ghost'>adak</span>
                            <span className='table-row-pill ghost'>adak</span>
                            <span className='table-row-pill ghost'>adak</span>
                            <span className='table-row-pill ghost'>adak</span>
                        </div>
                    </td>
                    <td>
                        <span className='test-types'>
                            <Website />
                        </span>
                    </td>

                    <td className='table-row-max-width'>
                        <p className='location'>
                            <span className='table-row-pill ghost'> Tehran</span>
                            <span className='table-row-pill ghost'> Shiraz </span>
                            <span className='table-row-pill ghost'> Esfahan </span>
                        </p>
                    </td>

                    <td>0%</td>
                    <td>0%</td>
                    <td>2.71s</td>
                    <td>3.57s</td>
                    <td>10min</td>
                    <td>
                        <MenuTable/>

                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td className='table-row-max-width'>
                        <div className='name'>
                            <CheckCircle className='green' />
                            <p>
                                <span>
                                    test 2{' '}<small>(16h ago)</small>
                                </span>
                                <small>www.digikala.com </small>
                            </p>
                        </div>
                        <div className='tags'>
                            <span className='table-row-pill ghost'>adak</span>
                            <span className='table-row-pill ghost'>adak</span>
                        </div>
                    </td>
                    <td>
                        <span className='test-types'>
                            <Api />
                        </span>
                    </td>
                    <td className='table-row-max-width'>
                        <p className='location'>
                            <span className='table-row-pill ghost'> Tehran</span>
                            <span className='table-row-pill ghost'> shiraz </span>
                        </p>
                    </td>

                    <td>100%</td>
                    <td>100%</td>
                    <td>2.71s</td>
                    <td>3.57s</td>
                    <td>10min</td>
                    <td>
                        <MenuTable/>
                    </td>
                </tr>
            </Table>
        </TestListContainer>
    );
};

export default TestList;
