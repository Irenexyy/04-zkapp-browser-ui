"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["contracts_build_src_Add_js"],{

/***/ "../contracts/build/src/Add.js":
/*!*************************************!*\
  !*** ../contracts/build/src/Add.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Add\": function() { return /* binding */ Add; }\n/* harmony export */ });\n/* harmony import */ var snarkyjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! snarkyjs */ \"./node_modules/snarkyjs/dist/web/index.js\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\n\n/**\n * Basic Example\n * See https://docs.minaprotocol.com/zkapps for more info.\n *\n * The Add contract initializes the state variable 'num' to be a Field(1) value by default when deployed.\n * When the 'update' method is called, the Add contract adds Field(2) to its 'num' contract state.\n *\n * This file is safe to delete and replace with your own contract.\n */\nclass Add extends snarkyjs__WEBPACK_IMPORTED_MODULE_0__.SmartContract {\n    constructor() {\n        super(...arguments);\n        this.num = (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__.State)();\n    }\n    init() {\n        super.init();\n        this.num.set((0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__.Field)(1));\n    }\n    update() {\n        const currentState = this.num.get();\n        this.num.assertEquals(currentState); // precondition that links this.num.get() to the actual on-chain state\n        const newState = currentState.add(2);\n        this.num.set(newState);\n    }\n}\n__decorate([\n    (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__.state)(snarkyjs__WEBPACK_IMPORTED_MODULE_0__.Field),\n    __metadata(\"design:type\", Object)\n], Add.prototype, \"num\", void 0);\n__decorate([\n    snarkyjs__WEBPACK_IMPORTED_MODULE_0__.method,\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", void 0)\n], Add.prototype, \"update\", null);\n//# sourceMappingURL=Add.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vY29udHJhY3RzL2J1aWxkL3NyYy9BZGQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQkFBa0IsU0FBSSxJQUFJLFNBQUk7QUFDOUI7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQSxrQkFBa0IsU0FBSSxJQUFJLFNBQUk7QUFDOUI7QUFDQTtBQUNzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxrQkFBa0IsbURBQWE7QUFDdEM7QUFDQTtBQUNBLG1CQUFtQiwrQ0FBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsK0NBQUs7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtDQUFLLENBQUMsMkNBQUs7QUFDZjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDRDQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi4vY29udHJhY3RzL2J1aWxkL3NyYy9BZGQuanM/ZTUyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xuaW1wb3J0IHsgRmllbGQsIFNtYXJ0Q29udHJhY3QsIHN0YXRlLCBTdGF0ZSwgbWV0aG9kIH0gZnJvbSAnc25hcmt5anMnO1xuLyoqXG4gKiBCYXNpYyBFeGFtcGxlXG4gKiBTZWUgaHR0cHM6Ly9kb2NzLm1pbmFwcm90b2NvbC5jb20vemthcHBzIGZvciBtb3JlIGluZm8uXG4gKlxuICogVGhlIEFkZCBjb250cmFjdCBpbml0aWFsaXplcyB0aGUgc3RhdGUgdmFyaWFibGUgJ251bScgdG8gYmUgYSBGaWVsZCgxKSB2YWx1ZSBieSBkZWZhdWx0IHdoZW4gZGVwbG95ZWQuXG4gKiBXaGVuIHRoZSAndXBkYXRlJyBtZXRob2QgaXMgY2FsbGVkLCB0aGUgQWRkIGNvbnRyYWN0IGFkZHMgRmllbGQoMikgdG8gaXRzICdudW0nIGNvbnRyYWN0IHN0YXRlLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBzYWZlIHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB3aXRoIHlvdXIgb3duIGNvbnRyYWN0LlxuICovXG5leHBvcnQgY2xhc3MgQWRkIGV4dGVuZHMgU21hcnRDb250cmFjdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubnVtID0gU3RhdGUoKTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xuICAgICAgICB0aGlzLm51bS5zZXQoRmllbGQoMSkpO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHRoaXMubnVtLmdldCgpO1xuICAgICAgICB0aGlzLm51bS5hc3NlcnRFcXVhbHMoY3VycmVudFN0YXRlKTsgLy8gcHJlY29uZGl0aW9uIHRoYXQgbGlua3MgdGhpcy5udW0uZ2V0KCkgdG8gdGhlIGFjdHVhbCBvbi1jaGFpbiBzdGF0ZVxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IGN1cnJlbnRTdGF0ZS5hZGQoMik7XG4gICAgICAgIHRoaXMubnVtLnNldChuZXdTdGF0ZSk7XG4gICAgfVxufVxuX19kZWNvcmF0ZShbXG4gICAgc3RhdGUoRmllbGQpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG5dLCBBZGQucHJvdG90eXBlLCBcIm51bVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgbWV0aG9kLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBGdW5jdGlvbiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnJldHVybnR5cGVcIiwgdm9pZCAwKVxuXSwgQWRkLnByb3RvdHlwZSwgXCJ1cGRhdGVcIiwgbnVsbCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1BZGQuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../contracts/build/src/Add.js\n"));

/***/ })

}]);