import Link from "next/link";

import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";

export default function NavBtns(){
    const router = useRouter()

  return(
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link 
            className={
                `${styles.link} 
                ${styles.link1} 
                ${router.pathname.includes('manufacturers')?'':styles.activeLink}`
            } 
            href={'/1'}
        ><p>Models</p></Link>
        <Link 
            className={
                `${styles.link} 
                ${styles.link2} 
                ${router.pathname.includes('manufacturers')?styles.activeLink:''}`
            } 
            href={`manufacturers/1`} 
        ><p>Manufacturers</p></Link>
      </nav>
    </div>
  )
}