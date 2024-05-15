interface IReduxState {
    ThemeProvider: {
        theme: 'light' | 'dark';
        direction: 'rtl' | 'ltr';
    };
    App: {
        sideBarStatus: boolean;
        contentLoader: boolean;
    };
}

export type { IReduxState };
