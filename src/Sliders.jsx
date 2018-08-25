import Slider from '@material-ui/lab/Slider';

class Sliders extends Component {
  update (event, value, index) {
    this.props.update_adj(index, value);
  }

  render () {
    return (
      {this.props.adjustments.map((adj, index) => {
        <Slider
          value={adj}
          min={-10}
          max={10}
          step={1}
          onChange={(event, new_value) => {
            this.update(event, value, index)
          } vertical />
      })}
    );
  }
}