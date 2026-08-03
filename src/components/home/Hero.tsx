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
    <section className="relative overflow-hidden bg-[#FCFCFA] pt-40 pb-44">

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <p className="mb-12 text-xs font-semibold uppercase tracking-[0.3em]
md:tracking-[0.65em]text-[#2E5FA7]">
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


            <p className="translate-y-4 mt-12 max-w-[620px] text-lg leading-9 text-slate-600">
              The strongest organisations are built long before they're tested.
              Through disciplined governance, decisive leadership and resilient
              systems, we help organisations build confidence that endures.
            </p>


            <div className="mt-16 flex gap-5">

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
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
            }}
          >

            <div className="rounded-[36px] border border-slate-200 bg-white p-14 shadow-[0_30px_90px_rgba(8,20,46,0.06)]">


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


              <div className="mt-12">

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
    <div
  key={item.title}
  className="flex items-center justify-between border-b border-slate-200 py-7"
>

  <div className="flex items-center gap-8">

    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">

      <Icon
        size={32}
        strokeWidth={1.8}
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

                  </div>

                  );

})}

              </div>


<div className="mt-16 rounded-3xl bg-[#08142E] px-10 py-8">

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

</div>


            </div>


          </motion.div>


        </div>


      </Container>


    </section>
  );
}