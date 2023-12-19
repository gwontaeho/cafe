import { PostList, Tabs } from "@/components/mobile";

export default function Posts() {
    return (
        <div className="page pb-14">
            <header className="header">
                <h1>구인공고</h1>
            </header>
            <PostList />
            <Tabs />
        </div>
    );
}
