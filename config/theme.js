
import { createTheme } from '@material-ui/core'

//
// const breakpointKeys = ['xs', 'sm', 'md', 'lg', 'xl']
// const breakpointValues = {
//     xs: 0,
//     sm: 600,
//     md: 960,
//     lg: 1280,
//     xl: 1920,
// }

// const throwErrIfNotValidBreakPoint = (breakpoint) => {
//     if (! breakpointKeys.includes(breakpoint)) {
//         throw new Error(`${breakpoint} is not a valid breakpoint. Valid breakpoints: ${breakpointKeys.join(' | ')}`)
//     }
// }

const themeOptions = {
    palette: {
        common: {
            black: '#000000',
            white: '#ffffff',
            // background: '#140033',
            // text: 'rgba(255, 255, 255, 0.78)',
        },
        primary: {
            main: '#B65296',
        },
        secondary: {
            main: '#6FCEDC',
        },
        background: '#140033',
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none',
                borderRadius: 8,
            },
            text: {
                color: 'white',
            },
            sizeLarge: {
                // height: 50,
            },
            // outlinedSizeLarge: {
            //     height: 56,
            // },
            // containedSizeLarge: {
            //     height: 56,
            // },
        },
        MuiOutlinedInput: {
            root: {
                borderRadius: 8,
            },
            // notchedOutline: {
            //     borderWidth: 2,
            // },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 2,
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
            },
            arrow: {
                color: 'rgba(0, 0, 0, 0.95)',
            },
        },
        MuiSelect: {
            root: {
                backgroundColor: '#ffffff',
            }
        },
    },
    props: {
        MuiInputLabel: {
            // shrink: true,
        },
        MuiTextField: {
            variant: 'outlined',
            size: 'small',
            InputLabelProps: {
                shrink: true,
            },
        },
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
            variant: 'contained',
            color: 'primary',
        },
        MuiCheckbox: {
            color: 'primary',
            disableRipple: true,
            disableTouchRipple: true,
            disableFocusRipple: true,
        },
        MuiSelect: {
        },
        // MuiNativeSelect: {

        // },
        MuiTooltip: {
            placement: 'top',
            arrow: true,
        },
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