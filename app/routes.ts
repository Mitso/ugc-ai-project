import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
    index('./views/Home.tsx'),
    ...(await flatRoutes({
        ignoredRouteFiles: [
            './views'
        ],
        rootDirectory: "./pages",
    })),
] satisfies RouteConfig;