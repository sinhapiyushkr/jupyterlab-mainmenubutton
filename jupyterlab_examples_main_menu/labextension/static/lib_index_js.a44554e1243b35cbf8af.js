(self["webpackChunk_jupyterlab_examples_main_menu"] = self["webpackChunk_jupyterlab_examples_main_menu"] || []).push([["lib_index_js"],{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_mainmenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/mainmenu */ "webpack/sharing/consume/default/@jupyterlab/mainmenu");
/* harmony import */ var _jupyterlab_mainmenu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_mainmenu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Initialization data for the main menu example.
 */
const extension = {
    id: 'Airflow-mainMenu',
    autoStart: true,
    requires: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_2__.ICommandPalette, _jupyterlab_mainmenu__WEBPACK_IMPORTED_MODULE_0__.IMainMenu],
    activate: (app, palette, mainMenu) => {
        const { commands } = app;
        // Add a command
        const command1 = 'AirflowDataPlatform';
        commands.addCommand(command1, {
            label: 'Airflow DataPlatform',
            caption: 'Airflow DataPlatform',
            execute: (args) => {
                window.open('https://dataplatform-airflow.curefit.co', '_blank');
            },
        });
        const command2 = 'Commuter';
        commands.addCommand(command2, {
            label: 'Commuter',
            caption: 'Commuter',
            execute: (args) => {
                window.open('https://dataplatform-commuter.curefit.co/view/', '_blank');
            },
        });
        const command3 = 'CfDatalabDoc';
        commands.addCommand(command3, {
            label: 'Cf-Data-Lab-Doc',
            caption: 'Cf-Data-Lab-Doc',
            execute: (args) => {
                window.open('https://readme-cfdatalab.curefit.co/', '_blank');
            },
        });
        // Add the command to the command palette
        const category = 'DataPlatform';
        palette.addItem({
            command: command1,
            category,
            args: { origin: 'from the palette' },
        });
        palette.addItem({
            command: command2,
            category,
            args: { origin: 'from the palette' },
        });
        palette.addItem({
            command: command3,
            category,
            args: { origin: 'from the palette' },
        });
        // Create a menu
        const airflowMenu = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_1__.Menu({ commands });
        airflowMenu.title.label = 'Data Platforms';
        mainMenu.addMenu(airflowMenu, { rank: 80 });
        // Add the command to the menu
        airflowMenu.addItem({ command: command1, args: { origin: 'from the menu' } });
        airflowMenu.addItem({ command: command2, args: { origin: 'from the menu' } });
        airflowMenu.addItem({ command: command3, args: { origin: 'from the menu' } });
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extension);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.a44554e1243b35cbf8af.js.map