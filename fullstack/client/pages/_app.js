import "./index.scss";

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

App.getinitialProps = async ({ ctx, Component }) => {
    const pageProps = await Component.getinitialProps?.(ctx);
    return { pageProps };
};

export default App;
