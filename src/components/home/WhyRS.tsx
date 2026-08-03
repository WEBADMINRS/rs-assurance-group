import Container from "../layout/Container";
import Reveal from "../ui/Reveal";

const strengths = [
  {
    number: "01",
    title: "Operational Reality",
    text: "Advice grounded in practical experience, helping organisations build systems that work beyond documentation.",
  },
  {
    number: "02",
    title: "Strategic Thinking",
    text: "Every recommendation considers long-term sustainability, stronger governance and organisational maturity.",
  },
  {
    number: "03",
    title: "Prepared Organisations",
    text: "We help organisations build confidence before assessment, review or external scrutiny begins.",
  },
  {
    number: "04",
    title: "Long-Term Partnership",
    text: "We work alongside organisations beyond individual projects, supporting continuous improvement and growth.",
  },
];

export default function WhyRS() {
  return (
    <section className="bg-[#08142E] py-56 text-white">

      <Container>

        <Reveal>

          <div className="max-w-5xl">

            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#D6A03A]">
  WHY RS ASSURANCE GROUP
</p>


            <h2 className="
  mt-16
  max-w-full
  text-4xl
  font-black
  leading-[0.95]
  tracking-[-0.06em]
  md:mt-24
  md:text-6xl
  lg:text-7xl
">

              We don't prepare
              <br />
              organisations for audits.
              <br />
              We build organisations
              <br />
              that are ready.

            </h2>


            <p className="translate-y-4 mt-16 max-w-3xl text-xl leading-10 text-slate-300">

              Confidence is created long before scrutiny arrives.
              We help organisations strengthen governance, compliance
              and operational systems through disciplined preparation.

            </p>


          </div>



          <div className="mt-36 grid gap-x-20 gap-y-24 md:grid-cols-2">


            {strengths.map((item, index) => (

              <Reveal
                key={item.number}
                delay={index * 0.08}
              >

                <div className="border-t border-white/20 pt-12">


                  <span className="text-3xl font-black tracking-[-0.05em] text-[#D6A03A]">
                    {item.number}
                  </span>



                  <h3 className="mt-8 text-2xl font-bold tracking-[-0.04em]">
                    {item.title}
                  </h3>



                  <p className="mt-6 max-w-md text-base leading-8 text-slate-300">
                    {item.text}
                  </p>


                </div>


              </Reveal>

            ))}


          </div>


        </Reveal>


      </Container>


    </section>
  );
}