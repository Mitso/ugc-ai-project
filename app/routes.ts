import { type RouteConfig, index, layout } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
    layout('./Layout.tsx', [
        index('./Home.tsx'),
        ...(await flatRoutes({
            rootDirectory: "./pages",
        }))
    ])
    
] satisfies RouteConfig;