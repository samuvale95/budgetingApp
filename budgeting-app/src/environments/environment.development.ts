import { MockInterceptorProvider } from "../mock/mock.component";


export const environment = {
    production: false,
    mockEnable: true
};

export const devDep = [
    environment.mockEnable ? MockInterceptorProvider : null
];