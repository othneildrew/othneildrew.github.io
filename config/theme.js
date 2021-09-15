
import { createTheme } from '@material-ui/core'


const themeOptions = {
    palette: {
        common: {
            black: '#000000',
            white: '#ffffff',
        },
        primary: {
            main: '#B65296',
        },
        secondary: {
            main: '#6FCEDC',
        },
        background: '#140033',
    },
    typography: {
        fontFamily: '"Roboto", "Arial", sans-serif',
        h1: {
            fontSize: '4.574em',
        },
        h2: {
            fontFamily: '"Black Han Sans", sans-serif',
            fontSize: '3.428em',
        },
        h3: {
            fontFamily: '"Black Han Sans", sans-serif',
            fontSize: '2.57em',
        },
        // h4: {
        //     fontSize: '',
        // },
        // h5: {
        //     fontSize: '',
        // },
        // h6: {
        //     fontSize: '',
        // },
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none',
                borderRadius: 28,
                // color: '#ffffff',
            },
            outlined: {
                // label: {
                //     label: '#ffffff',
                // }
                // backgroundColor: 'green',
                // color: 'red',
            },
            // label: {
            //     outlined: {
                    // color: 'rgba(255, 255, 255, 0.7)',
                // }
            //     color: '#000000',
            // },
            // sizeLarge: {
            //     paddingRight: 28,
            //     paddingLeft: 28,
            // },
            // text: {
            //     color: '#ffffff',
            //     background: 'red',
            // },
            // sizeLarge: {
                // height: 50,
            // },
            // outlinedSizeLarge: {
                // paddingRight: 30,
                // paddingLeft: 30,
                // height: 56,
            // },
            containedSizeLarge: {
                paddingRight: 36,
                paddingLeft: 36,
            //     height: 56,
            },
        },
        // MuiOutlinedInput: {
        //     root: {
        //         borderRadius: 8,
        //     },
        //     // notchedOutline: {
        //     //     borderWidth: 2,
        //     // },
        // },
        // MuiTooltip: {
        //     tooltip: {
        //         borderRadius: 2,
        //         backgroundColor: 'rgba(0, 0, 0, 0.95)',
        //     },
        //     arrow: {
        //         color: 'rgba(0, 0, 0, 0.95)',
        //     },
        // },
        // MuiSelect: {
        //     root: {
        //         backgroundColor: '#ffffff',
        //     }
        // },
    },
    props: {
        MuiLink: {
            color: 'inherit',
        },
        // MuiInputLabel: {
            // shrink: true,
        // },
        // MuiTextField: {
        //     variant: 'outlined',
        //     size: 'small',
        //     InputLabelProps: {
        //         shrink: true,
        //     },
        // },
        // MuiOutlinedInput: {
        //     size: 'small',
        //     InputLabelProps: {
        //         shrink: true,
        //     },
        // }
        MuiButtonBase: {
            disableRipple: true,
            disableTouchRipple: true,
        },
        MuiButton: {
            variant: 'outlined',
            color: 'primary',
            size: 'large',
        },
        // MuiCheckbox: {
        //     color: 'primary',
        //     disableRipple: true,
        //     disableTouchRipple: true,
        //     disableFocusRipple: true,
        // },
        // MuiSelect: {
        // },
        // MuiNativeSelect: {

        // },
        // MuiTooltip: {
        //     placement: 'top',
        //     arrow: true,
        // },
        // MuiTextField:
    }
}

export default createTheme({
    ...themeOptions,
    palette: {
        ...themeOptions.palette,
        type: 'dark',
    },
})