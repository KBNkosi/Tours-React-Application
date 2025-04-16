import { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [isViewMore, setIsViewMore] = useState(false);

  return (
    <>
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <p>${price}</p>
          </div>

          <p>
            {isViewMore ? info : `${info.split(" ").slice(0, 30).join(" ")}...`}
            <button type="button" onClick={() => setIsViewMore(!isViewMore)}>
              {isViewMore ? "show less" : "read more"}
            </button>
          </p>

          <button type="button" className="delete-btn" onClick={() => removeTour(id)}>
            Not interested
          </button>
        </footer>
      </article>
    </>
  );
};

export default Tour;
