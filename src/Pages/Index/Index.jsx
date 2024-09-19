import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Main from '../../Components/Main/Main';
import News from '../../Components/News/News';
import FooterBox from '../../Components/FooterBox/FooterBox';
import "./Index.css";
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)


function Index() {

  useGSAP(() => {
    gsap.to(".circle", {
      ease: "power1.inOut",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      },
      scrollTrigger: {
        trigger: ".ani",
        scrub: 1.8,
        start: "top 80%",
        end: "bottom 50%"
      }
    })
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ani",
        scrub: 1.2,
        start: "top 50%",
      }
    });
    tl.to("#svg1", {top: 0}, 0)
      .to("#svg2", {top: 300}, 0)
      .to("#svg3", {top: 200}, 0.1)
      .to("#svg4", {top: 600}, 0.1)
  })

  return (
    <>
      <Header />
      <div className="ani">


        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={700}
          height={700}
          viewBox="0 0 700 700"

        >
          <defs>
            <radialGradient
              id="a"
              cx={362.797}
              cy={333.5}
              r={332.483}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#B721FF" />
              <stop offset={1} stopColor="#ffff" />
            </radialGradient>
          </defs>
          <path
            id='path'
            d="M290 75s-43.193 104 197 104 168.8 124.942-120 120S13.06 439 197 439s133 113.645 133 153"
            fill="none"
            strokeLinecap="round"
            strokeWidth="88.62px"
            stroke="url(#a)"
          />
        </svg>
        <div className="circle"></div>


        <div className="background-ani-div">
          <svg id='svg1' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="a1" x1={0} x2={1} y1={1} y2={0}>
                <stop stopColor="#B721FF" offset="0%" />
                <stop stopColor="#ffff" offset="100%" />
              </linearGradient>
            </defs>
            <path
              fill="url(#a1)"
              d="M22.1-25.6c6.5 4.8 11.7 11.7 14.6 20.3 2.9 8.6 3.5 18.7-1.3 24.4-4.9 5.6-15.2 6.8-24.9 10.6C.9 33.6-8.1 40.1-14 38.1c-5.9-2-8.8-12.7-11.8-21.5S-31.9.8-31.9-6.8c-.1-7.6 2.9-15.9 8.7-20.8 5.9-4.8 14.5-6.3 22.8-5.8 8.2.5 16 3 22.5 7.8z"
              transform="translate(50 50)"
              strokeWidth={0}
              style={{
                transition: ".3s"
              }}
              stroke="url(#a)"
            />
          </svg>
          <svg id='svg2' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="a2" x1={0} x2={1} y1={1} y2={0}>
                <stop stopColor="#ffff" offset="0%" />
                <stop stopColor="#B721FF" offset="100%" />
              </linearGradient>
            </defs>
            <path
              fill="none"
              d="M27.5-34.3c6.7 7.1 9.6 17.2 7.1 24.9C32.1-1.6 24.1 3.9 18.8 8.7c-5.3 4.8-8.1 9-13.3 14.4C.3 28.4-7.4 35-14.3 34.5c-6.9-.4-13-7.8-14.1-15.4-1.1-7.5 2.7-15.3 4.5-23 1.8-7.7 1.5-15.4 5.2-23 3.6-7.7 11.2-15.3 20.1-17 9-1.7 19.5 2.4 26.1 9.6z"
              transform="translate(50 50)"
              style={{
                transition: ".3s"
              }}
              stroke="url(#a2)"
            />
          </svg>
          <svg id='svg3' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="a3" x1={0} x2={1} y1={1} y2={0}>
                <stop stopColor="#ffff" offset="0%" />
                <stop stopColor="#B721FF" offset="100%" />
              </linearGradient>
            </defs>
            <path
              fill="url(#a3)"
              d="M22.1-25.6c6.5 4.8 11.7 11.7 14.6 20.3 2.9 8.6 3.5 18.7-1.3 24.4-4.9 5.6-15.2 6.8-24.9 10.6C.9 33.6-8.1 40.1-14 38.1c-5.9-2-8.8-12.7-11.8-21.5S-31.9.8-31.9-6.8c-.1-7.6 2.9-15.9 8.7-20.8 5.9-4.8 14.5-6.3 22.8-5.8 8.2.5 16 3 22.5 7.8z"
              transform="translate(50 50)"
              strokeWidth={0}
              style={{
                transition: ".3s"
              }}
              stroke="url(#a)"
            />
          </svg>
          <svg id='svg4' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="a4" x1={0} x2={1} y1={1} y2={0}>
                <stop stopColor="#B721FF" offset="0%" />
                <stop stopColor="#ffff" offset="100%" />
              </linearGradient>
            </defs>
            <path
              fill="none"
              d="M27.5-34.3c6.7 7.1 9.6 17.2 7.1 24.9C32.1-1.6 24.1 3.9 18.8 8.7c-5.3 4.8-8.1 9-13.3 14.4C.3 28.4-7.4 35-14.3 34.5c-6.9-.4-13-7.8-14.1-15.4-1.1-7.5 2.7-15.3 4.5-23 1.8-7.7 1.5-15.4 5.2-23 3.6-7.7 11.2-15.3 20.1-17 9-1.7 19.5 2.4 26.1 9.6z"
              transform="translate(50 50)"
              style={{
                transition: ".3s"
              }}
              stroke="url(#a4)"
            />
          </svg>
        </div>
      </div>
      <Main />
      <News />
      <FooterBox />
    </>
  )
}

export default Index