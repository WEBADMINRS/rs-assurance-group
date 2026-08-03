import Page from "../components/layout/Page";
import Container from "../components/layout/Container";
import { 
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaUniversity,
  FaShieldAlt,
  FaSitemap
} from "react-icons/fa";

const focusAreas = [
  {
    title: "Governance",
    text: "Strengthening structures, accountability and decision-making frameworks.",
    icon: FaUniversity,
  },
  {
    title: "Compliance",
    text: "Building evidence-based systems designed for confidence and readiness.",
    icon: FaShieldAlt,
  },
  {
    title: "Operational Systems",
    text: "Creating practical processes that support sustainable growth.",
    icon: FaSitemap,
  },
];

export default function Contact() {
  return (
    <Page
      eyebrow="CONTACT RS ASSURANCE GROUP"
      title={
        <>
          Build stronger
          <br />
          organisational foundations.
        </>
      }
      description="Whether you are preparing for registration, improving compliance systems or strengthening operations, we help organisations build confidence before challenges arise."
    >

      {/* CONTACT FORM SECTION */}

      <section
        className="
          mt-40
          md:mt-48
        "
      >

        <Container>

          <div
            className="
              grid
              gap-16
              lg:grid-cols-[0.9fr_1.1fr]
              lg:items-start
            "
          >

            {/* WHY RS CARD */}

            <div>

              <div
                className="
                  rounded-[36px]
                  bg-[#08142E]
                  p-10
                  text-white
                  md:p-12
                "
              >

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.4em]
                    text-[#D6A03A]
                  "
                >
                  WHY RS
                </p>


                <h2
                  className="
                    translate-y-4
                    mt-8
                    text-4xl
                    font-black
                    leading-[0.95]
                    tracking-[-0.06em]
                  "
                >
                  Confidence is built
                  <br />
                  before scrutiny.
                </h2>


                <div className="mt-10 space-y-8">

                 {focusAreas.map((item) => {

const Icon = item.icon;

return (

<div
key={item.title}
className="
grid
grid-cols-[48px_1fr]
gap-5
border-b
border-white/10
pb-8
last:border-0
"
>

<div
className="
flex
h-10
w-10
items-center
justify-center
text-[#D6A03A]
"
>
<Icon size={28} />
</div>


<div>

<h3 className="text-lg font-bold">
{item.title}
</h3>


<p
className="
mt-3
text-base
leading-7
text-slate-300
"
>
{item.text}
</p>


</div>


</div>

);

})}

                </div>


              </div>


            </div>



            {/* FORM */}

            <div>

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.4em]
                  text-[#2E5FA7]
                "
              >
                START A CONVERSATION
              </p>


              <h2
                className="
                  mt-8
                  text-4xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.06em]
                  text-[#08142E]
                  md:text-5xl
                "
              >
                Tell us where
                <br />
                you need support.
              </h2>


              <form
                className="
                  mt-10
                  space-y-7
                "
              >

                <div>

                  <label
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#08142E]
                    "
                  >
                    Name
                  </label>


                  <input
                    type="text"
                    className="
                      mt-3
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-5
                      py-4
                      outline-none
                      focus:border-[#2E5FA7]
                    "
                  />

                </div>  
                <div>

                  <label
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#08142E]
                    "
                  >
                    Organisation
                  </label>


                  <input
                    type="text"
                    className="
                      mt-3
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-5
                      py-4
                      outline-none
                      focus:border-[#2E5FA7]
                    "
                  />

                </div>



                <div>

                  <label
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#08142E]
                    "
                  >
                    Email
                  </label>


                  <input
                    type="email"
                    className="
                      mt-3
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-5
                      py-4
                      outline-none
                      focus:border-[#2E5FA7]
                    "
                  />

                </div>



                <div>

                  <label
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#08142E]
                    "
                  >
                    Message
                  </label>


                  <textarea
                    rows={5}
                    className="
                      mt-3
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-5
                      py-4
                      outline-none
                      focus:border-[#2E5FA7]
                    "
                  />

                </div>



                <button
                  type="submit"
                  className="
                    rounded-xl
                    bg-[#08142E]
                    px-8
                    py-4
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-white
                    transition
                    hover:bg-[#D6A03A]
hover:text-[#08142E]
                  "
                >
                  Submit Enquiry →
                </button>


              </form>


            </div>


          </div>


        </Container>

      </section>



      {/* CONNECT SECTION */}

      <section
        className="
          mt-32
          border-t
          border-slate-200
          pt-20
          md:mt-40
          md:pt-24
        "
      >

        <Container>

          <div
            className="
              grid
              gap-16
              lg:grid-cols-2
            "
          >


            <div>

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.4em]
                  text-[#2E5FA7]
                "
              >
                CONNECT WITH US
              </p>


              <h2
                className="
                  mt-8
                  max-w-xl
                  text-4xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.06em]
                  text-[#08142E]
                  md:text-5xl
                "
              >
                Let's build stronger
                <br />
                foundations together.
              </h2>


              <p
                className="
                translate-y-4
                  mt-8
                  max-w-lg
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                Connect with RS Assurance Group for advisory support,
                compliance guidance and operational improvement.
              </p>


              <div className="mt-10 flex gap-4">

                <a
                  href="/"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    text-[#08142E]
                    transition
                    hover:bg-[#08142E]
                    hover:text-white
                  "
                >
                  <FaFacebookF />
                </a>


                <a
                  href="/"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    text-[#08142E]
                    transition
                    hover:bg-[#08142E]
                    hover:text-white
                  "
                >
                  <FaLinkedinIn />
                </a>


                <a
                  href="/"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    text-[#08142E]
                    transition
                    hover:bg-[#08142E]
                    hover:text-white
                  "
                >
                  <FaInstagram />
                </a>


              </div>


            </div>



            <div
              className="
                border-t
                border-slate-200
                pt-10
              "
            >

              <div className="space-y-10">


                <div>

                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.35em]
                      text-[#D6A03A]
                    "
                  >
                    ADDRESS
                  </p>

                  <p className="mt-3 text-lg text-slate-600">
                    Melbourne, Victoria, Australia
                  </p>

                </div>



                <div>

                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.35em]
                      text-[#D6A03A]
                    "
                  >
                    EMAIL
                  </p>

                  <a
  href="mailto:info@rsassurancegroup.com.au"
  className="
    mt-3
    block
    text-lg
    text-slate-600
    transition
    hover:text-[#08142E]
  "
>
  info@rsassurancegroup.com.au
</a>

                </div>



                <div>

                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.35em]
                      text-[#D6A03A]
                    "
                  >
                    PHONE
                  </p>

                  <p className="mt-3 text-lg text-slate-600">
                    +61 XXX XXX XXX
                  </p>

                </div>


              </div>


            </div>


          </div>


        </Container>


      </section>


    </Page>
  );
}