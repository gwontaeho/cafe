import { MyCareers } from "@/components/MyCareers";

export default function Careers() {
    return (
        <div className="flex-1">
            <header className="border-b h-20 items-center flex px-5">
                <h1>경력 관리</h1>
            </header>
            <main className="p-5 max-w-screen-md">
                <MyCareers />
            </main>
        </div>
    );
}
