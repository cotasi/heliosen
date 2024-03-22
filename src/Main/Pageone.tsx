import React from 'react';

import { useEffect,useState } from 'react';

import Scroll from './Scroll';

import '../sass/main.scss';

const Pageone = () => {
   const [opa,setopa] = useState({
    boolean:true,
    idx: 0
   });

   useEffect(()=>{
    const intervalId = setInterval(() => {
        setopa(prev => {
            const newIdx = (prev.idx + 1) % 3;
            return { ...prev, idx: newIdx };
        });
    }, 2000);

    const slideli = document.querySelectorAll('.slide li');
    const indicators = document.querySelectorAll('#indicators div');

    slideli.forEach((ele, idx) => {
        ele.classList.remove('opacity');
        if (opa.boolean && opa.idx === idx) {
            ele.classList.add('opacity');
        }
    });

    indicators.forEach((el,ix)=>{
        el.classList.remove('action');
        if(opa.boolean && opa.idx === ix) {
            el.classList.add('action');
        }
    })


    // 컴포넌트가 언마운트되었을 때 clearInterval 호출하여 인터벌 클리어
    return () => {
        clearInterval(intervalId);
    };
   },[opa.idx])
    
    return (
        <div className="pageone" id="page1">
            <ul className="slide flex relative">
                <li className="absolute opacity">
                    <div className="textwrap absolute">
                        <span>THE PIONEER</span>
                        <span>It's Heliosen</span>
                        <span>4차 산업 혁명 핵심 가술과 공간 정보 융봉합 서비스로 <br />전 세계 디지털 혁신의 선두주자가 되겠습니다.</span>
                    </div>
                </li>
                <li className="absolute">
                <div className="textwrap absolute">
                        <span>THE PIONEER</span>
                        <span>It's Heliosen</span>
                        <span>4차 산업 혁명 핵심 가술과 공간 정보 융봉합 서비스로 <br />전 세계 디지털 혁신의 선두주자가 되겠습니다.</span>
                    </div>
                </li>
                <li></li>
            </ul>
            <div id="indicators">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Scroll />
        </div>
    );
};

export default Pageone;