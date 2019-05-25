import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardComponent = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={user.id}
        name={user.name}
        email={user.email}
        username={robots.username}
      />
    );
  });
  return <div>{cardComponent}</div>;
};

export default CardList;
