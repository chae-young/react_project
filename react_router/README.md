````
npm i react-router react-router-dom

````



1. Route

````
<Route path="경로이름" element={불러올 컴포넌트}></Route>
````
````
<Routes>
    <Route path="/" element={<App />} />
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />} />
</Routes>
````
Link 컴포넌트는 route를 불러온다
    

2. browserRouter hashRouter

browserRouter : 여러페이지가 있는 척 하는거기 때문에 새로고침하면 에러가 난다.
왜냐면 서버는 그 경로를 모르기때문에

| - |browserRouter|hashRouter|
|------|------|---|
|새로고침|x|o|
|검색엔진|o(서버 세팅 필요)|x|


3. 동적라우팅
Route는 하나로 두고 컴포넌트를 만들어서 화면을 구분한다!
path 에 파라미터를 넣어서 화면 이동!

