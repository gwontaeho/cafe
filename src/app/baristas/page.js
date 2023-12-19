import dayjs from "dayjs";
import Link from "next/link";
import { COUNTRIES } from "@/constants";

export default function Baristas() {
    return (
        <div>
            <div className="flex h-14 items-center px-5 text-xs bg-white rounded-b-xl border-b [&>span]:text-sm">
                <h1>바리스타</h1>
            </div>

            <div>
                <div className="p-3"></div>
                <ul className="space-y-3">
                    <li className="bg-white border-y">
                        <Link href={`/`}>
                            <div className="p-5 space-y-3">
                                <p className="text-sm text-center">이력서 제목입니다</p>
                                <div className="flex text-xs [&>div]:flex [&>div]:flex-col [&>div]:flex-1 [&>div]:items-center [&_span]:text-gray-500">
                                    {/* <div>
                                        <span>성별</span>
                                        <p>남</p>
                                    </div> */}
                                    <div>
                                        <span>나이</span>
                                        <p>23세(남)</p>
                                    </div>
                                    <div>
                                        <span>경력</span>
                                        <p>1년 2개월</p>
                                    </div>
                                    <div>
                                        <span>지역</span>
                                        <p>대전</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
