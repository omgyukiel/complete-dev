/**
 * @jest-environment node
 */
import { WeatherInterface } from "../../../mongoose/weather/interface";
import {
    findByZip,
    storeDocument,
    updateByZip,
    deleteByZip,
} from "../../../mongoose/weather/service";

import WeatherModel from "../../../mongoose/weather/model";
jest.mock("../../../mongoose/weather/model");

describe("the weather services", () => {
    const doc: WeatherInterface = {
        zip: "test",
        weather: "weather",
        tempC: "00",
        tempF: "01",
        friends: []
    };

    afterEach(async () => {
        jest.restoreAllMocks();
    })

    describe("API storeDocument", () => {
        test("returns true", async () => {
            const result = await storeDocument(doc);
            expect(result).toBeTruthy();
        });
        test("passes the document to Model.create()", async () => {
            const spy = jest.spyOn(WeatherModel, "create");
            await storeDocument(doc);
            expect(spy).toHaveBeenCalledWith(doc);
        });
    });

    describe("API findByZip", () => {
        test("returns true", async () => {
            const result = await findByZip(doc.zip);
            expect(result).toBeTruthy();
        })
        test("passes the zip code to Model.findOne()", async () => {
            const spy = jest.spyOn(WeatherModel, "findOne");
            await findByZip(doc.zip);
            expect(spy).toHaveBeenCalledWith({ zip: doc.zip });
        });
    });

    describe("API updatesByZip", () => {
        test("returns true", async() => {
            const result = await updateByZip(doc.zip, doc);
            expect(result).toBeTruthy();
        });
        test("passes teh zip code and the new data to the Model.updateOne()", async() => {
            const spy = jest.spyOn(WeatherModel, "updateOne");
            await updateByZip(doc.zip, doc);
            expect(spy).toHaveBeenCalledWith({ zip: doc.zip }, doc);
        });
    });

    describe("API deleteByZip", () => {
        test("returns true", async () => {
            const result = await deleteByZip(doc.zip);
            expect(result).toBeTruthy();
        });
        test("passes the zip code Model.deleteOne()", async () => {
            const spy = jest.spyOn(WeatherModel, "deleteOne");
            await deleteByZip(doc.zip);
            expect(spy).toHaveBeenCalledWith({ zip: doc.zip });
        });
    });
});