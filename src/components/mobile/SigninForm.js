"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { signin } from "@/apis";

export const SigninForm = () => {
    const {
        register,
        setValue,
        getValues,
        handleSubmit,
        watch,
        formState: { isDirty },
    } = useForm();

    const { mutate } = useMutation({
        mutationFn: signin,
        onSuccess: () => {
            location.href = location.origin + "/my";
        },
    });

    const onSubmit = (data) => {
        mutate(data);
    };

    return (
        <form className="p-5 space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <p className="mb-1.5 text-xs">아이디</p>
                <input className="input mb-5" {...register("account", { required: true, maxLength: 10 })} maxLength={10} />
                <p className="mb-1.5 text-xs">비밀번호</p>
                <input className="input" type="password" {...register("password", { required: true, maxLength: 20 })} maxLength={20} />
            </div>
            <button className="button">로그인</button>
            <Link href="/signup" className="block">
                <button type="button" className="button">
                    회원가입
                </button>
            </Link>
        </form>
    );
};
