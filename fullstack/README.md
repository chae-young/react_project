```
yarn init -y

```

```
실행

yarn run client

```

### app.js

component => 현재활성 컴포넌트, 페이지 이동마다 컴포넌트가 해당 페이지의 컴포넌트로 변환
pageprops => 데이터 패치, 페이지에 미리 로드된 props , 없으면 빈 객체

```
App.getinitialProps = async ({ ctx, Component }) => {
    const pageProps = await Component.getinitialProps?.(ctx);
    return { pageProps };
};

```

-   컴포넌트 별로 getinitalprops가 정의되어있을때 컴포넌트를 넘겨서 리턴 pageprops를 받는다
