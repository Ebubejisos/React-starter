function Card({ title, hex, handleClick }) {
  return (
    <>
      <div
        className="card"
        style={{ backgroundColor: hex }}
        onClick={handleClick}
      >
        <h2>{title}</h2>
      </div>
    </>
  );
}

export default Card;
