import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Main from '../../Components/Main/Main';
import News from '../../Components/News/News';
import FooterBox from '../../Components/FooterBox/FooterBox';
import "./Index.css";

function Index() {


  return (
    <>
      <Header/>
      <Main/>
      <News/>
      <FooterBox/>
    </>
  )
}

export default Index