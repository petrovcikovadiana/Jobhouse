/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/posts/route";
exports.ids = ["app/api/posts/route"];
exports.modules = {

/***/ "better-sqlite3":
/*!*********************************!*\
  !*** external "better-sqlite3" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("better-sqlite3");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.js&appDir=%2FUsers%2Fdianapetrovcikova%2FWebdev%2Fnext%2Fdeep%20routing%20%2Frouting%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdianapetrovcikova%2FWebdev%2Fnext%2Fdeep%20routing%20%2Frouting&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.js&appDir=%2FUsers%2Fdianapetrovcikova%2FWebdev%2Fnext%2Fdeep%20routing%20%2Frouting%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdianapetrovcikova%2FWebdev%2Fnext%2Fdeep%20routing%20%2Frouting&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_dianapetrovcikova_Webdev_next_deep_routing_routing_app_api_posts_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/posts/route.js */ \"(rsc)/./app/api/posts/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/posts/route\",\n        pathname: \"/api/posts\",\n        filename: \"route\",\n        bundlePath: \"app/api/posts/route\"\n    },\n    resolvedPagePath: \"/Users/dianapetrovcikova/Webdev/next/deep routing /routing/app/api/posts/route.js\",\n    nextConfigOutput,\n    userland: _Users_dianapetrovcikova_Webdev_next_deep_routing_routing_app_api_posts_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwb3N0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcG9zdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwb3N0cyUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmRpYW5hcGV0cm92Y2lrb3ZhJTJGV2ViZGV2JTJGbmV4dCUyRmRlZXAlMjByb3V0aW5nJTIwJTJGcm91dGluZyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZkaWFuYXBldHJvdmNpa292YSUyRldlYmRldiUyRm5leHQlMkZkZWVwJTIwcm91dGluZyUyMCUyRnJvdXRpbmcmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2lDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvZGlhbmFwZXRyb3ZjaWtvdmEvV2ViZGV2L25leHQvZGVlcCByb3V0aW5nIC9yb3V0aW5nL2FwcC9hcGkvcG9zdHMvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Bvc3RzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcG9zdHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Bvc3RzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2RpYW5hcGV0cm92Y2lrb3ZhL1dlYmRldi9uZXh0L2RlZXAgcm91dGluZyAvcm91dGluZy9hcHAvYXBpL3Bvc3RzL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.js&appDir=%2FUsers%2Fdianapetrovcikova%2FWebdev%2Fnext%2Fdeep%20routing%20%2Frouting%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdianapetrovcikova%2FWebdev%2Fnext%2Fdeep%20routing%20%2Frouting&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/posts/route.js":
/*!********************************!*\
  !*** ./app/api/posts/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.js\");\n\nasync function POST(request) {\n    const body = await request.json();\n    const { location = [], salary, jobContract = [] } = body;\n    let whereClause = \"1=1\"; // Výchozí podmínka\n    const params = [];\n    // Filtrování podle lokace\n    if (location.length > 0) {\n        const placeholders = location.map(()=>\"?\").join(\", \");\n        whereClause += ` AND location IN (${placeholders})`;\n        params.push(...location);\n    }\n    // Filtrování podle platu\n    if (salary) {\n        whereClause += \" AND salary >= ?\";\n        params.push(salary);\n    }\n    // Filtrování podle typu smlouvy\n    if (jobContract.length > 0) {\n        const placeholders = jobContract.map(()=>\"?\").join(\", \");\n        whereClause += ` AND job_contract IN (${placeholders})`;\n        params.push(...jobContract);\n    }\n    const stmt = _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prepare(`\n    SELECT posts.id, image_url AS image, title, content, created_at AS createdAt, email AS userEmail, location, company, salary, job_contract AS jobContract,\n    COUNT(likes.post_id) AS likes,\n    EXISTS(SELECT * FROM likes WHERE likes.post_id = posts.id AND likes.user_id = 2) AS isLiked\n    FROM posts\n    INNER JOIN users ON posts.user_id = users.id\n    LEFT JOIN likes ON posts.id = likes.post_id\n    WHERE ${whereClause}\n    GROUP BY posts.id\n    ORDER BY createdAt DESC\n  `);\n    try {\n        const posts = stmt.all(...params);\n        return new Response(JSON.stringify(posts), {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Database query error:\", error);\n        return new Response(JSON.stringify({\n            error: \"Database query failed\"\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Bvc3RzL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBRW5CLGVBQWVDLEtBQUtDLE9BQU87SUFDaEMsTUFBTUMsT0FBTyxNQUFNRCxRQUFRRSxJQUFJO0lBQy9CLE1BQU0sRUFBRUMsV0FBVyxFQUFFLEVBQUVDLE1BQU0sRUFBRUMsY0FBYyxFQUFFLEVBQUUsR0FBR0o7SUFFcEQsSUFBSUssY0FBYyxPQUFPLG1CQUFtQjtJQUM1QyxNQUFNQyxTQUFTLEVBQUU7SUFFakIsMEJBQTBCO0lBQzFCLElBQUlKLFNBQVNLLE1BQU0sR0FBRyxHQUFHO1FBQ3ZCLE1BQU1DLGVBQWVOLFNBQVNPLEdBQUcsQ0FBQyxJQUFNLEtBQUtDLElBQUksQ0FBQztRQUNsREwsZUFBZSxDQUFDLGtCQUFrQixFQUFFRyxhQUFhLENBQUMsQ0FBQztRQUNuREYsT0FBT0ssSUFBSSxJQUFJVDtJQUNqQjtJQUVBLHlCQUF5QjtJQUN6QixJQUFJQyxRQUFRO1FBQ1ZFLGVBQWU7UUFDZkMsT0FBT0ssSUFBSSxDQUFDUjtJQUNkO0lBRUEsZ0NBQWdDO0lBQ2hDLElBQUlDLFlBQVlHLE1BQU0sR0FBRyxHQUFHO1FBQzFCLE1BQU1DLGVBQWVKLFlBQVlLLEdBQUcsQ0FBQyxJQUFNLEtBQUtDLElBQUksQ0FBQztRQUNyREwsZUFBZSxDQUFDLHNCQUFzQixFQUFFRyxhQUFhLENBQUMsQ0FBQztRQUN2REYsT0FBT0ssSUFBSSxJQUFJUDtJQUNqQjtJQUVBLE1BQU1RLE9BQU9mLCtDQUFFQSxDQUFDZ0IsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7VUFPakIsRUFBRVIsWUFBWTs7O0VBR3RCLENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTVMsUUFBUUYsS0FBS0csR0FBRyxJQUFJVDtRQUMxQixPQUFPLElBQUlVLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQ0osUUFBUTtZQUFFSyxRQUFRO1FBQUk7SUFDM0QsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3ZDLE9BQU8sSUFBSUosU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVFLE9BQU87UUFBd0IsSUFBSTtZQUN0RUQsUUFBUTtRQUNWO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2RpYW5hcGV0cm92Y2lrb3ZhL1dlYmRldi9uZXh0L2RlZXAgcm91dGluZyAvcm91dGluZy9hcHAvYXBpL3Bvc3RzL3JvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tIFwiQC9saWIvZGJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCkge1xuICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gIGNvbnN0IHsgbG9jYXRpb24gPSBbXSwgc2FsYXJ5LCBqb2JDb250cmFjdCA9IFtdIH0gPSBib2R5O1xuXG4gIGxldCB3aGVyZUNsYXVzZSA9IFwiMT0xXCI7IC8vIFbDvWNob3rDrSBwb2Rtw61ua2FcbiAgY29uc3QgcGFyYW1zID0gW107XG5cbiAgLy8gRmlsdHJvdsOhbsOtIHBvZGxlIGxva2FjZVxuICBpZiAobG9jYXRpb24ubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHBsYWNlaG9sZGVycyA9IGxvY2F0aW9uLm1hcCgoKSA9PiBcIj9cIikuam9pbihcIiwgXCIpO1xuICAgIHdoZXJlQ2xhdXNlICs9IGAgQU5EIGxvY2F0aW9uIElOICgke3BsYWNlaG9sZGVyc30pYDtcbiAgICBwYXJhbXMucHVzaCguLi5sb2NhdGlvbik7XG4gIH1cblxuICAvLyBGaWx0cm92w6Fuw60gcG9kbGUgcGxhdHVcbiAgaWYgKHNhbGFyeSkge1xuICAgIHdoZXJlQ2xhdXNlICs9IFwiIEFORCBzYWxhcnkgPj0gP1wiO1xuICAgIHBhcmFtcy5wdXNoKHNhbGFyeSk7XG4gIH1cblxuICAvLyBGaWx0cm92w6Fuw60gcG9kbGUgdHlwdSBzbWxvdXZ5XG4gIGlmIChqb2JDb250cmFjdC5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcGxhY2Vob2xkZXJzID0gam9iQ29udHJhY3QubWFwKCgpID0+IFwiP1wiKS5qb2luKFwiLCBcIik7XG4gICAgd2hlcmVDbGF1c2UgKz0gYCBBTkQgam9iX2NvbnRyYWN0IElOICgke3BsYWNlaG9sZGVyc30pYDtcbiAgICBwYXJhbXMucHVzaCguLi5qb2JDb250cmFjdCk7XG4gIH1cblxuICBjb25zdCBzdG10ID0gZGIucHJlcGFyZShgXG4gICAgU0VMRUNUIHBvc3RzLmlkLCBpbWFnZV91cmwgQVMgaW1hZ2UsIHRpdGxlLCBjb250ZW50LCBjcmVhdGVkX2F0IEFTIGNyZWF0ZWRBdCwgZW1haWwgQVMgdXNlckVtYWlsLCBsb2NhdGlvbiwgY29tcGFueSwgc2FsYXJ5LCBqb2JfY29udHJhY3QgQVMgam9iQ29udHJhY3QsXG4gICAgQ09VTlQobGlrZXMucG9zdF9pZCkgQVMgbGlrZXMsXG4gICAgRVhJU1RTKFNFTEVDVCAqIEZST00gbGlrZXMgV0hFUkUgbGlrZXMucG9zdF9pZCA9IHBvc3RzLmlkIEFORCBsaWtlcy51c2VyX2lkID0gMikgQVMgaXNMaWtlZFxuICAgIEZST00gcG9zdHNcbiAgICBJTk5FUiBKT0lOIHVzZXJzIE9OIHBvc3RzLnVzZXJfaWQgPSB1c2Vycy5pZFxuICAgIExFRlQgSk9JTiBsaWtlcyBPTiBwb3N0cy5pZCA9IGxpa2VzLnBvc3RfaWRcbiAgICBXSEVSRSAke3doZXJlQ2xhdXNlfVxuICAgIEdST1VQIEJZIHBvc3RzLmlkXG4gICAgT1JERVIgQlkgY3JlYXRlZEF0IERFU0NcbiAgYCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBwb3N0cyA9IHN0bXQuYWxsKC4uLnBhcmFtcyk7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShwb3N0cyksIHsgc3RhdHVzOiAyMDAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIHF1ZXJ5IGVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBcIkRhdGFiYXNlIHF1ZXJ5IGZhaWxlZFwiIH0pLCB7XG4gICAgICBzdGF0dXM6IDUwMCxcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRiIiwiUE9TVCIsInJlcXVlc3QiLCJib2R5IiwianNvbiIsImxvY2F0aW9uIiwic2FsYXJ5Iiwiam9iQ29udHJhY3QiLCJ3aGVyZUNsYXVzZSIsInBhcmFtcyIsImxlbmd0aCIsInBsYWNlaG9sZGVycyIsIm1hcCIsImpvaW4iLCJwdXNoIiwic3RtdCIsInByZXBhcmUiLCJwb3N0cyIsImFsbCIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsImVycm9yIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/posts/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! better-sqlite3 */ \"better-sqlite3\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(better_sqlite3__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default()(\"training.db\");\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS users (\n    id INTEGER PRIMARY KEY,\n    email TEXT UNIQUE,\n    password TEXT\n  );\n`);\ndb.exec(`CREATE TABLE IF NOT EXISTS sessions (\n  id TEXT NOT NULL PRIMARY KEY,\n  expires_at INTEGER NOT NULL,\n  user_id TEXT NOT NULL,\n  FOREIGN KEY (user_id) REFERENCES users(id)\n)`);\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS posts (\n    id INTEGER PRIMARY KEY, \n    image_url TEXT NOT NULL,\n    title TEXT NOT NULL, \n    content TEXT NOT NULL, \n    created_at TEXT DEFAULT CURRENT_TIMESTAMP,\n    user_id INTEGER,\n    location TEXT,\n    company TEXT,\n    salary INTEGER,\n    job_contract TEXT,\n    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE\n  )`);\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS likes (\n    user_id INTEGER, \n    post_id INTEGER, \n    PRIMARY KEY(user_id, post_id),\n    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE, \n    FOREIGN KEY(post_id) REFERENCES posts(id) ON DELETE CASCADE\n  )`);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBRWpDLE1BQU1DLEtBQUtELHFEQUFHQSxDQUFDO0FBRWZDLEdBQUdDLElBQUksQ0FBQyxDQUFDOzs7Ozs7QUFNVCxDQUFDO0FBRURELEdBQUdDLElBQUksQ0FBQyxDQUFDOzs7OztDQUtSLENBQUM7QUFFRkQsR0FBR0MsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7R0FhTixDQUFDO0FBQ0pELEdBQUdDLElBQUksQ0FBQyxDQUFDOzs7Ozs7O0dBT04sQ0FBQztBQUVKLGlFQUFlRCxFQUFFQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvZGlhbmFwZXRyb3ZjaWtvdmEvV2ViZGV2L25leHQvZGVlcCByb3V0aW5nIC9yb3V0aW5nL2xpYi9kYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3FsIGZyb20gXCJiZXR0ZXItc3FsaXRlM1wiO1xuXG5jb25zdCBkYiA9IHNxbChcInRyYWluaW5nLmRiXCIpO1xuXG5kYi5leGVjKGBcbiAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgdXNlcnMgKFxuICAgIGlkIElOVEVHRVIgUFJJTUFSWSBLRVksXG4gICAgZW1haWwgVEVYVCBVTklRVUUsXG4gICAgcGFzc3dvcmQgVEVYVFxuICApO1xuYCk7XG5cbmRiLmV4ZWMoYENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHNlc3Npb25zIChcbiAgaWQgVEVYVCBOT1QgTlVMTCBQUklNQVJZIEtFWSxcbiAgZXhwaXJlc19hdCBJTlRFR0VSIE5PVCBOVUxMLFxuICB1c2VyX2lkIFRFWFQgTk9UIE5VTEwsXG4gIEZPUkVJR04gS0VZICh1c2VyX2lkKSBSRUZFUkVOQ0VTIHVzZXJzKGlkKVxuKWApO1xuXG5kYi5leGVjKGBcbiAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgcG9zdHMgKFxuICAgIGlkIElOVEVHRVIgUFJJTUFSWSBLRVksIFxuICAgIGltYWdlX3VybCBURVhUIE5PVCBOVUxMLFxuICAgIHRpdGxlIFRFWFQgTk9UIE5VTEwsIFxuICAgIGNvbnRlbnQgVEVYVCBOT1QgTlVMTCwgXG4gICAgY3JlYXRlZF9hdCBURVhUIERFRkFVTFQgQ1VSUkVOVF9USU1FU1RBTVAsXG4gICAgdXNlcl9pZCBJTlRFR0VSLFxuICAgIGxvY2F0aW9uIFRFWFQsXG4gICAgY29tcGFueSBURVhULFxuICAgIHNhbGFyeSBJTlRFR0VSLFxuICAgIGpvYl9jb250cmFjdCBURVhULFxuICAgIEZPUkVJR04gS0VZKHVzZXJfaWQpIFJFRkVSRU5DRVMgdXNlcnMoaWQpIE9OIERFTEVURSBDQVNDQURFXG4gIClgKTtcbmRiLmV4ZWMoYFxuICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBsaWtlcyAoXG4gICAgdXNlcl9pZCBJTlRFR0VSLCBcbiAgICBwb3N0X2lkIElOVEVHRVIsIFxuICAgIFBSSU1BUlkgS0VZKHVzZXJfaWQsIHBvc3RfaWQpLFxuICAgIEZPUkVJR04gS0VZKHVzZXJfaWQpIFJFRkVSRU5DRVMgdXNlcnMoaWQpIE9OIERFTEVURSBDQVNDQURFLCBcbiAgICBGT1JFSUdOIEtFWShwb3N0X2lkKSBSRUZFUkVOQ0VTIHBvc3RzKGlkKSBPTiBERUxFVEUgQ0FTQ0FERVxuICApYCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRiO1xuIl0sIm5hbWVzIjpbInNxbCIsImRiIiwiZXhlYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.js&appDir=%2FUsers%2Fdianapetrovcikova%2FWebdev%2Fnext%2Fdeep%20routing%20%2Frouting%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdianapetrovcikova%2FWebdev%2Fnext%2Fdeep%20routing%20%2Frouting&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();