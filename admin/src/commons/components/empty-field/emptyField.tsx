// Assets
import { EmptyFieldContainer } from './emptyField.style';
import { EmptyField as EmptyFieldIcon } from 'assets/icons';

const EmptyField = () => {
    return (
        <EmptyFieldContainer>
            <EmptyFieldIcon />
            <p>Data Not Found!</p>
        </EmptyFieldContainer>
    );
};

export default EmptyField;
