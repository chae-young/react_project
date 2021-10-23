import { useState, useCallback, useEffect } from "react";

//데이터 배열, 데이터 제한 갯수, 페이지 최대 갯수
const usePagination = (data, dataLimit, pageLimit) => {
    //현재 페이지
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / dataLimit);
    const currentData = () => {
        const currentPageNum = currentPage - 1;
        const start = currentPageNum * dataLimit;
        const end = dataLimit * (currentPageNum + 1);
        //console.log(start, end);
        return data.slice(start, end);
    };

    // 1,2,3,4,5
    // 1,2,3,4,5
    // 1,2,3,4,5
    // 2,3,4,5,6
    // 3,4,5,6,7
    // 7,8,9,10

    // 10페이지라면 5페이지 까지 나오도록한다 1,2,3,4,5
    //
    // 커런트페이지가 4면 한칸씩 증가된다 2,3,4,5,6

    const getPageRender = useCallback(() => {
        let items = [];
        let start = 1;
        if (currentPage > 3) start = currentPage - 2;
        let limit = 5;
        if (limit > maxPage || currentPage + 2 > maxPage) {
            limit = maxPage; // 5 미만
        } else if (currentPage > 3) {
            limit = currentPage + 2;
        }
        //if (currentPage > 3)

        for (let i = start; i <= limit; i++) {
            items.push(<span>{i}</span>);
        }
        return items;
    }, [currentPage]);

    const onClickPrev = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const onClickNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, maxPage));
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
