"use client";
import Link from "next/link";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Pagination } from "./Pagination";
import { getShorts } from "@/apis";
import { COUNTRIES, DAYS, TIMES, GENDERS } from "@/constants";

export const ShortList = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const perPage = 10;
    let page = searchParams.get("page") || "1";
    let country = searchParams.get("country");
    country = COUNTRIES.some((v, i) => String(i) === country) ? country : "0";

    const { data = {} } = useQuery({ queryKey: ["shorts", page, perPage, country], queryFn: () => getShorts({ page, perPage, country }) });
    const { rows = [], count = 0 } = data;

    const handleChangeCountry = (e) => {
        router.push(pathname + "?page=1" + "&country=" + e.target.value);
    };

    const handleChangePage = (v) => {
        router.push(pathname + "?page=" + v + "&country=" + country);
    };

    return (
        <div className="flex flex-col flex-1 p-5 space-y-5">
            <div className="flex">
                <div className="flex py-1.5 px-3 space-x-1 rounded border bg-white text-xs [&>span]:text-xs">
                    <span className="material-symbols-rounded">location_on</span>
                    <select className="flex-1 appearance-none bg-inherit outline-none" value={country} onChange={handleChangeCountry}>
                        {COUNTRIES.map((value, index) => (
                            <option key={`country-${value}`} value={index}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <ul className="flex-1 space-y-5">
                {rows.map(({ id, date, days, title, begin, end, wage_hour, Store }) => {
                    const { b_nm, sido, sigungu, bname } = Store;

                    const d = `${dayjs(date).format("YYYY. MM. DD")} ${DAYS.find(({ value }) => value === days).label}`;
                    const l = sido + ` ${sigungu}` + ` ${bname}`;
                    const t = `${TIMES.find(({ value }) => value === begin).label} ~ ${TIMES.find(({ value }) => value === end).label}`;
                    const w = `시급 ${(wage_hour || 0).toLocaleString()}원`;

                    return (
                        <li key={`short-${id}`} className="border rounded-lg">
                            <Link href={`/shorts/${id}`}>
                                <div className="p-5 space-y-3">
                                    <div>
                                        <p className="text-xs mb-1.5 text-gray-500">{b_nm}</p>
                                        <p className="text-sm h-[2.5rem]">{title}</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-1.5 text-xs">
                                        <p>{l}</p>
                                        <p>{t}</p>
                                        <p>{d}</p>
                                        <p>{w}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <div className="flex justify-center">
                <Pagination page={Number(page)} perPage={Number(perPage)} count={count} onChange={handleChangePage} />
            </div>
        </div>
    );
};
