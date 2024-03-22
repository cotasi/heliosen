import React from 'react';

import { useEffect } from 'react';

import { Titpart } from '../UI/commonui';
import { Menupart } from '../UI/commonui';
import { Conpart } from '../UI/commonui';
import { Device } from '../UI/commonui';

import Menus from '../Data/Menugroups.json';

import '../sass/business.scss';

import { Link } from 'react-router-dom';

interface nums {
    img: string,
    nums: number
}

const Digitaltwin: React.FC<nums>= ({img,nums}) => {
    useEffect(()=>{
        document.querySelectorAll('.dtwin ul li a')[nums].classList.add('action');
    },[]);
    return (
        <div className="dtwin">
            <Titpart imgs={img}>
                <div className="text">
                    <h2>Digital Twin</h2>
                    <p>
                    디지털 트윈은 산업의 디지털 전환을 주도할 핵심기술로 컴퓨터에 현실 속 사물의 쌍둥이(가상공간)를 만들어, <br />
                    현실에서 발생할 수 있는 상황을 ICT 기술을 접목하여 운영/유지관리/예측을 가능하게 합니다.
                    </p>
                </div>
                <Menupart>
                <ul className="flex">
                    {
                        Menus[1].details.map((dett)=>(<li><Link to={dett.sub_link}>{dett.sub_menu}</Link></li>))
                    }
                </ul>
                </Menupart>
            </Titpart>
            <Conpart>
                <h2>DIGITAL TWIN 보유 기술</h2>
                <p>
                    다양한 기술을 바탕으로 운영/유지 관리/예측에 대해 <br/>
                    대응할 수 있는 서비스를 제공합니다.
                </p>
                <div className="technology">
                    <div className="tech">
                        <img src="/images/tech.png" alt="tech" />
                        <span>3D 모델링 구축 갱신</span>
                    </div>
                    <div className="datas">
                        <img src="/images/datas.png" alt="datas" />
                        <span>데이터 분석/가시화/운용</span>
                    </div>
                    <div className="solutions">
                        <img src="/images/solutions.png" alt="solutions" />
                        <span>디지털 트윈 솔루션 보유</span>
                    </div>
                </div>
                <div className="imgservice">
                    <h2>디지털 트윈을 선도하는<br/>기업 서비스</h2>
                </div>
                <Device>
                    <h2>디지털 트윈 솔루션 연구 개발</h2>
                    <div>
                        <p>
                           전국 단위 고품질 서비스를 위해 서비스 가능한 타일 단위 전국 지형(2.5m), 정사영상(25cm) 데이터를 구축/제공하고, 대용량 데이터 처리가 <br/>
                           가능한 3차원 데이터 국제표준인 3Dtiles 생성기술을 확보하였습니다. 접근성이 높은 Web 기반 솔루션과 고품질, XR지원이 가능한 Unity 기반 <br/>
                           솔루션을 개발하여 디지털트윈 멀티플랫폼 제공이 가능합니다. 
                        </p>
                        <ul>
                            <li>3차원 공간 정보기반 건축물 자산관리 플랫폼 개발</li>
                            <li>3차원 공간 정보 플랫폼(DiTAP) 기반 건설관리 패키지 개발(중소 벤처기업부)</li>
                            <li>Unity 기반의 디지털 트윈 GIS 적용 기술 및 솔루션 개발(과학기술정보통신부)</li>
                            <li>XR 기반 건설 설계 혁신 시스템(정보통신산업진흥원)</li>
                        </ul>
                        <div>
                            <span className="img1"></span>
                            <span className="img2"></span>
                            <span className="img3"></span>
                            <span className="img4"></span>
                        </div>
                    </div>
                </Device>
            </Conpart>
        </div>
    );
};

export default Digitaltwin; 