import type {
    GetStaticProps,
    GetStaticPropsContext,
    InferGetStaticPropsType,
    NextPage,
    PreviewData
} from "next";
import {ParsedUrlQuery} from "querystring";
import {fetchNames} from "../utils/fetch-names";

type responseItemType = {
    id: string;
    name: string;
};

const NameSSG: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
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
// marked as ssg when exporting getStaticProps
export const getStaticProps: GetStaticProps = async (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
    let names: responseItemType[] | [] = [];
    try {
        names = await fetchNames();
    } catch(err) { console.log(err) }
    return {
        props: {
            names,
            revalidate: 30 // incremental static regeneration
        }
    };
};

export default NameSSG;