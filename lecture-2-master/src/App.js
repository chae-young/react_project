import React, { Suspense, useState, lazy, useEffect } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import InfoTable from './components/InfoTable'
import SurveyChart from './components/SurveyChart'
import Footer from './components/Footer'

//const LazyImageModal = lazy(() => import('./components/ImageModal'))

// 팩토리패턴
function lazyWithPreload(importFunction) {
    const Component = React.lazy(importFunction)
    Component.preload = importFunction
    return Component
}

// 초기에 동적으로 로딩후
const LazyImageModal = lazyWithPreload(() => import('./components/ImageModal'))

function App() {
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
        // 마운트시 import 해준다.
        // const component = import('./components/ImageModal')
        LazyImageModal.preload()
    },[])

    // const handleMouseEnter = () => {
    //     const component = import('./components/ImageModal')
    // }

    return (
        <div className="App">
            <Header />
            <InfoTable />
            <ButtonModal 
                onClick={() => { setShowModal(true)}}
                //onMouseEnter={handleMouseEnter}
            >올림픽 사진 보기</ButtonModal>
            <SurveyChart />
            <Footer />

            <Suspense fallback={null}>
                {showModal ? <LazyImageModal closeModal={() => { setShowModal(false) }} /> : null}
            </Suspense>
        </div>
    )
}

const ButtonModal = styled.button`
    border-radius: 30px;
    border: 1px solid #999;
    padding: 12px 30px;
    background: none;
    font-size: 1.1em;
    color: #555;
    outline: none;
    cursor: pointer;
`

export default App
