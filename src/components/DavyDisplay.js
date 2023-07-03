const DavyDisplay = ({ remainderColor }) => {
  return (
    <div className="content">
      <h2>You missed {remainderColor.length} colors: </h2>
      <ul>
        {remainderColor.map((colorArray, index) => (
          <li key={index}>{colorArray.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DavyDisplay;
