import React from 'react';
import '../styling/Add-on-news.css';


export const addOnNews=()=>{
    return(
        <div className="news-container">
            <ul className="news-content-container">
                <li className="news-content">
                    <h4>FREE SHIPPING</h4>
                    <p>It is a long established fact that a reader will be distracted
                     by the readablecontent of a page when looking at its layout.
                        The point of using.</p>
                </li>
                <li className="news-content">
                    <h4>TESTIMONIALS</h4>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                     It has roots in a piece of classical Latin 45 BC, making it 2000 at top[....] 
                     -John Doe-</p>
                </li>
                <li className="blog-news">
                    <h4>BLOG NEWS</h4>
                    <ul className="blog">
                        <li className="blog-1">
                            <span className="date"><b>Apr 01</b></span>
                            <span>
                                <h4 className="blog-heading">Nice & clean.The best for you blog!</h4>
                                <p className="blog-content">Contrary to popular belief, Lorem Ipsum is not simply.</p>
                            </span>
                        </li>
                        <li className="blog-2">
                            <span className="date"><b>Apr 01</b></span>
                            <span>
                                <h4 className="blog-heading">What an Ecommerce theme!</h4>
                                <p className="blog-content">Contrary to popular belief, Lorem Ipsum is not simply.</p>
                            </span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

