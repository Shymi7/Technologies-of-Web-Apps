import dataEndpoint from './data.endpoints';

const routes = function (router) {
    dataEndpoint(router);
};

export default routes;
