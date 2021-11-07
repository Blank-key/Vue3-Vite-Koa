/****
 * 环境变量的封装
 */

const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
    dev: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/c4752d558b8512d84953a85fa7c4dcc1/api'
    },
    test: {
        baseApi: '/',
        mockApi: ''
    },
    prod: {
        baseApi: '/',
        mockApi: ''
    },
}

export default {
    env,
    mock:true,
    ...EnvConfig[env]
}