class Vizualizer extends Component {
  render (){
    return (
      {this.props.stream.map((s, index) => {
        <Bar index={index} level={s}/>
      })}
    )
  }
}