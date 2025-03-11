import type { NextPage } from 'next';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Hello: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Hello SEO World</title>
                <meta  property="og:title" content="Hello World" key="title" />
            </Head>
            <div className="hello">Hello World!</div>
            <div>
                Use the HTML anchor for an
                <a className="hello" href="https://nostarch.com" > external link </a>
                and the link component for an
                <Link className="hello" href="/components/weather"> internal page</Link>.
                <Image 
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    width={72}
                    height={16}
                />
            </div>
        </div>
    );
};

export default Hello;