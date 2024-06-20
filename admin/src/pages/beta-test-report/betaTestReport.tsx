// Assets
import { useEffect, useState } from 'react';
import { BetaTestReportContainer } from './betaTestReport.style';

// Components
import { Header, Table } from 'commons/components';
import axios from 'axios';
import { Tools } from 'commons/utils';

// Constants
const tableHeaderItem = ['#', 'Title', 'Funding Requirements ($)', 'Team Members', 'Links to Previous Work', 'Description', 'Created At'];

// Types
interface IBetaTestList {
    approvedDateTime: string;
    briefDescription: string;
    budget: number;
    createDateTime: string;
    id: number;
    isApproved: boolean;
    linkToPreviousWork: string;
    teamMember: string;
    title: string;
}

const BetaTestReport = () => {
    const [betaTestList, setBetaTestList] = useState<IBetaTestList[] | null>(null);

    useEffect(() => {
        axios.get('https://api-jri.com/v2/Project').then(res => {
            setBetaTestList(res.data);
        });
    }, []);

    return (
        <BetaTestReportContainer>
            <Header title='Beta Test Reports' />
            {betaTestList && (
                <Table headerItems={tableHeaderItem} name='beta-test-report'>
                    {betaTestList.map((item, index) => (
                        <tr key={`beta-test-${index}`}>
                            <td>{Tools.tableRowCounter(1, index)}</td>
                            <td>{item.title}</td>
                            <td>{item.budget}</td>
                            <td>{item.teamMember}</td>
                            <td>{item.linkToPreviousWork}</td>
                            <td>{item.briefDescription}</td>
                            <td>{Tools.timeFormatter(item.createDateTime, 'dateAndHour')}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    ))}
                </Table>
            )}
        </BetaTestReportContainer>
    );
};

export default BetaTestReport;
