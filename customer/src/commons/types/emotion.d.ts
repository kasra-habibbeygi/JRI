import '@emotion/react';
import { designToken } from 'commons/configs';

declare module '@emotion/react' {
    interface Theme extends ReturnType<typeof designToken> {}
}
