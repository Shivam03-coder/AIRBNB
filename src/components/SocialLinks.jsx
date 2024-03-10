import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiWireframeGlobe } from "react-icons/gi";

function SocialLinks() {
  return (
    <footer className="grid p-3 grid-cols-6 max-sm:grid-cols-12 bg-base-200 text-black">
      <div className="col-span-3 max-sm:hidden  mx-auto">
        <p>© 2024 Airbnb, Inc.·Privacy . Terms . SitemapCompany . details</p>
      </div>
      <div className=" col-span-3 max-sm:col-span-12 text-2xl items-center flex justify-center gap-4">
        <a className="href">
          <GiWireframeGlobe />
        </a>
        <p className="text-[16px]">ENGLISH</p>
        <a href="https://github.com/Shivam03-coder" className="href">
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/_shivam_anand__?igshid=YTQwZjQ0NmI0OA=="
          className="href"
        >
          <FaInstagramSquare />
        </a>
        <a
          href="https://www.linkedin.com/in/shivam-anand-b79136277/"
          className="href"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default SocialLinks;
