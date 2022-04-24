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
            <h2  className="text-center text-middle pt-5">{title}</h2>           
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;
