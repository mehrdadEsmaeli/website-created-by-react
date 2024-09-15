import React, { useEffect } from 'react';
import "./HeadeMain.css";
import Parallax from 'parallax-js';

function HeadeMain() {

    useEffect(() => {
        let scene = document.getElementById('scene');
        let scene2 = document.getElementById('scene2');
        let scene3 = document.getElementById('scene-titel');
        // let scene4 = document.getElementById('scene-vertion');
        let scene5 = document.getElementById('scene-text');
        let parallaxInstance = new Parallax(scene);
        let parallax2 = new Parallax(scene2);
        let parallax3 = new Parallax(scene3);
        // let parallax4 = new Parallax(scene4);
        let parallax5 = new Parallax(scene5);
      }, [])
    

    return (
        <div className="header-main" >
            <div className="header-main__container" >
                {/* <div id='scene-vertion'>
                    <div data-depth="0.08" className="header-main__version">
                        <div className="vertion-text">
                            ورژن 2.0
                        </div>
                        <a href="" className="header-main__vertion-link">بیشتر -</a>
                    </div>
                </div> */}
                <div id='scene-titel'>
                    <h1 data-depth="0.05" className="header-main__title">One Task at a Time</h1>
                </div>
                <div id='scene-text' className="header-main__texts">
                    <h2 data-depth="0.04" className="header-main__text">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</h2>
                </div>
                <div className="header-main__btns">
                    <a href="" className="header-main__btn btn">دریافت رایگان</a>
                </div>


                <div id="scene"  className="header-main__message-icon">
                    <img data-depth="1" className='message-icon' src="./images/message 1.png" alt="message" />
                </div>
                <span id='scene2' className="header-main__cursor-icon">
                    <img data-depth="0.8" className='message-icon' src="./images/cursor 2.png" alt="message" />
                </span>
            </div>

            <div className="header-main__circle"></div>
        </div>
    )
}

export default HeadeMain