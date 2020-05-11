import React from 'react';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.saveCanvas = this.saveCanvas.bind(this);
    this.getCanvas = this.getCanvas.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fillPixel = this.fillPixel.bind(this);
    this.color = 'black';
    this.state = {
      canvasName: '',
      framesArray: [],
    };
  }
  componentDidMount() {
    this.ctx = this.canvas.current.getContext('2d');
    //console.log("this.ctx is >>>>>>", this.ctx)

    this.createGrid(16, 24);
    // this.ctx.fillStyle = 'rgba(255, 165, 0, 1)';
    // this.ctx.fillRect(24, 24, 24, 24);
  }

  createGrid(rows, pixelSize) {
    let y = 0;
    for (let i = 0; i < rows; i++) {
      let x = 0;
      for (let j = 0; j < rows; j++) {
        this.ctx.strokeRect(x, y, pixelSize, pixelSize);
        x += pixelSize;
        //console.log("x>>>", x, "y>>>>", y)
      }
      y += pixelSize;
    }
  }

  saveCanvas(canvasName) {
    let imageURL = this.canvas.current.toDataURL();
    localStorage.setItem(`${canvasName}`, imageURL);
  }

  getCanvas(canvasName) {
    let item = localStorage.getItem('canvas');
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  fillPixel() {
    console.log(window.event);

    576 / 24 + 1;
    let x = window.event.clientX - 230;
    let y = window.event.clientY - 150;
    this.ctx.fillStyle = this.state.color;
    this.ctx.fillRect(x, y, 24, 24);
  }

  render() {
    return (
      <div>
        <label htmlFor='canvasName'></label>
        <input
          type='text'
          name='canvasName'
          value={this.state.canvasName}
          placeholder='Enter your name'
          onChange={this.handleChange}
        />
        <h1>hello world canvas test component</h1>
        <canvas
          width='500'
          height='500'
          ref={this.canvas}
          onClick={this.fillPixel}
        />
        <button onClick={() => this.saveCanvas(this.state.canvasName)}>
          Save Canvas
        </button>
        <button onClick={this.getCanvas}> Get Canvas</button>
      </div>
    );
  }
}

export default Canvas;
