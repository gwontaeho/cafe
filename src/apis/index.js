import axios from "axios";
import { getCookie } from "cookies-next";

const instance = axios.create({ baseURL: "/api" });
instance.interceptors.request.use((config) => {
    const token = getCookie("token");
    if (!!token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

/**
 * 회원가입
 */
export const signup = async (values) => {
    const { data } = await instance.post("/signup", values);
    return data;
};

/**
 * 로그인
 */
export const signin = async (values) => {
    const { data } = await instance.post("/signin", values);
    return data;
};

/**
 * 유저 조회
 */
export const getUser = async () => {
    const { data } = await instance.get("/users");
    return data;
};

/**
 * 공고 등록
 */
export const createPost = async (values) => {
    const { data } = await instance.post("/posts", values);
    return data;
};

/**
 * 구인공고 목록 조회
 */
export const getLongs = async ({ page, perPage, country }) => {
    const { data } = await instance.get(`/posts/longs?page=${page}&perPage=${perPage}&country=${country}`);
    return data;
};

/**
 * 일일공고 목록 조회
 */
export const getShorts = async ({ page, perPage, country }) => {
    const { data } = await instance.get(`/posts/shorts?page=${page}&perPage=${perPage}&country=${country}`);
    return data;
};

/**
 * 구인공고 목록 조회 (카페 회원)
 */
export const getMyLongs = async () => {
    const { data } = await instance.get("/posts/my-longs");
    return data;
};

/**
 * 일일공고 목록 조회 (카페 회원)
 */
export const getMyShorts = async () => {
    const { data } = await instance.get("/posts/my-shorts");
    return data;
};

/**
 * 공고 삭제
 */
export const deletePost = async (id) => {
    const { data } = await instance.delete(`/posts/${id}`);
    return data;
};

/**
 * 공고 조회
 */
export const getPost = async (id) => {
    const { data } = await instance.get(`/posts/${id}`);
    return data;
};

/**
 * 경력 추가
 */
export const createCareer = async (values) => {
    const { data } = await instance.post("/careers", values);
    return data;
};

/**
 * 경력 삭제
 */
export const deleteCareer = async (id) => {
    const { data } = await instance.delete(`/careers/${id}`);
    return data;
};

/**
 * 경력 조회
 */
export const getCareers = async () => {
    const { data } = await instance.get("/careers");
    return data;
};

/**
 * 매장 목록
 */
export const getStores = async () => {
    const { data } = await instance.get("/stores");
    return data;
};
