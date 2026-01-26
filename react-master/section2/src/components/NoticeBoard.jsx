import {useContext} from 'react'
import { NoticeContext } from "../contexts/contexts";

export function NoticeBoard() {
    const notice = useContext(NoticeContext);

    return (
        <div>아파트 공지: {notice}</div>
    )
}