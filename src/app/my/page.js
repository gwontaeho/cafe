import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { MyInfo, Tabs } from "@/components/mobile";

export default function My() {
    const cookie = cookies();
    const isSigned = !!cookie.get("token");

    if (!isSigned) redirect("/signin");

    return (
        <div className="page pb-14">
            <header className="header">
                <h1>내 정보</h1>
            </header>
            <MyInfo />
            <Tabs />
        </div>
    );
}
