
import { useEffect, useState } from 'react'


const useMediaQuery = (q) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(q.replace('@media', '').trim())

        if (media.matches !== matches) {
            setMatches(media.matches)
        }

        const handler = () => setMatches(media.matches)
        window.addEventListener('resize', handler)
        return () => window.removeEventListener('resize', handler)
    }, [matches, q])

    return matches
}

export default useMediaQuery