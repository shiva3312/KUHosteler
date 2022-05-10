import React from "react";
import { API } from "../config";

const ShowImage = ({ user, Width,Height, ClassName }) => (
  <div>
    <img
      // src={`${API}/auth/image/${user._id}`}
      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
      alt={user.fname}
      className={ClassName}
      style={{ width: `${Width}` , height:`${Height}` }}
    />
  </div>
);

export default ShowImage;
