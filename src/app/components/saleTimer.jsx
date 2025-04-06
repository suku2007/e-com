"use client";

import { useState, useEffect } from "react";

function SaleTimer() {
    const SALE_DURATION = 24 * 60 * 60; // 24 hours in seconds
    const [timer, setTimer] = useState(SALE_DURATION);

    useEffect(() => {
        const storedStartTime = localStorage.getItem("sale_start_time");

        if (storedStartTime) {
            const elapsedTime = Math.floor((Date.now() - parseInt(storedStartTime)) / 1000);
            const remainingTime = Math.max(SALE_DURATION - elapsedTime, 0);
            setTimer(remainingTime);
        } else {
            localStorage.setItem("sale_start_time", Date.now().toString());
            setTimer(SALE_DURATION);
        }
    }, []);

    useEffect(() => {
        if (timer <= 0) return;

        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    return (
        <div className="flex flex-col items-center justify-center p-4 bg-black text-white rounded-lg shadow-md">
            <p className="text-lg font-semibold">Sale Ends In</p>
            <div className="flex space-x-2 text-xl font-bold mt-2">
                <span className="bg-white text-red-500 px-3 py-1 rounded-md shadow">{hours}h</span>
                <span className="bg-white text-red-500 px-3 py-1 rounded-md shadow">{minutes}m</span>
                <span className="bg-white text-red-500 px-3 py-1 rounded-md shadow">{seconds}s</span>
            </div>
        </div>
    );
}

export default SaleTimer;
