import { RequestMethodType } from "./http-mock-factory";

type AllKeyOfType<T extends string | number, RES> = { [index in T]?: RES };

export const ServiceMock: AllKeyOfType<RequestMethodType, { [endPoint: string]: {} }> = {
  DELETE: {},
  PATCH: {},
  POST: {},
  PUT: {},
  GET: {},
};
