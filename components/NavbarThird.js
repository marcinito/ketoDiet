import Link from 'next/link'
import styles from '../styles/NavbarThird.module.css'

const NavbarThird = () => {
    return ( <>
     <div className={styles.Menu}>
<div className={styles.subMenu}><Link href="/"><a>Home</a></Link></div>
<div className={styles.subMenu}><Link href="/blog"><a>Blog</a></Link></div>
<div className={styles.subMenu}><Link href="/"><a>Interesing facts</a></Link></div>

     </div>

     <style>{`
     
     `}</style>
     </>
     );
}
 
export default NavbarThird;