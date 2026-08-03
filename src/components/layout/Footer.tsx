import footerLogoVertical from "../../assets/rs-vertical-footer.png";
import Container from "./Container";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#08142E] text-white">

      <Container>

        <div className="py-20 md:py-24">


   <div
  className="
    grid
    gap-16
    lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.4fr]
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



            {/* COMPANY */}

            <div className="text-center">

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
    gap-0.5
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



            {/* EXPERTISE */}

            <div className="text-center">

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.4em]
                  text-[#D6A03A]
                "
              >
                Expertise
              </p>


              <div
                className="
                  mt-8
                  space-y-5
                  text-slate-300
                "
              >
                <p>Governance</p>
                <p>Compliance</p>
                <p>Audit Readiness</p>
                <p>Operational Systems</p>
              </div>


            </div>



            {/* ACKNOWLEDGEMENT */}

            <div className="text-center">

             <p
  className="
    max-w-xs
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
                  text-base
                  leading-8
                  text-slate-300
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
              gap-8
              md:flex-row
              md:items-center
              md:justify-between
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
                gap-4
              "
            >

              <img
                src="/flags/australian.svg"
                alt="Australian flag"
                className="h-8 w-auto"
              />

              <img
                src="/flags/aboriginal.svg"
                alt="Aboriginal flag"
                className="h-8 w-auto"
              />

              <img
                src="/flags/torres-strait.svg"
                alt="Torres Strait Islander flag"
                className="h-8 w-auto"
              />

            </div>


          </div>


        </div>


      </Container>


    </footer>
  );
}