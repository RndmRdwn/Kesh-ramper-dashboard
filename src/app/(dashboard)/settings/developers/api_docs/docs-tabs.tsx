import Authentication from "./components/authentication";
import Endpoints from "./components/endpoints";
import APIErrors from "./components/errors";
import Overview from "./components/overview";
import RateLimits from "./components/rate_limits";
import Webhooks from "./components/webhooks";

export const docsTabs = [
    { id: "1", components: <Overview />, value: 'overview', name: 'Overview' },
    { id: "2", components: <Authentication />, value: 'authentication', name: 'Authentication' },
    { id: "3", components: <Endpoints />, value: 'endpoints', name: 'Endpoints' },
    { id: "4", components: <APIErrors />, value: 'errors', name: 'API Errors' },
    { id: "5", components: <Webhooks />, value: 'webhooks', name: 'Webhooks' },
    { id: "6", components: <RateLimits />, value: 'rate_limits', name: 'Rate Limits' },
]
