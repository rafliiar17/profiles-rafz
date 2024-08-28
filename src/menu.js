import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import './styles/main.css';

function Menu() {
    const [currentDateTime, setCurrentDateTime] = useState({
        date: moment().tz('Asia/Jakarta').format('YYYY-MM-DD'),
        time: moment().tz('Asia/Jakarta').format('HH:mm:ss'),
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime({
                date: moment().tz('Asia/Jakarta').format('YYYY-MM-DD'),
                time: moment().tz('Asia/Jakarta').format('HH:mm:ss'),
            });
        }, 1000); // Update every second

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="menu">
            <div className="buttons-flex">
                <div className="button bg-red"></div>
                <div className="button bg-yellow"></div>
                <div className="button bg-green"></div>
            </div>
            <div className="title">
                <h1>
                    <span className="site-name"><i className="fa-solid fa-xl fa-user-secret folder-icon"></i>&nbsp;root@rafliiarcxh.cloud</span>
                    <span className="current-time">
                        Date: {currentDateTime.date} <br />
                        Time: {currentDateTime.time}
      </span>
                </h1>
            </div>
            <div className="buttons-flex2">
                &#8997;&#8984;1
            </div>
        </div>
    );
}

export default Menu;
