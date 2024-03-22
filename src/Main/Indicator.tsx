import React from 'react';
import {useState} from 'react';

interface childprops {
    indion: any
    setindion: any
}

const Indicator: React.FC<childprops> = ({indion,setindion}) => {

    return (
        <nav id="indicator">
            <ul>
                <li><a href="#page1" className={`${indion.bool && indion.idx == 0 || indion.idx < 0 ? 'action': ''}`} onClick={()=>{setindion({bool:true,idx:0})}}>Home</a></li>
                <li><a href="#page2" className={`${indion.bool && indion.idx == 1 ? 'action': ''}`} onClick={()=>{setindion({bool:true,idx:1})}}>Business</a></li>
                <li><a href="#page3" className={`${indion.bool && indion.idx == 2 ? 'action': ''}`} onClick={()=>{setindion({bool:true,idx:2})}}>Solution</a></li>
                <li><a href="#page4" className={`${indion.bool && indion.idx == 3 || indion.idx > 3 ? 'action': ''}`} onClick={()=>{setindion({bool:true,idx:3})}}>Recruit</a></li>
            </ul>
        </nav>
    );
};

export default Indicator;