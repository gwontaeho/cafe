"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { DAYS, WAGE_TYPES, PERSONNELS, TIMES, WAGE_MIN, METHODS } from "@/constants";
import { createPost } from "@/apis";

export const LongWriteForm = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isDirty },
    } = useForm();

    useEffect(() => {
        if (isDirty) {
            const handleBeforeUnload = (e) => {
                e.preventDefault();
                e.returnValue = "";
            };
            window.addEventListener("beforeunload", handleBeforeUnload);
            return () => {
                window.removeEventListener("beforeunload", handleBeforeUnload);
            };
        }
    }, [isDirty]);

    const [title = "", content = ""] = watch(["title", "content"]);

    const wageRegister = register("wage", {
        required: true,
        min: WAGE_MIN,
        setValueAs: (v) => Number(v.replaceAll(",", "").replace(" 원", "")),
    });
    const contactRegister = register("contact", { required: true });

    const { mutate } = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            alert("공고가 등록되었습니다");
            router.replace("/my/ls");
        },
        onError: () => {
            alert("공고를 등록할 수 없습니다");
            router.replace("/my/ls");
        },
    });

    const onSubmit = (data) => {
        const { days, begin, end, methods } = data;
        const b = Number(begin);
        const e = Number(end);
        const hour = b < e ? e - b : 24 + (e - b);
        const variables = { ...data, days: days.join(","), hour, methods: methods.join(","), type: "L" };
        // return console.log(variables);
        mutate(variables);
    };

    return (
        <form
            className="p-5 space-y-20 [&_fieldset]:space-y-7 [&_legend]:text-2xl [&_label]:block [&_label]:text-gray-500 [&_label]:text-xs [&_label]:mb-3"
            onSubmit={handleSubmit(onSubmit)}
        >
            <fieldset>
                <legend>근무조건</legend>
                <div>
                    <label>근무날짜를 선택해주세요</label>
                    <div className="flex space-x-1.5">
                        {DAYS.map(({ label, value }) => (
                            <div key={`long-day-${value}`} className="flex-1">
                                <input
                                    className="peer"
                                    id={`long-days-checkbox-${value}`}
                                    type="checkbox"
                                    hidden
                                    {...register("days", { required: true })}
                                    value={value}
                                    aria-invalid={!!errors.days}
                                />
                                <label
                                    className="block text-sm text-center rounded border py-3 peer-checked:border-primary peer-aria-[invalid=true]:border-red-500"
                                    htmlFor={`long-days-checkbox-${value}`}
                                >
                                    {label}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {isDirty && (
                    <>
                        <div className="flex space-x-3 [&>div]:flex-1">
                            <div>
                                <label>근무시작</label>
                                <select className="select" {...register("begin")}>
                                    {TIMES.map(({ label, value }) => (
                                        <option key={`short-begin-${value}`} value={value}>
                                            {label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label>근무종료</label>
                                <select className="select" {...register("end")}>
                                    {TIMES.map(({ label, value }) => (
                                        <option key={`short-begin-${value}`} value={value}>
                                            {label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label>급여</label>
                            <div className="flex space-x-3 mb-3">
                                <select className="select" {...register("wage_type")}>
                                    {WAGE_TYPES.map(({ label, value }) => (
                                        <option key={`short-wage-${value}`} value={value}>
                                            {label}
                                        </option>
                                    ))}
                                </select>
                                <NumericFormat
                                    className="input"
                                    thousandSeparator=","
                                    allowNegative={false}
                                    decimalScale={0}
                                    suffix={" 원"}
                                    maxLength={9}
                                    getInputRef={wageRegister.ref}
                                    onChange={wageRegister.onChange}
                                    name={wageRegister.name}
                                    aria-invalid={!!errors.wage}
                                />
                            </div>
                            <div className="text-xs flex space-x-1.5 text-gray-500 [&>span]:text-xs">
                                <span className="material-symbols-rounded">info</span>
                                <p>2023년 최저시급은 {WAGE_MIN.toLocaleString()}원입니다</p>
                            </div>
                        </div>
                        <div>
                            <label>모집인원</label>
                            <select className="select" {...register("personnel")}>
                                {PERSONNELS.map((value) => (
                                    <option key={`short-personnel-${value}`} value={value}>
                                        {value} 명
                                    </option>
                                ))}
                            </select>
                        </div>
                    </>
                )}
            </fieldset>

            {isDirty && (
                <>
                    <fieldset>
                        <div className="flex justify-between">
                            <legend>모집내용</legend>
                            <button type="button" className="text-xs text-gray-500">
                                저장된 내용 불러오기
                            </button>
                        </div>
                        <div>
                            <label>제목</label>
                            <input
                                className="input"
                                aria-invalid={!!errors.title}
                                maxLength={30}
                                {...register("title", { required: true, maxLength: 30, minLength: 5 })}
                            />
                            <div className="flex justify-between mt-1">
                                <span className="text-xs text-red-500">{!!errors.title && "최소 5자 이상이어야 합니다"}</span>
                                <span className="text-xs text-gray-500">{`${title?.length} / 30`}</span>
                            </div>
                        </div>
                        <div>
                            <label>내용</label>
                            <textarea
                                className="textarea h-40"
                                aria-invalid={!!errors.content}
                                maxLength={1000}
                                {...register("content", { required: true, maxLength: 1000, minLength: 10 })}
                            />
                            <div className="flex justify-between mt-1">
                                <span className="text-xs text-red-500">{!!errors.content && "최소 10자 이상이어야 합니다"}</span>
                                <span className="text-xs text-gray-500 text-right">{`${content?.length} / 1000`}</span>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="flex justify-between">
                            <legend>담당자정보</legend>
                            <button type="button" className="text-xs text-gray-500">
                                저장된 정보 불러오기
                            </button>
                        </div>
                        <div>
                            <label>이름</label>
                            <input className="input" aria-invalid={!!errors.recruiter} maxLength={10} {...register("recruiter", { required: true })} />
                            {!!errors.recruiter && <span className="block mt-1 text-xs text-red-500">담당자 이름을 입력해주세요</span>}
                        </div>
                        <div>
                            <label>연락처</label>
                            <NumericFormat
                                className="input"
                                decimalScale={0}
                                allowNegative={false}
                                maxLength={20}
                                allowLeadingZeros
                                getInputRef={contactRegister.ref}
                                onChange={contactRegister.onChange}
                                name={contactRegister.name}
                                aria-invalid={!!errors.contact}
                            />
                            {!!errors.contact && <span className="block mt-1 text-xs text-red-500">담당자 연락처를 입력해주세요</span>}
                        </div>
                        <div>
                            <label>이메일</label>
                            <input className="input" aria-invalid={!!errors.email} maxLength={30} {...register("email", { required: true })} />
                            {!!errors.email && <span className="block mt-1 text-xs text-red-500">담당자 이메일을 입력해주세요</span>}
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>지원방법</legend>
                        <div>
                            <div className="flex space-x-3">
                                {METHODS.map(({ label, value }) => (
                                    <div key={`method-${value}`} className="flex-1">
                                        <input
                                            className="peer"
                                            id={`method-checkbox-${value}`}
                                            type="checkbox"
                                            hidden
                                            value={value}
                                            aria-invalid={!!errors.methods}
                                            {...register("methods", { required: true })}
                                        />
                                        <label
                                            className="text-center rounded border py-3 peer-checked:border-primary peer-checked:text-primary peer-aria-[invalid=true]:border-red-500"
                                            htmlFor={`method-checkbox-${value}`}
                                        >
                                            {label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            {!!errors.methods && <span className="block -mt-2 text-xs text-red-500">지원방법을 선택해주세요</span>}
                        </div>
                    </fieldset>
                    <button className="button">등록하기</button>
                </>
            )}
        </form>
    );
};
