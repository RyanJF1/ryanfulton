import React from "react";
import ReactDOM from "react-dom";

export default function Contact() {
    return (
        <section id="contact" className="container-float">
            <div className="container  py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <div className="bg-gray-900 position-absolute bottom-0 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h3 className="title-font font-semibold text-black tracking-widest text-xs">
                                ADDRESS
                            </h3>
                            <p className="mt-1">
                                Atlanta, GA 30308
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h3 className="title-font font-semibold text-black tracking-widest text-xs">
                                EMAIL
                            </h3>
                            <a className="text-indigo-400 leading-relaxed" href = "mailto: ryan.j.fulton@gmail.com">
                                ryan.j.fulton@gmail.com
                            </a>
                            <h3 className="title-font font-semibold text-black tracking-widest text-xs mt-4">
                                PHONE
                            </h3>
                            <p className="leading-relaxed">404-514-3432</p>
                        </div>
                    </div>
                </div>
</div>
        </section>
    );
}


ReactDOM.render(
    <Contact />,
    document.getElementById('contact')
);
