import { Header, MyShortList } from "@/components/mobile";

export default function Shorts() {
    return (
        <div className="page">
            <Header title="일일공고 관리" add="/my/ss/add" />
            <MyShortList />
        </div>
    );
}
