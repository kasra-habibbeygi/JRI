import { FC, ReactNode } from 'react';

// Assets
import { TableContainer } from './table.style';

// Types
interface ITable {
    children: ReactNode;
    headerItems: string[];
    name: string;
}

const Table: FC<ITable> = ({ children, headerItems, name }) => {
    return (
        <TableContainer className='container'>
            <table>
                <thead>
                    <tr>
                        {headerItems.map((item, index) => (
                            <th key={`${name}-table-${index}`}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </TableContainer>
    );
};

export default Table;
