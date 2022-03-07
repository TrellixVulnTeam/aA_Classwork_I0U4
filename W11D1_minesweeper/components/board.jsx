import React from "react";
import * as Minesweeper from "/minesweeper.js";
import Tile from "./tile";

//render rows of tiles
//all function comp are class comp but not all class are func
class Board extends React.Component {
  //props are params
  //something being sent/inputted
  constructor(props) {
    //props are grid and updateGame method
    super(props);
    //might need state later if board updating
  }

  render() {
    // this.props.board is instance object
    // this.props.board.grid keys into the grid key with a value of arrays
    // Use unique values as keys for each html element, so that react can track
    // With non-modified arrays, index works well, but if we are going to mutate
    // the array we need to come up with a better key system.
    const rows = this.props.board.grid.map((row, index) => {
      const mapRow = row.map((tile, idx) => {
        return (
          <div key = {idx}> 
            <Tile 
              tileObj={tile}
              update={this.props.update}>
            </Tile>
          </div>
        )
      })
      return(
        <div key = {index}>
          {mapRow}
        </div>
      )
    });

    return(
      <div>
        <h1>hello</h1>
        {/* don't render actual object */}
        {rows}
      </div>
    );
  }
}

export default Board;