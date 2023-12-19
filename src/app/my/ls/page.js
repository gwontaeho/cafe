import { Header, MyPostList } from "@/components/mobile";

export default function Longs() {
    return (
        <div className="page">
            <Header title="구인공고 관리" add="/my/ls/add" />
            <MyPostList />
        </div>
    );
}
