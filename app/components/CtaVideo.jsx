// import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <section className="cta-video">
    <div className="bg-gray-800 py-12">
      <div className="py-8 text-center text-white ">
        <h2 className="text-3xl font-semibold mb-8">
          Protect your business with Fraudless AI <br />
          today and experience a fraud-free future.
        </h2>
        <a
          href="contact.html"
          className="bg-blue hover:bg-blue-700 text-white font-bold py-3 px-5"
        >
          Contact Us
        </a>
      </div>
    </div>
    <div className="video-section pb-12 mt-4">
      <div className="container mx-auto flex justify-center -translate-y-12 pb-6">
        <iframe
          width={560}
          height={315}
          src="https://www.youtube.com/embed/b-KzpD8M1wQ?si=aOLRyH_auXuMwwwS"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />{" "}
      </div>
    </div>

   
    </section>
  );
};

export default Cta;
