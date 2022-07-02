import React from "react";
import Card from "./Card";

const CardList = ({robolist}) => {
  const userarray = robolist.map((user, i) => {
    return  <Card id={robolist[i].id} name={robolist[i].name} email={robolist[i].email}/>
  })
  return  (
    <div>
      {userarray}
    </div>
    );
}

export default CardList;