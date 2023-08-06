import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import { observer } from 'mobx-react'

const Navbar = observer(({store})=>{
    return(
        <header className={`${store.isActive?styles.activeHeared:styles.header}, ${store.shouldShowInfo?styles.headerInfoOpen:styles.header}`}>
        <div className={store.isActive?styles.activeContent:styles.headerContent}>
            {store.isActive?'Menu':<img className={styles.logo} src="https://static.tcimg.net/pac/1/1f5952f26b0a036ea208fd65012dce93c836aba4.png"></img>}
            <button className={store.isActive?styles.activeInfoBtn:styles.infoBtn} onClick={store.setShowInfo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z"/>
                </svg>
            </button>
            <button className={styles.hamburger} onClick={store.setActive}>
                {store.isActive?'Close':<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M4 18L20 18" stroke="#f4f5f6" stroke-width="2" stroke-linecap="round"></path>
                        <path d="M4 12L20 12" stroke="#f4f5f6" stroke-width="2" stroke-linecap="round"></path>
                        <path d="M4 6L20 6" stroke="#f4f5f6" stroke-width="2" stroke-linecap="round"></path>
                    </g>
                </svg>}
            </button>
            <nav className={store.isActive?styles.active:styles.nav}>
                <Link className={styles.Link} onClick={store.isActive?store.setActive:''} href={`/manufacturers/1`}>Manufacturers</Link>
                {store.isActive?<hr style={{width: '105vw'}}></hr>:''}
                <Link className={styles.Link} onClick={store.isActive?store.setActive:''} href={'/1'}>Models</Link>
                {store.isActive?<hr style={{width: '105vw'}}></hr>:''}
            </nav>
        </div>
        </header>
    )
})

export default Navbar