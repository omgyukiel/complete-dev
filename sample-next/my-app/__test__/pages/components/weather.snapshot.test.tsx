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

    test("clicks the h1 element and updates the state", async () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let component: any;
        await act(async () => {
            component = await create(<PageComponentWeather></PageComponentWeather>);
        })
        await act(async () => {
            component.root.findByType("h1").props.onClick();
        })
        expect(component.toJSON()).toMatchSnapshot();
    });
});