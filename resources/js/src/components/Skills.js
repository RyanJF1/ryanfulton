import ReactDOM from "react-dom";
import React from "react";
import Image from 'react-bootstrap/Image';
import { Card, CardGroup } from "react-bootstrap";

export default function Skills() {
    return (
        <>
            <div className=" items-center text-center " >

                <Image className="mx-5" style={{ width: "135px", height: "135px" }} src={"./images/laravellogo.png"} />

                <Image className="mx-5" style={{ width: "144px", height: "144px" }} src={"./images/dockerlogo.png"} />

                <Image className="mx-5" style={{ width: "180px", height: "120px" }} src={"./images/phplogo.png"} />

                <Image className="mx-5" style={{ width: "144px", height: "144px" }} src={"./images/javalogo.png"} />

                <Image className="mx-5" style={{ width: "144px", height: "144px" }} src={"./images/awslogo.png"} />

            </div>
            <div className=" items-center text-center mt-5" >

                <Image className="mx-5" style={{ width: "144px", height: "144px" }} src={"./images/csslogo.png"} />

                <Image className="mx-5" style={{ width: "144px", height: "144px" }} src={"./images/gitlogo.png"} />

                <Image className="mx-5" style={{ width: "144px", height: "144px" }} src={"./images/htmllogo.png"} />


            </div>
        </>
    );
}

ReactDOM.render(
    <Skills />,
    document.getElementById('skills')
);
