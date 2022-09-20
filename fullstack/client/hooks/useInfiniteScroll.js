import { useCallback, useEffect, useRef, useState } from "react"

const useInfiniteScroll = targetEl => {
    const observerRef = useRef(null)
    const [intersecting,setIntersecting] = useState(false)


    const getObserver = useCallback(()=>{
        if(!observerRef.current){//함수가 실행은 되지만 최초실행시 반환
            observerRef.current = new IntersectionObserver(entries => setIntersecting(
                
                entries.some(entry=>entry.isIntersecting)
            ))
        }
        //이후에는 만들어진 observe가 반환됨.
        return observerRef.current
    },[observerRef.current])

    useEffect(()=>{

        if(targetEl.current) {

            getObserver().observe(targetEl.current)              
        }  

        return () => {
            getObserver().disconnect()
        }
    },[targetEl.current])

    return intersecting
}

export default useInfiniteScroll