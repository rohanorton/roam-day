/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DateParser/index.ts":
/*!*********************************!*\
  !*** ./src/DateParser/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateParser = void 0;
const INVALID = "INVALID";
class DateParser {
    constructor() {
        this.MONTHS = Object.freeze([
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ]);
    }
    parse(input) {
        const chunks = this.chunkDateParts(input);
        const day = this.parseDay(chunks[0]);
        const month = this.parseMonth(chunks[1]);
        const year = this.parseYear(chunks[2]);
        return this.createDate(year, month, day);
    }
    parseDay(input) {
        return Number(input.replace(/\D/g, ""));
    }
    parseYear(input) {
        return Number(input);
    }
    parseMonth(input) {
        return this.MONTHS.indexOf(input);
    }
    createDate(year, month, day) {
        const date = new Date(year, month, day);
        return this.isInvalid(date) ? null : date;
    }
    isInvalid(date) {
        return date.toString() === "Invalid Date";
    }
    chunkDateParts(input) {
        const [monthString = INVALID, dayString = INVALID, yearString = INVALID] = input.trim().split(" ");
        return [dayString, monthString, yearString];
    }
}
exports.DateParser = DateParser;


/***/ }),

/***/ "./src/DayFormatter/index.ts":
/*!***********************************!*\
  !*** ./src/DayFormatter/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DayFormatter = void 0;
class DayFormatter {
    constructor() {
        this.DAYS = Object.freeze([
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ]);
    }
    format(date) {
        return this.DAYS[date.getDay()] || "";
    }
}
exports.DayFormatter = DayFormatter;


/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Main = void 0;
const DateParser_1 = __webpack_require__(/*! ./DateParser */ "./src/DateParser/index.ts");
const DayFormatter_1 = __webpack_require__(/*! ./DayFormatter */ "./src/DayFormatter/index.ts");
class Main {
    constructor() {
        this.HEADER_SELECTOR = "rm-title-display";
        this.BODY_SELECTOR = ".roam-body";
        this.DAY_CLASS = "roam-day--day-title";
    }
    run() {
        this.addDateToRoamTitleBanners();
        this.addObserver();
    }
    addObserver() {
        const observerHeadings = new MutationObserver(() => this.addDateToRoamTitleBanners());
        const $body = document.querySelector(this.BODY_SELECTOR);
        if ($body) {
            observerHeadings.observe($body, {
                childList: true,
                subtree: true,
            });
        }
    }
    addDateToRoamTitleBanners() {
        for (const $headerNode of this.getHeaderNodes()) {
            this.addDateToRoamTitleBanner($headerNode);
        }
    }
    addDateToRoamTitleBanner($headerNode) {
        const headerText = $headerNode.textContent || "";
        const dayString = this.getDayString(headerText);
        return (dayString && this.appendNode(this.createDayNode(dayString), $headerNode));
    }
    getDayString(text) {
        const date = new DateParser_1.DateParser().parse(text);
        return date && new DayFormatter_1.DayFormatter().format(date);
    }
    createDayNode(dayString) {
        const $dayNode = document.createElement("div");
        $dayNode.innerHTML = dayString;
        $dayNode.classList.add(this.DAY_CLASS);
        return $dayNode;
    }
    appendNode($newNode, $targetNode) {
        $targetNode.insertAdjacentElement("beforeend", $newNode);
    }
    getHeaderNodes() {
        return document.getElementsByClassName(this.HEADER_SELECTOR);
    }
}
exports.Main = Main;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Main_1 = __webpack_require__(/*! ./Main */ "./src/Main.ts");
new Main_1.Main().run();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kZXYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7Ozs7Ozs7Ozs7QUNqREw7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9COzs7Ozs7Ozs7OztBQ25CUDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZO0FBQ1oscUJBQXFCLG1CQUFPLENBQUMsK0NBQWM7QUFDM0MsdUJBQXVCLG1CQUFPLENBQUMsbURBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7Ozs7Ozs7VUNwRFo7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxlQUFlLG1CQUFPLENBQUMsNkJBQVE7QUFDL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRGF0ZVBhcnNlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGF5Rm9ybWF0dGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9NYWluLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRhdGVQYXJzZXIgPSB2b2lkIDA7XG5jb25zdCBJTlZBTElEID0gXCJJTlZBTElEXCI7XG5jbGFzcyBEYXRlUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5NT05USFMgPSBPYmplY3QuZnJlZXplKFtcbiAgICAgICAgICAgIFwiSmFudWFyeVwiLFxuICAgICAgICAgICAgXCJGZWJydWFyeVwiLFxuICAgICAgICAgICAgXCJNYXJjaFwiLFxuICAgICAgICAgICAgXCJBcHJpbFwiLFxuICAgICAgICAgICAgXCJNYXlcIixcbiAgICAgICAgICAgIFwiSnVuZVwiLFxuICAgICAgICAgICAgXCJKdWx5XCIsXG4gICAgICAgICAgICBcIkF1Z3VzdFwiLFxuICAgICAgICAgICAgXCJTZXB0ZW1iZXJcIixcbiAgICAgICAgICAgIFwiT2N0b2JlclwiLFxuICAgICAgICAgICAgXCJOb3ZlbWJlclwiLFxuICAgICAgICAgICAgXCJEZWNlbWJlclwiLFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgcGFyc2UoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgY2h1bmtzID0gdGhpcy5jaHVua0RhdGVQYXJ0cyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IGRheSA9IHRoaXMucGFyc2VEYXkoY2h1bmtzWzBdKTtcbiAgICAgICAgY29uc3QgbW9udGggPSB0aGlzLnBhcnNlTW9udGgoY2h1bmtzWzFdKTtcbiAgICAgICAgY29uc3QgeWVhciA9IHRoaXMucGFyc2VZZWFyKGNodW5rc1syXSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZURhdGUoeWVhciwgbW9udGgsIGRheSk7XG4gICAgfVxuICAgIHBhcnNlRGF5KGlucHV0KSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIoaW5wdXQucmVwbGFjZSgvXFxEL2csIFwiXCIpKTtcbiAgICB9XG4gICAgcGFyc2VZZWFyKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIoaW5wdXQpO1xuICAgIH1cbiAgICBwYXJzZU1vbnRoKGlucHV0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLk1PTlRIUy5pbmRleE9mKGlucHV0KTtcbiAgICB9XG4gICAgY3JlYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJbnZhbGlkKGRhdGUpID8gbnVsbCA6IGRhdGU7XG4gICAgfVxuICAgIGlzSW52YWxpZChkYXRlKSB7XG4gICAgICAgIHJldHVybiBkYXRlLnRvU3RyaW5nKCkgPT09IFwiSW52YWxpZCBEYXRlXCI7XG4gICAgfVxuICAgIGNodW5rRGF0ZVBhcnRzKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IFttb250aFN0cmluZyA9IElOVkFMSUQsIGRheVN0cmluZyA9IElOVkFMSUQsIHllYXJTdHJpbmcgPSBJTlZBTElEXSA9IGlucHV0LnRyaW0oKS5zcGxpdChcIiBcIik7XG4gICAgICAgIHJldHVybiBbZGF5U3RyaW5nLCBtb250aFN0cmluZywgeWVhclN0cmluZ107XG4gICAgfVxufVxuZXhwb3J0cy5EYXRlUGFyc2VyID0gRGF0ZVBhcnNlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EYXlGb3JtYXR0ZXIgPSB2b2lkIDA7XG5jbGFzcyBEYXlGb3JtYXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLkRBWVMgPSBPYmplY3QuZnJlZXplKFtcbiAgICAgICAgICAgIFwiU3VuZGF5XCIsXG4gICAgICAgICAgICBcIk1vbmRheVwiLFxuICAgICAgICAgICAgXCJUdWVzZGF5XCIsXG4gICAgICAgICAgICBcIldlZG5lc2RheVwiLFxuICAgICAgICAgICAgXCJUaHVyc2RheVwiLFxuICAgICAgICAgICAgXCJGcmlkYXlcIixcbiAgICAgICAgICAgIFwiU2F0dXJkYXlcIixcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGZvcm1hdChkYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkRBWVNbZGF0ZS5nZXREYXkoKV0gfHwgXCJcIjtcbiAgICB9XG59XG5leHBvcnRzLkRheUZvcm1hdHRlciA9IERheUZvcm1hdHRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NYWluID0gdm9pZCAwO1xuY29uc3QgRGF0ZVBhcnNlcl8xID0gcmVxdWlyZShcIi4vRGF0ZVBhcnNlclwiKTtcbmNvbnN0IERheUZvcm1hdHRlcl8xID0gcmVxdWlyZShcIi4vRGF5Rm9ybWF0dGVyXCIpO1xuY2xhc3MgTWFpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuSEVBREVSX1NFTEVDVE9SID0gXCJybS10aXRsZS1kaXNwbGF5XCI7XG4gICAgICAgIHRoaXMuQk9EWV9TRUxFQ1RPUiA9IFwiLnJvYW0tYm9keVwiO1xuICAgICAgICB0aGlzLkRBWV9DTEFTUyA9IFwicm9hbS1kYXktLWRheS10aXRsZVwiO1xuICAgIH1cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMuYWRkRGF0ZVRvUm9hbVRpdGxlQmFubmVycygpO1xuICAgICAgICB0aGlzLmFkZE9ic2VydmVyKCk7XG4gICAgfVxuICAgIGFkZE9ic2VydmVyKCkge1xuICAgICAgICBjb25zdCBvYnNlcnZlckhlYWRpbmdzID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4gdGhpcy5hZGREYXRlVG9Sb2FtVGl0bGVCYW5uZXJzKCkpO1xuICAgICAgICBjb25zdCAkYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5CT0RZX1NFTEVDVE9SKTtcbiAgICAgICAgaWYgKCRib2R5KSB7XG4gICAgICAgICAgICBvYnNlcnZlckhlYWRpbmdzLm9ic2VydmUoJGJvZHksIHtcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZERhdGVUb1JvYW1UaXRsZUJhbm5lcnMoKSB7XG4gICAgICAgIGZvciAoY29uc3QgJGhlYWRlck5vZGUgb2YgdGhpcy5nZXRIZWFkZXJOb2RlcygpKSB7XG4gICAgICAgICAgICB0aGlzLmFkZERhdGVUb1JvYW1UaXRsZUJhbm5lcigkaGVhZGVyTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkRGF0ZVRvUm9hbVRpdGxlQmFubmVyKCRoZWFkZXJOb2RlKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlclRleHQgPSAkaGVhZGVyTm9kZS50ZXh0Q29udGVudCB8fCBcIlwiO1xuICAgICAgICBjb25zdCBkYXlTdHJpbmcgPSB0aGlzLmdldERheVN0cmluZyhoZWFkZXJUZXh0KTtcbiAgICAgICAgcmV0dXJuIChkYXlTdHJpbmcgJiYgdGhpcy5hcHBlbmROb2RlKHRoaXMuY3JlYXRlRGF5Tm9kZShkYXlTdHJpbmcpLCAkaGVhZGVyTm9kZSkpO1xuICAgIH1cbiAgICBnZXREYXlTdHJpbmcodGV4dCkge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGVQYXJzZXJfMS5EYXRlUGFyc2VyKCkucGFyc2UodGV4dCk7XG4gICAgICAgIHJldHVybiBkYXRlICYmIG5ldyBEYXlGb3JtYXR0ZXJfMS5EYXlGb3JtYXR0ZXIoKS5mb3JtYXQoZGF0ZSk7XG4gICAgfVxuICAgIGNyZWF0ZURheU5vZGUoZGF5U3RyaW5nKSB7XG4gICAgICAgIGNvbnN0ICRkYXlOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgJGRheU5vZGUuaW5uZXJIVE1MID0gZGF5U3RyaW5nO1xuICAgICAgICAkZGF5Tm9kZS5jbGFzc0xpc3QuYWRkKHRoaXMuREFZX0NMQVNTKTtcbiAgICAgICAgcmV0dXJuICRkYXlOb2RlO1xuICAgIH1cbiAgICBhcHBlbmROb2RlKCRuZXdOb2RlLCAkdGFyZ2V0Tm9kZSkge1xuICAgICAgICAkdGFyZ2V0Tm9kZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgJG5ld05vZGUpO1xuICAgIH1cbiAgICBnZXRIZWFkZXJOb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5IRUFERVJfU0VMRUNUT1IpO1xuICAgIH1cbn1cbmV4cG9ydHMuTWFpbiA9IE1haW47XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBNYWluXzEgPSByZXF1aXJlKFwiLi9NYWluXCIpO1xubmV3IE1haW5fMS5NYWluKCkucnVuKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=