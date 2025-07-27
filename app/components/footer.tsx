import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-[#111] text-white font-sans">
      {/* Marquee */}
      <div className="w-full overflow-hidden bg-amber-900 py-2 relative z-10">
        <div className="marquee-container relative w-full">
          <div className="marquee-content flex items-center gap-20 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div className="flex flex-row items-center gap-20" key={i}>
                {Array.from({ length: 9 }).map((_, j) => (
                  <div className="flex items-center gap-2" key={j}>
                    <Image
                      src="/header-logo-white.png"
                      alt="logo"
                      width={40}
                      height={40}
                      className="w-10 h-auto"
                    />
                    <h1 className="text-white uppercase text-xl sm:text-2xl">
                      K-Plus
                    </h1>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left - Image & Contact */}
        <div
          className="relative bg-cover bg-center min-h-[350px]"
          style={{ backgroundImage: "url('/footer-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/80 p-8 flex flex-col items-center lg:items-start justify-center text-center lg:text-left gap-6">
            <div className="w-20 h-20 flex items-center justify-center bg-black rounded-full">
              <Image
                src="/footer-logo.png"
                alt="logo"
                width={80}
                height={80}
                className="w-20 h-auto"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-light">RISHI KNITWEAR</h2>
            <Link href="/contact">
              <button className="border bg-black border-white py-2 px-6 uppercase tracking-wider text-sm hover:bg-white hover:text-black transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Right - Links */}
        <div className="col-span-2 px-6 sm:px-12 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-10 text-center md:text-left">
            {/* Column 1 */}
            <div>
              <h3 className="uppercase font-medium mb-4 tracking-wider">
                Categories
              </h3>
              <ul className="space-y-2 text-gray-400">
                {["Pullovers", "Sweatshirts", "Jackets", "T-Shirts"].map(
                  (item, i) => (
                    <li key={i}>
                      <span className="hover:text-white transition-colors cursor-pointer">
                        {item}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="uppercase font-medium mb-4 tracking-wider">
                Categories
              </h3>
              <ul className="space-y-2 text-gray-400">
                {[
                  "Windsheaters",
                  "Ladies Cardigans",
                  "Girls Sweatshirts",
                  "School Uniform",
                ].map((item, i) => (
                  <li key={i}>
                    <span className="hover:text-white transition-colors cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="uppercase font-medium mb-4 tracking-wider">
                Pages
              </h3>
              <ul className="space-y-2 text-gray-400">
                {[
                  { name: "Home", path: "/" },
                  { name: "Products", path: "/products" },
                  { name: "About", path: "/about" },
                  { name: "Contact", path: "/contact" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link href={item.path}>
                      <span className="hover:text-white transition-colors cursor-pointer">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            Designed with <span className="text-red-500">❤</span> by{" "}
            <a
              href="https://www.linkedin.com/in/ks-iitjmu"
              className="text-white underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kunal Sharma
            </a>
          </p>
          <p className="text-gray-400 text-sm">
            IIT Jammu Mathematics and Computing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
