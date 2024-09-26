
import {createRouter, defineRoute} from "type-route";
import {makeThisModuleAnExecutableRouteLister} from "github-pages-plugin-for-type-route";


export const routeDefs = {
	"home": defineRoute("/MESAHub.github.io.git"),
	"pageExample": defineRoute("/page-example"),
};

makeThisModuleAnExecutableRouteLister(routeDefs);

export const {RouteProvider, routes, useRoute} = createRouter(
	routeDefs
);

	