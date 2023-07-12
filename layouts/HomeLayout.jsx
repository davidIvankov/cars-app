import NavBtns from '@/common/NavBtns'
import Navbar from '../common/Navbar'
import BackgroundImageLayout from './BackgroundImageLayout'
export default function HomeLayout({ children }){
    return (
        <>
            <Navbar></Navbar>
            <BackgroundImageLayout></BackgroundImageLayout>
            <main>
                <NavBtns></NavBtns>
                {children}
            </main>
            <footer>sexanje</footer>
        </>
    )

}