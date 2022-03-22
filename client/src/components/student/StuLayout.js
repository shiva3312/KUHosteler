// manger Layout ..
import React from "react";
import Menu from "./ManLinks";
import "../../styles.css";

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
        <Menu />
        <hr></hr>
        <div className="jumbotron">
            <h2>{title}</h2>
            <hr></hr>
            <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;
