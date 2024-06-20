/* eslint-disable prettier/prettier */
import { Link } from 'react-router-dom';

// Assets
import { FireWatchTableContainer } from '../css';
import { Api, DownArrow, Website } from '../images';
import { CrossCircle, MoreInfo, Schedule } from 'assets/icons';

// Components
import { Table } from 'commons/components';

// MUI
import { Accordion, AccordionDetails, AccordionSummary, Tooltip } from '@mui/material';

// Contacts
const tableHeaders = ['#', 'Name', 'Test Type', ' Started Failing', 'Last Test', ''];

const FireWatchTable = () => {
    return (
        <FireWatchTableContainer>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<DownArrow />} aria-controls='panel1-content' id='panel1-header'>
                    <div className='according-header'>
                        <div className='title'>
                            <h3>Firewatch</h3>
                            <Tooltip
                                title='Firewatch is the place where you can
                                see your failing checks in your account
                                without any distraction.'
                            >
                                <span className='more-details'>
                                    <MoreInfo />
                                </span>
                            </Tooltip>
                        </div>
                        <div className='sub-title'>
                            <CrossCircle className='red' />
                            <p className='red'>
                                You have 2 checks that started failing{' '} <span>in the last 7 day</span>
                            </p>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Table headerItems={tableHeaders} name='browserTest'>
                        <tr>
                            <td>1</td>
                            <td>
                                <div className='name'>
                                    <CrossCircle className='red' />
                                    <p>test 1</p>
                                </div>
                            </td>
                            <td>
                                <span className='test-type-icon'>
                                    <Api />
                                </span>
                            </td>
                            <td>3 days ago</td>
                            <td>15 hours ago</td>
                            <td>
                                <Link to='/en/profile'>
                                    <Schedule />
                                    <span>Run now</span>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <div className='name'>
                                    <CrossCircle className='red' />
                                    <p>test 2</p>
                                </div>
                            </td>

                            <td>
                                <span className='test-type-icon'>
                                    <Website />
                                </span>
                            </td>
                            <td>3 days ago</td>
                            <td>15 hours ago</td>
                            <td>
                                <Link to='/en/profile'>
                                    <Schedule />
                                    <span>Run now</span>
                                </Link>
                            </td>
                        </tr>
                    </Table>
                    <small>
                        You can change if tests are included in Firewatch based on when they started failing in{' '}
                        <Link to='/setting'>Setting</Link>
                    </small>
                </AccordionDetails>
            </Accordion>
        </FireWatchTableContainer>
    );
};

export default FireWatchTable;
