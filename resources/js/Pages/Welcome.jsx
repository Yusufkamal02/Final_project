import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Banner from '@/Components/Banner';
import About from '@/Components/About';
import PopularCourse from '@/Components/PopularCourse';
import Course from '@/Components/Course';
import Footer from '@/Components/footer';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <div>
            <Head title="Welcome" />
            <div className="w-full">
                <Navbar 
                    user={auth.user} 
                    className="fixed w-full backdrop-blur px-8"
                />
                <Banner
                    user={auth.user}
                    className=""
                />
                <About 
                    user={auth.user}
                    className="max-w-7xl"
                />
                <PopularCourse 
                    user={auth.user}
                    className="max-w-7xl"
                />
                <Course 
                    user={auth.user}
                    className="max-w-7xl"
                />
                <Footer 
                    user={auth.user}
                    className="max-w-7xl"
                />
            </div>
        </div>  
    );
}

