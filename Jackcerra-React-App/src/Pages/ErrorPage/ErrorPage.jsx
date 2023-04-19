import React from 'react';
import '../../assets/css/style.css';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <main className="page-wrapper">
            <section className="error-page">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-10 offset-lg-1">
                            <div className="error-content text-center">
                                <div className="heading">404</div>
                                <h1>Page Not Found</h1>
                                <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>

                                <div className="button-box">
                                    <a href="/" className="btn btn_group">
                                        <span className="btn-wrap">
                                            <span className="text-one">Back To Home Page</span>
                                            <span className="text-two">Back To Home Page</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
};

export default ErrorPage;