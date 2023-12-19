import { ShortList, Tabs } from "@/components/mobile";

export default function Shorts() {
    return (
        <div className="page pb-14">
            <header className="header">
                <h1>일일공고</h1>
            </header>
            <ShortList />
            <Tabs />
        </div>
    );
}
