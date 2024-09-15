import React, { useEffect, useState } from 'react';
import InfoBox from '../InfoBox/InfoBox';
import "./Info.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);


function Info() {
    
  useEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".info",
        start: "top 30%"
      }
    })

    tl.fromTo(".info__container",{y: 50, opacity: 0, duration:1.5},{y: 0, opacity: 2, duration:1.5,})
  },[])

    let infoTitle = "امنیت داده ای قوی";
    let infoText = "ین نوشته توسط سایت لورم ایپسوم فارسی نگاشته شده است.";
    let box = [1, 2, 3];

  return (
    <div className="info">
        <div className="info__container">
            <div className="info__titel-div">
                <h3 className="info__titel">تمام چیزی که نیاز دارید</h3>
                <p className="info__text"> این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی می تواند</p>
            </div>
            <div className="info__boxs">
              {box.map((item)=>{
                return(
                  <InfoBox key={item} title={infoTitle} text={infoText}/>
                )
              })}
            </div>
        </div>
    </div>
  )
}

export default Info