"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildEndpoints = buildEndpoints;
exports.getActiveEndpoint = getActiveEndpoint;
exports.recordFailure = recordFailure;
exports.resetEndpoint = resetEndpoint;
var FAILURE_THRESHOLD = 3;
function buildEndpoints(urls) {
    return urls.map(function (url) { return ({ url: url, healthy: true, failureCount: 0 }); });
}
function getActiveEndpoint(endpoints) {
    var _a;
    return (_a = endpoints.find(function (e) { return e.healthy; })) !== null && _a !== void 0 ? _a : null;
}
function recordFailure(endpoints, url) {
    var ep = endpoints.find(function (e) { return e.url === url; });
    if (!ep)
        return;
    ep.failureCount++;
    if (ep.failureCount >= FAILURE_THRESHOLD)
        ep.healthy = false;
}
function resetEndpoint(endpoints, url) {
    var ep = endpoints.find(function (e) { return e.url === url; });
    if (!ep)
        return;
    ep.healthy = true;
    ep.failureCount = 0;
}
