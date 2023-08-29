import 'react';
import styled from 'styled-components';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

styled.button(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  border: 0;\n  line-height: 1;\n  font-size: 15px;\n  cursor: pointer;\n  font-weight: 700;\n  font-weight: bold;\n  border-radius: 3px;\n  display: inline-block;\n  padding: ", ";\n  color: ", ";\n  background-color: ", ";\n  opacity: ", ";\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    border: solid 2px #1b116e;\n    padding: ", ";\n  }\n"], ["\n  border: 0;\n  line-height: 1;\n  font-size: 15px;\n  cursor: pointer;\n  font-weight: 700;\n  font-weight: bold;\n  border-radius: 3px;\n  display: inline-block;\n  padding: ", ";\n  color: ", ";\n  background-color: ", ";\n  opacity: ", ";\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    border: solid 2px #1b116e;\n    padding: ", ";\n  }\n"])), function (props) {
    return props.size === "small"
        ? "7px 25px 8px"
        : props.size === "medium"
            ? "9px 30px 11px"
            : "14px 30px 16px";
}, function (props) { return (props.primary ? "#1b116e" : "#ffffff"); }, function (props) { return (props.primary ? "#6bedb5" : "#1b116e"); }, function (props) { return (props.disabled ? 0.5 : 1); }, function (props) { return (props.primary ? "#55bd90" : "#6bedb5"); }, function (props) {
    return props.size === "small"
        ? "5px 23px 6px"
        : props.size === "medium"
            ? "7px 28px 9px"
            : "12px 28px 14px";
});
var templateObject_1$1;

styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 40px;\n  width: 300px;\n  border-radius: 3px;\n  border: solid 2px\n    ", ";\n  background-color: #fff;\n  &:focus {\n    border: solid 2px #1b116e;\n  }\n"], ["\n  height: 40px;\n  width: 300px;\n  border-radius: 3px;\n  border: solid 2px\n    ", ";\n  background-color: #fff;\n  &:focus {\n    border: solid 2px #1b116e;\n  }\n"])), function (props) {
    return props.disabled
        ? "#e4e3ea"
        : props.error
            ? "#a9150b"
            : props.success
                ? "#067d68"
                : "#353637";
});
styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 14px;\n  color: ", ";\n  padding-bottom: 6px;\n"], ["\n  font-size: 14px;\n  color: ", ";\n  padding-bottom: 6px;\n"])), function (props) { return (props.disabled ? "#e4e3ea" : "#080808"); });
styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 14px;\n  color: '#a9150b8';\n  padding-top: 4px;\n"], ["\n  font-size: 14px;\n  color: '#a9150b8';\n  padding-top: 4px;\n"])));
styled.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 0px;\n  color: ", ";\n"], ["\n  margin: 0px;\n  color: ", ";\n"])), function (props) {
    return props.disabled ? "#e4e3ea" : props.error ? "#a9150b" : "#080808";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=index.js.map
