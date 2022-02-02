import Document, {HTML, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document{
    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps}
    }
    render(){
        return(
            <HTML>
                <Head>
                    <body>
                        <Main>
                            <NextScript />
                        </Main>
                    </body>
                </Head>
            </HTML>
        )
    }
}

export default MyDocument;