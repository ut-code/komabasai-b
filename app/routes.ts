import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("stages", "routes/stages.tsx"),
] satisfies RouteConfig;
