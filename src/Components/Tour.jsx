import { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [isViewMore, setIsViewMore] = useState(false);

  return (
    <>
      <div className="single-tour">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        {isViewMore ? (
          <p>
            {info}
            <button type="button" onClick={() => setIsViewMore(!isViewMore)}>
              show less
            </button>
          </p>
        ) : (
          <p>
            {info.split(" ").slice(0, 30).join(" ")}...
            <button type="button" onClick={() => setIsViewMore(!isViewMore)}>
              read more
            </button>
          </p>
        )}
        <p>${price}</p>
        <button type="button" onClick={() => removeTour(id)}>
          Not interested
        </button>
      </div>
    </>
  );
};

export default Tour;
