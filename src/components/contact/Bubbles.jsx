const Bubbles = () => {
  const output = [];
  for (let i = 0; i < 30; i++) {
    output.push(<div key={'bubble-' + i} className="bubble"></div>);
  }
  return output;
};

export default Bubbles;
