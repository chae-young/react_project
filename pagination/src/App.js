import "./App.css";
import usePagination from "./usePagination";

const ListArr = [
    "1",
    "dd",
    "sdfs",
    "dsf",
    "gg",
    "dd",
    "sdfs",
    "dsf",
    "gg",
    "dd",
    "2",
    "dsf",
    "gg",
    "dd",
    "sdfs",
    "dsf",
    "gg",
    "dd",
    "sdfs",
    "dsf",
    "3",
    "dd",
    "sdfs",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "4",
    "dd",
    "sdfs",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "5",
    "dd",
    "sdfs",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "6",
    "dd",
    "sdfs",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "7",
    "dd",
    "sdfs",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "8",
    "dd",
    "sdfs",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "9",
    "dd",
    "sdfs",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
    "dsf",
];

function App() {
    const PaginationData = usePagination(ListArr, 10, 5);

    return (
        <>
            <ul>
                {PaginationData.currentData().map((v) => (
                    <li>{v}</li>
                ))}
            </ul>
            <div>
                <button onClick={PaginationData.onClickPrev}>이전</button>
                {PaginationData.getPageRender()}
                <button onClick={PaginationData.onClickNext}>다음</button>
            </div>
        </>
    );
}

export default App;
