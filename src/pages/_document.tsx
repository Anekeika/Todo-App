import {Head, Main, NextScript} from 'next/document';

const MyDoc = () =>{

        return (
            <html lang="ru">
            <Head>
                <title>Todo App</title>
                <meta name="description" content="Todo App"/>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="icon" type="image/x-icon" href="/public/favicon.png"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
}

export default MyDoc