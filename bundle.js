(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
    return 'Export default';
};

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Make a declaration an export by proceeding it with export.

var NamedExportClassName = exports.NamedExportClassName = function () {
    function NamedExportClassName() {
        _classCallCheck(this, NamedExportClassName);
    }

    _createClass(NamedExportClassName, [{
        key: 'speak',
        value: function speak() {
            console.log('Named export class. Exported before the class name.');
        }
    }]);

    return NamedExportClassName;
}();

// A class called NamedExportClass.


var NamedExportClass = function () {
    function NamedExportClass() {
        _classCallCheck(this, NamedExportClass);
    }

    _createClass(NamedExportClass, [{
        key: 'speak',
        value: function speak() {
            console.log('Named export class. Exported at bottom of module.');
        }
    }]);

    return NamedExportClass;
}();

var ExportVar = 'I am exported var.';

var AnotherExportVar = 'I am renamed exported var.';

// Export the class called NamedExportClass.
// Comma seperate the named exports for multiple exports.
// Here we have a class and var. The third var is renamed when exporting. So will be imported with the new name.
exports.NamedExportClass = NamedExportClass;
exports.ExportVar = ExportVar;
exports.RenamedExportVar = AnotherExportVar;

// Same as above but using let.
// export let NamedExportClass, ExportVar, AnotherExportVar as RenamedExportVar;

// Same as above but using let and = instead of as keyword.
// export let NamedExportClass, ExportVar, AnotherExportVar = RenamedExportVar;

// Make a declaration an export by proceeding it with export.
// This will be renamed when importing.

var NamedExportClassNameRenamed = exports.NamedExportClassNameRenamed = function () {
    function NamedExportClassNameRenamed() {
        _classCallCheck(this, NamedExportClassNameRenamed);
    }

    _createClass(NamedExportClassNameRenamed, [{
        key: 'speak',
        value: function speak() {
            console.log('Named export class. Exported before the class name. Will be renamed on import.');
        }
    }]);

    return NamedExportClassNameRenamed;
}();

// The default export.


// The default export. Named fuction. Can still be imported with any name.
// This example is in MDN but seems pointless to use as a default can be imported as anything.
// export default function namedDefault() {
//     return 'Export default named.';
// }

// Function
function namedFunction() {
    return 'I am named function exported as the default.';
}

// Export a function.
exports.namedFunction = namedFunction;

},{}],2:[function(require,module,exports){
'use strict';

var _ExampleClass = require('./ExampleClass');

var importName = _interopRequireWildcard(_ExampleClass);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log((0, importName.default)()); // Import the default export and the named exports.
// The default export could be imported with any name.
// The named exports need to use their name unless imported with an alias.
// The named named exports are imported in curly braces.
// import  myDefault,
//         {
//         NamedExportClassName,
//         NamedExportClass,
//         ExportVar,
//         RenamedExportVar,
//         NamedExportClassNameRenamed as NewName,
//         namedFunction
//         }
//         from './ExampleClass';

// console.log(myDefault());

// var a = new NamedExportClassName();
// a.speak();

// var b = new NamedExportClass();
// b.speak();

// console.log(ExportVar);

// console.log(RenamedExportVar);

// var c = new NewName();
// c.speak();

// console.log(namedFunction());

// Import the default export and namespace the named exports as importName


var a = new importName.NamedExportClassName();
a.speak();

var b = new importName.NamedExportClass();
b.speak();

console.log(importName.ExportVar);

console.log(importName.RenamedExportVar);

var c = new importName.NamedExportClassNameRenamed();
c.speak();

console.log(importName.namedFunction());

},{"./ExampleClass":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvRXhhbXBsZUNsYXNzLmpzIiwiYXBwL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O2tCQ3NDZSxZQUFXO0FBQ3RCLFdBQU8sZ0JBQVAsQ0FEc0I7Q0FBWDs7Ozs7O0lBckNGOzs7Ozs7O2dDQUNEO0FBQ0osb0JBQVEsR0FBUixDQUFZLHFEQUFaLEVBREk7Ozs7V0FEQzs7Ozs7O0lBT1A7Ozs7Ozs7Z0NBQ007QUFDSixvQkFBUSxHQUFSLENBQVksbURBQVosRUFESTs7OztXQUROOzs7QUFNTixJQUFJLFlBQVksb0JBQVo7O0FBRUosSUFBSSxtQkFBbUIsNEJBQW5COzs7OztRQUtLO1FBQWtCO1FBQStCLG1CQUFwQjs7Ozs7Ozs7Ozs7SUFVekI7Ozs7Ozs7Z0NBQ0Q7QUFDSixvQkFBUSxHQUFSLENBQVksZ0ZBQVosRUFESTs7OztXQURDOzs7Ozs7Ozs7Ozs7O0FBa0JiLFNBQVMsYUFBVCxHQUF5QjtBQUNyQixXQUFPLDhDQUFQLENBRHFCO0NBQXpCOzs7UUFLUzs7Ozs7QUNyQlQ7O0lBQXVCOzs7O0FBRXZCLFFBQVEsR0FBUixDQUFZLElBRlcsbUJBRVgsRUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLElBQUksSUFBSSxXQUFXLG9CQUFYLEVBQVI7QUFDSixFQUFFLEtBQUY7O0FBRUEsSUFBSSxJQUFJLElBQUksV0FBVyxnQkFBWCxFQUFSO0FBQ0osRUFBRSxLQUFGOztBQUVBLFFBQVEsR0FBUixDQUFZLFdBQVcsU0FBWCxDQUFaOztBQUVBLFFBQVEsR0FBUixDQUFZLFdBQVcsZ0JBQVgsQ0FBWjs7QUFFQSxJQUFJLElBQUksSUFBSSxXQUFXLDJCQUFYLEVBQVI7QUFDSixFQUFFLEtBQUY7O0FBRUEsUUFBUSxHQUFSLENBQVksV0FBVyxhQUFYLEVBQVoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gTWFrZSBhIGRlY2xhcmF0aW9uIGFuIGV4cG9ydCBieSBwcm9jZWVkaW5nIGl0IHdpdGggZXhwb3J0LlxuZXhwb3J0IGNsYXNzIE5hbWVkRXhwb3J0Q2xhc3NOYW1lIHtcbiAgICBzcGVhaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05hbWVkIGV4cG9ydCBjbGFzcy4gRXhwb3J0ZWQgYmVmb3JlIHRoZSBjbGFzcyBuYW1lLicpO1xuICAgIH1cbn1cblxuLy8gQSBjbGFzcyBjYWxsZWQgTmFtZWRFeHBvcnRDbGFzcy5cbmNsYXNzIE5hbWVkRXhwb3J0Q2xhc3Mge1xuICAgIHNwZWFrKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTmFtZWQgZXhwb3J0IGNsYXNzLiBFeHBvcnRlZCBhdCBib3R0b20gb2YgbW9kdWxlLicpO1xuICAgIH1cbn1cblxudmFyIEV4cG9ydFZhciA9ICdJIGFtIGV4cG9ydGVkIHZhci4nO1xuXG52YXIgQW5vdGhlckV4cG9ydFZhciA9ICdJIGFtIHJlbmFtZWQgZXhwb3J0ZWQgdmFyLic7XG5cbi8vIEV4cG9ydCB0aGUgY2xhc3MgY2FsbGVkIE5hbWVkRXhwb3J0Q2xhc3MuXG4vLyBDb21tYSBzZXBlcmF0ZSB0aGUgbmFtZWQgZXhwb3J0cyBmb3IgbXVsdGlwbGUgZXhwb3J0cy5cbi8vIEhlcmUgd2UgaGF2ZSBhIGNsYXNzIGFuZCB2YXIuIFRoZSB0aGlyZCB2YXIgaXMgcmVuYW1lZCB3aGVuIGV4cG9ydGluZy4gU28gd2lsbCBiZSBpbXBvcnRlZCB3aXRoIHRoZSBuZXcgbmFtZS5cbmV4cG9ydCB7IE5hbWVkRXhwb3J0Q2xhc3MsIEV4cG9ydFZhciwgQW5vdGhlckV4cG9ydFZhciBhcyBSZW5hbWVkRXhwb3J0VmFyIH07XG5cbi8vIFNhbWUgYXMgYWJvdmUgYnV0IHVzaW5nIGxldC5cbi8vIGV4cG9ydCBsZXQgTmFtZWRFeHBvcnRDbGFzcywgRXhwb3J0VmFyLCBBbm90aGVyRXhwb3J0VmFyIGFzIFJlbmFtZWRFeHBvcnRWYXI7XG5cbi8vIFNhbWUgYXMgYWJvdmUgYnV0IHVzaW5nIGxldCBhbmQgPSBpbnN0ZWFkIG9mIGFzIGtleXdvcmQuXG4vLyBleHBvcnQgbGV0IE5hbWVkRXhwb3J0Q2xhc3MsIEV4cG9ydFZhciwgQW5vdGhlckV4cG9ydFZhciA9IFJlbmFtZWRFeHBvcnRWYXI7XG5cbi8vIE1ha2UgYSBkZWNsYXJhdGlvbiBhbiBleHBvcnQgYnkgcHJvY2VlZGluZyBpdCB3aXRoIGV4cG9ydC5cbi8vIFRoaXMgd2lsbCBiZSByZW5hbWVkIHdoZW4gaW1wb3J0aW5nLlxuZXhwb3J0IGNsYXNzIE5hbWVkRXhwb3J0Q2xhc3NOYW1lUmVuYW1lZCB7XG4gICAgc3BlYWsoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdOYW1lZCBleHBvcnQgY2xhc3MuIEV4cG9ydGVkIGJlZm9yZSB0aGUgY2xhc3MgbmFtZS4gV2lsbCBiZSByZW5hbWVkIG9uIGltcG9ydC4nKTtcbiAgICB9XG59XG5cbi8vIFRoZSBkZWZhdWx0IGV4cG9ydC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAnRXhwb3J0IGRlZmF1bHQnO1xufVxuXG4vLyBUaGUgZGVmYXVsdCBleHBvcnQuIE5hbWVkIGZ1Y3Rpb24uIENhbiBzdGlsbCBiZSBpbXBvcnRlZCB3aXRoIGFueSBuYW1lLlxuLy8gVGhpcyBleGFtcGxlIGlzIGluIE1ETiBidXQgc2VlbXMgcG9pbnRsZXNzIHRvIHVzZSBhcyBhIGRlZmF1bHQgY2FuIGJlIGltcG9ydGVkIGFzIGFueXRoaW5nLlxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmFtZWREZWZhdWx0KCkge1xuLy8gICAgIHJldHVybiAnRXhwb3J0IGRlZmF1bHQgbmFtZWQuJztcbi8vIH1cblxuLy8gRnVuY3Rpb25cbmZ1bmN0aW9uIG5hbWVkRnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICdJIGFtIG5hbWVkIGZ1bmN0aW9uIGV4cG9ydGVkIGFzIHRoZSBkZWZhdWx0Lic7XG59XG5cbi8vIEV4cG9ydCBhIGZ1bmN0aW9uLlxuZXhwb3J0IHsgbmFtZWRGdW5jdGlvbiB9OyIsIi8vIEltcG9ydCB0aGUgZGVmYXVsdCBleHBvcnQgYW5kIHRoZSBuYW1lZCBleHBvcnRzLlxuLy8gVGhlIGRlZmF1bHQgZXhwb3J0IGNvdWxkIGJlIGltcG9ydGVkIHdpdGggYW55IG5hbWUuXG4vLyBUaGUgbmFtZWQgZXhwb3J0cyBuZWVkIHRvIHVzZSB0aGVpciBuYW1lIHVubGVzcyBpbXBvcnRlZCB3aXRoIGFuIGFsaWFzLlxuLy8gVGhlIG5hbWVkIG5hbWVkIGV4cG9ydHMgYXJlIGltcG9ydGVkIGluIGN1cmx5IGJyYWNlcy5cbi8vIGltcG9ydCAgbXlEZWZhdWx0LFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgIE5hbWVkRXhwb3J0Q2xhc3NOYW1lLFxuLy8gICAgICAgICBOYW1lZEV4cG9ydENsYXNzLFxuLy8gICAgICAgICBFeHBvcnRWYXIsIFxuLy8gICAgICAgICBSZW5hbWVkRXhwb3J0VmFyLFxuLy8gICAgICAgICBOYW1lZEV4cG9ydENsYXNzTmFtZVJlbmFtZWQgYXMgTmV3TmFtZSxcbi8vICAgICAgICAgbmFtZWRGdW5jdGlvblxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGZyb20gJy4vRXhhbXBsZUNsYXNzJztcblxuLy8gY29uc29sZS5sb2cobXlEZWZhdWx0KCkpO1xuXG4vLyB2YXIgYSA9IG5ldyBOYW1lZEV4cG9ydENsYXNzTmFtZSgpO1xuLy8gYS5zcGVhaygpO1xuXG4vLyB2YXIgYiA9IG5ldyBOYW1lZEV4cG9ydENsYXNzKCk7XG4vLyBiLnNwZWFrKCk7XG5cbi8vIGNvbnNvbGUubG9nKEV4cG9ydFZhcik7XG5cbi8vIGNvbnNvbGUubG9nKFJlbmFtZWRFeHBvcnRWYXIpO1xuXG4vLyB2YXIgYyA9IG5ldyBOZXdOYW1lKCk7XG4vLyBjLnNwZWFrKCk7XG5cbi8vIGNvbnNvbGUubG9nKG5hbWVkRnVuY3Rpb24oKSk7XG5cbi8vIEltcG9ydCB0aGUgZGVmYXVsdCBleHBvcnQgYW5kIG5hbWVzcGFjZSB0aGUgbmFtZWQgZXhwb3J0cyBhcyBpbXBvcnROYW1lXG5pbXBvcnQgbXlEZWZhdWx0LCAqIGFzIGltcG9ydE5hbWUgZnJvbSAnLi9FeGFtcGxlQ2xhc3MnO1xuXG5jb25zb2xlLmxvZyhteURlZmF1bHQoKSk7XG5cbnZhciBhID0gbmV3IGltcG9ydE5hbWUuTmFtZWRFeHBvcnRDbGFzc05hbWUoKTtcbmEuc3BlYWsoKTtcblxudmFyIGIgPSBuZXcgaW1wb3J0TmFtZS5OYW1lZEV4cG9ydENsYXNzKCk7XG5iLnNwZWFrKCk7XG5cbmNvbnNvbGUubG9nKGltcG9ydE5hbWUuRXhwb3J0VmFyKTtcblxuY29uc29sZS5sb2coaW1wb3J0TmFtZS5SZW5hbWVkRXhwb3J0VmFyKTtcblxudmFyIGMgPSBuZXcgaW1wb3J0TmFtZS5OYW1lZEV4cG9ydENsYXNzTmFtZVJlbmFtZWQoKTtcbmMuc3BlYWsoKTtcblxuY29uc29sZS5sb2coaW1wb3J0TmFtZS5uYW1lZEZ1bmN0aW9uKCkpO1xuIl19
