import { createBrowserRouter } from 'react-router-dom';

// Consultancy Layouts
import ConsultancyLayout from '../Layouts/ConsultancyLayout';
import AboutPage from '../Pages/AboutPage';
import ConsultancyHome from '../Pages/ConsultancyHome';
import FAQ from '../Pages/FAQ';
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
            // {
            //     path: '/project',
            //     element: <Projects01/>
            // },
            // {
            //     path: '/project-2',
            //     element: <Projects02/>
            // },
            // {
            //     path: '/project-details',
            //     element: <ProjectDetails/>
            // },
            // {
            //     path: '/services',
            //     element: <Services01/>
            // },
            // {
            //     path: '/services-2',
            //     element: <Services02/>
            // },
            // {
            //     path: '/service-details',
            //     element: <ServiceDetails/>
            // },
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

