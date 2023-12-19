"use client";
import dayjs from "dayjs";

export default function Baristas() {
    return (
        <main className="flex justify-center">
            <div className="w-full max-w-screen-">
                <div className="flex space-x-5">
                    <div className="p-5 flex-[2] bg-gray-50 rounded border">
                        <table className="w-full">
                            <thead className="bg-gray-100">
                                <tr className="border [&>*]:p-5 [&>*]:border [&>*]:text-left">
                                    <th>브랜드</th>
                                    <th>경력</th>
                                    <th>직급</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border [&>*]:p-5 [&>*]:border">
                                    <td>빽다방</td>
                                    <td>2년 3개월</td>
                                    <td>바리스타</td>
                                </tr>
                                <tr className="border [&>*]:p-5 [&>*]:border">
                                    <td>투썸플레이스</td>
                                    <td>3년 1개월</td>
                                    <td>매니저</td>
                                </tr>
                                <tr className="border [&>*]:p-5 [&>*]:border">
                                    <td>월</td>
                                    <td>12:00 ~ 18:00</td>
                                    <td>점장</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="p-5 border flex-[1] border-t-yellow-500">
                        <h2 className="mb-10">박OO</h2>
                        <div className="space-y-3 mb-10">
                            <div className="flex">
                                <p className="w-20 text-gray-500">연락처</p>
                                <p>010 4090 0734</p>
                            </div>
                            <div className="flex">
                                <p className="w-20 text-gray-500">지역</p>
                                <p>대전</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
