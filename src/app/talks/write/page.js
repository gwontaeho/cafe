import Link from "next/link";

export default function Write() {
    return (
        <div className="flex-1">
            <header className="border-b h-20 items-center flex px-5">
                <h1>톡</h1>
                <span className="material-symbols-rounded">chevron_right</span>
                <h2>글쓰기</h2>
            </header>
            <main className="p-5 max-w-screen-md">
                <form className="flex flex-col space-y-5">
                    <input className="input" />
                    <textarea className="textarea h-80" />
                </form>
            </main>
        </div>
    );
}
