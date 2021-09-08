
const breakpointKeys = ['xs', 'sm', 'md', 'lg', 'xl']
const breakpointValues = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
}

const throwErrIfNotValidBreakPoint = (bp) => {
    if (! breakpointKeys.includes(bp)) {
        throw new Error(`${bp} is not a valid breakpoint. Valid breakpoints: ${breakpointKeys.join(' | ')}`)
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
        up: (bp) => {
            throwErrIfNotValidBreakPoint(bp)
            return `@media (min-width: ${breakpointValues[bp]}px)`
        },
        down: (bp) => {
            throwErrIfNotValidBreakPoint(bp)
            return `@media (max-width: ${breakpointValues[bp]}px)`
        },
        between: (bp1, bp2) => {
            throwErrIfNotValidBreakPoint(bp1)
            throwErrIfNotValidBreakPoint(bp2)
            return `@media (min-width: ${breakpointValues[bp1]}px and max-width ${breakpointValues[bp2]}px)`
        },
        only: (bp) => {
            throwErrIfNotValidBreakPoint(bp)
            return `@media (width: ${breakpointValues[bp]}px)`
        },
        width: (bp) => {
            throwErrIfNotValidBreakPoint(bp)
            return breakpointValues[bp]
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