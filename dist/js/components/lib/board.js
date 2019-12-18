const _jsxFileName = "/home/eric/connect4-ui/src/js/components/lib/board.js";import React, { Component } from 'react';
import classnames from 'classnames';

export class BoardBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.createBoard(),
      playerOneTurn: true,
      lastColClicked: null,
      gameOver: false,
      reset: false
    };

//    this.handleClick = this.handleClick.bind(this);
 //   this.updateBoard = this.updateBoard.bind(this);
  //  this.checkScore = this.checkScore.bind(this);
    this.arrows = this.arrows.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  createBoard() {
    return Array(6).fill().map(arr => Array(7).fill(null));
  }


  checkScore(board, playerOneTurn) {
  }

  handleClick(colIndex) {
  }

  arrows() {
    return Array(7).fill().map((_, i) => {
      const colFull = !this.state.board.map((row) => row[i]).some(item => item === null);

      return React.createElement(Arrow, { 
              key: i, 
              colIndex: i, 
              handleClick: this.handleClick, 
              gameOver: this.state.gameOver,
              colFull: colFull,
              reset: this.state.reset, __self: this, __source: {fileName: _jsxFileName, lineNumber: 38}}
             )
    })
  }

  resetState() {
    this.setState({
      board: this.createBoard(),
      playerOneTurn: true,
      lastColClicked: null,
      gameOver: false,
      reset: false
    });
  }

  handleReset() {
    this.setState({reset: true});
    setTimeout(this.resetState, 1400);
  }

  render() {

    console.log(this.props.board)
    return (
      React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 68}}
        , React.createElement(Header, { players: this.props.board.players, player: this.props.board.curplayer,  gameOver: this.state.gameOver, handleReset: this.handleReset, __self: this, __source: {fileName: _jsxFileName, lineNumber: 69}})
        , React.createElement('div', { className: "container", __self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}
          , React.createElement(Row, { style: {height: '20px', marginBottom: '40px', marginLeft: '20px'}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 71}}
            , this.arrows()
          )
          , React.createElement(Board, { board: this.props.board.board, reset: this.state.reset, handleReset: this.handleReset, __self: this, __source: {fileName: _jsxFileName, lineNumber: 74}} )
        )
      )
    );
  }
}

const Header = ({players, player , gameOver, handleReset}) => {
  return(
    React.createElement('div', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 83}}
      , !gameOver ? (
        React.createElement('div', { className: "header", __self: this, __source: {fileName: _jsxFileName, lineNumber: 85}}
          , React.createElement('h1', { className: "title", __self: this, __source: {fileName: _jsxFileName, lineNumber: 86}}, "Connect Four" )
          , React.createElement('h1', { className: player == 'a' ? 'player-change' : 'hide-player', __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}} , "Player " , React.createElement('span', { className: "red", __self: this, __source: {fileName: _jsxFileName, lineNumber: 87}}, players[player]), " Go!" )
          , React.createElement('h1', { className: player == 'b' ? 'player-change' : 'hide-player', __self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}, "Player " , React.createElement('span', { className: "black", __self: this, __source: {fileName: _jsxFileName, lineNumber: 88}}, players[player]), "Go!")
        )
      ) : (
        React.createElement('h1', { className: "game-over", __self: this, __source: {fileName: _jsxFileName, lineNumber: 91}}, gameOver.split('player').join('player '))
      )
      , React.createElement(Reset, { handleReset: handleReset, lever: false, __self: this, __source: {fileName: _jsxFileName, lineNumber: 93}} )
    )
  );
}

const Board  = ({board, reset, handleReset}) => {
  const rows = (_, i) => {
    return (
      React.createElement(Row, { key: i, __self: this, __source: {fileName: _jsxFileName, lineNumber: 101}}
        , rowOutput(spaces(i), 7)
      )
    );
  }

  const spaces = (rowIndex) => {
    console.log(board)
    return (_, i) => {
      return React.createElement(Space, { key: i, player: board[rowIndex][i], reset: reset, __self: this, __source: {fileName: _jsxFileName, lineNumber: 110}} );
    };
  }

  const rowOutput = (row, num) => {
    return Array(num).fill().map(row)
  }

  return (
    React.createElement('div', { className: "board-holder", __self: this, __source: {fileName: _jsxFileName, lineNumber: 119}}
      , React.createElement('div', { className: "board", __self: this, __source: {fileName: _jsxFileName, lineNumber: 120}}
        , rowOutput(rows, 6)
      )
      , React.createElement(Reset, { handleReset: handleReset, lever: true, __self: this, __source: {fileName: _jsxFileName, lineNumber: 123}} )
    )
  );
}

const Space = ({player, reset}) => {
  const background = () => {
    const style = {}
    style.background = player === 'a' ? 'red' : 'black';

    console.log(reset);
    if (reset) {
      style.animation = 'clearboard 1.5s linear';
    }
    return style;
  }

  return (
    React.createElement('div', { className: "space", __self: this, __source: {fileName: _jsxFileName, lineNumber: 141}}
      ,  player !== "empty" &&
        React.createElement('div', { className: "chip player-drop" , style: background(), __self: this, __source: {fileName: _jsxFileName, lineNumber: 143}} )
      
    )
  );
}

const Arrow = ({colIndex, handleClick, gameOver, colFull, reset}) => {
  function sendKey() {
    return handleClick(colIndex);
  }

  function columnFull() {
    return colFull ? {visibility: 'hidden'} : {};
  }

  if (!gameOver && !reset) {
    return React.createElement('i', { className: "fa fa-arrow-circle-down arrow"  , style: columnFull(), onClick: sendKey, __self: this, __source: {fileName: _jsxFileName, lineNumber: 159}})
  } else {
    return null;
  }
}

const Reset = ({handleReset, lever}) => {
  return (
    React.createElement('div', { className: "reset-container", __self: this, __source: {fileName: _jsxFileName, lineNumber: 167}}
      , lever ? (
        React.createElement('div', { className: "lever-container", __self: this, __source: {fileName: _jsxFileName, lineNumber: 169}}
          , React.createElement('div', { className: "lever-text", __self: this, __source: {fileName: _jsxFileName, lineNumber: 170}}, "Reset "
             , React.createElement('i', { className: "fa fa-arrow-right" , 'aria-hidden': "true", __self: this, __source: {fileName: _jsxFileName, lineNumber: 171}})
          )
          , React.createElement('div', { className: "lever", onClick: handleReset, __self: this, __source: {fileName: _jsxFileName, lineNumber: 173}})
        )
      ) : (
        React.createElement('button', { className: "reset-button", onClick: handleReset, __self: this, __source: {fileName: _jsxFileName, lineNumber: 176}}
          , React.createElement('i', { className: "fa fa-refresh" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 177}})
        )
      )
    )
  );
}

const Row = (props) => {
  return (
    React.createElement('div', { className: "row", style: props.style, __self: this, __source: {fileName: _jsxFileName, lineNumber: 186}}
      , props.children
    )
  );
}