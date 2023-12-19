import dayjs from "dayjs";

export const CreatedAt = ({ createdAt, className }) => {
    const dayjsC = dayjs(createdAt);
    const diff = dayjs().diff(dayjsC, "d");

    const text = () => {
        if (diff > 14) return dayjsC.format("YYYY. MM. DD");
        if (diff > 0) return `${diff}일 전`;
        const diff_h = dayjs().diff(dayjsC, "h");
        if (diff_h > 0) return `${diff_h}시간 전`;
        const diff_m = dayjs().diff(dayjsC, "m");
        return `${diff_m}분 전`;
    };

    return <p className={className}>{text()}</p>;
};
