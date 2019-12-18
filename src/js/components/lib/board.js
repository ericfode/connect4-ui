import React, { Component } from 'react';
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

      return <Arrow 
              key={i} 
              colIndex={i} 
              handleClick={this.handleClick} 
              gameOver={this.state.gameOver}
              colFull={colFull}
              reset={this.state.reset}
             />
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
      <div>
        <Header players={this.props.board.players} player={this.props.board.curplayer}  gameOver={this.state.gameOver} handleReset={this.handleReset}/>
        <div className="container">
          <Row style={{height: '20px', marginBottom: '40px', marginLeft: '20px'}}>
            {this.arrows()}
          </Row>
          <Board board={this.props.board.board} reset={this.state.reset} handleReset={this.handleReset} />
        </div>
      </div>
    );
  }
}

const Header = ({players, player , gameOver, handleReset}) => {
  return(
    <div>
      {!gameOver ? (
        <div className="header">
          <h1 className="title">Connect Four</h1>
          <h1 className={player == 'a' ? 'player-change' : 'hide-player'} >Player <span className="red">{players[player]}</span> Go!</h1>
          <h1 className={player == 'b' ? 'player-change' : 'hide-player'}>Player <span className="black">{players[player]}</span>Go!</h1>
        </div>
      ) : (
        <h1 className="game-over">{gameOver.split('player').join('player ')}</h1>
      )}
      <Reset handleReset={handleReset} lever={false} />
    </div>
  );
}

const Board  = ({board, reset, handleReset}) => {
  const rows = (_, i) => {
    return (
      <Row key={i}>
        {rowOutput(spaces(i), 7)}
      </Row>
    );
  }

  const spaces = (rowIndex) => {
    console.log(board)
    return (_, i) => {
      return <Space key={i} player={board[rowIndex][i]} reset={reset} />;
    };
  }

  const rowOutput = (row, num) => {
    return Array(num).fill().map(row)
  }

  return (
    <div className="board-holder">
      <div className="board">
        {rowOutput(rows, 6)}
      </div>
      <Reset handleReset={handleReset} lever={true} />
    </div>
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
    <div className="space">
      { player !== "empty" &&
        <div className="chip player-drop" style={background()} ></div>
      }
    </div>
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
    return <i className="fa fa-arrow-circle-down arrow" style={columnFull()} onClick={sendKey}></i>
  } else {
    return null;
  }
}

const Reset = ({handleReset, lever}) => {
  return (
    <div className="reset-container">
      {lever ? (
        <div className="lever-container">
          <div className="lever-text">
            Reset <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </div>    
          <div className="lever" onClick={handleReset}></div>
        </div>
      ) : (
        <button className="reset-button" onClick={handleReset}>
          <i className="fa fa-refresh"></i>
        </button>
      )}
    </div>
  );
}

const Row = (props) => {
  return (
    <div className="row" style={props.style}>
      {props.children}
    </div>
  );
}