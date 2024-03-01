import { RequestMethodType } from "./http-mock-factory";

type AllKeyOfType<T extends string | number, RES> = { [index in T]?: RES };

export const ServiceMock: AllKeyOfType<RequestMethodType, { [endPoint: string]: {} }> = {
  DELETE: {},
  PATCH: {},
  POST: {
    'v1/login': {
      access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJzYW11ZWxldmFsZW50ZUBnbWlsLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.euOZcrWS2He94_hHVTc8MKo5hKq7K80yIDMYtygjqcA",
      expires_in: 934,
      name: "Samuele",
      surname: "Valente",
      email: "samuelevalente@gmail.com",
      link_img: "" 
    }
  },
  PUT: {},
  GET: {},
};
