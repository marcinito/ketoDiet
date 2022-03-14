import styles from '../styles/Main.module.css'
import NavbarTop from './Navbar';
import NavbarSecond from './NavbarSecond';
import NavbarThird from './NavbarThird';


const Layout = ({children}) => {
    return ( <div className={styles.container}>
<NavbarTop/>
<NavbarSecond/>
<NavbarThird/>
<div className="contentPage">
    {children}
 
</div>
    </div> );
}
 
export default Layout;