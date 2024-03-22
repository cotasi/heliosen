import React from 'react';

import { useEffect } from 'react';

import '../sass/employee.scss';

import { Titpart } from '../UI/commonui';
import { Menupart } from '../UI/commonui';

import Menus from '../Data/Menugroups.json';

import Recruit from '../Data/Recruit.json';

import { Link } from 'react-router-dom';

interface imgs {
    img: string,
    nums: number
}

const Jobposition: React.FC<imgs> = ({img,nums}) => {
    useEffect(()=>{
        document.querySelectorAll('.jobpo ul li a')[nums].classList.add('action');
    },[]);
    return (
        <div className="jobpo">
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
            <div className="mainpart">
                <h2>채용공고</h2>
                <p>헬리오센의 채용 소식을 알려드립니다.</p>
                <div id="data">
                    {
                        Recruit.map((rec,idx)=>(
                            <div>
                                <Link to={`/employee/jobposition/${idx+1}`} className="justify-between items-center">
                                <div className="left flex items-center">
                                    <h2>{rec.type}</h2>
                                    <div className="content">
                                        <h2>{rec.name}</h2>
                                        <ul className="flex">
                                            <li>{rec.years}</li>
                                            <li>{rec.schools}</li>
                                            <li>{rec.job}</li>
                                            <li>{rec.to}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="right">{rec.to}</div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Jobposition;