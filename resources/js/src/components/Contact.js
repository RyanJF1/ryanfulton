import React from "react";
import ReactDOM from "react-dom";
import Image from 'react-bootstrap/Image';

export default function Contact() {
    return (
        <>
            <div className="bottom-0 ">
                <div className="items-center text-center">
                    <Image className="mx-5" style={{ width: "48px", height: "48px" }} src={"./images/locationicon.png"}></Image>
                        Atlanta, GA
                    <Image className="mx-5" style={{ width: "48px", height: "48px" }} src={"./images/emailicon.png"}></Image>
                    <a className="text-indigo-400 leading-relaxed" href="mailto: ryan.j.fulton@gmail.com">
                        ryan.j.fulton@gmail.com
                    </a>
                    <Image className="mx-5" style={{ width: "48px", height: "48px" }} src={"./images/phoneicon.png"}></Image>
                        404-514-3432
                </div>
            </div>
        </>
    );
}


ReactDOM.render(
    <Contact />,
    document.getElementById('contact')
);
