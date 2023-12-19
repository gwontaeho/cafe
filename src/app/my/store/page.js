import Link from "next/link";

export default function MyStore() {
    return (
        <div>
            <div className="breadcrumbs">
                <Link href="/my">내 정보</Link>
                <span className="material-symbols-rounded">chevron_right</span>
                <p>내 매장</p>
            </div>
        </div>
    );
}
