
import Link from 'next/link'

const Footer = () => {
    return (
        <footer
            style={{
                padding: '40px 0',
                // border: '1px solid green',
                backgroundColor: '#2648FE',
                textAlign: 'center',
            }}
        >
            <p style={{marginBottom:10,fontSize:'0.875em',opacity:0.7}}>This site is dedicated to my sister Sharena who passed away in 2005. Her favorite color was purple.</p>
            <p style={{fontSize:'0.875em',opacity:0.4}}>
                Designed & Developed by Othneil Drew. All artwork created by me.&nbsp;

                <Link href='https://github.com/othneildrew/othneildrew.github.io' passRef>
                    <a className='link underline-link'>View on Github</a>
                </Link>
            </p>

            <p style={{marginTop:20,fontSize:'0.875em',opacity:0.4}}>
                <Link href='/archive' passRef>
                    <a className='link underline-link'>Previous site versions</a>
                </Link>
            </p>
        </footer>
    )
}

export default Footer