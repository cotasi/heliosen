import React from 'react';

import { Business } from '../UI/commonui';
import Busidata from '../Data/busidata.json';
import { GoCheck } from "react-icons/go";
import { RiAddLine } from "react-icons/ri";

import Scroll from './Scroll';

import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const Pagetwo = () => {
    const breakpoints = {
        1280: {
            slidesPerView:2
        }
    }
    return (
        <div className="pagetwo flex" id="page2">
           <div className="summary">
            <h2>헬리오센의 디지털 전환을<br></br>주도할 핵심기술</h2>
            <p>4차 산업혁명 핵심 ICT 기술과 공간 정보와의 <br />
               연결로 새로운 가치를 만들어가는 전문 벤처기업입니다.</p>
            <Link to="/" className="flex items-center"><span>자세히 보기</span><RiAddLine /></Link>
           </div> 
           <div className="business">
            <Swiper className="xl:block" slidesPerView={2} spaceBetween={20} breakpoints={breakpoints}>
                {
                    Busidata.map((busid)=>(<SwiperSlide>
                                                <Business>
                                                    <h1><span className="sr-only">우엑</span></h1>
                                                    <h2>{busid.h2}</h2>
                                                    <h3>{busid.h3.split('|').map((spl)=>(<span>{spl}</span>))}</h3>
                                                    <button><span className="sr-only">이동 버튼</span><GoCheck /></button>
                                                </Business>
                                           </SwiperSlide>))
                }
            </Swiper>
            <div id="business" className="flex hidden">
                {
                    Busidata.map((bud)=>(<div className="slide">
                                            <Business>
                                                    <h1><span className="sr-only">우엑</span></h1>
                                                    <h2>{bud.h2}</h2>
                                                    <h3>{bud.h3.split('|').map((spl)=>(<span>{spl}</span>))}</h3>
                                                    <button><span className="sr-only">이동 버튼</span><GoCheck /></button>
                                                </Business>

                                        </div>))
                }
            </div>
           </div>
           <Scroll />
        </div>
    );
};

export default Pagetwo;