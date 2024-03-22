import React from 'react';

import { Link } from 'react-router-dom';
import Menudata from '../Data/Menugroups.json';

import Scroll from './Scroll';

const Pagethree = () => {
    return (
        <div className="pagethree flex" id="page3">
            <div className="wraps flex">
            <div className="sum">
                <h2>디지털트윈 시스템 구축을<br/>위한 통합 솔루션</h2>
                <p>
                    DiTAP은 구축을 위한 통합 솔루션디지털 트윈 서비스 개발에 최적화된 기능 및 <br/>
                    요구에 맞는 멀티플랫폼(WebGL,Unity) 솔루션을 제공합니다.
                </p>
                <Link to="/">자세히 보기</Link>
            </div>
            <div className="menu">
                <Link to="/solution/ditap">
                    <span>DiTAP JS</span>
                    <span>웹 기반 3차원 디지털 트윈 가시화를 통해 3차원 상에서 고도,거리,면적,체적,측정 기능을 제공합니다.</span>
                </Link>
                <Link to="/solution/unity">
                    <span>DiTAP for Unity</span>
                    <span>데스크탑 기반 디지털트윈 가시화를 위한 SDK와 3D 가시화 기능을 제공합니다.</span>
                </Link>
                <Link to="/solution/builder">
                    <span>DiTAP Builder</span>
                    <span>3D Tiles,3D Model,Point Cloud,정사 영상,DEM 타입의 변환을 지원하고, 변환 이력 관리, 데이터 시각화 및 다운로드가 가능합니다.</span>
                </Link>
            </div>
            </div>
            <Scroll />
        </div>
    );
};

export default Pagethree;