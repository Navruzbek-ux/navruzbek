import React from 'react';
import Box from "@mui/material/Box";
import "./profil.css";
import Logo from './user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp'



const Profil=()=> {
    return (
        <div>
            <Box className="box6">
                <div style={{marginTop:-300}}>
                    <h4 className='yozuv3'>Profil</h4>

                </div>
                    <div className='div5'>
                    <img  src={Logo} alt=""/>
                    <h4 style={{fontSize:15}}>Kamola Botirova</h4>
                </div>
<div className='div7' style={{marginTop:50}}>
    <div className="div4" style={{width:500,height:60,border:'1px solid yellow',marginLeft:250,marginTop:-10}}>
        <a href='#'>Ma`lumotlari</a>
    </div>
    <div className="div4" style={{width:500,height:60,border:'1px solid yellow',marginLeft:250,marginTop:15}}>
        <a href='#'>Kasalliklar </a>
    </div>
    <div className="div4" style={{width:500,height:60,border:'1px solid yellow',marginLeft:250,marginTop:15}}>
        <a href='#'>Tashxislar</a>
    </div>
    <div className="div4" style={{width:500,height:60,border:'1px solid yellow',marginLeft:250,marginTop:15}}>
        <a href='#'>Restseplar</a>
    </div>

</div>
            </Box>
        </div>
    );
}

export default Profil;