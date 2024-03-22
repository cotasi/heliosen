import React from 'react';

import { Link } from 'react-router-dom';

import { Board } from '../UI/commonui';

import Recruit from '../Data/Recruit.json';

const Pagefour = () => {
    return (
        <div className="pagefour" id="page4">
            <div className="wrapping">
                <h2>인재채용</h2>
                <p>헬리오센은 배려와 공감 속에서 창의와 자율을 통해 능력을 개발하고 발휘하면서 동료와 회사가 동반 성장하는 문화를 가진 회사입니다.</p>
                <Link to="/">자세히 보기</Link>
                <div className="boardlist">
                    {
                        Recruit.map((req,idx)=>(<Board>
                                                <Link to={`/employee/jobposition/${idx+1}`}>
                                                    <div className="spans">
                                                        <div>채용중</div>
                                                        <div>{req.name}</div>
                                                    </div>    
                                                    <div>{req.to}</div>
                                                </Link>    
                                            </Board>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Pagefour;