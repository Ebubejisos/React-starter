function Card({ title, hex }) {
  return (
    <>
      <div className="card" style={{ backgroundColor: hex }}>
        <h2>{title}</h2>
      </div>
    </>
  );
}

export default Card;
