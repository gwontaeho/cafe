"use client";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { PatternFormat, NumericFormat } from "react-number-format";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { Header } from "./Header";
import { signup } from "@/apis";
import { BRANDS } from "@/constants";

const Barista = () => {
    const open = useDaumPostcodePopup("https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");

    const { mutate } = useMutation({
        mutationFn: signup,
        onSuccess: () => {
            alert("회원가입이 완료되었습니다");
            location.href = location.origin + "/my";
        },
    });

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        formState: { errors, isDirty },
    } = useForm();
    const [b_nm] = watch(["b_nm"]);

    const onSubmit = (data) => {
        return console.log(data);
        mutate({ ...data, type: "S" });
    };

    const handleClickAdderss = () => {
        open({
            onComplete: ({ address, addressType, bname, buildingName, sido, sigungu }) => {
                let fullAddress = address;
                let extraAddress = "";

                if (addressType === "R") {
                    if (bname !== "") extraAddress += bname;
                    if (buildingName !== "") extraAddress += extraAddress !== "" ? `, ${buildingName}` : buildingName;
                    fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
                }

                if (window.kakao) {
                    kakao.maps.load(() => {
                        const geocoder = new kakao.maps.services.Geocoder();
                        geocoder.addressSearch(fullAddress, (result, status) => {
                            if (status === kakao.maps.services.Status.OK) {
                                setValue("longitude", result[0].x);
                                setValue("latitude", result[0].y);
                            }
                        });
                    });
                }

                setValue("address", fullAddress);
                setValue("sido", sido);
                setValue("sigungu", sigungu);
                setValue("bname", bname);
            },
        });
    };

    return (
        <form
            className="p-5 space-y-20  [&_fieldset]:space-y-7 [&_legend]:text-2xl [&_label]:block [&_label]:text-gray-500 [&_label]:text-xs [&_label]:mb-3"
            onSubmit={handleSubmit(onSubmit)}
        >
            <fieldset>
                <legend>회원정보 입력</legend>
                <div>
                    <label>아이디</label>
                    <input className="input" {...register("account", { required: true, maxLength: 10 })} maxLength={10} />
                </div>
                <div>
                    <label>비밀번호</label>
                    <input className="input mb-3" type="password" {...register("password", { required: true, maxLength: 20 })} maxLength={20} />
                    <input className="input" type="password" {...register("password_check", { required: true, maxLength: 20 })} maxLength={20} />
                </div>
                <div>
                    <label>연락처</label>
                    <NumericFormat
                        allowNegative={false}
                        allowLeadingZeros
                        decimalScale={0}
                        className="input"
                        onValueChange={({ value }) => setValue("contact", value)}
                        maxLength={20}
                    />
                </div>
                <div>
                    <label>이메일</label>
                    <input className="input" {...register("email", { maxLength: 40 })} maxLength={40} />
                </div>
            </fieldset>
            <button className="button w-full bg-white">회원가입</button>
        </form>
    );
};

const Store = () => {
    const open = useDaumPostcodePopup("https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");

    const [isValidated, setIsValidated] = useState(false);

    const { mutate } = useMutation({
        mutationFn: signup,
        onSuccess: () => {
            alert("회원가입이 완료되었습니다");
            location.href = location.origin + "/my";
        },
    });

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        formState: { errors, isDirty },
    } = useForm();
    const [b_nm] = watch(["b_nm"]);

    const onSubmit = (data) => {
        return console.log(data);
        mutate({ ...data, type: "S" });
    };

    const handleClick = async () => {
        const { b_nm, p_nm, start_dt, b_no } = getValues();
        const url = `https://api.odcloud.kr/api/nts-businessman/v1/validate?serviceKey=${process.env.NEXT_PUBLIC_SERVICE_KEY}`;

        try {
            const { data } = await axios.post(url, { businesses: [{ b_no, start_dt, p_nm, b_nm }] });
            if (data.valid_cnt !== 1 || data.data[0].valid !== "01") throw Error();
            setIsValidated(true);
        } catch (error) {
            return alert("사업자 정보를 정확히 입력해주세요");
        }
    };

    const handleClickAdderss = () => {
        open({
            onComplete: ({ address, addressType, bname, buildingName, sido, sigungu }) => {
                let fullAddress = address;
                let extraAddress = "";

                if (addressType === "R") {
                    if (bname !== "") extraAddress += bname;
                    if (buildingName !== "") extraAddress += extraAddress !== "" ? `, ${buildingName}` : buildingName;
                    fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
                }

                if (window.kakao) {
                    kakao.maps.load(() => {
                        const geocoder = new kakao.maps.services.Geocoder();
                        geocoder.addressSearch(fullAddress, (result, status) => {
                            if (status === kakao.maps.services.Status.OK) {
                                setValue("longitude", result[0].x);
                                setValue("latitude", result[0].y);
                            }
                        });
                    });
                }

                setValue("address", fullAddress);
                setValue("sido", sido);
                setValue("sigungu", sigungu);
                setValue("bname", bname);
            },
        });
    };

    return (
        <form
            className="p-5 space-y-20  [&_fieldset]:space-y-7 [&_legend]:text-2xl [&_label]:block [&_label]:text-gray-500 [&_label]:text-xs [&_label]:mb-3"
            onSubmit={handleSubmit(onSubmit)}
        >
            <fieldset>
                {isValidated && (
                    <>
                        <legend className="flex items-center">
                            사업자 인증 완료<span className="material-symbols-rounded ml-1 text-green-500">verified</span>
                        </legend>
                    </>
                )}

                {!isValidated && (
                    <>
                        <legend>사업자 인증</legend>
                        <div>
                            <label>상호</label>
                            <input className="input" {...register("b_nm", { maxLength: 20 })} maxLength={20} />
                        </div>
                        <div>
                            <label>대표자 이름</label>
                            <input className="input w-full" {...register("p_nm", { maxLength: 20 })} maxLength={20} />
                        </div>
                        <div>
                            <label>개업일자</label>
                            <PatternFormat
                                className="input"
                                format="#### ## ##"
                                placeholder="8자리"
                                onValueChange={({ value }) => setValue("start_dt", value)}
                            />
                        </div>
                        <div>
                            <label>사업자등록번호</label>
                            <PatternFormat
                                className="input w-full"
                                format="### ## #####"
                                placeholder="10자리"
                                onValueChange={({ value }) => setValue("b_no", value)}
                            />
                        </div>
                    </>
                )}
            </fieldset>
            {!isValidated && (
                <button type="button" className="button w-full bg-white" onClick={handleClick}>
                    인증하기
                </button>
            )}

            {isValidated && (
                <>
                    <fieldset>
                        <legend>회원정보 입력</legend>
                        <div>
                            <label>아이디</label>
                            <input className="input" {...register("account", { required: true, maxLength: 10 })} maxLength={10} />
                        </div>
                        <div>
                            <label>비밀번호</label>
                            <input className="input mb-3" type="password" {...register("password", { required: true, maxLength: 20 })} maxLength={20} />
                            <input className="input" type="password" {...register("password_check", { required: true, maxLength: 20 })} maxLength={20} />
                        </div>
                        <div>
                            <label>연락처</label>
                            <NumericFormat
                                allowNegative={false}
                                allowLeadingZeros
                                decimalScale={0}
                                className="input"
                                onValueChange={({ value }) => setValue("contact", value)}
                                maxLength={20}
                            />
                        </div>
                        <div>
                            <label>이메일</label>
                            <input className="input" {...register("email", { maxLength: 40 })} maxLength={40} />
                        </div>
                        <div>
                            <label>매장 주소</label>
                            <input className="input w-full mb-3" {...register("address", { required: true })} onClick={handleClickAdderss} readOnly />
                            <input className="input w-full" {...register("address_extra", { required: true })} maxLength={20} />
                        </div>
                        <div>
                            <label>브랜드</label>
                            <select className="select" {...register("brand", { required: true })}>
                                {BRANDS.map((value) => (
                                    <option key={`brand-${value}`} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </fieldset>
                    <button className="button w-full bg-white">회원가입</button>
                </>
            )}
        </form>
    );
};

export const SignupForm = () => {
    const [type, setType] = useState("");

    const types = { S: "카페", B: "바리스타" };
    const title = type === "" ? "회원가입" : `${types[type]} 회원가입`;
    // const title = "회원가입";

    return (
        <div className="page">
            <Header title={title} />

            {type === "" && (
                <div className="flex-1 flex flex-col justify-center p-5 space-y-5 text-sm">
                    <button className="border rounded-lg p-3" onClick={() => setType("S")}>
                        카페
                    </button>
                    <button className="border rounded-lg p-3" onClick={() => setType("B")}>
                        바리스타
                    </button>
                </div>
            )}

            {type === "S" && <Store />}
            {type === "B" && <Barista />}
        </div>
    );
};
