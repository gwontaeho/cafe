"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ setOpen }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed p-5 max-w-screen-md w-full h-full flex items-center justify-center bg-black/50 z-[9999]" onClick={() => setOpen(false)}>
            <div className="p-5 rounded-lg bg-white flex-1 border space-y-3" onClick={(e) => e.stopPropagation()}>
                <button className="button">전화지원</button>
                <button className="button">문자지원</button>
                <button className="button">이메일지원</button>
            </div>
        </div>
    );
};

export const ApplyButton = ({ contact, d, t }) => {
    const [open, setOpen] = useState(false);

    const handleClickSms = () => {
        const ua = navigator.userAgent;
        location.href = `sms:${contact}?body=[카페바리스타구인구직]\r\n${d}\r\n${t}`;
    };

    const handleClickTel = () => {
        location.href = `tel:${contact}`;
    };

    return (
        <>
            <div className="fixed bottom-0 p-5 w-full flex items-center justify-center z-50 max-w-screen-md">
                <button className="button bg-white" onClick={() => setOpen(true)}>
                    지원하기
                </button>
            </div>
            {open && createPortal(<Modal setOpen={setOpen} />, document.body)}
        </>
    );
};
