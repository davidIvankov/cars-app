import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = function(){
    return(
        <header className={styles.header}>
        <div className={styles.headerContent}>
            <img src="https://static.tcimg.net/pac/1/1f5952f26b0a036ea208fd65012dce93c836aba4.png"></img>
            <nav className={styles.nav}>
                <Link className={styles.Link} href={`manufacturers/1`}>Manufacturers</Link>
                <Link className={styles.Link} href={'/1'}>Models</Link>
            </nav>
        </div>
        </header>
    )
}

export default Navbar