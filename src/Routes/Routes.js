import { createBrowserRouter } from 'react-router-dom';

// Consultancy Layouts
import ConsultancyLayout from '../Layouts/ConsultancyLayout';
import AboutPage from '../Pages/AboutPage';
import ConsultancyHome from '../Pages/ConsultancyHome';
import FAQ from '../Pages/FAQ';
import Services01 from '../Pages/Services/Service01';
import ServiceDetails from '../Pages/Services/ServiceDetails';
import TeamPage from '../Pages/TeamPage';

// Home Layouts02

// Shared Layouts

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <ConsultancyLayout/>,
        children: [
            {
                path: '/',
                element: <ConsultancyHome/>
            },
            {
                path: '/consultancy',
                element: <ConsultancyHome/>
            },
            {
                path: '/service',
                element: <Services01/>
            },
            {
                path: '/service-2',
                element: <Services01/>
            },
            {
                path: '/service-details',
                element: <ServiceDetails/>
            },
            {
                path: '/about',
                element: <AboutPage/>
            },
            {
                path: '/team',
                element: <TeamPage/>
            },
            {
                path: '/faq',
                element: <FAQ/>
            },
            // {
            //     path: '/blog-1',
            //     element: <Blog01/>
            // },
            // {
            //     path: '/blog-2',
            //     element: <Blog02/>
            // },
            // {
            //     path: '/blog-details',
            //     element: <BlogDetails/>
            // },
            // {
            //     path: '/contact',
            //     element: <ContactPage/>
            // },
            // {
            //     path: '*',
            //     element: <ErrorPage/>
            // }
        ]
    },
    // {
    //     path: "/",
    //     element: <HomeLayout02/>,
    //     children: [
    //         {
    //             path: '/home-2',
    //             element: <Home02/>
    //         },
    //         {
    //             path: '*',
    //             element: <ErrorPage/>
    //         }
    //     ]
    // },
])

