/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

// Components
import { Button } from 'commons/components';
import Output from './output';
import CodeEditor from './codeEditor';

// Assets
import { EditorContainer, NextStepContainer } from '../css';
import { useMediaQuery } from '@mui/material';

const Editor = ({ setStep }: { setStep: (state: number) => void }) => {
    const editorRef = useRef<any>(null);
    const fullScreenHandle = useFullScreenHandle();
    const matches = useMediaQuery('(max-width:800px)');
    return (
        <FullScreen handle={fullScreenHandle}>
            <EditorContainer matches={matches}>
                <PanelGroup direction={!matches ? 'horizontal' : 'vertical'}>
                    <Panel defaultSize={60} minSize={20} maxSize={75}>
                        <CodeEditor editorRef={editorRef} FullScreenHandle={fullScreenHandle} />
                    </Panel>
                    <PanelResizeHandle className='splitter' />
                    <Panel defaultSize={40} minSize={20} maxSize={75}>
                        <Output editorRef={editorRef} />
                    </Panel>
                </PanelGroup>
            </EditorContainer>
            <NextStepContainer>
                <Button onClick={() => setStep(2)}>Next</Button>
            </NextStepContainer>
        </FullScreen>
    );
};

export default Editor;
