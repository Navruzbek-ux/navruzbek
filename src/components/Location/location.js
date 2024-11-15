import React from 'react';
import Box from "@mui/material/Box";
import "./location.css";


const Location = () => {
    return (
        <div>
            <Box className="box7">
                <h4>Location</h4>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.3209783407187!2d65.78578401038408!3d38.84800907161667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea623cf724d2f%3A0xab08852e2a3d35c9!2sShifoatxona!5e0!3m2!1sru!2s!4v1731259694535!5m2!1sru!2s"
                    width="600"
                    height="450"
                    style={{border:'0'}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"> </iframe>

            </Box>
        </div>
    );
}

export default Location;