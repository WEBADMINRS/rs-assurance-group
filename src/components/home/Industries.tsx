import Container from "../layout/Container";
import Reveal from "../ui/Reveal";

const industries = [
  {
    number: "01",
    title: "Disability Services",
    text: "Supporting NDIS providers with stronger governance, registration readiness and operational systems.",
  },
  {
    number: "02",
    title: "Aged Care",
    text: "Helping organisations strengthen compliance, accountability and service delivery frameworks.",
  },
  {
    number: "03",
    title: "Community Services",
    text: "Building sustainable foundations for organisations delivering essential support services.",
  },
  {
    number: "04",
    title: "Health & Human Services",
    text: "Providing assurance support for organisations operating in complex regulated environments.",
  },
];

export default function Industries() {
  return (
    <section className="bg-[#F8F8F6] py-56">

      <Container>

        <Reveal>

          <div className="max-w-4xl">

            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#2E5FA7]">
              INDUSTRIES
            </p>


            <h2 className="mt-16 max-w-3xl text-6xl font-black leading-[0.95] tracking-[-0.07em] text-[#08142E] md:text-7xl">
              Where trust
              <br />
              matters most.
            </h2>


            <p className="translate-y-4 mt-10 max-w-2xl text-xl leading-10 text-slate-600">
              We partner with organisations operating in environments where
              governance, compliance and operational confidence are critical.
            </p>


          </div>



          <div className="mt-32 grid gap-x-16 gap-y-20 md:grid-cols-2">


            {industries.map((industry, index) => (

              <Reveal
                key={industry.number}
                delay={index * 0.08}
              >

                <div className="border-t border-slate-200 pt-12">


                  <span className="text-3xl font-black tracking-[-0.05em] text-[#D6A03A]">
                    {industry.number}
                  </span>



                  <h3 className="mt-8 text-3xl font-bold tracking-[-0.05em] text-[#08142E]">
                    {industry.title}
                  </h3>



                  <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                    {industry.text}
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