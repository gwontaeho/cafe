import Link from "next/link";

export const Tabs = () => {
    return (
        <nav className="fixed bottom-0 w-full max-w-screen-md">
            <ul className="border-x border-t flex bg-white h-14 w-full text-xs [&>li]:flex-1 [&_a]:flex [&_a]:h-full [&_a]:justify-center [&_a]:items-center">
                <li>
                    <Link href="/">홈</Link>
                </li>
                <li>
                    <Link href="/shorts">일일공고</Link>
                </li>
                <li>
                    <Link href="/posts">구인공고</Link>
                </li>
                <li>
                    <Link href="/talks">톡</Link>
                </li>
                <li>
                    <Link href="/my">내정보</Link>
                </li>
            </ul>
        </nav>
    );
};
