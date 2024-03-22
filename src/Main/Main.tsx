import React from 'react';
import {useEffect,useState,useRef} from 'react';

import Pageone from './Pageone';
import Pagetwo from './Pagetwo';
import Pagethree from './Pagethree';
import Pagefour from './Pagefour';
import Indicator from './Indicator';


import '../sass/main.scss';

type indi = {
    bool: boolean,
    idx: number
}

const Main = () => {
    const pageref = useRef<HTMLDivElement>(null);
    const [idx,setidx] = useState(0); // 증감 변수
    const [indion,setindion] = useState<indi>({
        bool:true,
        idx: 0
    });
    // 인디케이터 변수
    const wheel = (e: React.WheelEvent<HTMLDivElement>) => {
        
        if(!pageref.current) return;

        // 0. 개수 세기
        const leng = document.querySelectorAll('.main > div').length;

        // 2. 이벤트 방향
        const deltaY = e.deltaY;

        // 3. 리랜더링 영향을 받지 않게 설정
        const currentpage = pageref.current;

        // 4. 방향에 따른 페이지 번호 증감
        if(deltaY < 0) {
            setidx((prev)=>(prev + 1));
            if(idx > leng) setidx(leng);
        } else {
            setidx((prev)=>(prev - 1));
            if(idx < 0) setidx(0);
        }

        setindion({bool:true,idx:idx});

        // 5. 페이지 이동
        window.scrollTo(0,window.innerHeight*idx);
        }

    useEffect(()=>{
        // 캐싱 덮어씌우기
        setTimeout(()=>{
            window.scrollTo(0,0);
        },100)
    },[])
    return (
        <div ref={pageref} className="main" onWheel={(e)=>{window.innerWidth >= 1024 ? wheel(e): e.preventDefault();}}>
            <Indicator indion={indion} setindion={setindion} />
            <Pageone />
            <Pagetwo />
            <Pagethree />
            <Pagefour />
        </div>
    );
};

export default Main;