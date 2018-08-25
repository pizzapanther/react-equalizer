class Equalizer extends Component {
  constructor (props) {
    super(props);
    // props.stream
    // props.return_stream(new_stream)

    this.state = {
      adjustments: [],
      new_stream: []
    };
  }

  render_stream() {
    // magic audio calculation
    // this.setState({new_stream});
  }

  update_adj (index, level) {
    var adjustments = [...this.state.adjustments];

    adjustments[index] = level;

    this.setState({adjustments}, () => {
      this.render_stream();
    });
  }

  render () {
    return (
      <div>
        <Vizualizer stream={this.state.new_stream}/>
        <Sliders
          adjustments={this.state.adjustments}
          update_adj={this.update_adj}/>
      </div>
    )
  }
}
