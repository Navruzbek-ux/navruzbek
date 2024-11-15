import React, {useState} from 'react';
import './app.css'
import Navbar from "../navbar/navbar";
import './app.css'
import {Route, Routes} from 'react-router-dom'
import Stack from "@mui/material/Stack";
import Yangilik from "../Yangiliklar/yangilik";
import Bildirishnoma from "../Bildirishnoma/bildirishnoma";
import Chat from "../Konstultatsiya/Chat";
import Profil from "../Profil/profil";
import Dorilar from "../Dorilar/Dorilar";
import Location from "../Location/location";



const App = () => {

    return (
        <div>
            <Stack>

                <Navbar/>
                <Routes>
<Route path="/yangilik" element={<Yangilik/>} />
<Route path="/bildirishnoma" element={<Bildirishnoma/>} />
<Route path="/chat" element={<Chat/>} />
<Route path="/profil" element={<Profil/>} />
<Route path="/dorilar" element={<Dorilar/>} />
<Route path="/location" element={<Location/>} />

                </Routes>




            </Stack>
        </div>
    );
}

export default App;