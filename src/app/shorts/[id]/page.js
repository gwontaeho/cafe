import dayjs from "dayjs";

import { Header, ApplyButton, Map } from "@/components/mobile";
import { DAYS, TIMES, GENDERS } from "@/constants";

async function getData(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/posts/${id}`);
    if (res.ok) return res.json();
}

export async function generateMetadata({ params: { id } }) {
    const data = await getData(id);
    if (!data) return;
    const { title } = data;

    return {
        title: `${title} - 외주123`,
    };
}

export default async function Short({ params: { id } }) {
    const data = await getData(id);
    if (!data) return null;

    const { title, content, date, days, begin, end, personnel, wage_hour, contact, email, recruiter, Store } = data;
    const { b_nm, brand, introduction, address, address_extra, latitude, longitude } = Store;

    const d = `${dayjs(date).format("YYYY. MM. DD")} ${DAYS.find(({ value }) => value === days).label}`;
    const t = `${TIMES.find(({ value }) => value === begin).label} ~ ${TIMES.find(({ value }) => value === end).label}`;
    const w = `시급 ${(wage_hour || 0).toLocaleString()}원`;
    const p = `${personnel}명`;
    const a = address + (address_extra ? ` ${address_extra}` : "");

    return (
        <div className="page pb-20">
            <Header title="일일공고" />

            <div className="p-5 space-y-20">
                <div>
                    <h2 className="text-xl break-all mb-5">{title}</h2>
                    <div className="grid grid-cols-2 gap-3 [&>div]:flex [&>div]:flex-col [&>div]:border [&>div]:p-3 [&>div]:rounded-lg [&>div]:space-y-1.5 [&_span]:text-gray-500 [&_span]:text-xs [&_p]:text-sm">
                        <div>
                            <span>근무날짜</span>
                            <p>{d}</p>
                        </div>
                        <div>
                            <span>근무시간</span>
                            <p>{t}</p>
                        </div>
                        <div>
                            <span>급여</span>
                            <p>{w}</p>
                        </div>
                        <div>
                            <span>모집인원</span>
                            <p>{p}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl mb-5">공고내용</h3>
                    <pre className="whitespace-pre-wrap text-sm">{content}</pre>
                </div>
                <div>
                    <h3 className="text-xl mb-5">담당자정보</h3>
                    <div className="grid grid-cols-2 gap-5 [&>div]:flex [&>div]:flex-col [&>div]:space-y-1.5 [&_span]:text-xs [&_span]:text-gray-500 [&_p]:text-sm">
                        <div>
                            <span>이름</span>
                            <p>{recruiter}</p>
                        </div>
                        <div>
                            <span>연락처</span>
                            <p>{contact}</p>
                        </div>
                        <div>
                            <span>이메일</span>
                            <p>{email}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl mb-5">근무지정보</h3>
                    <div className="mb-3">
                        <p className="text-sm">{b_nm}</p>
                        <p className="text-xs">{a}</p>
                    </div>
                    <Map className="w-full h-60 rounded-lg" latitude={latitude} longitude={longitude} />
                </div>
            </div>

            <ApplyButton contact={contact} d={d} t={t} />
        </div>
    );
}
