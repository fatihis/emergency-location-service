import Joi from "joi";
import { locationScheme } from "../models/schemas/locationsScheme";

export const isLocationObject = function (_locationObject) {
    return new Promise ((resolve, reject) => {
    Joi.validate(_locationObject, locationScheme); 
})}