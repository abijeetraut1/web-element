import { useEffect } from 'react';
import Navbar from '../../Components/Navigationbar/Navbar';
import Hero from './HeroSection/Hero';
import Body from './BodySection/Body';
import { useSelector } from 'react-redux';
import Footer from './BodySection/components/Footer/Footer';

export default function Home() {
    const mobileMenuOpen = useSelector(state => state.pageControls.isMobileSlideBarOpen);
    useEffect(() => {
        document.title = "Home";
      })
    return (
        <section
            className={`bg-slate-300 ${mobileMenuOpen ? "overflow-hidden h-screen w-auto" : "overflow-x-hidden"}`}
        >
            <div className='m-2'>
                <Navbar />
            </div>

            <div>
                <Hero />
            </div>
            
            {/* <div>
                <Body />
            </div>
            <div>
                <Footer />
            </div> */}
        </section>
    )
}
