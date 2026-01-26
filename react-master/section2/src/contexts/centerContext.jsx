import  {useState} from 'react'
import { CenterContext } from './contexts'

export function CenterProvider({children}) {
    const [lostItems, setLostItems] = useState(['지갑', '에어팟']);

    // 분식물 신고
    const reportLost = (item) => setLostItems(prev => [...prev, item]);

    // 물건 찾기
    const claimItem = (item) => setLostItems(prev => prev.filter((i) => i !== item))

    const systemValue = {lostItems, claimItem, reportLost}

    return (
        <CenterContext.Provider value={systemValue}>
            {children}
        </CenterContext.Provider>
    )
}

