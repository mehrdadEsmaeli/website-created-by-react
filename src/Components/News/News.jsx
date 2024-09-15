import React, { useEffect } from 'react';
import "./News.css";

function News() {

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
    </div>
  )
}

export default News