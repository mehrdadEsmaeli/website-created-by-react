import React, { useEffect } from 'react';
import Parallax from 'parallax-js';
import "./News.css";

function News() {
    useEffect(()=>{
        let foterScene = document.getElementById('foter-scene');
        let parallaxFoter = new Parallax(foterScene);

    },[])


  return (
    <div className="news">
        <div className="news-container">
            <div className="news-div">
                <h2 className="news__title">عضویت در خبر نامه</h2>
                <div className="news__input-div">
                    <input type="text" className="news__input" placeholder='ایمیل خود را وارد کنید'/>
                    <a href="" className="news__btn btn">عضویت</a>
                </div>
            </div>
        </div>
        <div className="news__icons" id='foter-scene'>
            <div data-depth="0.02" className="news__icon1"><img src="./images/helix2 1.png" alt="" /></div>
            <div data-depth="0.04" className="news__icon2"><img src="./images/emojistar 1.png" alt="" /></div>
        </div>
    </div>
  )
}

export default News