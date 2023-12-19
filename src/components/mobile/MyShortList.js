"use client";
import Link from "next/link";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { DAYS, TIMES } from "@/constants";
import { getMyShorts, deletePost } from "@/apis";

const Modal = ({ openId, setOpenId }) => {
    const queryClient = useQueryClient();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const { mutateAsync } = useMutation({ mutationFn: deletePost });

    const handleClickDelete = async () => {
        if (confirm("공고를 삭제하시겠습니까?")) {
            await mutateAsync(openId);
            queryClient.setQueryData(["my-shorts"], (old) => old && old.filter((v) => openId !== v.id));
            setOpenId(null);
        }
    };

    return (
        <div className="fixed p-5 max-w-screen-md w-full h-full flex items-center justify-center bg-black/50 z-[9999]" onClick={() => setOpenId(null)}>
            <div className="flex flex-col p-5 rounded-lg bg-white flex-1 border space-y-3" onClick={(e) => e.stopPropagation()}>
                <Link href={`/shorts/${openId}`}>
                    <button className="p-1 text-sm">공고 확인</button>
                </Link>
                <button className="p-1 text-sm text-left" onClick={handleClickDelete}>
                    공고 삭제
                </button>
            </div>
        </div>
    );
};

export const MyShortList = () => {
    const [openId, setOpenId] = useState(null);

    const { data = [] } = useQuery({ queryKey: ["my-shorts"], queryFn: getMyShorts });

    return (
        <>
            <div className="p-5 space-y-3">
                <div className="text-xs">총 {data.length}건</div>
                <ul className="space-y-5">
                    {data.map(({ id, date, days, title, begin, end, personnel, wage_hour }) => {
                        const d = `${dayjs(date).format("YYYY. MM. DD")} ${DAYS.find(({ value }) => value === days).label}`;
                        const t = `${TIMES.find(({ value }) => value === begin).label} ~ ${TIMES.find(({ value }) => value === end).label}`;
                        const w = `시급 ${(wage_hour || 0).toLocaleString()}원`;
                        const p = `${personnel}명`;

                        return (
                            <li key={`my-short-${id}`} className="border rounded-lg">
                                <div className="p-5 space-y-5">
                                    <div className="flex justify-between">
                                        <p className="text-sm h-[2.5rem]">{title}</p>
                                        <button className="material-symbols-rounded h-fit" onClick={() => setOpenId(id)}>
                                            more_vert
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-2 gap-1.5 text-xs">
                                        <p>{d}</p>
                                        <p>{t}</p>
                                        <p>{w}</p>
                                        <p>{p}</p>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {openId !== null && createPortal(<Modal openId={openId} setOpenId={setOpenId} />, document.body)}
        </>
    );
};
