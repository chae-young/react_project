import {useContext} from 'react'
import { FormContext } from '../context/context';

export default function UserInfoStep() {
    const {formData, onChangeId} = useContext(FormContext)

    // formData에는 onChangeId가 없습니다. provider에서 꺼내서 써야 합니다.
    return <input value={formData.id} onChange={onChangeId} />;
}