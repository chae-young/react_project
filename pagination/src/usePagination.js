import { useState } from "react";

//데이터 배열, 데이터 제한 갯수, 페이지 최대 갯수
const usePagination = (data, dataLimit, pageLimit) => {
    //현재 페이지
    const [currentPage, setCurrentPage] = useState(0);
    const maxPage = Math.ceil(data.length / dataLimit);
    const currentData = () => {
        const start = currentPage * dataLimit;
        const end = dataLimit * (currentPage + 1);
        //console.log(datastart, end);
        return data.slice(start, end);
    };
    const onClickPrev = () => {
        setCurrentPage((prev) => prev - 1);
    };

    const onClickNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, maxPage - 1));
    };
    const getPageRender = () => {
        //new Array(page).fill().map((v, i) => 10-10 + i + 1);
        const pageArr = new Array(maxPage).fill().map((v, i) => i + 1);
        return pageArr;
    };

    return {
        currentData,
        onClickPrev,
        onClickNext,
        getPageRender,
        currentPage,
    };
};
export default usePagination;
