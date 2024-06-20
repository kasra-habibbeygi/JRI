/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from 'react';
import prettier from 'prettier';
import babelPlugin from 'prettier/plugins/babel';
import estreePlugin from 'prettier/plugins/estree';

// Assets
import { CodeEditorContainer } from '../css';
import { Archive, FullPage, Media, Minimize, Play, Prettier } from '../images';

// Editor
import Editor, { OnMount } from '@monaco-editor/react';

// Components
import { Button } from 'commons/components';

interface CodeEditorProps {
    editorRef: any;
    FullScreenHandle: {
        active: boolean;
        enter: () => Promise<void>;
        exit: () => Promise<void>;
    };
}

const CodeEditor: FC<CodeEditorProps> = ({ editorRef, FullScreenHandle }) => {
    const [value, setValue] = useState<string>('');

    const onMount: OnMount = (editor, monaco) => {
        editorRef.current = editor;
        editor.focus();
        editor.addAction({
            id: 'format-code',
            label: 'Format Code with Prettier',
            keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyF],
            contextMenuGroupId: 'navigation',
            contextMenuOrder: 1.5,
            run: formatCode
        });
    };
    const formatCode = async () => {
        if (!editorRef.current) {
            console.error('Editor is not initialized.');
            return;
        }
        const currentCode = await editorRef.current.getValue();
        if (!currentCode) {
            console.error('No code to format.');
            return;
        }
        try {
            const formatted = await prettier.format(currentCode, {
                parser: 'babel',
                plugins: [babelPlugin, estreePlugin],
                semi: true,
                singleQuote: true,
                bracketSpacing: true,
                trailingComma: 'all',
                tabWidth: 4,
                useTabs: false,
                printWidth: 80,
                arrowParens: 'avoid'
            });
            editorRef.current.setValue(formatted);
        } catch (error) {
            console.error('Error formatting:', error);
        }
    };

    return (
        <CodeEditorContainer>
            <Editor
                height='75vh'
                theme='vs-dark'
                language='javascript'
                defaultValue="console.log('Hello, world!');"
                onMount={onMount}
                value={value}
                onChange={(value: any) => setValue(value)}
                options={{
                    minimap: {
                        enabled: false
                    }
                }}
            />
            <div className='action-bar'>
                <Button buttonType='ghost' onClick={formatCode} className='actions'>
                    <Prettier />
                </Button>

                {!FullScreenHandle.active ? (
                    <Button buttonType='ghost' onClick={FullScreenHandle.enter} className='actions'>
                        <FullPage />
                    </Button>
                ) : (
                    <Button buttonType='ghost' onClick={FullScreenHandle.exit} className='actions'>
                        <Minimize />
                    </Button>
                )}

                <Button buttonType='ghost' onClick={formatCode} className='actions'>
                    <Play />
                </Button>
                <Button buttonType='ghost' onClick={formatCode} className='actions'>
                    <Media />
                </Button>
                <Button buttonType='ghost' onClick={formatCode} className='actions'>
                    <Archive />
                </Button>
            </div>
        </CodeEditorContainer>
    );
};

export default CodeEditor;
