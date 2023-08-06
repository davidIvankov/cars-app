import NavBtns from '@/common/NavBtns'
import Navbar from '../common/Navbar'
import BackgroundImageLayout from './BackgroundImageLayout';
import mediaQueryStore from '@/stores/mediaQueryStore';
export default function HomeLayout({ children }){
    return (
        <>
            <Navbar store={mediaQueryStore}></Navbar>
            <BackgroundImageLayout store={mediaQueryStore}></BackgroundImageLayout>
            <main>
                <NavBtns></NavBtns>
                {children}
            </main>
        </>
    )

}