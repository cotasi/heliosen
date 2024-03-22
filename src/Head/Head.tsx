import * as React from 'react';
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

import Menugroups from '../Data/Menugroups.json';

import '../sass/head.scss';

import { useNavigate } from 'react-router-dom';

import { BsArrowRight } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
import { GoHorizontalRule } from "react-icons/go";


const Head = () => {
    const [mmenu,setmmenu] = useState(false);
    const [show,setshow] = useState(false);
    const [inner,setinner] = useState({
        boolean: false,
        index: -1
    });

    useEffect(()=>{
       window.addEventListener('scroll',()=>{
        if(window.scrollY > 50) {
            setshow(true);
        } else {
            setshow(false);
        }

        return () => {
            window.removeEventListener('scroll',()=>{})
        }
       }) 
    },[])

    return (
        <div className={`head ${show ? 'scrolled' : ''}`}>
            <div className="mx-auto xl:max-w-screen-xl lg:max-w-screen-lg max-w-screen-md flex justify-between items-center h-full">
                <h1 className="logo"><Link to="/"><img src="/images/helosen_white.png" alt="helosen_white" />
                                                  <img src="/images/helosen_yellow.png" alt="helosen_yellow" /></Link></h1>
                <nav className="mainmenu lg:block hidden" onMouseOver={()=>{document.querySelector('.head')?.classList.add('hover');}}
                                          onMouseLeave={()=>{document.querySelector('.head')?.classList.remove('hover');}}>
                    <ul className="flex">
                        {
                            Menugroups.map((mgr)=>(<li className="relative"><Link to={mgr.main_link}>{mgr.main_menu}</Link>
                                                        <ul className="small flex absolute">
                                                            {
                                                                mgr.details.map((mdgr)=>(<li><Link to={mdgr.sub_link}>{mdgr.sub_menu}</Link></li>))
                                                            }
                                                        </ul>
                                                   </li>))
                        }
                    </ul>
                </nav>
                <div className="other_link lg:block hidden"><a href="https://ditap.heliosen.co.kr/" className="flex items-center justify-between"><span>DiTAP 솔루션</span><BsArrowRight /></a></div>
                <div className="linebtn lg:hidden block">
                    <button onClick={()=>{setmmenu(true);}}>
                        <span className="sr-only">햄버거버튼</span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className={`mobilemenu fixed bg-white ${mmenu ? 'mmenu': ''}`}>
                    <div className="mx-auto max-w-screen-lg max-w-screen-80">
                        <h1 className="logos"><Link to="/"><img src="/images/helosen_yellow.png" alt="yellowlogo" /></Link></h1>
                        <nav className="mobilemain">
                            <ul>
                                {
                                    Menugroups.map((mmm,idx)=>(<li><button onClick={()=>{setinner({boolean:true,index:idx})}} className="flex justify-between items-center"><span>{mmm.main_menu}</span><GoChevronDown /></button>
                                                                <div className={`sebu ${mmenu && inner.boolean && inner.index == idx ? 'sebuon': ''}`}>
                                                                    {
                                                                        mmm.details.map((dddd)=>(<Link to={dddd.sub_link} onClick={()=>{setmmenu(false);}}>{dddd.sub_menu}</Link>))
                                                                    }
                                                                </div>
                                                           </li>))
                                }
                            </ul>
                        </nav>
                        <div className="others">
                            <a href="https://www.youtube.com/@heliosen4024"><span>회사 소개 영상</span></a>
                            <a href="https://ditap.heliosen.co.kr/"><span>DiTAP 솔루션</span></a>
                        </div>
                        <button onClick={()=>{setmmenu(false);}}><span className="sr-only">close</span><GoHorizontalRule /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Head;