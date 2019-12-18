const _jsxFileName = "/home/eric/connect4-ui/src/js/components/root.js";import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import classnames from 'classnames';
import _ from 'lodash';
import { HeaderBar } from "./lib/header-bar.js"
import { BoardBox } from "./lib/board.js"


export class Root extends Component {
  constructor(props) {
    super(props);
    this.state = store.state;
    store.setStateHandler(this.setState.bind(this));
    this.setSpinner = this.setSpinner.bind(this);
  }



  setSpinner(spinner) {
    this.setState({
      spinner
    });
  }


  render() {
    console.info(this.state)

    return (
      React.createElement(BrowserRouter, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}
        , React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 31}}
        , React.createElement(HeaderBar, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 32}})
        , React.createElement(Route, { exact: true, path: "/~connect4", render:  () => {
          return (
            React.createElement('div', { className: "pa3 w-100" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}
              , React.createElement('h1', { className: "mt0 f2" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 36}}, "connect4")
              , React.createElement('p', { className: "lh-copy measure pt3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 37}}, "Welcome to your Landscape application."    )
              , React.createElement('p', { className: "lh-copy measure pt3"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}, "To get started, edit "    , React.createElement('code', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}, "src/index.js"), " or "  , React.createElement('code', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}, "connect4.hoon"), " and "  , React.createElement('code', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}, "|commit %home" ), " on your Urbit ship to see your changes."        )
              , React.createElement('a', { className: "black no-underline db body-large pt3"    , href: "https://urbit.org/docs", __self: this, __source: {fileName: _jsxFileName, lineNumber: 39}}, "-> Read the docs"   )
            )
          )}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 33}}
        )
        , React.createElement(BoardBox, { ...this.state, __self: this, __source: {fileName: _jsxFileName, lineNumber: 43}})
        )
      )
    )
  }
}

