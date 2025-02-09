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
exports.id = "app/api/job-seeker/profile/route";
exports.ids = ["app/api/job-seeker/profile/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fjob-seeker%2Fprofile%2Froute&page=%2Fapi%2Fjob-seeker%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fjob-seeker%2Fprofile%2Froute.js&appDir=%2FUsers%2Fdianapetrovcikova%2FWebdev%2Fnext%2Fdeep%20routing%20%2Frouting%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdianapetrovcikova%2FWebdev%2Fnext%2Fdeep%20routing%20%2Frouting&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fjob-seeker%2Fprofile%2Froute&page=%2Fapi%2Fjob-seeker%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fjob-seeker%2Fprofile%2Froute.js&appDir=%2FUsers%2Fdianapetrovcikova%2FWebdev%2Fnext%2Fdeep%20routing%20%2Frouting%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdianapetrovcikova%2FWebdev%2Fnext%2Fdeep%20routing%20%2Frouting&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_dianapetrovcikova_Webdev_next_deep_routing_routing_app_api_job_seeker_profile_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/job-seeker/profile/route.js */ \"(rsc)/./app/api/job-seeker/profile/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/job-seeker/profile/route\",\n        pathname: \"/api/job-seeker/profile\",\n        filename: \"route\",\n        bundlePath: \"app/api/job-seeker/profile/route\"\n    },\n    resolvedPagePath: \"/Users/dianapetrovcikova/Webdev/next/deep routing /routing/app/api/job-seeker/profile/route.js\",\n    nextConfigOutput,\n    userland: _Users_dianapetrovcikova_Webdev_next_deep_routing_routing_app_api_job_seeker_profile_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZqb2Itc2Vla2VyJTJGcHJvZmlsZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGam9iLXNlZWtlciUyRnByb2ZpbGUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZqb2Itc2Vla2VyJTJGcHJvZmlsZSUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmRpYW5hcGV0cm92Y2lrb3ZhJTJGV2ViZGV2JTJGbmV4dCUyRmRlZXAlMjByb3V0aW5nJTIwJTJGcm91dGluZyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZkaWFuYXBldHJvdmNpa292YSUyRldlYmRldiUyRm5leHQlMkZkZWVwJTIwcm91dGluZyUyMCUyRnJvdXRpbmcmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzhDO0FBQzNIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvZGlhbmFwZXRyb3ZjaWtvdmEvV2ViZGV2L25leHQvZGVlcCByb3V0aW5nIC9yb3V0aW5nL2FwcC9hcGkvam9iLXNlZWtlci9wcm9maWxlL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9qb2Itc2Vla2VyL3Byb2ZpbGUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9qb2Itc2Vla2VyL3Byb2ZpbGVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2pvYi1zZWVrZXIvcHJvZmlsZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9kaWFuYXBldHJvdmNpa292YS9XZWJkZXYvbmV4dC9kZWVwIHJvdXRpbmcgL3JvdXRpbmcvYXBwL2FwaS9qb2Itc2Vla2VyL3Byb2ZpbGUvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fjob-seeker%2Fprofile%2Froute&page=%2Fapi%2Fjob-seeker%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fjob-seeker%2Fprofile%2Froute.js&appDir=%2FUsers%2Fdianapetrovcikova%2FWebdev%2Fnext%2Fdeep%20routing%20%2Frouting%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdianapetrovcikova%2FWebdev%2Fnext%2Fdeep%20routing%20%2Frouting&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./app/api/job-seeker/profile/route.js":
/*!*********************************************!*\
  !*** ./app/api/job-seeker/profile/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.js\");\n\nasync function GET(req) {\n    const userId = req.headers.get(\"userId\");\n    if (!userId) {\n        return new Response(JSON.stringify({\n            error: \"Unauthorized: No user ID provided\"\n        }), {\n            status: 401\n        });\n    }\n    // Ověření, zda uživatel existuje\n    const profile = _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prepare(`\n    SELECT users.id, users.email, job_seeker_profiles.full_name, job_seeker_profiles.cv_url\n    FROM users\n    LEFT JOIN job_seeker_profiles ON users.id = job_seeker_profiles.user_id\n    WHERE users.id = ?\n  `).get(userId);\n    if (!profile) {\n        return new Response(JSON.stringify({\n            error: \"Profile not found\"\n        }), {\n            status: 404\n        });\n    }\n    // 🔹 Opravené načítání přihlášek\n    const applications = _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prepare(`\n    SELECT posts.id, posts.title, posts.company, posts.location, posts.salary, posts.job_contract\n    FROM applications\n    INNER JOIN posts ON applications.post_id = posts.id\n    WHERE applications.user_id = ?\n  `).all(userId);\n    console.log(\"Applications found:\", applications); // ✅ Debugging\n    return new Response(JSON.stringify({\n        profile,\n        applications\n    }), {\n        status: 200\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2pvYi1zZWVrZXIvcHJvZmlsZS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQjtBQUVuQixlQUFlQyxJQUFJQyxHQUFHO0lBQzNCLE1BQU1DLFNBQVNELElBQUlFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBRS9CLElBQUksQ0FBQ0YsUUFBUTtRQUNYLE9BQU8sSUFBSUcsU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLE9BQU87UUFBb0MsSUFDNUQ7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0lBRUEsaUNBQWlDO0lBQ2pDLE1BQU1DLFVBQVVYLCtDQUFFQSxDQUNmWSxPQUFPLENBQ04sQ0FBQzs7Ozs7RUFLTCxDQUFDLEVBRUVQLEdBQUcsQ0FBQ0Y7SUFFUCxJQUFJLENBQUNRLFNBQVM7UUFDWixPQUFPLElBQUlMLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPO1FBQW9CLElBQUk7WUFDbEVDLFFBQVE7UUFDVjtJQUNGO0lBRUEsaUNBQWlDO0lBQ2pDLE1BQU1HLGVBQWViLCtDQUFFQSxDQUNwQlksT0FBTyxDQUNOLENBQUM7Ozs7O0VBS0wsQ0FBQyxFQUVFRSxHQUFHLENBQUNYO0lBRVBZLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJILGVBQWUsY0FBYztJQUVoRSxPQUFPLElBQUlQLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztRQUFFRztRQUFTRTtJQUFhLElBQUk7UUFDN0RILFFBQVE7SUFDVjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvZGlhbmFwZXRyb3ZjaWtvdmEvV2ViZGV2L25leHQvZGVlcCByb3V0aW5nIC9yb3V0aW5nL2FwcC9hcGkvam9iLXNlZWtlci9wcm9maWxlL3JvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tIFwiQC9saWIvZGJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXEpIHtcbiAgY29uc3QgdXNlcklkID0gcmVxLmhlYWRlcnMuZ2V0KFwidXNlcklkXCIpO1xuXG4gIGlmICghdXNlcklkKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IFwiVW5hdXRob3JpemVkOiBObyB1c2VyIElEIHByb3ZpZGVkXCIgfSksXG4gICAgICB7IHN0YXR1czogNDAxIH1cbiAgICApO1xuICB9XG5cbiAgLy8gT3bEm8WZZW7DrSwgemRhIHXFvml2YXRlbCBleGlzdHVqZVxuICBjb25zdCBwcm9maWxlID0gZGJcbiAgICAucHJlcGFyZShcbiAgICAgIGBcbiAgICBTRUxFQ1QgdXNlcnMuaWQsIHVzZXJzLmVtYWlsLCBqb2Jfc2Vla2VyX3Byb2ZpbGVzLmZ1bGxfbmFtZSwgam9iX3NlZWtlcl9wcm9maWxlcy5jdl91cmxcbiAgICBGUk9NIHVzZXJzXG4gICAgTEVGVCBKT0lOIGpvYl9zZWVrZXJfcHJvZmlsZXMgT04gdXNlcnMuaWQgPSBqb2Jfc2Vla2VyX3Byb2ZpbGVzLnVzZXJfaWRcbiAgICBXSEVSRSB1c2Vycy5pZCA9ID9cbiAgYFxuICAgIClcbiAgICAuZ2V0KHVzZXJJZCk7XG5cbiAgaWYgKCFwcm9maWxlKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBcIlByb2ZpbGUgbm90IGZvdW5kXCIgfSksIHtcbiAgICAgIHN0YXR1czogNDA0LFxuICAgIH0pO1xuICB9XG5cbiAgLy8g8J+UuSBPcHJhdmVuw6kgbmHEjcOtdMOhbsOtIHDFmWlobMOhxaFla1xuICBjb25zdCBhcHBsaWNhdGlvbnMgPSBkYlxuICAgIC5wcmVwYXJlKFxuICAgICAgYFxuICAgIFNFTEVDVCBwb3N0cy5pZCwgcG9zdHMudGl0bGUsIHBvc3RzLmNvbXBhbnksIHBvc3RzLmxvY2F0aW9uLCBwb3N0cy5zYWxhcnksIHBvc3RzLmpvYl9jb250cmFjdFxuICAgIEZST00gYXBwbGljYXRpb25zXG4gICAgSU5ORVIgSk9JTiBwb3N0cyBPTiBhcHBsaWNhdGlvbnMucG9zdF9pZCA9IHBvc3RzLmlkXG4gICAgV0hFUkUgYXBwbGljYXRpb25zLnVzZXJfaWQgPSA/XG4gIGBcbiAgICApXG4gICAgLmFsbCh1c2VySWQpO1xuXG4gIGNvbnNvbGUubG9nKFwiQXBwbGljYXRpb25zIGZvdW5kOlwiLCBhcHBsaWNhdGlvbnMpOyAvLyDinIUgRGVidWdnaW5nXG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IHByb2ZpbGUsIGFwcGxpY2F0aW9ucyB9KSwge1xuICAgIHN0YXR1czogMjAwLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJkYiIsIkdFVCIsInJlcSIsInVzZXJJZCIsImhlYWRlcnMiLCJnZXQiLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsInN0YXR1cyIsInByb2ZpbGUiLCJwcmVwYXJlIiwiYXBwbGljYXRpb25zIiwiYWxsIiwiY29uc29sZSIsImxvZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/job-seeker/profile/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! better-sqlite3 */ \"better-sqlite3\");\n/* harmony import */ var better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(better_sqlite3__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = better_sqlite3__WEBPACK_IMPORTED_MODULE_0___default()(\"training.db\");\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS users (\n    id INTEGER PRIMARY KEY,\n    email TEXT UNIQUE,\n    password TEXT,\n    role TEXT CHECK(role IN ('employer', 'job_seeker')) NOT NULL\n  );\n`);\ndb.exec(`CREATE TABLE IF NOT EXISTS sessions (\n  id TEXT NOT NULL PRIMARY KEY,\n  expires_at INTEGER NOT NULL,\n  user_id TEXT NOT NULL,\n  FOREIGN KEY (user_id) REFERENCES users(id)\n)`);\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS posts (\n    id INTEGER PRIMARY KEY, \n    image_url TEXT NOT NULL,\n    title TEXT NOT NULL, \n    content TEXT NOT NULL, \n    created_at TEXT DEFAULT CURRENT_TIMESTAMP,\n    user_id INTEGER,\n    location TEXT,\n    company TEXT,\n    salary INTEGER,\n    job_contract TEXT,\n    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE\n  )`);\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS likes (\n    user_id INTEGER, \n    post_id INTEGER, \n    PRIMARY KEY(user_id, post_id),\n    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE, \n    FOREIGN KEY(post_id) REFERENCES posts(id) ON DELETE CASCADE\n  )`);\ndb.exec(`\n    CREATE TABLE IF NOT EXISTS job_seeker_profiles (\n      id INTEGER PRIMARY KEY AUTOINCREMENT,\n      user_id INTEGER UNIQUE NOT NULL,\n      full_name TEXT NOT NULL,\n      cv_url TEXT, \n      bio TEXT,\n      created_at TEXT DEFAULT CURRENT_TIMESTAMP,\n      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE\n    );\n  `);\ndb.exec(`\n    CREATE TABLE IF NOT EXISTS applications (\n      id INTEGER PRIMARY KEY AUTOINCREMENT,\n      post_id INTEGER NOT NULL,\n      user_id INTEGER NOT NULL,\n      applied_at TEXT DEFAULT CURRENT_TIMESTAMP,\n      FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,\n      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE\n    );\n  `);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBRWpDLE1BQU1DLEtBQUtELHFEQUFHQSxDQUFDO0FBRWZDLEdBQUdDLElBQUksQ0FBQyxDQUFDOzs7Ozs7O0FBT1QsQ0FBQztBQUVERCxHQUFHQyxJQUFJLENBQUMsQ0FBQzs7Ozs7Q0FLUixDQUFDO0FBRUZELEdBQUdDLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0dBYU4sQ0FBQztBQUNKRCxHQUFHQyxJQUFJLENBQUMsQ0FBQzs7Ozs7OztHQU9OLENBQUM7QUFFSkQsR0FBR0MsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7Ozs7RUFVUCxDQUFDO0FBRUhELEdBQUdDLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7RUFTUCxDQUFDO0FBRUgsaUVBQWVELEVBQUVBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9kaWFuYXBldHJvdmNpa292YS9XZWJkZXYvbmV4dC9kZWVwIHJvdXRpbmcgL3JvdXRpbmcvbGliL2RiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzcWwgZnJvbSBcImJldHRlci1zcWxpdGUzXCI7XG5cbmNvbnN0IGRiID0gc3FsKFwidHJhaW5pbmcuZGJcIik7XG5cbmRiLmV4ZWMoYFxuICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c2VycyAoXG4gICAgaWQgSU5URUdFUiBQUklNQVJZIEtFWSxcbiAgICBlbWFpbCBURVhUIFVOSVFVRSxcbiAgICBwYXNzd29yZCBURVhULFxuICAgIHJvbGUgVEVYVCBDSEVDSyhyb2xlIElOICgnZW1wbG95ZXInLCAnam9iX3NlZWtlcicpKSBOT1QgTlVMTFxuICApO1xuYCk7XG5cbmRiLmV4ZWMoYENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHNlc3Npb25zIChcbiAgaWQgVEVYVCBOT1QgTlVMTCBQUklNQVJZIEtFWSxcbiAgZXhwaXJlc19hdCBJTlRFR0VSIE5PVCBOVUxMLFxuICB1c2VyX2lkIFRFWFQgTk9UIE5VTEwsXG4gIEZPUkVJR04gS0VZICh1c2VyX2lkKSBSRUZFUkVOQ0VTIHVzZXJzKGlkKVxuKWApO1xuXG5kYi5leGVjKGBcbiAgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgcG9zdHMgKFxuICAgIGlkIElOVEVHRVIgUFJJTUFSWSBLRVksIFxuICAgIGltYWdlX3VybCBURVhUIE5PVCBOVUxMLFxuICAgIHRpdGxlIFRFWFQgTk9UIE5VTEwsIFxuICAgIGNvbnRlbnQgVEVYVCBOT1QgTlVMTCwgXG4gICAgY3JlYXRlZF9hdCBURVhUIERFRkFVTFQgQ1VSUkVOVF9USU1FU1RBTVAsXG4gICAgdXNlcl9pZCBJTlRFR0VSLFxuICAgIGxvY2F0aW9uIFRFWFQsXG4gICAgY29tcGFueSBURVhULFxuICAgIHNhbGFyeSBJTlRFR0VSLFxuICAgIGpvYl9jb250cmFjdCBURVhULFxuICAgIEZPUkVJR04gS0VZKHVzZXJfaWQpIFJFRkVSRU5DRVMgdXNlcnMoaWQpIE9OIERFTEVURSBDQVNDQURFXG4gIClgKTtcbmRiLmV4ZWMoYFxuICBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBsaWtlcyAoXG4gICAgdXNlcl9pZCBJTlRFR0VSLCBcbiAgICBwb3N0X2lkIElOVEVHRVIsIFxuICAgIFBSSU1BUlkgS0VZKHVzZXJfaWQsIHBvc3RfaWQpLFxuICAgIEZPUkVJR04gS0VZKHVzZXJfaWQpIFJFRkVSRU5DRVMgdXNlcnMoaWQpIE9OIERFTEVURSBDQVNDQURFLCBcbiAgICBGT1JFSUdOIEtFWShwb3N0X2lkKSBSRUZFUkVOQ0VTIHBvc3RzKGlkKSBPTiBERUxFVEUgQ0FTQ0FERVxuICApYCk7XG5cbmRiLmV4ZWMoYFxuICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIGpvYl9zZWVrZXJfcHJvZmlsZXMgKFxuICAgICAgaWQgSU5URUdFUiBQUklNQVJZIEtFWSBBVVRPSU5DUkVNRU5ULFxuICAgICAgdXNlcl9pZCBJTlRFR0VSIFVOSVFVRSBOT1QgTlVMTCxcbiAgICAgIGZ1bGxfbmFtZSBURVhUIE5PVCBOVUxMLFxuICAgICAgY3ZfdXJsIFRFWFQsIFxuICAgICAgYmlvIFRFWFQsXG4gICAgICBjcmVhdGVkX2F0IFRFWFQgREVGQVVMVCBDVVJSRU5UX1RJTUVTVEFNUCxcbiAgICAgIEZPUkVJR04gS0VZKHVzZXJfaWQpIFJFRkVSRU5DRVMgdXNlcnMoaWQpIE9OIERFTEVURSBDQVNDQURFXG4gICAgKTtcbiAgYCk7XG5cbmRiLmV4ZWMoYFxuICAgIENSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIGFwcGxpY2F0aW9ucyAoXG4gICAgICBpZCBJTlRFR0VSIFBSSU1BUlkgS0VZIEFVVE9JTkNSRU1FTlQsXG4gICAgICBwb3N0X2lkIElOVEVHRVIgTk9UIE5VTEwsXG4gICAgICB1c2VyX2lkIElOVEVHRVIgTk9UIE5VTEwsXG4gICAgICBhcHBsaWVkX2F0IFRFWFQgREVGQVVMVCBDVVJSRU5UX1RJTUVTVEFNUCxcbiAgICAgIEZPUkVJR04gS0VZIChwb3N0X2lkKSBSRUZFUkVOQ0VTIHBvc3RzKGlkKSBPTiBERUxFVEUgQ0FTQ0FERSxcbiAgICAgIEZPUkVJR04gS0VZICh1c2VyX2lkKSBSRUZFUkVOQ0VTIHVzZXJzKGlkKSBPTiBERUxFVEUgQ0FTQ0FERVxuICAgICk7XG4gIGApO1xuXG5leHBvcnQgZGVmYXVsdCBkYjtcbiJdLCJuYW1lcyI6WyJzcWwiLCJkYiIsImV4ZWMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fjob-seeker%2Fprofile%2Froute&page=%2Fapi%2Fjob-seeker%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fjob-seeker%2Fprofile%2Froute.js&appDir=%2FUsers%2Fdianapetrovcikova%2FWebdev%2Fnext%2Fdeep%20routing%20%2Frouting%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdianapetrovcikova%2FWebdev%2Fnext%2Fdeep%20routing%20%2Frouting&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();