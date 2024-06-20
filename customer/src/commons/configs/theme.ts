export default (mode: 'dark' | 'light', direction: 'rtl' | 'ltr') => ({
    mode,
    direction,
    colors: {
        background: {
            accent1: '#052DFF',
            accent2: '#8A63D2',
            primary: '#fff',
            secondary: '#F0F2F5'
        },
        text: {
            primary: '#0F0F0F',
            accent1: '#052DFF',
            accent2: '#8A63D2'
        },
        border: {
            primary: '#343434'
        }
    }
});
