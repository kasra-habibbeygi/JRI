import { Dispatch, FC, ReactNode, SetStateAction } from 'react';

// Assets
import { StepperContainer } from './stepper.style';

// Types
interface IStepper {
    steps: {
        title: string;
        subTitle: string;
        content: ReactNode;
    }[];
    setState: Dispatch<SetStateAction<number>>;
    state: number;
}

const Stepper: FC<IStepper> = ({ steps, setState, state }) => {
    return (
        <StepperContainer>
            {steps.map((item, index) => {
                return (
                    <div className={`step ${index === state ? 'active' : ''} ${index < state ? 'done' : ''}`}>
                        <span className='step-number' onClick={() => setState(index)}>
                            {index + 1}
                        </span>
                        <div className={`step-description step-description${index}`}>
                            <b onClick={() => setState(index)}>{item.title}</b>
                            <small>{item.subTitle}</small>
                            <div className='content-field'>{index === state && item.content}</div>
                        </div>
                        {steps.length !== 1 && steps.length - 1 !== index && (
                            <span className={`separator ${index < state ? 'done' : ''}`}></span>
                        )}
                    </div>
                );
            })}
        </StepperContainer>
    );
};

export default Stepper;
