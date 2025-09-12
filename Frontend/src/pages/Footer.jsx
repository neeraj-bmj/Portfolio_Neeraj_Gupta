import React from "react";

const Footer = () => {
  const email = "neerajguptaica@gmail.com";
  const subject = "Protfolio inquery,";
  const body = "Hii Neeraj, \n \n I saw your portfolio and would like to discuss...";

  return (
    <footer className="bg-green-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
         
          {/* logo & about */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-green-900 font-bold">
                NG
              </div>
              <div className="text-lg font-semibold poppins-bold">Neeraj Gupta</div>
            </div>

            <p className="text-sm leading-relaxed poppins-medium">
              I build responsive, high-performance web apps with modern
              technologies — focused on accessibility and maintainability.
            </p>
          </div>

          {/* quick links */}
          <div>
            <h3 className="text-md font-semibold mb-2 poppins-bold">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-sm poppins-medium">
              <li>
                <a
                  href="#hero"
                  className="hover:text-rose-400 transition"
                  aria-label="Home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-rose-400 transition"
                  aria-label="About"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="hover:text-rose-400 transition"
                  aria-label="service"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-rose-400 transition"
                  aria-label="Skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-rose-400 transition"
                  aria-label="Projects"
                >
                  Projects
                </a>
              </li>
               <li>
                <a
                  href="#contact"
                  className="hover:text-rose-400 transition"
                  aria-label="Contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* contact info */}
          <div>
            <h3 className="text-md font-semibold mb-2 poppins-bold">Contact</h3>
            <ul className="text-sm space-y-1 poppins-medium">
              <li>
                Email:{" "}
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                  target="_blank"
                  className="hover:underline"
                >
                  neerajguptaica@gmail.com
                </a>
              </li>
              <li>Phone: +91 8081599934</li>
              <li>Location: Gorakhpur, U.P, India</li>
              <li>Software developer: Neeraj Gupta</li>
            </ul>
          </div>

          {/* social icons */}
          <div>
            <h3 className="text-md font-semibold mb-2 poppins-bold">Follow</h3>
            <div className="flex flex-wrap gap-3 text-lg">
              {/* twitter */}
              <a
                href="https://x.com/coder_neeraj?s=09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-rose-400 transition"
              >
                <i className="fab fa-twitter" />
              </a>
              {/* github */}
              <a
                href="https://github.com/neeraj-bmj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-rose-400 transition"
              >
                <i className="fab fa-github" />
              </a>
              {/* linkedin */}
              <a
                href="https://www.linkedin.com/in/neerajguptaica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-rose-400 transition"
              >
                <i className="fab fa-linkedin" />
              </a>
             {/* whatsapp */}
              <a
                href="https://wa.me/message/FPJBZVLOJMZ5I1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="whatsapp"
                className="hover:text-rose-400 transition"
              >
                <i className="fab fa-whatsapp" />
              </a>
             {/* email */}
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send email to Neeraj Gupta"
                className="hover:text-rose-400 transition"
              >
                <i className="fa-regular fa-envelope" />
              </a>
             
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-green-800 pt-4 text-center text-sm">
          © 2025 Portfolio{" "}
          <span className="rounded-lg font-semibold text-rose-400 px-2 py-1 bg-gray-900">
            💖 Neeraj Gupta 💖
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
