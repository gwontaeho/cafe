"use client";
import Link from "next/link";
import { getCookie, deleteCookie } from "cookies-next";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/apis";

export const MyInfo = () => {
    const token = getCookie("token");
    const { data = {} } = useQuery({ queryKey: ["user", token], queryFn: getUser, enabled: !!token });
    const { b_nm, contact, email } = data?.Store || {};

    const handleClickSignout = () => {
        deleteCookie("token");
        location.href = location.origin;
    };

    return (
        <div className="p-5 space-y-5">
            {/* <div className="breadcrumbs sticky top-0">
                <h1>빽다방대전부사점</h1>
            </div> */}

            <div className="border rounded-lg text-xs [&>a]:p-5 [&>a]:flex [&>a]:justify-between [&>a]:items-center [&_span]:text-sm">
                <Link href="/my/ls">
                    <p>구인공고 관리</p>
                    <span className="material-symbols-rounded">chevron_right</span>
                </Link>
                <Link href="/my/ls/add">
                    <p>구인공고 등록</p>
                    <span className="material-symbols-rounded">add</span>
                </Link>
            </div>

            <div className="border rounded-lg text-xs [&>a]:p-5 [&>a]:flex [&>a]:justify-between [&>a]:items-center [&_span]:text-sm">
                <Link href="/my/ss">
                    <p>일일공고 관리</p>
                    <span className="material-symbols-rounded">chevron_right</span>
                </Link>
                <Link href="/my/ss/add">
                    <p>일일공고 등록</p>
                    <span className="material-symbols-rounded">add</span>
                </Link>
            </div>

            <button className="button" onClick={handleClickSignout}>
                로그아웃
            </button>
        </div>
    );
};
