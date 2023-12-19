import Link from "next/link";

export default function Talks() {
    return (
        <div className="flex-1">
            <header className="border-b h-20 items-center flex px-5">
                <h1>톡</h1>
            </header>
            <div className="max-w-screen-md">
                <div className="p-5 flex justify-between">
                    <select className="select">
                        <option>전체</option>
                        <option>점주</option>
                        <option>바리스타</option>
                    </select>
                    <Link href="/talks/write">
                        <button className="button">글쓰기</button>
                    </Link>
                </div>
                <main className="p-5">
                    <Link href={`/talks/1`}>
                        <div className="px-3 py-5 flex items-center justify-between hover:bg-gray-50 border-b">
                            <div className="flex items-center">
                                <p>게시글 제목입니다.</p>
                                <p className="text-xs text-gray-500 ml-1">1시간</p>
                            </div>
                            <div className="flex items-center justify-between text-gray-500">
                                <span className="material-symbols-rounded">mode_comment</span>
                                <p className="w-10 ml-1 text-sm">13</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/talks/1`}>
                        <div className="px-3 py-5 flex items-center justify-between hover:bg-gray-50 border-b">
                            <div className="flex items-center">
                                <p>게시글 제목입니다.</p>
                                <p className="text-xs text-gray-500 ml-1">1시간</p>
                            </div>
                            <div className="flex items-center justify-between text-gray-500">
                                <span className="material-symbols-rounded">mode_comment</span>
                                <p className="w-10 ml-1 text-sm">13</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/talks/1`}>
                        <div className="px-3 py-5 flex items-center justify-between hover:bg-gray-50 border-b">
                            <div className="flex items-center">
                                <p>게시글 제목입니다.</p>
                                <p className="text-xs text-gray-500 ml-1">어제</p>
                            </div>
                            <div className="flex items-center justify-between text-gray-500">
                                <span className="material-symbols-rounded">mode_comment</span>
                                <p className="w-10 ml-1 text-sm">13</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/talks/1`}>
                        <div className="px-3 py-5 flex items-center justify-between hover:bg-gray-50 border-b">
                            <div className="flex items-center">
                                <p>게시글 제목입니다.</p>
                                <p className="text-xs text-gray-500 ml-1">23.05.06</p>
                            </div>
                            <div className="flex items-center justify-between text-gray-500">
                                <span className="material-symbols-rounded">mode_comment</span>
                                <p className="w-10 ml-1 text-sm">13</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/talks/1`}>
                        <div className="px-3 py-5 flex items-center justify-between hover:bg-gray-50 border-b">
                            <div className="flex items-center">
                                <p>게시글 제목입니다.</p>
                                <p className="text-xs text-gray-500 ml-1">23.05.06</p>
                            </div>
                            <div className="flex items-center justify-between text-gray-500">
                                <span className="material-symbols-rounded">mode_comment</span>
                                <p className="w-10 ml-1 text-sm">13</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/talks/1`}>
                        <div className="px-3 py-5 flex items-center justify-between hover:bg-gray-50 border-b">
                            <div className="flex items-center">
                                <p>게시글 제목입니다.</p>
                                <p className="text-xs text-gray-500 ml-1">23.05.06</p>
                            </div>
                            <div className="flex items-center justify-between text-gray-500">
                                <span className="material-symbols-rounded">mode_comment</span>
                                <p className="w-10 ml-1 text-sm">13</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={`/talks/1`}>
                        <div className="px-3 py-5 flex items-center justify-between hover:bg-gray-50 border-b">
                            <div className="flex items-center">
                                <p>게시글 제목입니다.</p>
                                <p className="text-xs text-gray-500 ml-1">23.05.06</p>
                            </div>
                            <div className="flex items-center justify-between text-gray-500">
                                <span className="material-symbols-rounded">mode_comment</span>
                                <p className="w-10 ml-1 text-sm">13</p>
                            </div>
                        </div>
                    </Link>
                </main>
            </div>
        </div>
    );
}
