/**
 * @jest-environment node
 */

import { act, create } from "react-test-renderer";
import PageComponentWeather from "../../../src/pages/components/weather";

describe("PageComponentWeather",  () => {
    test("renders correctly", async () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let component: any;
        await act(async () => {
            component = await create(<PageComponentWeather></PageComponentWeather>)
        });

        expect(component.toJSON()).toMatchSnapshot();
    })
});