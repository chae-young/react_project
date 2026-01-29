import {useState} from 'react'
import { FormContext } from './context';



export default function FormProvider({children}) {
    const [formData, setFormData] = useState({ id: "", email: "" });

    const onChangeId = (e) => {
        setFormData({...formData, id: e.target.value})
    }

    const value = {
        formData,
        onChangeId
    }

    return (
        <FormContext.Provider value={value}>{children}</FormContext.Provider>
    )
}