import footerLogoVertical from "../../assets/rs-vertical-footer.png";
import Container from "./Container";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";


export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#08142E] text-white">

      <Container>

        <motion.div
  initial={{
    opacity: 0,
    y: 20,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="py-20 md:py-24"
>


   <div
  className="
    grid
    gap-16
    lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.4fr]
    lg:items-start
  "
>


           {/* BRAND */}

<div className="flex w-full flex-col items-center text-center">

  <div className="h-[180px] overflow-hidden flex justify-center">
  <img
    src={footerLogoVertical}
    alt="RS Assurance Group"
    className="
      w-[260px]
      max-w-none
      object-contain
      translate-y-[-20px]
    "
  />
</div>

  <p
    className="
      mt-2
      max-w-sm
      text-center
      text-base
      leading-8
      text-slate-300
    "
  >
    Governance, compliance and assurance advisory helping
    organisations build stronger foundations through disciplined
    strategy and operational excellence.
  </p>

</div>

{/* CONTACT */}

<div className="flex flex-col items-center text-center">

  <p
    className="
      text-[10px]
font-semibold
uppercase
leading-5
tracking-[0.3em]
md:text-xs
md:tracking-[0.4em]
    "
  >
    Contact
  </p>


  <div
  className="
    mt-8
    flex
    w-full
    max-w-xs
    flex-col
    gap-4
    text-slate-300
  "
>

  <div className="flex items-center gap-5">
    <MapPin
      size={20}
      className="shrink-0 text-[#D6A03A]"
    />

    <span className="text-left">
      Victoria, Australia
    </span>
  </div>


  <div className="flex items-center gap-5">
    <Mail
      size={20}
      className="shrink-0 text-[#D6A03A]"
    />

    <span className="text-left">
      hello@rsassurancegroup.com.au
    </span>
  </div>


  <div className="flex items-center gap-5">
    <Phone
      size={20}
      className="shrink-0 text-[#D6A03A]"
    />

    <span className="text-left">
      +61 XXX XXX XXX
    </span>
  </div>

</div>
</div>



            {/* COMPANY */}

            <div className="flex flex-col items-center text-center">

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.4em]
                  text-[#D6A03A]
                "
              >
                Company
              </p>


            <div
  className="
    mt-6
    flex
    flex-col
    items-center
    gap-2
    text-slate-300
  "
>
  <Link
    to="/about"
    className="
      text-base
      transition-colors
      hover:text-white
    "
  >
    About
  </Link>

  <Link
    to="/services"
    className="
      text-base
      transition-colors
      hover:text-white
    "
  >
    Services
  </Link>

  <Link
    to="/insights"
    className="
      text-base
      transition-colors
      hover:text-white
    "
  >
    Insights
  </Link>

  <Link
    to="/contact"
    className="
      text-base
      transition-colors
      hover:text-white
    "
  >
    Contact

</Link>
</div>


            </div>





            {/* ACKNOWLEDGEMENT */}

          <div className="flex flex-col items-center text-center">

<p
  className="
    w-full
    max-w-md
    text-center
    text-xs
    font-semibold
    uppercase
    leading-6
    tracking-[0.4em]
    text-[#D6A03A]
  "
>
  Acknowledgement Of Country
</p>


              <p
                className="
                translate-y-4
                  mt-12
                  text-sm
leading-7
text-slate-300
md:text-base
md:leading-8
                "
              >
                In the spirit of reconciliation, RS Assurance Group
                acknowledges the Traditional Custodians of Country throughout
                Australia and their connections to land, sea and community.
                We pay our respects to Elders past and present and extend that
                respect to all Aboriginal and Torres Strait Islander peoples
                today.
              </p>


            </div>


          </div>



          {/* LOWER BAR */}

<div
  className="
    mt-20
    border-t
    border-white/10
    pt-8
    flex
    flex-col
    items-center
    gap-8
    text-center
    md:flex-row
    md:items-center
    md:justify-between
    md:text-left
  "
>


            <p
              className="
                text-sm
                text-slate-400
              "
            >
              © {new Date().getFullYear()} RS Assurance Group. All rights reserved.
            </p>



            <p
              className="
                text-sm
                text-slate-400
              "
            >
              Governance • Risk • Compliance
            </p>



<div
  className="
    flex
    items-center
    justify-center
    gap-4
  "
>

              <img
                src="/flags/australian.svg"
                alt="Australian flag"
                className="h-7 w-auto"
              />

              <img
                src="/flags/aboriginal.svg"
                alt="Aboriginal flag"
                className="h-7 w-auto"
              />

              <img
                src="/flags/torres-strait.svg"
                alt="Torres Strait Islander flag"
                className="h-7 w-auto"
              />

            </div>


          </div>


        </motion.div>


      </Container>


    </footer>
  );
}