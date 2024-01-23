import React from "react";

function Footer(){
    const date = new Date().getFullYear();


    return(
        <footer>copyright {date} ©
        0xNoSystem</footer>
    )
}

export default Footer;