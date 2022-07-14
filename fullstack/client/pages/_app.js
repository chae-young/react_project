import "./index.scss"

const App = ({Component, pageProps}) => (
    <Component {...pageProps}/>
)


App.getInitialProps = async({ctx, Component}) => {
    const pageProps = await Component.getInitialProps?.(ctx)
    console.log(pageProps )
    return { pageProps }
}

export default App