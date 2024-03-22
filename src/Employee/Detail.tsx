import React from 'react';

import { useEffect } from 'react';

import Recruit from '../Data/Recruit.json';

import Menus from '../Data/Menugroups.json';

import { Link } from 'react-router-dom';

import { Titpart } from '../UI/commonui';
import { Menupart } from '../UI/commonui';
import { Conpart } from '../UI/commonui';

interface num {
    pastnum: number,
    num: number,
    img: string
}

const Detail: React.FC<num> = ({num,img,pastnum}) => {
    useEffect(()=>{
        document.querySelectorAll('.detail ul li a')[pastnum].classList.add('action');
    },[]);
    return (
        <div className="detail">
           <Titpart imgs={img}>
           <div className="text">
                   <h2>인재 채용</h2>
                   <p>
                    배려와 공감 속에서 창의와 자율을 통해 능력을 개발하며 <br/>
                    동반 성장하는 문화를 가진 기업
                   </p> 
                </div>
                <Menupart>
                <ul className="flex">
                    {
                        Menus[4].details.map((dett)=>(<li><Link to={dett.sub_link}>{dett.sub_menu}</Link></li>))
                    }
                </ul>
                </Menupart>
            </Titpart> 
            <Conpart>
                <h2>{Recruit[num].name}</h2>
                <p>
                    {Recruit[num].to}
                </p>
                <div className="work">
                    <h2>담당 업무</h2>
                    <span>
                        {
                            Recruit[num].work?.map((works)=>(<span>- {works}</span>))
                        }
                    </span>
                </div>
                <div className="essential">
                    <h2>자격 요건</h2>
                    <span>
                        <span>- {Recruit[num].schools}</span>
                        <span>- {Recruit[num].years}</span>
                    </span>
                </div>
                <div className="essentials">
                    <h2>필수 능력</h2>
                    <span>
                        <span>- {Recruit[num].techs}</span>
                    </span>
                </div>
                <div className="goods">
                    <h2>우대 조건</h2>
                    <span>
                        {
                            Recruit[num].plus?.map((pluss)=>(<span>- {pluss}</span>))
                        }
                    </span>
                </div>
                <div className="go">
                    <h2>헬리오센과 함께 할<br/>여러분을 기다립니다.</h2>
                    <a href="https://www.jobkorea.co.kr/Recruit/GI_Read/42424883?Oem_Code=C1">지원하기</a>
                </div>
            </Conpart>
        </div>
    );
};

export default Detail;