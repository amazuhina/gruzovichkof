import { Provider } from 'react-redux';
import store from '../redux/store';
import './style.css';
import Head from 'next/head';
import Header from '../components/Header';



function MyApp({Component, pageProps}) {

    return (
        <>
            <Head>
                <title>Грузовичкоф</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
            </Head>
            <Provider store={store}>
                <Header/>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}

export default MyApp;
