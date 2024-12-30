import React, { Component } from 'react';
import "./Landing.scss";

const { PropTypes } = React;
const TIMER = 150; // Milliseconds between moving the next block
const TRANSITION = 0.5; // Seconds to actually move one block
const DEF_SIZE = 60; // Pixels height/width
const GUTTER = 5; // Spacing in percentage between tiles
const initialState = {
  positions: {
    1: 'alpha',
    2: 'bravo',
    3: 'charlie',
    4: null,
    5: 'delta',
    6: 'echo',
    7: 'foxtrot'
  },
  stateNumber: 0
};

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.setNextState = this.setNextState.bind(this);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.setTimer(TIMER);
    this.setupCanvas();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  setTimer(time) {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(this.setNextState, time);
  }

  setupCanvas() {
    const canvas = this.canvasRef.current;
    const gl = canvas.getContext('webgl');

    if (!gl) {
      console.log('WebGL not supported');
      return;
    }

    // Safely get shader sources
    const vertexShaderSource = document.getElementById('firefliesVertexShader')?.textContent;
    const fragmentShaderSource = document.getElementById('firefliesFragmentShader')?.textContent;

    if (!vertexShaderSource || !fragmentShaderSource) {
      console.error('Shader source not found');
      return;
    }

    const vertexShader = this.createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    const program = this.createProgram(gl, vertexShader, fragmentShader);
    gl.useProgram(program);

    // Set up uniform and attribute variables for the fireflies
    const uPixelRatio = gl.getUniformLocation(program, 'uPixelRatio');
    const uSize = gl.getUniformLocation(program, 'uSize');
    const uTime = gl.getUniformLocation(program, 'uTime');
    const aScale = gl.getAttribLocation(program, 'aScale');

    // Set WebGL uniforms and attributes
    gl.uniform1f(uPixelRatio, window.devicePixelRatio);
    gl.uniform1f(uSize, 10.0);
    gl.uniform1f(uTime, 0.0);

    // Create and bind buffers for fireflies (as points)
    const positions = new Float32Array([
      0.0, 0.0, 0.0,
      0.5, 0.5, 0.0,
      -0.5, -0.5, 0.0,
      0.5, -0.5, 0.0,
      -0.5, 0.5, 0.0
    ]);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    gl.vertexAttribPointer(aScale, 1, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aScale);

    // Animation loop
    const animate = () => {
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uTime, performance.now() * 0.001);
      gl.drawArrays(gl.POINTS, 0, positions.length / 3);
      requestAnimationFrame(animate);
    };
    animate();
  }

  createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('ERROR compiling shader:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('ERROR linking program:', gl.getProgramInfoLog(program));
      return null;
    }
    return program;
  }

  clipPathForPosition(position) {
    position = parseInt(position, 10);
    const SIZE = (100 - 2 * GUTTER) / 3;
    const VAR0 = '0% ';
    const VAR1 = (SIZE + GUTTER) + '% ';
    const VAR2 = (2 * SIZE + 2 * GUTTER) + '% ';
    switch (position) {
      case 1: return 'inset(' + VAR1 + VAR2 + VAR1 + VAR0 + ' round 5%)';
      case 2: return 'inset(' + VAR0 + VAR2 + VAR2 + VAR0 + ' round 5%)';
      case 3: return 'inset(' + VAR0 + VAR1 + VAR2 + VAR1 + ' round 5%)';
      case 4: return 'inset(' + VAR1 + VAR1 + VAR1 + VAR1 + ' round 5%)';
      case 5: return 'inset(' + VAR2 + VAR1 + VAR0 + VAR1 + ' round 5%)';
      case 6: return 'inset(' + VAR2 + VAR0 + VAR0 + VAR2 + ' round 5%)';
      case 7: return 'inset(' + VAR1 + VAR0 + VAR1 + VAR2 + ' round 5%)';
    }
  }

  tileIndexToMove() {
    switch (this.state.stateNumber) {
      case 0: return 7;
      case 1: return 6;
      case 2: return 5;
      case 3: return 4;
      case 4: return 3;
      case 5: return 2;
      case 6: return 1;
      case 7: return 4;
    }
  }

  positionForTile(radioCommand) {
    for (var position in this.state.positions) {
      var tile = this.state.positions[position];
      if (tile === radioCommand) {
        return position;
      }
    }
  }

  setNextState() {
    const currentPositions = this.state.positions;
    const emptyIndex = this.positionForTile(null);
    const indexToMove = this.tileIndexToMove();
    const newPositions = Object.assign({}, currentPositions, {
      [indexToMove]: null,
      [emptyIndex]: currentPositions[indexToMove]
    });

    const currentState = this.state.stateNumber;
    const nextState = (currentState === 7) ? 0 : currentState + 1;

    this.setState({ stateNumber: nextState, positions: newPositions });
  }

  renderTiles() {
    return ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot'].map((radioCommand) => {
      const pos = this.positionForTile(radioCommand);
      const styles = {
        transition: TRANSITION + 's cubic-bezier(0.86, 0, 0.07, 1)',
        WebkitClipPath: this.clipPathForPosition(pos)
      };
      return <div key={"rect-" + radioCommand} style={styles} className={"rect " + radioCommand} />;
    });
  }

  render() {
    const { size, style, center } = this.props;
    const styles = Object.assign({
      width: DEF_SIZE + 'px',
      height: DEF_SIZE + 'px'
    }, style);

    if (size) {
      styles.width = size + 'px';
      styles.height = size + 'px';
    }

    let className = "sw-loader__wrapper";
    if (center) {
      className += " sw-loader__wrapper--center";
    }

    return (
      <div style={styles} className={className}>
        <div className="sw-loader__holder">
          {this.renderTiles()}
        </div>
        <canvas ref={this.canvasRef} className="webgl" width="600" height="600" />
      </div>
    );
  }
}

export default LandingPage;
