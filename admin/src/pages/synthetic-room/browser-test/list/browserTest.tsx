'use client';

import { Link } from 'react-router-dom';

// Assets
import { BrowserTestContainer } from './css';
import { CheckCircle, CrossCircle } from 'assets/icons';

// Components
import { Filters, Header, Table } from 'commons/components';
import { MenuTable } from './components';

// Contacts
const tableHeaders = ['#', 'Name', 'Status', ' Locations', '24H', '7D', 'AVG', 'P95', '△T', 'Options'];

const BrowserTest = () => {
    return (
        <>
            <BrowserTestContainer>
                <Header
                    title='Browser Test'
                    action={
                        <Link className='add-test' to='/en/synthetic/browser-test/add'>
                            Add
                        </Link>
                    }
                />
                <Filters
                    filterItems={['tags', 'status', 'name']}
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
                        }
                    ]}
                    tagItem={[
                        {
                            id: 0,
                            name: 'typeItems'
                        }
                    ]}
                />
                <Table headerItems={tableHeaders} name='browserTest'>
                    <tr>
                        <td>1</td>
                        <td>
                            <Link to='/en/synthetic/browser-test/fdasd'>
                                <p>
                                    test 1<span>(16h ago)</span>
                                </p>
                                <small>www.digikala.com </small>
                                <div className='tags'>
                                    <span className='table-row-pill ghost'>adak</span>
                                    <span className='table-row-pill ghost'>adak</span>
                                    <span className='table-row-pill ghost'>adak</span>
                                    <span className='table-row-pill ghost'>adak</span>
                                </div>
                            </Link>
                        </td>
                        <td>
                            <CrossCircle className='red' />
                        </td>
                        <td>Tehran - shiraz - esfehan</td>

                        <td>0%</td>
                        <td>0%</td>
                        <td>2.71s</td>
                        <td>3.57s</td>
                        <td>10min</td>
                        <td>
                            <MenuTable />
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <Link to='/en/synthetic/browser-test/fdasd'>
                                <p>
                                    test 2<span>(2d ago)</span>
                                </p>
                                <small>www.digikala.com </small>
                                <div className='tags'>
                                    <span className='table-row-pill ghost'>adak</span>
                                    <span className='table-row-pill ghost'>adak</span>
                                </div>
                            </Link>
                        </td>
                        <td>
                            <CheckCircle className='green' />
                        </td>
                        <td className='table-row-max-width'>Tehran - shiraz</td>

                        <td>100%</td>
                        <td>100%</td>
                        <td>2.71s</td>
                        <td>3.57s</td>
                        <td>10min</td>
                        <td>
                            <MenuTable />
                        </td>
                    </tr>
                </Table>
            </BrowserTestContainer>
        </>
    );
};

export default BrowserTest;
