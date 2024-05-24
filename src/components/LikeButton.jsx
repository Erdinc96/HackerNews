import React, { useState } from "react";
import { Icon } from "semantic-ui-react";

function LikeButton() {
  const [isThumbsUp, setIsThumbsUp] = useState(true);

  const handleClick = () => {
    setIsThumbsUp(!isThumbsUp);
  };

  return (
    <Icon
      className="like"
      name={isThumbsUp ? "thumbs up outline" : "thumbs up"}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
}

export default LikeButton;
