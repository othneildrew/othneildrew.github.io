
import { useEffect, useState } from 'react'

const useDarkMode = () => {
    if (! process.browser) {
        return
    }

    const q = '(prefers-color-scheme: dark)'
    const [isDarkMode, setIsDarkMode] = useState(() => {
        let darkMode = false

        if (window.matchMedia && window.matchMedia(q).matches) {
            darkMode = true
        }

        return darkMode
    })

    const handler = (e) => {
        if (isDarkMode !== e.matches) {
            setIsDarkMode(e.matches)
        }
    }

    useEffect(() => {
        if (window.matchMedia) {
            window.matchMedia(q).addEventListener('change', handler)
        }

        return () => {
            if (window.matchMedia) {
                window.matchMedia(q).removeEventListener('change', handler)
            }
        }
    }, [isDarkMode])

    return isDarkMode
}

export default useDarkMode