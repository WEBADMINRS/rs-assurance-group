import { motion } from "framer-motion";
import Container from "../layout/Container";
import Button from "../ui/Button";
import {
  Landmark,
  ShieldCheck,
  ClipboardCheck,
  Settings,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FCFCFA] pt-28 pb-44">

      <Container>

        <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-[1.2fr_0.8fr]">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
 transition={{
  duration: 1,
  ease: [0.22, 1, 0.36, 1],
}}
          >

          <p
  className="
    mb-8
    text-xs
    font-semibold
    uppercase
    tracking-[0.2em]
    text-[#2E5FA7]
    md:tracking-[0.65em]
  "
>
  THE DISCIPLINE BEHIND GREAT ORGANISATIONS
</p>


            <h1 className="
  max-w-full
  text-5xl
  font-black
  leading-[0.95]
  tracking-[-0.06em]
  text-[#08142E]
  md:text-6xl
  lg:max-w-[900px]
  lg:text-[6.8rem]
">

              The future
              <br />

              belongs to
              <br />

              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#183A75 0%,#406DB0 45%,#D6A03A 100%)",
                }}
              >
                the prepared.
              </span>

            </h1>


            <p
  className="
    translate-y-4
    mt-10
    max-w-[620px]
    text-base
    leading-8
    text-slate-600
    md:text-lg
    md:leading-9
  "
>
              The strongest organisations are built long before they're tested.
              Through disciplined governance, decisive leadership and resilient
              systems, we help organisations build confidence that endures.
            </p>


            <div className="
  mt-16
  flex
  flex-col
  gap-5
  sm:flex-row
">

              <Button>
                Book a Consultation
              </Button>


              <Button
                variant="secondary"
                to="/services"
              >
                Explore Services
              </Button>

            </div>

          </motion.div>



<motion.div
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 1,
    delay: 0.2,
    ease: [0.22, 1, 0.36, 1],
  }}
>

            <div className="rounded-[36px] border border-slate-200 bg-white p-6
md:p-10 shadow-[0_30px_90px_rgba(8,20,46,0.06)]">


              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#2E5FA7]">
                OUR APPROACH
              </p>


              <h2 className="
  translate-y-4
  mt-8
  text-4xl
  font-black
  leading-[0.95]
  tracking-[-0.06em]
  text-[#08142E]
  md:text-5xl
">
                Built before
                <br />
                the moment
                <br />
                arrives.
              </h2>


              <div className="mt-8">

                {[
  {
    title: "Governance",
    icon: Landmark,
  },
  {
    title: "Risk Management",
    icon: ShieldCheck,
  },
  {
    title: "Compliance",
    icon: ClipboardCheck,
  },
  {
    title: "Operational Systems",
    icon: Settings,
  },
].map((item, index) => {
  const Icon = item.icon;

  return (
   <motion.div
  key={item.title}
  initial={{
    opacity: 0,
    x: -10,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{
    once: true,
    amount: 0.5,
  }}
  transition={{
    duration: 0.5,
    delay: index * 0.08,
  }}
  className="flex items-center justify-between border-b border-slate-200 py-4 md:py-5"
>

  <div className="flex items-center gap-8">

    <div
className="
flex
h-12
w-12
items-center
justify-center
rounded-2xl
bg-slate-100
md:h-16
md:w-16
"
>

     <Icon
  size={24}
  className="text-[#08142E]"
/>

    </div>


    <span className="text-lg font-semibold text-[#08142E]">
      {item.title}
    </span>

  </div>


                    <span className="text-sm font-black text-[#D6A03A]">
                      0{index + 1}
                    </span>

                                    </motion.div>

                  );

})}

              </div>


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
    amount: 0.3,
  }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    mt-16
    rounded-3xl
    bg-[#08142E]
    px-6
    py-6
    md:px-10
    md:py-8
  "
>

  <div className="flex items-center gap-6">

    <div className="h-14 w-[2px] bg-[#D6A03A]" />

    <p className="
  text-base
  font-medium
  leading-[1.3]
  tracking-[-0.02em]
  text-white
  md:text-xl
">
  Confidence is not claimed.
  <br />
  It is engineered.
</p>

  </div>

</motion.div>


            </div>


          </motion.div>


        </div>


      </Container>


    </section>
  );
}