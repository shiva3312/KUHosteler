import React from "react";
import { API } from "../config";

const ShowImage = ({ user }) => (
    <div>
        <img
            src={`${API}/auth/image/${user._id}`}
            alt={user.fname} 
            className="img mb-2 img-thumbnail"
            style={{width: "12%"} }
        />
    </div>
);

export default ShowImage;
