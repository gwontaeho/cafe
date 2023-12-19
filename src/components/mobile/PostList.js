"use client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Pagination } from "./Pagination";
import { CreatedAt } from "./CreatedAt";
import { COUNTRIES, DAYS, TIMES, WAGE_TYPES, GENDERS } from "@/constants";
import { getLongs } from "@/apis";

export const PostList = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const perPage = 3;
    let page = searchParams.get("page") || "1";
    let country = searchParams.get("country");
    country = COUNTRIES.some((v, i) => String(i) === country) ? country : "0";

    const { data = {} } = useQuery({ queryKey: ["longs", page, perPage, country], queryFn: () => getLongs({ page, perPage, country }) });
    const { rows = [], count = 0 } = data;
    console.log(data);

    const handleChangeCountry = (e) => {
        router.push(pathname + "?page=1" + "&country=" + e.target.value);
    };

    const handleChangePage = (v) => {
        router.push(pathname + "?page=" + v + "&country=" + country);
    };

    return (
        <div className="p-5 space-y-5">
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
            <ul className="space-y-5">
                {rows.map(({ id, title, days, begin, end, wage_type, wage, gender, career, createdAt, Store }) => {
                    const { b_nm, sido, sigungu, bname } = Store;

                    const l = sido + ` ${sigungu}` + ` ${bname}`;
                    const d = days
                        .split(",")
                        .map((v) => DAYS.find(({ value }) => value === v).label)
                        .join(", ");
                    const t = `${TIMES.find(({ value }) => value === begin).label} ~ ${TIMES.find(({ value }) => value === end).label}`;
                    const w = `${WAGE_TYPES.find(({ value }) => value === wage_type).label} ${(wage || 0).toLocaleString()}원`;

                    return (
                        <li key={`long-${id}`} className="bg-white border rounded-lg">
                            <Link href={`/posts/${id}`}>
                                <div className="p-5 space-y-3">
                                    <div>
                                        <p className="text-xs">{b_nm}</p>
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
            <div className="flex justify-center mt-3">
                <Pagination page={Number(page)} perPage={Number(perPage)} count={count} onChange={handleChangePage} />
            </div>
        </div>
    );
};
