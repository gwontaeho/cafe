import Link from "next/link";
``;

async function getData(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/posts/${id}`);
    if (res.ok) return res.json();
}

export async function generateMetadata({ params: { id } }) {
    const data = await getData(id);
    const { title } = data;

    return {
        title: `${title} - 외주123`,
    };
}

export default async function Post({ params: { id } }) {
    const data = await getData(id);
    const { date, days, begin, end, hour, personnel, wage_hour, wage_day, Store } = data;
    const { name, brand, contact, contact_store, introduction, address, adresss_extra } = Store;

    return (
        <div>
            <div className="flex h-14 items-center px-5 text-xs bg-white rounded-b-xl border-b [&>span]:text-sm text-gray-500">
                <Link href="/posts">
                    <p>구인공고</p>
                </Link>
                <span className="material-symbols-rounded">chevron_right</span>
                <h1>공고상세</h1>
            </div>

            <div className="space-y-3">
                <div className="border-y mt-3 p-5 rounded bg-white space-y-3">
                    <p>공고 제목입니다.</p>
                    <pre className="whitespace-pre-wrap text-sm">
                        공고 내용입니다 공고 내용입니다 공고 내용입니다공고 내용입니다 공고 내용입니다공고 내용입니다 공고 내용입니다공고 내용입니다 공고
                        내용입니다
                    </pre>
                </div>

                <div className="border-y bg-white rounded p-5 space-y-3 text-xs [&>div]:flex [&>div]:items-center [&>div]:space-x-5 [&_span]:text-gray-500">
                    <div>
                        <span>요일</span>
                        <p>월, 화, 수</p>
                    </div>
                    <div>
                        <span>시간</span>
                        <p>12:00 ~ 14:00</p>
                    </div>
                    <div>
                        <span>급여</span>
                        <p>시급 8,920원</p>
                    </div>
                    <div>
                        <span>경력</span>
                        <p>1년 3개월 이상</p>
                    </div>
                    <div>
                        <span>성별</span>
                        <p>무관</p>
                    </div>
                </div>

                <div className="bg-white rounded h-40 border-y">
                    <div className="p-5 flex space-x-5 [&>span]:text-xs [&>span]:text-gray-500 [&>p]:text-xs">
                        <span>주소</span>
                        <p className="flex-1">대전 동구 용운동 412-241 301호 301호</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
