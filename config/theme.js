
const breakpointKeys = ['xs', 'sm', 'md', 'lg', 'xl']
const breakpointValues = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
}

const throwErrIfNotValidBreakPoint = (breakpoint) => {
    if (! breakpointKeys.includes(breakpoint)) {
        throw new Error(`${breakpoint} is not a valid breakpoint. Valid breakpoints: ${breakpointKeys.join(' | ')}`)
    }
}

export default {
    type: 'dark',
    palette: {
        common: {
            black: '#000000',
            white: '#ffffff',
            background: '#140033',
            text: 'rgba(255, 255, 255, 0.78)',
        },
        primary: '#B65296',
        secondary: '#6FCEDC',
    },
    breakpoints: {
        keys: breakpointKeys,
        values: breakpointValues,
        up: (breakpoint) => {
            throwErrIfNotValidBreakPoint(breakpoint)
            return `@media (min-width: ${breakpointValues[breakpoint]}px)`
        },
        down: (breakpoint) => {
            throwErrIfNotValidBreakPoint(breakpoint)
            return `@media (max-width: ${breakpointValues[breakpoint]}px)`
        },
        between: (breakpoint1, breakpoint2) => {
            throwErrIfNotValidBreakPoint(breakpoint1)
            throwErrIfNotValidBreakPoint(breakpoint2)
            return `@media (min-width: ${breakpointValues[breakpoint1]}px and max-width ${breakpointValues[breakpoint2]}px)`
        },
        only: (breakpoint) => {
            throwErrIfNotValidBreakPoint(breakpoint)
            return `@media (width: ${breakpointValues[breakpoint]}px)`
        },
        width: (breakpoint) => {
            throwErrIfNotValidBreakPoint(breakpoint)
            return breakpointValues[breakpoint]
        },
        get: () => breakpointValues
    },
    spacing: (...args) => {
        if (args.length < 1) {
            throw new Error('theme.spacing expects at least 1 argument, 0 given.')
        }

        let multiplier = 8
        let str = ''

        for (let i = 0; i < args.length; ++i) {
            let type = typeof(args[i])

            if (! ['number', 'string'].includes(type)) {
                throw new Error(`theme.spacing expects a number.${type} given.`)
            }

            str += ` ${multiplier * args[i]}px`
        }

        return str.trim()
    }
}