export const TIMES = Array(25)
    .fill(0)
    .flatMap((_, i) => [
        { label: `${i < 10 ? `0${i}` : i}:00`, value: i },
        { label: `${i < 10 ? `0${i}` : i}:30`, value: i + 0.5 },
    ])
    .slice(0, 49);

export const WAGE_MIN = 9620;

export const WAGE_TYPES = [
    { label: "시급", value: "H" },
    { label: "일급", value: "D" },
    { label: "주급", value: "W" },
    { label: "월급", value: "M" },
];

export const WAGE_TYPES_SHORT = [
    { label: "시급", value: "H" },
    { label: "일급", value: "D" },
];

export const USER_TYPES = [
    { label: "회원 구분을 선택해주세요", value: "" },
    { label: "카페", value: "S" },
    { label: "바리스타", value: "B" },
];

export const DAYS = [
    { label: "월", value: "0" },
    { label: "화", value: "1" },
    { label: "수", value: "2" },
    { label: "목", value: "3" },
    { label: "금", value: "4" },
    { label: "토", value: "5" },
    { label: "일", value: "6" },
];

export const GENDERS = [
    { label: "무관", value: "" },
    { label: "남", value: "M" },
    { label: "여", value: "F" },
];

export const PERSONNELS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const COUNTRIES = [
    "전체",
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "세종",
    "경기",
    "강원",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주",
];

export const BRANDS = [
    "개인",
    "스타벅스",
    "메가커피",
    "투썸플레이스",
    "컴포즈커피",
    "빽다방",
    "이디야",
    "할리스",
    "커피빈",
    "파스쿠찌",
    "폴바셋",
    "더벤티",
    "감성커피",
    "커피나무",
    "엔제리너스",
    "하삼동커피",
    "매머드커피",
    "달콤커피",
    "탐앤탐스",
    "카페베네",
    "커피베이",
    "드롭탑",
    "커피스미스",
    "커피에반하다",
    "만랩커피",
    "커피명가",
    "더카페",
    "커피마마",
    "셀렉토커피",
    "빈스빈스",
    "토프레소",
    "그라찌에",
    "더착한커피",
    "전광수커피",
    "카페보니또",
    "기타",
];

export const METHODS = [
    { label: "전화", value: "T" },
    { label: "문자", value: "S" },
    { label: "이메일", value: "E" },
];
