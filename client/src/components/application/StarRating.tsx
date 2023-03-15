import React, {useState} from "react"

function StarRating() {
    const [rating, setRating] = useState(0);

    const handleRatingClick = (selectedRating) => {
      setRating(selectedRating);
    };
  
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <button
            key={i}
            className={`text-2xl text-white ${
              i <= rating ? 'text-black' : ''
            }`}
            onClick={() => handleRatingClick(i)}
          >
            ★
          </button>
        ))}
      </div>
    );
  }
export default StarRating