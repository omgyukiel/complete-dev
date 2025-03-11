import type {
    GetServerSideProps,
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
    NextPage,
    PreviewData
} from "next";
import {ParsedUrlQuery} from "querystring";
import {fetchNames} from "../utils/fetch-names";

type responseItemType = {
    id: string;
    name: string;
};

const NameSSR: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const output = props.names.map((item: responseItemType, idx: number) => {
        return (
            <li key={`name-${idx}`}>
                {item.id} : {item.name}
            </li>
        )
    })

    return (
        <ul>
            {output}
        </ul>
    )
}
// next.js will automatically configure the page as SSR enabled when exporting getServerSideProps for a  page
export const getServerSideProps: GetServerSideProps = async (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
    let names: responseItemType[] | [] = [];
    try {
        names = await fetchNames();
    } catch(err) { console.log(err) }
    return {
        props: {
            names
        }
    };
};

export default NameSSR