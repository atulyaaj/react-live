import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    //Api calls
    console.log("useEffect");

    return () => {
      console.log("useEffect Return");
    };
  }, []);

  console.log("render");

  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h1>Count2 : {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Mahagama</h3>
      <h4>Contact: @atulya_aj</h4>
    </div>
  );
};
export default User;
