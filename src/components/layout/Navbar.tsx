import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/rs-horizontal.png";

const links = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Packages",
    href: "/packages",
  },
  {
    label: "Insights",
    href: "/insights",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
  label: "Shop",
  href: "/shop",
},

];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed
        left-0
        right-0
        top-0
        z-50
        transition-all
        duration-500
        ${
          scrolled
            ? "border-b border-slate-200 bg-white/95 backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >

      <div
        className="
          mx-auto
          flex
          h-20
md:h-28
          max-w-[1440px]
          items-center
          justify-between
          px-5
          md:px-12
          xl:px-20
        "
      >

        <Link
          to="/"
          onClick={() => setOpen(false)}
        >

          <img
            src={logo}
            alt="RS Assurance Group"
            className="
              h-50
              w-auto
              object-contain
            "
          />

        </Link>


        <nav className="hidden items-center gap-14 md:flex">

          {links.map((link) => (

            <Link
              key={link.href}
              to={link.href}
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-slate-600
                transition-colors
                hover:text-[#08142E]
              "
            >
              {link.label}
            </Link>

          ))}

        </nav>


<Link
  to="/booking"
  className="
    hidden
    text-xs
    font-semibold
    uppercase
    tracking-[0.25em]
    text-[#08142E]
    md:block
  "
>
  Book A Call →
</Link>


        <button
          onClick={() => setOpen(!open)}
          className="
            flex
            flex-col
            gap-2
            md:hidden
          "
        >

          <span className="h-[2px] w-7 bg-[#08142E]" />
          <span className="h-[2px] w-7 bg-[#08142E]" />

        </button>


      </div>


      {open && (

        <div
          className="
            border-t
            border-slate-200
            bg-white
            px-6
            py-10
            md:hidden
          "
        >

          <nav className="flex flex-col gap-8">

            {links.map((link) => (

              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#08142E]
                "
              >
                {link.label}
              </Link>

            ))}


<Link
  to="/booking"
  onClick={() => setOpen(false)}
  className="
    text-sm
    font-semibold
    uppercase
    tracking-[0.25em]
    text-[#D6A03A]
  "
>
  Book A Call →
</Link>

<Link
  to="/contact"
  onClick={() => setOpen(false)}
  className="
    text-sm
    font-semibold
    uppercase
    tracking-[0.25em]
    text-[#08142E]
  "
>
  Contact →
</Link>

          </nav>

        </div>

      )}

    </header>
  );
}