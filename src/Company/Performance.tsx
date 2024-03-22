import React from 'react';

import { useEffect,useState } from 'react';

import { Titpart } from '../UI/commonui';
import { Menupart } from '../UI/commonui';
import { Tables } from '../UI/commonui';

import Menus from '../Data/Menugroups.json';
import Mans from '../Data/Manperfer.json';

import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

import '../sass/company.scss'

import { Link } from 'react-router-dom';

interface img {
    img:string;
    nums: number
}

const Performance:React.FC<img>= ({img,nums}) => {
    const [menuidx,setmenuidx] = useState({
        boolean: true,
        idx: 0
    })
    useEffect(()=>{
        document.querySelectorAll('.perfor > div ul li a')[nums].classList.add('action');
    },[])

    let start,end;

    if(menuidx.idx === 0) {
        start=0;
        end=5;
    } else if(menuidx.idx === 1) {
        start=6;
        end=10;
    } else if (menuidx.idx === 2) {
        start = 11;
        end=15;
    }

    return (
        <div className="perfor">
           <Titpart imgs={img}>
            <div className="text">
                <h2>수행실적</h2>
                <p>
                   다양한 프로젝트를 수행하며 디지털 트윈과 <br/>
                   관련된 기술을 보유하고 있습니다. 
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
             <div className="manual">
                <h2>일반 사업 수행실적</h2>
                <h3>헬리오센의 일반 사업 수행 실적을 알려드립니다.</h3>
                <Tables>
                    <thead>
                       <tr>
                        <td>수행년도</td>
                        <td>사업명</td>
                        <td>기관명</td>
                       </tr> 
                    </thead>
                    <tbody>
                        {
                            Mans.slice(start,end).map((mans)=>(<tr>
                                                <td>{mans.year}</td>
                                                <td>{mans.name}</td>
                                                <td>{mans.company}</td>
                                             </tr>))
                        }
                    </tbody>
                </Tables>
                <div className="btngroup flex justify-center">
                    <button className="realfront" onClick={()=>{setmenuidx({boolean:true,idx:0});}}><span className="sr-only">맨앞</span><AiOutlineDoubleLeft /></button>
                    <button className="front" onClick={()=>{setmenuidx({boolean:true,idx:menuidx.idx-1}); if(menuidx.idx <= 0) setmenuidx({...menuidx,idx:0});}}><span className="sr-only">한칸앞</span><BiChevronLeft /></button>
                    <button className={`one ${menuidx.boolean && menuidx.idx == 0 ? 'action': ''}`} onClick={()=>{setmenuidx({boolean:true,idx:0})}}>1</button>
                    <button className={`two ${menuidx.boolean && menuidx.idx == 1 ? 'action': ''}`} onClick={()=>{setmenuidx({boolean:true,idx:1})}}>2</button>
                    <button className={`three ${menuidx.boolean && menuidx.idx == 2 ? 'action': ''}`} onClick={()=>{setmenuidx({boolean:true,idx:2})}}>3</button>
                    <button className="behind"><span className="sr-only">한칸뒤</span><BiChevronRight /></button>
                    <button className="realbehind"><span className="sr-only">맨뒤</span><AiOutlineDoubleRight /></button>
                </div>
             </div>
             <div className="rnd"></div>
           </div>
        </div>
    );
};

export default Performance;