import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#f2f2f2] relative pt-36 lg:pt-24 mt-40 lg:mt-24">
      {/* Newsletter Floating Box */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white w-[90%] max-w-5xl rounded-2xl py-10 px-6 flex flex-col md:flex-row justify-between items-center shadow-lg z-10">
        <h2 className="text-center md:text-left text-2xl md:text-3xl font-bold mb-6 md:mb-0">
          STAY UPTO DATE ABOUT <br className="hidden md:block" />
          OUR LATEST OFFERS
        </h2>
        <div className="flex items-center gap-3">
          <div className="bg-white text-black rounded-full p-2">
            <FiMail size={20} />
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Description */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">SHOP.CO</h3>
          <p className="text-sm text-gray-700">
            We have clothes that suits your style and which you&apos;re proud to
            wear. From women to men.
          </p>
          <div className="flex gap-4 mt-2">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaGithub />
          </div>
        </div>

        {/* Footer Columns */}
        {[
          { title: "COMPANY", links: ["About", "Features", "Works", "Career"] },
          {
            title: "HELP",
            links: [
              "Customer Support",
              "Delivery Details",
              "Terms & Conditions",
              "Privacy Policy",
            ],
          },
          {
            title: "FAQ",
            links: ["Account", "Manage Deliveries", "Orders", "Payments"],
          },
          {
            title: "RESOURCES",
            links: [
              "Free eBooks",
              "Development Tutorial",
              "How to - Blog",
              "Youtube Playlist",
            ],
          },
        ].map((section, index) => (
          <div key={index}>
            <h4 className="font-semibold mb-3">{section.title}</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {section.links.map((link, i) => (
                <li key={i} className="hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto py-4 px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 border-t mt-10">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="flex items-center gap-3 mt-2 sm:mt-0">
          <Image src="/visa.svg" alt="Visa" width={40} height={25} />
          <Image src="/paypal.svg" alt="Paypal" width={40} height={25} />
          <Image src="/applepay.svg" alt="Apple Pay" width={40} height={25} />
          <Image src="/googlepay.svg" alt="Google Pay" width={40} height={25} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
