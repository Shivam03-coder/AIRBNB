import React from "react";

function Supports() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <nav className="space-y-2">
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Help Centre</a>
        <a className="link link-hover">AirCover</a>
        <a className="link link-hover">Anti-discrimination</a>
        <a className="link link-hover">Disability support</a>
        <a className="link link-hover">Cancellation options</a>
        <a className="link link-hover">Report neighbourhood concern</a>
      </nav>
      <nav className="space-y-2">
        <h6 className="footer-title">Hosting</h6>
        <a className="link link-hover">Airbnb your home</a>
        <a className="link link-hover">AirCover for Hosts</a>
        <a className="link link-hover">Hosting resources</a>
        <a className="link link-hover">Community forum</a>
        <a className="link link-hover">Hosting responsibly</a>
        <a className="link link-hover">Join a free Hosting class</a>
      </nav>
      <nav className="space-y-2">
        <h6 className="footer-title">Airbnb</h6>
        <a className="link link-hover">Newsroom</a>
        <a className="link link-hover">New features</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Investors</a>
        <a className="link link-hover">Airbnb.org emergency stays</a>
      </nav>
    </footer>
  );
}

export default Supports;
