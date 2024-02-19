import { MockComponent } from "../mock/mock.component";


export const environment = {
    production: false,
    mockEnable: true
};

export const devDep = [
    environment.mockEnable ? MockComponent : null
];