````
npm i react-router react-router-dom

````

여러페이지가 있는 척 하는거기 때문에 새로고침하면 에러가 난다.
왜냐면 서버는 그 경로를 모르기때문에

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
    