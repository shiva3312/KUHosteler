import React from "react";
import { API } from "../config";

const ShowImage = ({ user , Width  , ClassName }) => (
    <div>
        <img
            src={`${API}/auth/image/${user._id}`}
            alt={user.fname} 
            className= {ClassName}
            style={{width: `${Width}`} }
        />
    </div>
);

export default ShowImage;
