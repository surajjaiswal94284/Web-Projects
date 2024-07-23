import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    const slideForward = () => {
        if(tx > -75){ // Ensure it doesn't go beyond the last slide
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if(tx < 0){ // Ensure it doesn't go beyond the first slide
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    return (
        <div className='testimonials'>
            <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward}/>
            <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1}  />
                                <div>
                                    <h3>John Doe</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                                The supportive community, state-of-the-art facilities, and commitment
                                to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2}  />
                                <div>
                                    <h3>Jane Smith</h3>
                                    <span>Edusity, Canada</span>
                                </div>
                            </div>
                            <p>
                                My experience at Edusity has been incredibly rewarding. The professors are knowledgeable
                                and the campus environment is welcoming. I highly recommend this institution to anyone
                                looking for a quality education.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3}  />
                                <div>
                                    <h3>Emily Johnson</h3>
                                    <span>Edusity, UK</span>
                                </div>
                            </div>
                            <p>
                                The resources and support I received at Edusity were unparalleled. The hands-on learning
                                opportunities and real-world applications of the curriculum prepared me well for my career.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4}  />
                                <div>
                                    <h3>Michael Brown</h3>
                                    <span>Edusity, Australia</span>
                                </div>
                            </div>
                            <p>
                                Edusity offers a perfect blend of academics and extracurricular activities. The vibrant
                                campus life and the diverse community made my time here unforgettable. I'm proud to be an Edusity alum.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials;
