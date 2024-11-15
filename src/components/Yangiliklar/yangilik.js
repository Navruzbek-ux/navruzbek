import React from 'react';
import Box from "@mui/material/Box";
import './yangilik.css'
import Logo from './28223b887294d38f00468dbce421aaf0.jpg'
import Logo1 from './640px-Spaltlampe-2.jpg'
import Logo2 from './3aff5e50ffc50705c0fd72858cd962c5.jpg'
import Logo3 from './Xmwp1e16933792990793_l.jpg'
const Yangilik=()=> {
    return (
        <div>
<Box className="box3">
<h2 className="yozuv1">Yangiliklar</h2>
    <div className='div2' style={{display:"flex",width:800,marginLeft:40,borderRadius:5,padding:10}}>
        <img style={{width:150,marginLeft:20,borderRadius:10,}} src={Logo} alt=""/>
        <a href="#" style={{marginLeft:30,marginTop:25}}>O`zbekistonda ilk bor xususiy shifohonalarga kilinik ordinatorlarini tayyorlash uchun
        ruxsat berildi.
        </a>
    </div>
    <div className='div3' style={{display:"flex",width:800,marginLeft:40,borderRadius:5,padding:10}}>
        <img style={{width:150,marginLeft:20,borderRadius:10,}} src={Logo1} alt=""/>
        <a href="#" style={{marginLeft:30,marginTop:25}}>
            "Afsuski ko`p odamlar shifokorga kech murojat qiladi"- oftalmolog.O`zbekistonda keng tarqalgan ko`z kasalliklari haqida
        </a>
    </div>
    <div className='div3' style={{display:"flex",width:800,marginLeft:40,borderRadius:5,padding:10}}>
        <img style={{width:150,marginLeft:20,borderRadius:10,}} src={Logo2} alt=""/>
        <a href="#" style={{marginLeft:30,marginTop:25}}>
"Xususiy tibbiyot muassasalarining ko`paygani ham bemorlar ham shifokorlar ham uchun foydali"-xususiy kilinikalar tarmog`i bosh shifokorlari suhbat
        </a>
    </div>
    <div className='div3' style={{display:"flex",width:800,marginLeft:40,borderRadius:5,padding:10}}>
        <img style={{width:150,marginLeft:20,borderRadius:10,}} src={Logo3} alt=""/>
        <a href="#" style={{marginLeft:30,marginTop:25}}>
            Joriy yilda 30 ta oilaviy poliklinika, 110 ta oilaviy shifokor punkti va 500 ta mahalla tibbiyot punktlari tashkil etildi.
        </a>
    </div>

</Box>
        </div>
    );
}

export default Yangilik;