import type { NextPage } from 'next';
import Head from "next/head";

const Hello: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Hello SEO World</title>
                <meta  property="og:title" content="Hello World" key="title" />
            </Head>
            <div className="hello">Hello World!</div>);
        </div>
    );
};

export default Hello;