/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

// Assets
import { OutputContainer } from '../css';

// Components
import { Button } from 'commons/components';

interface OutputProps {
    editorRef: any;
}

interface RunResult {
    run: { output: string };
    stderr?: string;
}

const Output: FC<OutputProps> = ({ editorRef }) => {
    const [output, setOutput] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const API = axios.create({
        baseURL: 'https://emkc.org/api/v2/piston'
    });

    const executeCode = async (language: string, sourceCode: string): Promise<RunResult> => {
        const response = await API.post('/execute', {
            language: language,
            version: '18.15.0',
            files: [{ content: sourceCode }]
        });
        return response.data;
    };

    const runCode = async () => {
        const sourceCode = editorRef.current?.getValue();
        if (sourceCode) {
            try {
                setIsLoading(true);
                const result = await executeCode('javascript', sourceCode);
                setOutput(result.run.output.split('\n'));
                setIsError(!!result.stderr);
            } catch (error: any) {
                console.error(error);
                toast.error('An error occurred: ' + (error.message || 'Unable to run code'), {
                    duration: 6000
                });
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <OutputContainer>
            <div className='contents output-container'>
                <header>
                    <h3>output</h3>
                    <Button loading={isLoading} onClick={runCode}>
                        Run Test
                    </Button>
                </header>
                <div className='output' style={{ color: isError ? 'red' : undefined, borderColor: isError ? 'red' : '#333' }}>
                    {output.length > 0 ? output.map((line, i) => <p key={i}>{line}</p>) : <p>Click "Run Code" to see the output here.</p>}
                </div>
            </div>
        </OutputContainer>
    );
};

export default Output;
