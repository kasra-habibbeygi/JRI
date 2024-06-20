/* eslint-disable prettier/prettier */
export default (mode: 'dark' | 'light', direction: 'rtl' | 'ltr') => ({
    mode,
    direction,
    shared : {
        secondary : '#608aee',
        success : '#089981',
        danger : '#F23645',
        ghost : '#F7F7F7',
        warning :'#f1c304'  
    },
    ...(mode === 'dark'
        ? {
            colors: {
                background : {
                    danger : '#2D1E24',
                    success : '#152B28',
                    warning :'#3b3416',
                    accent : '#222630',
                    primary : '#141416',
                    secondary : '#1E1E1E',
                    tertiary : '#333333',
                    inputs : {
                        primary : '#222630'
                    }
                },
                text: {
                    primary: '#fff',
                    secondary: '#9B9C9F',
                    danger : '#F6465D',
                    success : '#33b478', 
                    warning :'#f1c304',           
                    accent : '#608aee',
                    tertiary:'#111318',
                    darkWhite:'#e7e8e9'                
                },
                border: {
                    primary: '#343434'
                },

                divider:{
                    primary: '#343434'
                }
            }
        }
        : {
            colors: {
                background : {
                    danger : '#FAE8EA',
                    success : '#E2F5EE',
                    warning :'#fffae7',
                    accent : '#608aee',
                    primary : '#F7F7F7',
                    secondary : '#fff',
                    tertiary : '#f1f1f1',
                    inputs : {
                        primary : '#222630'
                    }
                },
                text: {
                    primary: '#111318',
                    secondary: '#777E90',
                    danger : '#F6465D',
                    success : '#089981', 
                    warning :'#f1c304',             
                    accent : '#3772FF',
                    tertiary:'#fff',
                    darkWhite:'#efefef'                

                    
                },
                border: {
                    primary: '#e6e7e8'
                },

                divider:{
                    primary: '#E5E5E5'
                }
                
            }
        })
});
