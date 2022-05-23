import React from 'react';
import './style.css'
const Blog = () => {
    return (
        <div className='post'>
            <div className='container'>
                <div className='blogPost'>
                    <div className="blogpost">
                        <div className='postimge'>
                            <div className='imgepost'>
                                <p>27 April</p>
                            </div>
                            <div className='textpost'>
                                <h2>BLOG POST TITLE ONE</h2>
                                <p>Posted in Category Title One by admin</p>
                            </div>
                        </div>
                        <img src='images/Blog/blog-post-1.jpg' alt='' />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consequuntur vitae quod? Consequuntur iure eius tempore eveniet debitis tempora pariatur nobis adipisci ab blanditiis ea ad impedit, provident enim possimus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, repudiandae tempore impedit consequuntur qui voluptatum nobis nulla fugit! Repellat tempore rem perspiciatis deleniti eos facilis, sapiente sequi natus quasi nesciunt.</p>
                    </div>
                    <hr className="line" />
                    <div className="blogpost">
                        <div className='postimge'>
                            <div className='imgepost'>
                                <p>27 April</p>
                            </div>
                            <div className='textpost'>
                                <h2>BLOG POST TITLE TWO</h2>
                                <p>Posted in Category Title Two by admin</p>
                            </div>
                        </div>
                        <img src='images/Blog/blog-post-2.jpg' alt='' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda labore minus eos impedit ullam ratione fuga iusto quasi, maiores ad vel explicabo illo libero. Voluptatum tenetur at repudiandae quam beatae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, repudiandae tempore impedit consequuntur qui voluptatum nobis nulla fugit! Repellat tempore rem perspiciatis deleniti eos facilis, sapiente sequi natus quasi nesciunt.</p>
                    </div>
                </div>
                <div className='CATEGORIES'>
                    <h4>CATEGORIES</h4>
                    <h5>Category Title One</h5>
                    <h5>Category Title Two</h5>
                    <h5>Category Title Three</h5>
                    <hr className="line" />
                    <h4>RECENT BLOG POSTS</h4>
                    <h5>Blog Post Title One</h5>
                    <h5>Blog Post Title Two</h5>
                    <h5>Blog Post Title Three</h5>
                    <hr className="line" />
                    <h4>ARCHIVES</h4>
                    <h5>March 2023</h5>
                    <h5>February 2023</h5>
                    <h5>January 2023</h5>
                    <h5>December 2023</h5>
                    <h5>November 2023</h5>
                    <hr className="line" />
                    <h4>FROM THE GALLERY</h4>
                    <div className="boxee">
                        <div className='container'>
                            <div className="boxe-imagess">
                                <div className='boxe-imags'>
                                    <img src='images/Blog/gallery-thumb1.jpg' />
                                </div>
                                <div className='boxe-imags'>
                                    <img src='images/Blog/gallery-thumb2.jpg' />
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className="boxe-imagess">
                                <div className='boxe-imags'>
                                    <img src='images/Blog/gallery-thumb3.jpg' />
                                </div>
                                <div className='boxe-imags'>
                                    <img src='images/Blog/gallery-thumb4.jpg' />
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className="boxe-imagess">
                                <div className='boxe-imags'>
                                    <img src='images/Blog/gallery-thumb5.jpg' />
                                </div>
                                <div className='boxe-imags'>
                                    <img src='images/Blog/gallery-thumb6.jpg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="line" />
        </div>
    );
}

export default Blog;
