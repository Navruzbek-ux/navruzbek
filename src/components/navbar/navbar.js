import React from 'react';
import Box from "@mui/material/Box";
import './navbar.css'
import { GiNewspaper } from "react-icons/gi";
import { MdOutlineSmsFailed } from "react-icons/md";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiPill } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";







const Navbar=()=> {
    return (
        <div >
            <div className='div6' style={{display:"flex",flexDirection:"row",marginLeft:200,marginTop:50}}>

                <Box  className="box1">
                    <input className="input1" type="text" placeholder="Qidiruv.............."/>
                    <div  className='div1' >
                        <a  className="yozuv" href="/yangilik"><GiNewspaper />
                            𝕐𝕒𝕟𝕘𝕚𝕝𝕚𝕜𝕝𝕒𝕣</a>
                    </div>
                    <div className='div1'>
                        <a className="yozuv" href="/bildirishnoma"><MdOutlineSmsFailed />
                            𝔹𝕚𝕝𝕕𝕚𝕣𝕚𝕤𝕙𝕟𝕠𝕞𝕒</a>

                    </div>
                    <div className='div1'>
                        <a className="yozuv" href="/chat"><IoChatboxEllipsesSharp />
                            𝕂𝕠𝕟𝕤𝕦𝕝𝕥𝕒𝕥𝕤𝕚𝕪𝕒</a>

                    </div>
                    <div className='div1'>
                        <a className="yozuv" href="/profil"><MdOutlineAccountCircle />
                            ℙ𝕣𝕠𝕗𝕚𝕝
                        </a>

                    </div>
                    <div className='div1'>
                        <a className="yozuv" href="/dorilar"><CiPill />
                            𝔻𝕠𝕣𝕚𝕝𝕒𝕣
                        </a>
                    </div>
                    <div className='div1'>
                        <a className="yozuv" href="/location"><FiMapPin />

                            𝕃𝕠𝕔𝕒𝕥𝕚𝕠𝕟
                        </a>

                    </div>
                </Box>
                <Box  className="box2">
                    <h2 style={{fontSize:100,color: '#FFFFFF',
                        textShadow: '0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00',
                    marginTop:300,marginLeft:250
                    }}>𝕎𝔼𝕃ℂ𝕆𝕄𝔼</h2>
                </Box>
            </div>

        </div>
    );
}

export default Navbar;