import { createBrowserRouter } from 'react-router-dom';

// Consultancy Layouts
import ConsultancyLayout from '../Layouts/ConsultancyLayout';
import AboutPage from '../Pages/AboutPage';
import BlogDetailPage from '../Pages/Blogs/BlogDetailPage';
import BlogPage01 from '../Pages/Blogs/BlogPage01';
import BlogPage02 from '../Pages/Blogs/BlogPage02';
import BlogPage03 from '../Pages/Blogs/BlogPage03';
import ContactPage from '../Pages/ContactPage';
import FAQ from '../Pages/FAQ';
import ConsultancyHome from '../Pages/HomePages/ConsultancyHome';
import Services01 from '../Pages/Services/Service01';
import ServiceDetails from '../Pages/Services/ServiceDetails';
import TeamPage from '../Pages/TeamPage';
import BusinessHome from '../containers/Business/BusinessHome';

// Business Layouts

// Shared Layouts

export const routes = createBrowserRouter([
    {
        path: "/consultancy",
        element: <ConsultancyLayout/>,
        children: [
            // {
            //     path: '/',
            //     element: <ConsultancyHome/>
            // },
            {
                path: '/consultancy',
                element: <ConsultancyHome/>
            },
            {
                path: '/consultancy/service',
                element: <Services01/>
            },
            {
                path: '/consultancy/service-2',
                element: <Services01/>
            },
            {
                path: '/consultancy/service-details',
                element: <ServiceDetails/>
            },
            {
                path: '/consultancy/about',
                element: <AboutPage/>
            },
            {
                path: '/consultancy/team',
                element: <TeamPage/>
            },
            {
                path: '/consultancy/faq',
                element: <FAQ/>
            },
            {
                path: '/consultancy/blog',
                element: <BlogPage01/>
            },
            {
                path: '/consultancy/blog-2',
                element: <BlogPage02/>
            },
            {
                path: '/consultancy/blog-3',
                element: <BlogPage03/>
            },
            {
                path: '/consultancy/blog-details',
                element: <BlogDetailPage/>
            },
            {
                path: '/consultancy/contact',
                element: <ContactPage/>
            },
            // {
            //     path: '*',
            //     element: <ErrorPage/>
            // }
            {
                path: '/consultancy/business',
                element: <BusinessHome/>
            },
        ]
    },
    // {
    //     path: "/business",
    //     element: <BusinessLayout/>,
    //     children: [
    //         {
    //             path: '/business',
    //             element: <BusinessHome/>
    //         },
    //         // {
    //         //     path: '*',
    //         //     element: <ErrorPage/>
    //         // }
    //     ]
    // },
])

