(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*!\n * FilePondPluginImagePreview 4.2.1\n * Licensed under MIT, https://opensource.org/licenses/MIT/\n * Please visit https://pqina.nl/filepond/ for details.\n */\n\n/* eslint-disable */\n\n.filepond--image-preview-wrapper {\n  z-index: 2;\n}\n\n.filepond--image-preview-overlay {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  min-height: 5rem;\n  max-height: 7rem;\n  margin: 0;\n  opacity: 0;\n  z-index: 2;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.filepond--image-preview-overlay svg {\n  width: 100%;\n  height: auto;\n  color: inherit;\n  max-height: inherit;\n}\n\n.filepond--image-preview-overlay-idle {\n  mix-blend-mode: multiply;\n  color: rgba(40, 40, 40, 0.85);\n}\n\n.filepond--image-preview-overlay-success {\n  mix-blend-mode: normal;\n  color: #369763;\n}\n\n.filepond--image-preview-overlay-failure {\n  mix-blend-mode: normal;\n  color: #c44e47;\n}\n\n@supports (-webkit-marquee-repetition: infinite) and\n  ((-o-object-fit: fill) or (object-fit: fill)) {\n  .filepond--image-preview-overlay-idle {\n    mix-blend-mode: normal;\n  }\n}\n\n.filepond--image-preview-wrapper {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 100%;\n  margin: 0;\n  border-radius: 0.45em;\n  overflow: hidden;\n  background: rgba(0, 0, 0, 0.01);\n}\n\n.filepond--image-preview {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  pointer-events: none;\n  background: #222;\n  will-change: transform, opacity;\n}\n\n.filepond--image-preview[data-transparency-indicator='grid'] img,\n.filepond--image-preview[data-transparency-indicator='grid'] canvas {\n  background-color: #fff;\n  background-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' fill='%23eee'%3E%3Cpath d='M0 0 H50 V50 H0'/%3E%3Cpath d='M50 50 H100 V100 H50'/%3E%3C/svg%3E\");\n  background-size: 1.25em 1.25em;\n}\n\n.filepond--image-clip {\n  position: relative;\n  overflow: hidden;\n  margin: 0 auto;\n}\n\n.filepond--image-bitmap,\n.filepond--image-vector {\n  position: absolute;\n  left: 0;\n  top: 0;\n  will-change: transform;\n}\n\n.filepond--root[data-style-panel-layout~='integrated']\n  .filepond--image-preview-wrapper {\n  border-radius: 0;\n}\n\n.filepond--root[data-style-panel-layout~='integrated']\n  .filepond--image-preview {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.filepond--root[data-style-panel-layout~='circle']\n  .filepond--image-preview-wrapper {\n  border-radius: 99999rem;\n}\n\n.filepond--root[data-style-panel-layout~='circle']\n  .filepond--image-preview-overlay {\n  top: auto;\n  bottom: 0;\n  -webkit-transform: scaleY(-1);\n  transform: scaleY(-1);\n}\n\n.filepond--root[data-style-panel-layout~='circle']\n  .filepond--file\n  .filepond--file-action-button[data-align*='bottom']:not([data-align*='center']) {\n  margin-bottom: 0.325em;\n}\n\n.filepond--root[data-style-panel-layout~='circle']\n  .filepond--file\n  [data-align*='left'] {\n  left: calc(50% - 3em);\n}\n\n.filepond--root[data-style-panel-layout~='circle']\n  .filepond--file\n  [data-align*='right'] {\n  right: calc(50% - 3em);\n}\n\n.filepond--root[data-style-panel-layout~='circle']\n  .filepond--progress-indicator[data-align*='bottom'][data-align*='left'],\n.filepond--root[data-style-panel-layout~='circle']\n  .filepond--progress-indicator[data-align*='bottom'][data-align*='right'] {\n  margin-bottom: calc(0.325em + 0.1875em);\n}\n\n.filepond--root[data-style-panel-layout~='circle']\n  .filepond--progress-indicator[data-align*='bottom'][data-align*='center'] {\n  margin-top: 0;\n  margin-bottom: 0.1875em;\n  margin-left: 0.1875em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9maWxlcG9uZC1wbHVnaW4taW1hZ2UtcHJldmlldy9kaXN0L2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlFOztBQUVGLG1CQUFtQjs7QUFDbkI7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBOztFQUVFO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sUUFBUTtFQUNSLFlBQVk7RUFDWixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsK0JBQStCO0FBQ2pDOztBQUNBOztFQUVFLHNCQUFzQjtFQUN0Qix5TUFBeU07RUFDek0sOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxTQUFTO0VBQ1QsU0FBUztFQUNULDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0VBR0UscUJBQXFCO0FBQ3ZCOztBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7RUFJRSx1Q0FBdUM7QUFDekM7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL2ZpbGVwb25kLXBsdWdpbi1pbWFnZS1wcmV2aWV3L2Rpc3QvZmlsZXBvbmQtcGx1Z2luLWltYWdlLXByZXZpZXcuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBGaWxlUG9uZFBsdWdpbkltYWdlUHJldmlldyA0LjIuMVxuICogTGljZW5zZWQgdW5kZXIgTUlULCBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC9cbiAqIFBsZWFzZSB2aXNpdCBodHRwczovL3BxaW5hLm5sL2ZpbGVwb25kLyBmb3IgZGV0YWlscy5cbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLmZpbGVwb25kLS1pbWFnZS1wcmV2aWV3LXdyYXBwZXIge1xuICB6LWluZGV4OiAyO1xufVxuXG4uZmlsZXBvbmQtLWltYWdlLXByZXZpZXctb3ZlcmxheSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDVyZW07XG4gIG1heC1oZWlnaHQ6IDdyZW07XG4gIG1hcmdpbjogMDtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uZmlsZXBvbmQtLWltYWdlLXByZXZpZXctb3ZlcmxheSBzdmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgbWF4LWhlaWdodDogaW5oZXJpdDtcbn1cblxuLmZpbGVwb25kLS1pbWFnZS1wcmV2aWV3LW92ZXJsYXktaWRsZSB7XG4gIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbiAgY29sb3I6IHJnYmEoNDAsIDQwLCA0MCwgMC44NSk7XG59XG5cbi5maWxlcG9uZC0taW1hZ2UtcHJldmlldy1vdmVybGF5LXN1Y2Nlc3Mge1xuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xuICBjb2xvcjogIzM2OTc2Mztcbn1cblxuLmZpbGVwb25kLS1pbWFnZS1wcmV2aWV3LW92ZXJsYXktZmFpbHVyZSB7XG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XG4gIGNvbG9yOiAjYzQ0ZTQ3O1xufVxuXG5Ac3VwcG9ydHMgKC13ZWJraXQtbWFycXVlZS1yZXBldGl0aW9uOiBpbmZpbml0ZSkgYW5kXG4gICgoLW8tb2JqZWN0LWZpdDogZmlsbCkgb3IgKG9iamVjdC1maXQ6IGZpbGwpKSB7XG4gIC5maWxlcG9uZC0taW1hZ2UtcHJldmlldy1vdmVybGF5LWlkbGUge1xuICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XG4gIH1cbn1cblxuLmZpbGVwb25kLS1pbWFnZS1wcmV2aWV3LXdyYXBwZXIge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwLjQ1ZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMSk7XG59XG5cbi5maWxlcG9uZC0taW1hZ2UtcHJldmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZDogIzIyMjtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbn1cbi5maWxlcG9uZC0taW1hZ2UtcHJldmlld1tkYXRhLXRyYW5zcGFyZW5jeS1pbmRpY2F0b3I9J2dyaWQnXSBpbWcsXG4uZmlsZXBvbmQtLWltYWdlLXByZXZpZXdbZGF0YS10cmFuc3BhcmVuY3ktaW5kaWNhdG9yPSdncmlkJ10gY2FudmFzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB2aWV3Qm94PScwIDAgMTAwIDEwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSclMjNlZWUnJTNFJTNDcGF0aCBkPSdNMCAwIEg1MCBWNTAgSDAnLyUzRSUzQ3BhdGggZD0nTTUwIDUwIEgxMDAgVjEwMCBINTAnLyUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMS4yNWVtIDEuMjVlbTtcbn1cblxuLmZpbGVwb25kLS1pbWFnZS1jbGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmZpbGVwb25kLS1pbWFnZS1iaXRtYXAsXG4uZmlsZXBvbmQtLWltYWdlLXZlY3RvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuXG4uZmlsZXBvbmQtLXJvb3RbZGF0YS1zdHlsZS1wYW5lbC1sYXlvdXR+PSdpbnRlZ3JhdGVkJ11cbiAgLmZpbGVwb25kLS1pbWFnZS1wcmV2aWV3LXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uZmlsZXBvbmQtLXJvb3RbZGF0YS1zdHlsZS1wYW5lbC1sYXlvdXR+PSdpbnRlZ3JhdGVkJ11cbiAgLmZpbGVwb25kLS1pbWFnZS1wcmV2aWV3IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZpbGVwb25kLS1yb290W2RhdGEtc3R5bGUtcGFuZWwtbGF5b3V0fj0nY2lyY2xlJ11cbiAgLmZpbGVwb25kLS1pbWFnZS1wcmV2aWV3LXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiA5OTk5OXJlbTtcbn1cblxuLmZpbGVwb25kLS1yb290W2RhdGEtc3R5bGUtcGFuZWwtbGF5b3V0fj0nY2lyY2xlJ11cbiAgLmZpbGVwb25kLS1pbWFnZS1wcmV2aWV3LW92ZXJsYXkge1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG4gIHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcbn1cblxuLmZpbGVwb25kLS1yb290W2RhdGEtc3R5bGUtcGFuZWwtbGF5b3V0fj0nY2lyY2xlJ11cbiAgLmZpbGVwb25kLS1maWxlXG4gIC5maWxlcG9uZC0tZmlsZS1hY3Rpb24tYnV0dG9uW2RhdGEtYWxpZ24qPSdib3R0b20nXTpub3QoW2RhdGEtYWxpZ24qPSdjZW50ZXInXSkge1xuICBtYXJnaW4tYm90dG9tOiAwLjMyNWVtO1xufVxuXG4uZmlsZXBvbmQtLXJvb3RbZGF0YS1zdHlsZS1wYW5lbC1sYXlvdXR+PSdjaXJjbGUnXVxuICAuZmlsZXBvbmQtLWZpbGVcbiAgW2RhdGEtYWxpZ24qPSdsZWZ0J10ge1xuICBsZWZ0OiBjYWxjKDUwJSAtIDNlbSk7XG59XG5cbi5maWxlcG9uZC0tcm9vdFtkYXRhLXN0eWxlLXBhbmVsLWxheW91dH49J2NpcmNsZSddXG4gIC5maWxlcG9uZC0tZmlsZVxuICBbZGF0YS1hbGlnbio9J3JpZ2h0J10ge1xuICByaWdodDogY2FsYyg1MCUgLSAzZW0pO1xufVxuXG4uZmlsZXBvbmQtLXJvb3RbZGF0YS1zdHlsZS1wYW5lbC1sYXlvdXR+PSdjaXJjbGUnXVxuICAuZmlsZXBvbmQtLXByb2dyZXNzLWluZGljYXRvcltkYXRhLWFsaWduKj0nYm90dG9tJ11bZGF0YS1hbGlnbio9J2xlZnQnXSxcbi5maWxlcG9uZC0tcm9vdFtkYXRhLXN0eWxlLXBhbmVsLWxheW91dH49J2NpcmNsZSddXG4gIC5maWxlcG9uZC0tcHJvZ3Jlc3MtaW5kaWNhdG9yW2RhdGEtYWxpZ24qPSdib3R0b20nXVtkYXRhLWFsaWduKj0ncmlnaHQnXSB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGMoMC4zMjVlbSArIDAuMTg3NWVtKTtcbn1cblxuLmZpbGVwb25kLS1yb290W2RhdGEtc3R5bGUtcGFuZWwtbGF5b3V0fj0nY2lyY2xlJ11cbiAgLmZpbGVwb25kLS1wcm9ncmVzcy1pbmRpY2F0b3JbZGF0YS1hbGlnbio9J2JvdHRvbSddW2RhdGEtYWxpZ24qPSdjZW50ZXInXSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDAuMTg3NWVtO1xuICBtYXJnaW4tbGVmdDogMC4xODc1ZW07XG59XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../postcss-loader/src??embedded!./filepond-plugin-image-preview.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"body-contents\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page\">\n  <div class=\"container\">\n    <div class=\"header\">\n      <div class=\"tabs is-fullwidth\">\n        <ul>\n          <li\n            *ngFor=\"let sorting of sortings\"\n            [ngClass]=\"{'is-active': sorting === sortBy}\"\n            >\n            <a (click)=\"sortPosts(sorting)\">\n              <span>{{sorting}}</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <ng-container *ngIf=\"posts && posts.length > 0\">\n      <div class=\"box\" *ngFor=\"let post of posts\">\n        <div class=\"header\">\n          <div class=\"post-title\">\n            <p class=\"poster\">Posted by <a>{{post.creator}}</a> {{timeDiff(post.updatedAt)}}</p>\n            <p (click)=\"toggleDetail(post)\">{{post.title}}</p>\n          </div>\n          <a class=\"heart\" (click)=\"toggleSave(post.id)\">\n            <i [ngClass]=\"hasSavedPost(post.postHeart) ? 'fas fa-heart' : 'far fa-heart'\"></i>\n          </a>\n        </div>\n        <div class=\"image\" *ngIf=\"post.media.length > 0\" (click)=\"toggleDetail(post)\">\n          <video autoplay *ngIf=\"isVideo(post.media[0].mediaUrl)\">\n            <source src=\"{{post.media[0].mediaUrl}}\" type='video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\"' />\n          </video>\n          <img *ngIf=\"!isVideo(post.media[0].mediaUrl)\" src=\"{{post.media[0].mediaUrl}}\" alt=\"\">\n        </div>\n        <div class=\"post-footer\">\n          <div class=\"left-item\">\n          <div class=\"footer-item\" (click)=\"toggleLike(post.id)\">\n            <i class=\"vote fas fa-fire \" [ngClass]=\"hasLikedPost(post.postVote) ? 'voted' : ''\"></i>\n            <span class=\"count\">{{post.voteCount}}</span>\n          </div>\n          <div class=\"footer-item\" (click)=\"toggleDetail(post)\">\n            <i class=\"far fa-comment\"></i>\n            <span class=\"count\">{{post.commentCount}}</span>\n          </div>\n        </div>\n          <div class=\"right-item\">\n            <div class=\"tags\">\n              <div class=\"tag is-rounded\" *ngFor=\"let tag of getTags(post.tags)\">{{tag}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"fetching\">\n      <div class=\"spinner is-small\"></div>\n    </ng-container>\n    \n  </div>\n</div>\n\n<app-post-modal></app-post-modal>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/post-detail/post-detail.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/post-detail/post-detail.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container post-detail\">\n  <div class=\"columns\">\n    <div class=\"column is-8\">\n      <div class=\"box\" [formGroup]=\"commentForm\">\n        <div class=\"post-title\">\n          <p>{{postDetail.title}}</p>\n        </div>\n        <div class=\"image\" *ngIf=\"postDetail.media.length > 0\">\n          <img src=\"{{postDetail.media[0].mediaUrl}}\" alt=\"\">\n        </div>\n        <div class=\"post-footer\">\n          <div class=\"footer-item\" (click)=\"toggleLike()\">\n            <i [ngClass]=\"hasLikedPost() ? 'far fa-heart' : 'fas fa-heart'\"></i>\n            <span *ngIf=\"postDetail.postVote.length > 0\" class=\"count\">{{postDetail.voteCount}}</span>\n          </div>\n          <div class=\"footer-item\" *ngIf=\"postDetail.comment\">\n            <i class=\"far fa-comment\"></i>\n            <span class=\"count\" *ngIf=\"postDetail.comment.length > 0\">{{postDetail.commentCount}}</span>\n          </div>\n          <div class=\"footer-item comment-input\">\n            <input type=\"text\" placeholder=\"Write your comments..\" class=\"input is-rounded\" formControlName=\"comment\">\n          </div>\n          <div class=\"footer-item\">\n            <a class=\"button is-rounded\" (click)=\"postComment()\">Post</a>\n          </div>\n        </div>\n        <div class=\"comments-container\" *ngIf=\"postDetail.comment.length > 0\">\n          <ng-container *ngFor=\"let comment of postDetail.comment\">\n            <div class=\"post-comments\" *ngIf=\"comment.user && comment.comment\">\n              <div class=\"comment-detail\">\n                <p class=\"username\">{{comment.user.username}} <span>{{timeDiff(comment.createdAt)}}</span>\n                </p>\n                <p class=\"comment\">{{comment.comment}}</p>\n              </div>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n    <div class=\"column\"></div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/post-modal/post-modal.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/post-modal/post-modal.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal post-modal\" [ngClass]=\"{'is-active': showModal}\">\n  <div class=\"modal-background\" (click)=\"closeModal()\"></div>\n  <button class=\"delete\" aria-label=\"close\" (click)=\"closeModal()\"></button>\n  <div class=\"modal-card\" [formGroup]=\"commentForm\">\n    <ng-container *ngIf=\"fetching && !post\">\n      <div class=\"loading-box\">\n          <!-- <div class=\"spinner\"></div> -->\n          <header class=\"modal-card-head\">\n              <div class=\"header\">\n                <div class=\"post-title\">\n                  <p class=\"poster\"></p>\n                  <p class=\"title\"></p>\n                </div>\n                <div class=\"tags\">\n                  \n                </div>\n              </div>\n            </header>\n            <section class=\"modal-card-body\">\n              <div class=\"image\">\n                \n              </div>\n            </section>\n            <footer class=\"modal-card-foot\">\n              <div class=\"post-footer\">\n              </div>\n            </footer>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"postDetail\">\n      <header class=\"modal-card-head\">\n        <div class=\"header\">\n          <div class=\"post-title\">\n            <p class=\"poster\">Posted by <a>{{postDetail.creator}}</a> {{timeDiff(postDetail.updatedAt)}}</p>\n            <p>{{postDetail.title}}</p>\n          </div>\n          <div class=\"tags\">\n            <div class=\"tag is-rounded\" *ngFor=\"let tag of getTags(postDetail.tags)\">{{tag}}</div>\n          </div>\n          <a class=\"heart\" (click)=\"toggleSave()\">\n            <i [ngClass]=\"hasSavedPost() ? 'fas fa-heart' : 'far fa-heart'\"></i>\n          </a>\n        </div>\n      </header>\n      <section class=\"modal-card-body\">\n        <div class=\"image\" *ngIf=\"postDetail.media.length > 0\">\n          <img src=\"{{postDetail.media[0].mediaUrl}}\" alt=\"\">\n        </div>\n        <ng-container *ngIf=\"postDetail.comment\">\n          <div class=\"comments-container\" *ngIf=\"postDetail.comment.length > 0\">\n            <p class=\"comment-title\">Comments</p>\n            <ng-container *ngFor=\"let comment of postDetail.comment\">\n              <div class=\"post-comments\" *ngIf=\"comment.user && comment.comment\">\n                <div class=\"comment-detail\">\n                  <p class=\"username\">{{comment.user.username}} <span>{{timeDiff(comment.createdAt)}}</span>\n                  </p>\n                  <p class=\"comment\">{{comment.comment}}</p>\n                </div>\n              </div>\n            </ng-container>\n          </div>\n        </ng-container>\n      </section>\n      <footer class=\"modal-card-foot\">\n        <div class=\"post-footer\">\n          <div class=\"footer-item\" (click)=\"toggleLike()\">\n            <i class=\"vote fas fa-fire\" [ngClass]=\"hasLikedPost() ? 'voted' : ''\"></i>\n            <span *ngIf=\"postDetail.postVote.length > 0\" class=\"count\">{{postDetail.postVote.length}}</span>\n          </div>\n          <div class=\"footer-item\" *ngIf=\"postDetail.comment\">\n            <i class=\"far fa-comment\"></i>\n            <span class=\"count\" *ngIf=\"postDetail.comment.length > 0\">{{postDetail.comment.length}}</span>\n          </div>\n          <div class=\"footer-item comment-input\">\n            <input type=\"text\" placeholder=\"Write your comments..\" class=\"input is-rounded\" formControlName=\"comment\">\n          </div>\n          <div class=\"footer-item\">\n            <a class=\"button is-rounded\" (click)=\"postComment()\">Post</a>\n          </div>\n        </div>\n      </footer>\n    </ng-container>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal login-modal\" [ngClass]=\"{'is-active': showModal}\">\n  <div class=\"modal-background\" (click)=\"closeModal()\"></div>\n  <div class=\"modal-content\">\n    <div class=\"box\" [formGroup]=\"loginForm\">\n      <div class=\"field\">\n        <label class=\"label\">Email</label>\n        <div class=\"control has-icons-left\">\n          <input class=\"input\" type=\"email\" placeholder=\"Email\" formControlName=\"email\">\n          <span class=\"icon is-small is-left\">\n              <i class=\"fas fa-envelope\"></i>\n            </span>\n        </div>\n        <p class=\"help is-danger\" *ngIf=\"loginForm.controls.email.invalid && showError\">Valid email is required</p>\n      </div>\n\n      <div class=\"field\">\n        <label class=\"label\">Password</label>\n        <div class=\"control has-icons-left\">\n          <input class=\"input\" type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n          <span class=\"icon is-small is-left\">\n              <i class=\"fas fa-lock\"></i>\n            </span>\n        </div>\n        <p class=\"help is-danger\" *ngIf=\"loginForm.controls.password.invalid && showError\">password is required</p>\n      </div>\n\n      <div class=\"buttons is-fullwidth\">\n        <button class=\"button is-link\" (click)=\"login()\">Login</button>\n        <button class=\"button\">Cancel</button>\n      </div>\n\n      <p class=\"error is-danger\" *ngIf=\"error\">{{error}}</p>\n    </div>\n  </div>\n  <button class=\"modal-close is-large\" aria-label=\"close\" (click)=\"closeModal()\"></button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/signup/signup.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/signup/signup.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal login-modal\" [ngClass]=\"{'is-active': showModal}\">\n    <div class=\"modal-background\" (click)=\"closeModal()\"></div>\n    <div class=\"modal-content\">\n      <div class=\"box\" [formGroup]=\"singupForm\">\n        <div class=\"field\">\n          <label class=\"label\">Email</label>\n          <div class=\"control has-icons-left\">\n            <input class=\"input\" type=\"email\" placeholder=\"Email\" formControlName=\"email\">\n            <span class=\"icon is-small is-left\">\n                <i class=\"fas fa-envelope\"></i>\n              </span>\n          </div>\n          <p class=\"help\" [ngClass]=\"{'is-danger': singupForm.controls.email.invalid && showError}\">Required but never shown in the website</p>\n        </div>\n\n        <div class=\"field\">\n            <label class=\"label\">Username</label>\n            <div class=\"control has-icons-left\">\n              <input class=\"input\" type=\"text\" placeholder=\"Username\" formControlName=\"username\">\n              <span class=\"icon is-small is-left\">\n                  <i class=\"fas fa-user\"></i>\n                </span>\n            </div>\n            <p class=\"help is-danger\" *ngIf=\"singupForm.controls.username.invalid && showError\">Username is required</p>\n          </div>\n  \n        <div class=\"field\">\n          <label class=\"label\">Password</label>\n          <div class=\"control has-icons-left\">\n            <input class=\"input\" type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n            <span class=\"icon is-small is-left\">\n                <i class=\"fas fa-lock\"></i>\n              </span>\n          </div>\n          <p class=\"help is-danger\" *ngIf=\"singupForm.controls.password.invalid && showError\">password is required</p>\n        </div>\n  \n        <div class=\"buttons is-fullwidth\">\n          <button class=\"button is-link\" (click)=\"signUp()\">Sign Up</button>\n          <button class=\"button\" (click)=\"closeModal()\">Continue as Guest</button>\n        </div>\n  \n        <p class=\"error is-danger\" *ngIf=\"error\">{{error}}</p>\n      </div>\n    </div>\n    <button class=\"modal-close is-large\" aria-label=\"close\" (click)=\"closeModal()\"></button>\n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/verify/verify.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/verify/verify.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"verifying\">\n  <div *ngIf=\"verifying\">\n    <div class=\"spinner\"></div>\n    <p>Validating your email</p>\n  </div>\n\n  <div class=\"verified\" *ngIf=\"verified\">\n    <p>Verified</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/header/header.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/header/header.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-modals></app-modals>\n<nav class=\"navbar main-nav is-reverse\" role=\"navigation\" aria-label=\"main navigation\">\n  <div class=\"container\">\n    <div class=\"navbar-brand\">\n      <a class=\"navbar-item\" routerLink=\"/\">\n        DESI GIRLS\n      </a>\n\n      <a role=\"button\" class=\"navbar-burger burger\" aria-label=\"menu\" aria-expanded=\"false\"\n        data-target=\"navbarBasicExample\">\n        <span aria-hidden=\"true\"></span>\n        <span aria-hidden=\"true\"></span>\n        <span aria-hidden=\"true\"></span>\n      </a>\n    </div>\n\n    <div id=\"navbarBasicExample\" class=\"navbar-menu\">\n      <div class=\"navbar-start\">\n      </div>\n\n      <div class=\"navbar-end\">\n        <div class=\"navbar-item\" *ngIf=\"!user\">\n          <div class=\"buttons\">\n            <a class=\"button is-primary\" (click)=\"openSignup()\">\n              <strong>Sign up</strong>\n            </a>\n            <a class=\"button is-light\" (click)=\"openLogin()\">\n              Log in\n            </a>\n          </div>\n        </div>\n\n        <div class=\"navbar-item\" *ngIf=\"user\">\n          <div class=\"buttons\">\n            <a class=\"button is-light is-accent\" (click)=\"createPost()\">\n              Create Post\n            </a>\n            <a class=\"button is-light\" (click)=\"logout()\">\n              Log out\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/modals/modals.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/modals/modals.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-uploader></app-uploader>\n<app-login></app-login>\n<app-signup></app-signup>\n<app-validator></app-validator>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/sidenav/sidenav.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/sidenav/sidenav.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column is-narrow\">\n        <a class=\"button\">Popular</a>\n        <hr>\n        <p>Categories</p>\n        <a class=\"button\">All</a>\n        <a class=\"button\">Desi</a>\n      </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/uploader/uploader.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/uploader/uploader.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal uploader-modal\" [ngClass]=\"{'is-active': showModal}\">\n  <div class=\"modal-background\" (click)=\"showModal = false\"></div>\n  <div class=\"modal-card\" [formGroup]=\"postForm\">\n    <header class=\"modal-card-head\">\n      <p class=\"modal-card-title\">Create Post</p>\n      <button class=\"delete\" aria-label=\"close\" (click)=\"showModal = false\"></button>\n    </header>\n    <section class=\"modal-card-body\">\n\n      <div class=\"field\">\n        <div class=\"control\">\n          <label class=\"label\">Title</label>\n          <input type=\"text\" class=\"input is-medium\" placeholder=\"title\" formControlName=\"title\">\n          <p class=\"help\">Limited to 100 characters</p>\n        </div>\n      </div>\n\n      <div class=\"field\">\n        <div class=\"control\">\n            <label class=\"label\">Media</label>\n          <file-pond #myPond [options]=\"uploadOptions\" (onprocessfile)=\"pondHandleUpload()\">\n          </file-pond>\n        </div>\n      </div>\n\n      <div class=\"field\">\n        <div class=\"control\">\n          <label class=\"label\">Tags</label>\n          <div class=\"tags are-medium\">\n            <span class=\"tag is-light\" [ngClass]=\"{'is-active': tags.includes(tag)}\" *ngFor=\"let tag of tagValues\" (click)=\"toggleTag(tag)\">{{tag}}</span>\n          </div>\n          <p class=\"help\">Select all that applies</p>\n        </div>\n      </div>\n\n    </section>\n    <footer class=\"modal-card-foot\">\n      <button class=\"button is-success\" [disabled]=\"postForm.invalid\" (click)=\"submitForm()\" [ngClass]=\"{'is-loading': isLoading}\">Post</button>\n      <button class=\"button\">Cancel</button>\n    </footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/validator/validator.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/validator/validator.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal validator-modal\" [ngClass]=\"{'is-active': showValidator}\">\n  <div class=\"modal-background\" (click)=\"closeValidator()\"></div>\n  <div class=\"modal-content\">\n    <div class=\"box\" (click)=\"focusInput()\">\n      <p>Please verify your email address to create your new Account</p>\n      <p>An email with a verification code has been sent to</p>\n      <p>Please enter the code here</p>\n      <div class=\"validator\">\n        <input id=\"validateinput\" type=\"text\" class=\"input\" spellcheck=\"false\">\n        <div class=\"columns is-mobile\">\n          <div class=\"column\" *ngFor=\"let i of [0,1,2,3,4,5]\">\n            <div class=\"box\" [ngClass]=\"{'is-active': keys.length === i}\">{{keys[i]}}</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"error\" *ngIf=\"error\">\n        <p>Invalid code. Please try again</p>\n      </div>\n      <p>\n        <a (click)=\"sendEmail()\">Not recieved email?</a>\n      </p>\n    </div>\n  </div>\n  <button class=\"modal-close is-large\" aria-label=\"close\" (click)=\"closeValidator()\"></button>\n</div>\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/post-detail/post-detail.component */ "./src/app/home/post-detail/post-detail.component.ts");





const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'fresh', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'post/:id', component: _home_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_4__["PostDetailComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'xdg-web';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var src_app_home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _nav_nav_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.module */ "./src/app/nav/nav.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _service_datasharing_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/datasharing.service */ "./src/app/service/datasharing.service.ts");
/* harmony import */ var _service_popup_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/popup.service */ "./src/app/service/popup.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/post.service */ "./src/app/service/post.service.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            src_app_home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
            _nav_nav_module__WEBPACK_IMPORTED_MODULE_6__["NavModule"],
        ],
        providers: [
            _service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiServices"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
            _service_datasharing_service__WEBPACK_IMPORTED_MODULE_9__["DataSharingService"],
            _service_post_service__WEBPACK_IMPORTED_MODULE_12__["PostService"],
            _service_popup_service__WEBPACK_IMPORTED_MODULE_10__["PopupService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/post.service */ "./src/app/service/post.service.ts");




let HomeComponent = class HomeComponent {
    constructor(postService) {
        this.postService = postService;
        this.sortings = ['Fresh', 'Popular'];
        this.sortBy = 'Fresh';
        this.newPosts = true;
        this.fetching = false;
        this.page = 1;
        this.fetching = true;
        this.postService.fetchPosts(this.page);
    }
    ngOnInit() {
        this.postService.getPosts().subscribe(posts => {
            const count = posts[0].postsCount;
            if (!this.totalPosts) {
                this.totalPosts = count;
            }
            if (this.totalPosts && this.totalPosts < count) {
            }
            this.posts = [];
            this.fetching = false;
            this.posts = posts;
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'scroll').subscribe(event => {
            if (this.totalPosts === this.posts.length) {
                return;
            }
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                if (!this.fetching) {
                    this.fetching = true;
                    this.page += 1;
                    if (this.sortBy === 'Popular') {
                        return this.postService.fetchPopularPosts(this.page);
                    }
                    return this.postService.fetchPosts(this.page);
                }
            }
        });
    }
    hasLikedPost(postvote) {
        return this.postService.hasLikedPost(postvote);
    }
    hasSavedPost(postheart) {
        return this.postService.hasSavedPost(postheart);
    }
    toggleLike(postId) {
        this.postService.likePost(postId);
    }
    toggleSave(postId) {
        this.postService.savePost(postId);
    }
    toggleDetail(post) {
        window.location.hash = 'postid=' + post.id;
    }
    isVideo(url) {
        const ext = url.split('.')[1];
        if (ext === 'mp4' || ext === 'vid') {
            return 'video';
        }
    }
    sortPosts(sort) {
        if (this.sortBy === sort) {
            return;
        }
        else {
            this.sortBy = sort;
            this.posts = [];
            this.page = 1;
            // window.scroll(0, 0);
            this.fetching = true;
            if (this.sortBy === 'Popular') {
                return this.postService.fetchPopularPosts(this.page);
            }
            else {
                return this.postService.fetchPosts(this.page);
            }
        }
    }
    getTags(tags) {
        if (tags === '' || tags === undefined || tags === null) {
            return [];
        }
        return tags.split(',');
    }
    timeDiff(time) {
        return this.postService.getTimeDiff(time);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _service_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html")
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-detail/post-detail.component */ "./src/app/home/post-detail/post-detail.component.ts");
/* harmony import */ var _post_modal_post_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-modal/post-modal.component */ "./src/app/home/post-modal/post-modal.component.ts");







let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
            _post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_5__["PostDetailComponent"],
            _post_modal_post_modal_component__WEBPACK_IMPORTED_MODULE_6__["PostModalComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/home/post-detail/post-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/post-detail/post-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: PostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function() { return PostDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/post.service */ "./src/app/service/post.service.ts");






let PostDetailComponent = class PostDetailComponent {
    constructor(apiServices, authService, postService) {
        this.apiServices = apiServices;
        this.authService = authService;
        this.postService = postService;
        this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    ngOnInit() {
        this.apiServices.getPost(1).subscribe(post => {
            this.postDetail = post;
        });
    }
    postComment() {
        if (this.commentForm.valid) {
            const postId = this.postDetail.id;
            const comment = {
                comment: this.commentForm.value.comment
            };
            if (this.authService.isVerified()) {
                this.postService.postComment(postId, comment).subscribe(res => {
                    this.commentForm.reset();
                    this.postDetail.comment.push(res);
                    this.postService.setActivePost(this.postDetail);
                });
            }
        }
    }
    hasLikedPost() {
        return this.postService.hasLikedPost(this.postDetail.postVote);
    }
    toggleLike() {
        this.postService.likePost(this.postDetail.id);
    }
    timeDiff(time) {
        return this.postService.getTimeDiff(time);
    }
};
PostDetailComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiServices"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _service_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] }
];
PostDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-detail',
        template: __webpack_require__(/*! raw-loader!./post-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/post-detail/post-detail.component.html")
    })
], PostDetailComponent);



/***/ }),

/***/ "./src/app/home/post-modal/post-modal.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/post-modal/post-modal.component.ts ***!
  \*********************************************************/
/*! exports provided: PostModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostModalComponent", function() { return PostModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/post.service */ "./src/app/service/post.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");







let PostModalComponent = class PostModalComponent {
    constructor(router, apiServices, authService, postService) {
        this.router = router;
        this.apiServices = apiServices;
        this.authService = authService;
        this.postService = postService;
        this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.fetching = true;
        this.showModal = false;
    }
    ngOnInit() {
        this.checkHash();
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                this.checkHash();
            }
        });
        this.postService.getActivePost().subscribe(post => {
            this.fetching = false;
            this.postDetail = post;
        });
    }
    checkHash() {
        const hash = window.location.hash;
        if (hash) {
            const query = hash.split('=');
            if (query.length > 1) {
                const key = query[0];
                if (key === '#postid') {
                    const id = query[1];
                    this.getPost(id);
                    this.showModal = true;
                }
            }
        }
    }
    getPost(id) {
        this.fetching = true;
        this.postService.fetchPostDetail(id);
    }
    postComment() {
        if (this.commentForm.valid) {
            const postId = this.postDetail.id;
            const comment = {
                comment: this.commentForm.value.comment
            };
            if (this.authService.isVerified()) {
                this.postService.postComment(postId, comment).subscribe(res => {
                    this.commentForm.reset();
                    this.postDetail.comment.push(res);
                    this.postService.setActivePost(this.postDetail);
                });
            }
        }
    }
    hasLikedPost() {
        return this.postService.hasLikedPost(this.postDetail.postVote);
    }
    toggleLike() {
        this.postService.likePost(this.postDetail.id);
    }
    hasSavedPost() {
        return this.postService.hasSavedPost(this.postDetail.postHeart);
    }
    toggleSave() {
        this.postService.savePost(this.postDetail.id);
    }
    closeModal() {
        window.location.hash = 'home';
        this.postDetail = null;
        this.showModal = false;
        document.getElementById('html').classList.remove('is-clipped');
    }
    getTags(tags) {
        if (tags === '' || tags === undefined || tags === null) {
            return [];
        }
        return tags.split(',');
    }
    timeDiff(time) {
        return this.postService.getTimeDiff(time);
    }
};
PostModalComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiServices"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _service_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] }
];
PostModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-modal',
        template: __webpack_require__(/*! raw-loader!./post-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/post-modal/post-modal.component.html")
    })
], PostModalComponent);



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _service_datasharing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/datasharing.service */ "./src/app/service/datasharing.service.ts");
/* harmony import */ var _service_popup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/popup.service */ "./src/app/service/popup.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");







let LoginComponent = class LoginComponent {
    constructor(apiServices, authService, dataSharingService, popupService) {
        this.apiServices = apiServices;
        this.authService = authService;
        this.dataSharingService = dataSharingService;
        this.popupService = popupService;
        this.error = null;
        this.isLoading = false;
        this.showError = false;
        this.showModal = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.popupService.getLoginModal().subscribe(res => {
            this.showModal = res.showModal;
        });
    }
    closeModal() {
        document.getElementById('html').classList.remove('is-clipped');
        this.loginForm.reset();
        this.showModal = false;
    }
    login() {
        this.error = null;
        this.showError = false;
        this.isLoading = false;
        if (this.loginForm.invalid) {
            return this.showError = true;
        }
        if (this.loginForm.valid) {
            this.isLoading = true;
            this.apiServices.login(this.loginForm.value).subscribe(res => {
                if (res) {
                    this.authService.setUser(res.body);
                    this.isLoading = false;
                    this.showModal = false;
                    this.loginForm.reset();
                }
            }, err => {
                this.error = err.error.message;
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiServices"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _service_datasharing_service__WEBPACK_IMPORTED_MODULE_4__["DataSharingService"] },
    { type: _service_popup_service__WEBPACK_IMPORTED_MODULE_5__["PopupService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html")
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/login/verify/verify.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/login/signup/signup.component.ts");







let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _verify_verify_component__WEBPACK_IMPORTED_MODULE_5__["VerifyComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ],
        exports: [
            _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
            _verify_verify_component__WEBPACK_IMPORTED_MODULE_5__["VerifyComponent"]
        ]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/login/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/login/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _service_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/popup.service */ "./src/app/service/popup.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");






let SignupComponent = class SignupComponent {
    constructor(apiServices, authService, popupService) {
        this.apiServices = apiServices;
        this.authService = authService;
        this.popupService = popupService;
        this.error = null;
        this.isLoading = false;
        this.showError = false;
        this.showModal = false;
        this.singupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.popupService.getSignupModal().subscribe(res => {
            this.showModal = res.showModal;
        });
    }
    closeModal() {
        document.getElementById('html').classList.remove('is-clipped');
        this.singupForm.reset();
        this.showModal = false;
    }
    signUp() {
        this.error = null;
        this.showError = false;
        this.isLoading = false;
        if (this.singupForm.invalid) {
            return this.showError = true;
        }
        if (this.singupForm.valid) {
            this.isLoading = true;
            this.apiServices.signup(this.singupForm.value).subscribe(res => {
                this.authService.setUser(res.body);
                this.isLoading = false;
                this.showModal = false;
                this.singupForm.reset();
            }, err => {
                this.error = err.error.message;
            });
        }
    }
};
SignupComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiServices"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _service_popup_service__WEBPACK_IMPORTED_MODULE_4__["PopupService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/signup/signup.component.html")
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/login/verify/verify.component.ts":
/*!**************************************************!*\
  !*** ./src/app/login/verify/verify.component.ts ***!
  \**************************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");





let VerifyComponent = class VerifyComponent {
    constructor(route, apiServices, authService) {
        this.route = route;
        this.apiServices = apiServices;
        this.authService = authService;
        this.verifying = true;
        this.verified = false;
    }
    ngOnInit() {
        this.route.params.subscribe(res => {
            this.apiServices.verifyEmail(res['id']).subscribe(res => {
                console.log(res);
                this.authService.setUser(res);
            });
        });
    }
};
VerifyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiServices"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
VerifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verify',
        template: __webpack_require__(/*! raw-loader!./verify.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/verify/verify.component.html"),
    })
], VerifyComponent);



/***/ }),

/***/ "./src/app/nav/header/header.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav/header/header.component.ts ***!
  \************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _service_datasharing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/datasharing.service */ "./src/app/service/datasharing.service.ts");
/* harmony import */ var _service_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/popup.service */ "./src/app/service/popup.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");






let HeaderComponent = class HeaderComponent {
    constructor(apiServices, authService, dataSharingService, popUpService) {
        this.apiServices = apiServices;
        this.authService = authService;
        this.dataSharingService = dataSharingService;
        this.popUpService = popUpService;
        this.authService.initApi();
    }
    ngOnInit() {
        this.authService.getUser().subscribe(user => {
            this.user = user;
        });
    }
    createPost() {
        if (this.authService.isVerified()) {
            return this.popUpService.togglePostModal();
        }
    }
    logout() {
        this.authService.logout();
    }
    openLogin() {
        this.popUpService.toggleLoginModal();
    }
    openSignup() {
        this.popUpService.toggleSignupModal();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiServices"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _service_datasharing_service__WEBPACK_IMPORTED_MODULE_3__["DataSharingService"] },
    { type: _service_popup_service__WEBPACK_IMPORTED_MODULE_4__["PopupService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/header/header.component.html")
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/nav/modals/modals.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav/modals/modals.component.ts ***!
  \************************************************/
/*! exports provided: ModalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsComponent", function() { return ModalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalsComponent = class ModalsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ModalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modals',
        template: __webpack_require__(/*! raw-loader!./modals.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/modals/modals.component.html")
    })
], ModalsComponent);



/***/ }),

/***/ "./src/app/nav/nav.module.ts":
/*!***********************************!*\
  !*** ./src/app/nav/nav.module.ts ***!
  \***********************************/
/*! exports provided: NavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavModule", function() { return NavModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _uploader_uploader_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uploader/uploader.module */ "./src/app/uploader/uploader.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/nav/header/header.component.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals/modals.component */ "./src/app/nav/modals/modals.component.ts");
/* harmony import */ var _validator_validator_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../validator/validator.module */ "./src/app/validator/validator.module.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/nav/sidenav/sidenav.component.ts");









let NavModule = class NavModule {
};
NavModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _modals_modals_component__WEBPACK_IMPORTED_MODULE_6__["ModalsComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__["SidenavComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _login_login_module__WEBPACK_IMPORTED_MODULE_5__["LoginModule"],
            _uploader_uploader_module__WEBPACK_IMPORTED_MODULE_3__["UploaderModule"],
            _validator_validator_module__WEBPACK_IMPORTED_MODULE_7__["ValidatorModule"]
        ],
        exports: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]
        ]
    })
], NavModule);



/***/ }),

/***/ "./src/app/nav/sidenav/sidenav.component.ts":
/*!**************************************************!*\
  !*** ./src/app/nav/sidenav/sidenav.component.ts ***!
  \**************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidenavComponent = class SidenavComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidenav',
        template: __webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/sidenav/sidenav.component.html")
    })
], SidenavComponent);



/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServices", function() { return ApiServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _popup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup.service */ "./src/app/service/popup.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let ApiServices = class ApiServices {
    constructor(http, popupService) {
        this.http = http;
        this.popupService = popupService;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiurl;
        this.postMediaUrl = this.apiUrl + '/media/';
        this.postUrl = this.apiUrl + '/post/';
        this.mediaPostUrl = this.apiUrl + '/media/post';
        this.likePostUrl = this.apiUrl + '/like/post/';
        this.dislikePostUrl = this.apiUrl + '/dislike/post/';
        this.savePostUrl = this.apiUrl + '/save/post/';
        this.unsavePostUrl = this.apiUrl + '/unsave/post/';
        this.loginUrl = this.apiUrl + '/login';
        this.logoutUrl = this.apiUrl + '/logout';
        this.signupUrl = this.apiUrl + '/register';
    }
    initApi() {
        return this.http.get(this.apiUrl, { responseType: 'json', observe: 'body' });
    }
    listPost(page) {
        const reqHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({});
        return this.http.get(this.postUrl + '?page=' + page, { headers: reqHeaders, responseType: 'json', observe: 'body' });
    }
    listPopularPosts(page) {
        const reqHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({});
        return this.http.get(this.postUrl + 'popular?page=' + page, { headers: reqHeaders, responseType: 'json', observe: 'body' });
    }
    getPost(id) {
        const getPostUrl = this.postUrl + id;
        const reqHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({});
        return this.http.get(getPostUrl, { headers: reqHeaders, responseType: 'json', observe: 'body' });
    }
    createPost(body) {
        return this.http.post(this.postUrl, body, { headers: this.buildHeaders() });
    }
    updatePost(body, id) {
        return this.http.post(this.postUrl + id, body, { headers: this.buildHeaders() });
    }
    listComments(postid) {
        const url = this.apiUrl + '/post/' + postid + '/comment';
        return this.http.get(url, { headers: this.buildHeaders() });
    }
    postComment(postid, body) {
        const url = this.apiUrl + '/post/' + postid + '/comment';
        return this.http.post(url, body, { headers: this.buildHeaders() });
    }
    likePost(id) {
        return this.http.post(this.likePostUrl + id, null, { headers: this.buildHeaders() });
    }
    dislikePost(id) {
        return this.http.post(this.dislikePostUrl + id, null, { headers: this.buildHeaders() });
    }
    savePost(id) {
        return this.http.post(this.savePostUrl + id, null, { headers: this.buildHeaders() });
    }
    unSavePost(id) {
        return this.http.post(this.unsavePostUrl + id, null, { headers: this.buildHeaders() });
    }
    login(body) {
        return this.http.post(this.loginUrl, body, { headers: this.buildHeaders(), observe: 'response' });
    }
    logout() {
        return this.http.post(this.logoutUrl, null, { headers: this.buildHeaders(), observe: 'response' });
    }
    signup(body) {
        return this.http.post(this.signupUrl, body, { headers: this.buildHeaders(), observe: 'response' });
    }
    getUser() {
        return this.http.get(this.apiUrl + '/user', { headers: this.buildHeaders() });
    }
    verifyEmail(code) {
        return this.http.post(this.apiUrl + '/verifyemail', code, { headers: this.buildHeaders() });
    }
    sendVerificationEmail() {
        return this.http.get(this.apiUrl + '/user/sendVerificationEmail', { headers: this.buildHeaders() });
    }
    openLogin() {
        this.popupService.toggleLoginModal();
    }
    buildHeaders() {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'CSRF-Token': sessionStorage.getItem('csrf'),
        });
    }
};
ApiServices.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _popup_service__WEBPACK_IMPORTED_MODULE_3__["PopupService"] }
];
ApiServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ApiServices);



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup.service */ "./src/app/service/popup.service.ts");





let AuthService = class AuthService {
    constructor(apiServices, popupService) {
        this.apiServices = apiServices;
        this.popupService = popupService;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.csrfSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    initApi() {
        this.apiServices.initApi().subscribe(res => {
            this.setCsrf();
            if (res) {
                this.setUser(res);
            }
        });
    }
    setCsrf() {
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
            const key = cookie.split('=')[0].trim();
            if (key === 'XSRF-TOKEN') {
                this.csrf = cookie.split('=')[1];
                sessionStorage.setItem('csrf', this.csrf);
                this.csrfSubject.next(this.csrf);
            }
        });
    }
    getCsrf() {
        return this.csrfSubject.asObservable();
    }
    hasUser() {
        if (!this.user) {
            this.popupService.toggleLoginModal();
            return false;
        }
        return true;
    }
    isAuthenticated() {
        if (!this.user) {
            this.popupService.toggleLoginModal();
            return false;
        }
        return true;
    }
    isVerified() {
        if (this.isAuthenticated()) {
            if (!this.user.verified) {
                this.popupService.toggleVerificationModal();
                return false;
            }
            return true;
        }
        return false;
    }
    fetchUser() {
        if (this.isAuthenticated()) {
            this.apiServices.getUser().subscribe(user => {
                this.setUser(user);
            }, err => {
                if (err.error.message === 'jwt expired') {
                    this.setUser(null);
                }
            });
        }
    }
    getUser() {
        return this.userSubject.asObservable();
    }
    setUser(user) {
        this.user = user;
        this.userSubject.next(user);
    }
    logout() {
        this.user = null;
        this.userSubject.next(null);
        this.apiServices.logout().subscribe(res => {
            console.log(res);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiServices"] },
    { type: _popup_service__WEBPACK_IMPORTED_MODULE_4__["PopupService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/service/datasharing.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/datasharing.service.ts ***!
  \************************************************/
/*! exports provided: DataSharingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSharingService", function() { return DataSharingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let DataSharingService = class DataSharingService {
    constructor() {
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.posts = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getUser() {
        return this.user.asObservable();
    }
    setUser(user) {
        this.user.next(user);
    }
    getPosts() {
        return this.posts.asObservable();
    }
    setPosts(posts) {
        return this.posts.next(posts);
    }
    updatePost(post) {
        console.log(post);
    }
};
DataSharingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataSharingService);



/***/ }),

/***/ "./src/app/service/popup.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/popup.service.ts ***!
  \******************************************/
/*! exports provided: PopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let PopupService = class PopupService {
    constructor() {
        this.errorModal = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loginModal = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.signupModal = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.postModal = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.postDetailModal = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.registerModal = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.verificationModal = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.toggleModal = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getLoginModal() {
        return this.loginModal.asObservable();
    }
    toggleLoginModal() {
        document.getElementById('html').classList.add('is-clipped');
        this.loginModal.next({
            showModal: true
        });
    }
    getPostModal() {
        return this.postModal.asObservable();
    }
    togglePostModal() {
        document.getElementById('html').classList.add('is-clipped');
        this.postModal.next({
            showModal: true
        });
    }
    getSignupModal() {
        return this.signupModal.asObservable();
    }
    toggleSignupModal() {
        document.getElementById('html').classList.add('is-clipped');
        this.signupModal.next({
            show: true
        });
    }
    getRegisterModal() {
        return this.registerModal.asObservable();
    }
    toggleRegisterModal(modal) {
        this.registerModal.next(modal);
    }
    getVerificationModal() {
        return this.verificationModal.asObservable();
    }
    toggleVerificationModal() {
        document.getElementById('html').classList.add('is-clipped');
        this.verificationModal.next({
            showModal: true
        });
    }
    getErrorModal() {
        return this.errorModal.asObservable();
    }
    toggleErrorModal(modal) {
        this.errorModal.next(modal);
    }
    getPostDetailModal() {
        return this.postDetailModal.asObservable();
    }
    togglePostDetailModal(modal) {
        this.postDetailModal.next({
            showModal: true
        });
    }
};
PopupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PopupService);



/***/ }),

/***/ "./src/app/service/post.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/post.service.ts ***!
  \*****************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! javascript-time-ago */ "./node_modules/javascript-time-ago/index.js");
/* harmony import */ var javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! javascript-time-ago/locale/en */ "./node_modules/javascript-time-ago/locale/en/index.js");
/* harmony import */ var javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");





javascript_time_ago__WEBPACK_IMPORTED_MODULE_3__["default"].addLocale(javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_4___default.a);


let PostService = class PostService {
    constructor(apiServices, authService) {
        this.apiServices = apiServices;
        this.authService = authService;
        this.timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_3__["default"]('en-US');
        this.postSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.postDetailSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.postsArray = [];
        this.authService.getUser().subscribe(user => this.user = user);
    }
    getPosts() {
        return this.postSubject.asObservable();
    }
    setPosts() {
        return this.postSubject.next(this.postsArray);
    }
    fetchPosts(page) {
        let processed = 0;
        if (page === 1) {
            this.postsArray = [];
        }
        this.apiServices.listPost(page).subscribe(posts => {
            posts.forEach(post => {
                processed += 1;
                if (this.postsArray.includes(post.id)) {
                    return;
                }
                this.postsArray.push(post);
                if (processed === posts.length) {
                    this.setPosts();
                }
            });
        });
    }
    fetchPopularPosts(page) {
        if (page === 1) {
            this.postsArray = [];
        }
        this.apiServices.listPopularPosts(page).subscribe(posts => {
            posts.forEach(post => {
                const postExists = this.postsArray.find(item => item.id === post.id);
                if (postExists) {
                    return;
                }
                this.postsArray.push(post);
            });
            return this.setPosts();
        });
    }
    fetchPostDetail(id) {
        this.apiServices.getPost(id).subscribe(post => {
            this.updatePost(post);
            this.setActivePost(post);
        });
    }
    postComment(postid, comment) {
        if (this.authService.isVerified()) {
            return this.apiServices.postComment(postid, comment);
        }
    }
    likePost(id) {
        if (this.authService.isVerified()) {
            const post = this.postsArray.find(item => item.id === id);
            if (post) {
                const voteIndex = post.postVote.findIndex(item => {
                    return (item.userId === this.user.id && item.postId === post.id);
                });
                if (voteIndex < 0) {
                    post.postVote.push({
                        postId: post.id,
                        userId: this.user.id
                    });
                    return this.apiServices.likePost(post.id).subscribe(res => {
                        this.updatePost(post.id);
                    });
                }
                else {
                    post.postVote.splice(voteIndex, 1);
                    return this.apiServices.dislikePost(post.id).subscribe(res => {
                        this.updatePost(post.id);
                    });
                }
            }
        }
    }
    savePost(id) {
        if (this.authService.isVerified()) {
            const post = this.postsArray.find(item => item.id === id);
            if (post) {
                const index = post.postHeart.findIndex(item => {
                    return (item.userId === this.user.id && item.postId === post.id);
                });
                if (index < 0) {
                    post.postHeart.push({
                        postId: post.id,
                        userId: this.user.id
                    });
                    return this.apiServices.savePost(post.id).subscribe(res => {
                        this.updatePost(post.id);
                    });
                }
                else {
                    post.postHeart.splice(index, 1);
                    return this.apiServices.unSavePost(post.id).subscribe(res => {
                        this.updatePost(post.id);
                    });
                }
            }
        }
    }
    hasLikedPost(vote) {
        if (!this.user) {
            return;
        }
        if (vote.length > 0) {
            return vote.find(item => item.userId === this.user.id);
        }
    }
    hasSavedPost(heart) {
        if (!this.user) {
            return;
        }
        if (heart.length > 0) {
            return heart.find(item => item.userId === this.user.id);
        }
    }
    setActivePost(post) {
        if (post) {
            document.getElementById('html').classList.add('is-clipped');
        }
        else {
            document.getElementById('html').classList.remove('is-clipped');
        }
        this.postDetailSubject.next(post);
    }
    getActivePost() {
        return this.postDetailSubject.asObservable();
    }
    addPost(id) {
        this.apiServices.getPost(id).subscribe(post => {
            this.updatePost(post);
            this.postsArray.push(post);
            this.setPosts();
        });
    }
    updatePost(post) {
        const postIndex = this.postsArray.findIndex(item => {
            return item.id === post.id;
        });
        if (postIndex >= 0) {
            this.postsArray[postIndex] = post;
        }
    }
    getTimeDiff(time) {
        if (time) {
            const newDate = new Date(time);
            return this.timeAgo.format(newDate);
        }
    }
};
PostService.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiServices"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PostService);



/***/ }),

/***/ "./src/app/uploader/uploader.component.ts":
/*!************************************************!*\
  !*** ./src/app/uploader/uploader.component.ts ***!
  \************************************************/
/*! exports provided: UploaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploaderComponent", function() { return UploaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _service_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/popup.service */ "./src/app/service/popup.service.ts");
/* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/post.service */ "./src/app/service/post.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");







let UploaderComponent = class UploaderComponent {
    constructor(apiServices, authService, postService, popupService) {
        this.apiServices = apiServices;
        this.authService = authService;
        this.postService = postService;
        this.popupService = popupService;
        this.tagValues = ['Desi', 'Non Desi', 'Bhabhi', 'Boobs', 'Pussy'];
        this.tags = [];
        this.showModal = false;
        this.isLoading = false;
        this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            mediaId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.uploadOptions = {
            multiple: false,
            maxFiles: 1,
            allowImagePreview: true,
            instantUpload: true,
            allowReplace: false,
            allowRevert: false,
            acceptedFileTypes: 'image/jpeg, image/png, image/gif, video/mp4',
            server: {
                url: this.apiServices.postUrl,
                process: {
                    headers: {
                        'CSRF-Token': this.csrf
                    }
                }
            }
        };
    }
    ngOnInit() {
        this.popupService.getPostModal().subscribe(res => {
            this.showModal = res.showModal;
        });
        this.authService.getCsrf().subscribe(res => {
            this.uploadOptions.server.process.headers['CSRF-Token'] = res;
        });
    }
    pondHandleUpload() {
        const file = this.myPond.getFile();
        const res = JSON.parse(file.serverId);
        this.postForm.patchValue({ mediaId: res.id });
        if (res.postId) {
            this.postId = res.postId;
        }
    }
    toggleTag(tag) {
        const index = this.tags.indexOf(tag);
        if (index > -1) {
            return this.tags.splice(index, 1);
        }
        return this.tags.push(tag);
    }
    isDisabled() {
        if (this.tags.length < 4) {
            return this.postForm.controls.tags.enable();
        }
        return this.postForm.controls.tags.disable();
    }
    submitForm() {
        if (this.postForm.valid) {
            this.isLoading = true;
            const postValue = {
                title: this.postForm.controls.title.value,
                tags: this.tags.join(','),
                published: true,
            };
            if (this.postId) {
                return this.apiServices.updatePost(postValue, this.postId).subscribe(res => {
                    this.isLoading = false;
                    this.closeModal();
                    return this.postService.addPost(this.postId);
                });
            }
            return this.apiServices.createPost(postValue).subscribe(res => {
                this.isLoading = false;
                this.closeModal();
                return this.postService.addPost(this.postId);
            });
        }
    }
    closeModal() {
        this.showModal = false;
        document.getElementById('html').classList.remove('is-clipped');
        this.myPond.removeFiles();
        this.postForm.reset();
    }
};
UploaderComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiServices"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _service_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] },
    { type: _service_popup_service__WEBPACK_IMPORTED_MODULE_4__["PopupService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myPond', null)
], UploaderComponent.prototype, "myPond", void 0);
UploaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-uploader',
        template: __webpack_require__(/*! raw-loader!./uploader.component.html */ "./node_modules/raw-loader/index.js!./src/app/uploader/uploader.component.html")
    })
], UploaderComponent);



/***/ }),

/***/ "./src/app/uploader/uploader.module.ts":
/*!*********************************************!*\
  !*** ./src/app/uploader/uploader.module.ts ***!
  \*********************************************/
/*! exports provided: UploaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploaderModule", function() { return UploaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _uploader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uploader.component */ "./src/app/uploader/uploader.component.ts");
/* harmony import */ var ngx_filepond__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-filepond */ "./node_modules/ngx-filepond/esm2015/ngx-filepond.js");
/* harmony import */ var filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! filepond-plugin-file-validate-type */ "./node_modules/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.js");
/* harmony import */ var filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! filepond-plugin-image-preview */ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js");
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var filepond_plugin_image_preview_dist_filepond_plugin_image_preview_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css */ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css");
/* harmony import */ var filepond_plugin_image_preview_dist_filepond_plugin_image_preview_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_preview_dist_filepond_plugin_image_preview_css__WEBPACK_IMPORTED_MODULE_8__);









Object(ngx_filepond__WEBPACK_IMPORTED_MODULE_5__["registerPlugin"])(filepond_plugin_file_validate_type__WEBPACK_IMPORTED_MODULE_6___default.a, filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_7___default.a);
let UploaderModule = class UploaderModule {
};
UploaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_uploader_component__WEBPACK_IMPORTED_MODULE_4__["UploaderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_filepond__WEBPACK_IMPORTED_MODULE_5__["FilePondModule"],
        ],
        exports: [
            _uploader_component__WEBPACK_IMPORTED_MODULE_4__["UploaderComponent"]
        ]
    })
], UploaderModule);



/***/ }),

/***/ "./src/app/validator/validator.component.ts":
/*!**************************************************!*\
  !*** ./src/app/validator/validator.component.ts ***!
  \**************************************************/
/*! exports provided: ValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorComponent", function() { return ValidatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_popup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/popup.service */ "./src/app/service/popup.service.ts");






let ValidatorComponent = class ValidatorComponent {
    constructor(apiServices, authService, popupService) {
        this.apiServices = apiServices;
        this.authService = authService;
        this.popupService = popupService;
        this.showValidator = false;
        this.keys = [];
        this.error = null;
        this.attempt = 0;
    }
    ngOnInit() {
        this.popupService.getVerificationModal().subscribe(res => {
            this.showValidator = res.showModal;
            if (this.showValidator) {
                this.initKey();
                this.focusInput();
            }
        });
        this.authService.getUser().subscribe(user => {
            if (user && user.verified) {
                this.showValidator = false;
            }
        });
    }
    initKey() {
        if (!this.authService.isAuthenticated) {
            return;
        }
        const keypressEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'keyup');
        this.keySubscription = keypressEvent.subscribe(res => {
            if (this.keys.length === 6) {
                return;
            }
            if (res.key === 'Delete' || res.key === 'Backspace') {
                return this.keys.pop();
            }
            if (res['key'].trim().length === 1) {
                this.keys.push(res['key']);
                if (this.keys.length === 6) {
                    this.error = null;
                    this.apiServices.verifyEmail({
                        code: this.keys.join('')
                    }).subscribe(res => {
                        console.log(res);
                        this.keys = [];
                        this.closeValidator();
                        this.authService.setUser(res);
                    }, error => {
                        this.attempt += 1;
                        this.error = error;
                        this.keys = [];
                    });
                }
            }
        });
    }
    focusInput() {
        document.getElementById('validateinput').focus();
    }
    sendEmail() {
        this.apiServices.sendVerificationEmail().subscribe(res => {
            console.log(res);
        });
    }
    closeValidator() {
        this.showValidator = false;
        this.keySubscription.unsubscribe();
    }
};
ValidatorComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiServices"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _service_popup_service__WEBPACK_IMPORTED_MODULE_5__["PopupService"] }
];
ValidatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-validator',
        template: __webpack_require__(/*! raw-loader!./validator.component.html */ "./node_modules/raw-loader/index.js!./src/app/validator/validator.component.html"),
    })
], ValidatorComponent);



/***/ }),

/***/ "./src/app/validator/validator.module.ts":
/*!***********************************************!*\
  !*** ./src/app/validator/validator.module.ts ***!
  \***********************************************/
/*! exports provided: ValidatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorModule", function() { return ValidatorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _validator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validator.component */ "./src/app/validator/validator.component.ts");




let ValidatorModule = class ValidatorModule {
};
ValidatorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_validator_component__WEBPACK_IMPORTED_MODULE_3__["ValidatorComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_validator_component__WEBPACK_IMPORTED_MODULE_3__["ValidatorComponent"]]
    })
], ValidatorModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiurl: 'http://localhost:3000/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sailesh/Documents/sailesh/xdg-api/xdg-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map