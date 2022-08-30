실행
````
yarn run server
yarn run client
````

<br/>

## client

````
yarn init -y

````
workspace 확인

````
react react-dom next axios

yarn add --dev webpack@4 // next에 맞는 버전
````

-client 에서 next start
-루트에서 client 실행시 next 실행

<br/>

## server

````
yarn add express cors uuid
yarn add --dev nodemon //서버 자동화 해주는거
````
-"type":"module" 문법 추가해줘야 es6모듈 문법 사용가능


````javascript
app[method](route,handler)

app.get('/',(req,res) => { // 루트안에 메소드가 들어감.
    res.send('ok)
})
````