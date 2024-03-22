import React from 'react';

import {useEffect} from 'react';

import { Titpart } from '../UI/commonui';
import { Menupart } from '../UI/commonui';

import Menus from '../Data/Menugroups.json';

import { Link } from 'react-router-dom';

interface nums {
    nums: number,
    img: string
}

const Road: React.FC<nums> = ({nums,img}) => {
    useEffect(()=>{
        document.querySelectorAll('.road ul li a')[nums].classList.add('action');
    },[]);

    return (
        <div className="road">
            <Titpart imgs={img}>
            <div className="text">
                <h2>오시는 길</h2>
                <p>
                   헬리오센 본사에 오시는 길을 안내해드립니다. 
                </p>
            </div>
            <Menupart>
                <ul className="flex">
                    {
                        Menus[0].details.map((dett)=>(<li><Link to={dett.sub_link}>{dett.sub_menu}</Link></li>))
                    }
                </ul>
            </Menupart>
           </Titpart>
           <div className="conpart">
              <h2>오시는 길</h2>
              <h3>헬리오센의 위치입니다.</h3>
              <div className="info">
                <h2>회사 정보</h2>
                <div className="infodetail">
                    <div className="add">
                        <h2>주소</h2>
                        <h3>경기도 성남시 분당구 대왕판교로 660 유스페이스1 A동 1108호</h3>
                    </div>
                    <div className="phone">
                        <h2>전화번호</h2>
                        <h3>+82&#41;031-724-2950</h3>
                    </div>
                    <div className="email">
                        <h2>이메일</h2>
                        <h3>heliosen@heliosen.co.kr</h3>
                    </div>
                </div>
              </div>
              <div id="map">
                <img src="/images/maps.png" alt="maps예비이미지" />
              </div>
              <div className="roads">
                <h2>오시는 방법</h2>
                <div className="list">
                    <h3>금토천교 / 유스페이스: 1007,1009,5600,5700,6003,75</h3>
                    <h3>H스퀘어 정류장: 260,390,602-1,71,812,9007,73</h3>
                </div>
              </div>
           </div> 
        </div>
    );
};

export default Road;