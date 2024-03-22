import React from 'react';

import { useEffect } from 'react';

import '../sass/company.scss';

import { Link } from 'react-router-dom';

import Menus from '../Data/Menugroups.json';

interface nums {
    nums: number
}

const Company: React.FC<nums> = ({nums}) => {
    useEffect(()=>{
        document.querySelectorAll('.menus ul li a')[nums].classList.add('action');
    },[])
    return (
        <div className="company">
          <div className="titpart">
            <div className="text">
                <h2>회사소개</h2>
                <p>
                    현실과 가상의 공간을 시간을 통해 이야기를 만들고 <br />
                    태양처럼 인간을 위한 공간 가치 창출에 도전하겠습니다.
                </p>
            </div>
            <div className="menus">
                <ul className="flex">
                    {
                        Menus[0].details.map((dett)=>(<li><Link to={dett.sub_link}>{dett.sub_menu}</Link></li>))
                    }
                </ul>
            </div>
          </div> 
          <div className="realpart">
            <div className="imgsection">
               <div className="text">
                <h2>We Connect Space<br></br>And Humans</h2>
                <p>공간과 인간을 연결하는 가치 창조자 HELIOSEN</p>
               </div>
            </div> 
            <div className="welcome">
                <div className="first">
                    <h2>헬리오센을 방문해주신<br/>여러분 진심으로 환영합니다.</h2>
                    <h3>대표이사 이종훈</h3>
                </div>
                <div className="second">
                    <h2>Heliosen은 Helio(그리스 신화의 태양신)와<br/>Sense(감각)의 합성어입니다.</h2>
                    <p>
                        바깥으로는 디지털 트윈과 메타버스 시대에 맞는 직관적인 표현과 통찰력 있는 <br />
                        분석기술을 제공하여 공간과 인간을 연결하고, 내적으로는 배려와 공감과 상호 존중을 <br/>
                        바탕으로 창의적이고 진취적 마인드를 갖춘 전문가 집단으로 능력 개발과 발휘를 통하여 <br/>
                        사회와 같이 성장하는 회사가 되고자 합니다.
                    </p>
                    <p>
                        여러분의 관심을 바탕으로 신뢰를 쌓으며,<br />
                        인간과 공간과 시간 사이를 좁히는 가치 창출에 노력하겠습니다.
                    </p>
                    <b>감사합니다.</b>
                </div>
            </div>  
            <div className="outlining">
               <figure>
                <img src="/images/outline.png" alt="outline" />
                <figcaption className="sr-only">아웃라인</figcaption>
               </figure>
               <div className="outlines">
                <h2>기업 개요</h2>
                <p>
                    디지털 트윈 선도 업체로 다양한 경험과 <br/>
                    기술을 보유한 인원으로 구성되어 있습니다.
                </p>
                <table className="table">
                    <tr>
                        <td>회사명</td>
                        <td>헬리오센(주)</td>
                    </tr>
                    <tr>
                        <td>대표이사</td>
                        <td>이종훈</td>
                    </tr>
                    <tr>
                        <td>업종</td>
                        <td>정보통신업/서비스업</td>
                    </tr>
                    <tr>
                        <td>설립일</td>
                        <td>2020.02.04</td>
                    </tr>
                </table>
                <div className="certifier">
                    <div className="cert">
                        <img src="/images/cert.png" alt="cert" />
                        <span className="info">
                            <span>특허 등록</span>
                            <span>11 건</span>
                        </span>
                    </div>
                    <div className="copyright">
                        <img src="/images/coptr.png" alt="coptr" />
                        <span className="info">
                            <span>저작권 등록</span>
                            <span>16 건</span>
                        </span>
                    </div>
                </div>
               </div>
            </div>  
          </div> 
        </div>
    );
};

export default Company;