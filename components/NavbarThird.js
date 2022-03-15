import Link from 'next/link'
import styles from '../styles/NavbarThird.module.css'

const NavbarThird = () => {
    return ( <>
     <div className={styles.Menu}>
<div className={styles.subMenu}><Link href="/"><a>Strona Głowna</a></Link></div>
<div className={styles.subMenu}><Link href="/blog"><a>Przepisy</a></Link></div>
<div className={styles.subMenu}><Link href="/interesing-facts"><a>Artykuły</a></Link></div>
<div className={styles.subMenu}><Link href="/dodaj"><a>Dodaj</a></Link></div>

     </div>

     <style>{`
     
     `}</style>
     </>
     );
}
 
export default NavbarThird;