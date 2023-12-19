"use client";
import { useRouter } from "next/navigation";

export const Header = ({ title, add }) => {
    const router = useRouter();

    const handleClickBack = () => {
        router.back();
    };

    const handleClickAdd = () => {
        router.push(add);
    };

    return (
        <header className="header sticky top-0 bg-white">
            <button className="material-symbols-rounded" onClick={handleClickBack}>
                arrow_back
            </button>
            <h1 className="flex-1">{title}</h1>
            {add && (
                <button className="material-symbols-rounded" onClick={handleClickAdd}>
                    add
                </button>
            )}
        </header>
    );
};
