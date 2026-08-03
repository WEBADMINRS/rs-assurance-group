import Container from "../layout/Container";
import Reveal from "../ui/Reveal";

const services = [
  {
    number: "01",
    title: "Governance Advisory",
    text: "Strengthening governance structures, accountability frameworks and decision-making systems that support sustainable organisations.",
  },
  {
    number: "02",
    title: "Risk & Compliance",
    text: "Identifying operational risks and building practical compliance systems that provide clarity, confidence and control.",
  },
  {
    number: "03",
    title: "Audit Readiness",
    text: "Preparing organisations before external scrutiny through stronger documentation, evidence and operational discipline.",
  },
  {
    number: "04",
    title: "Operational Excellence",
    text: "Improving internal systems and processes to create stronger performance, efficiency and organisational maturity.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-40">
      <Container>

        <Reveal>

          <div className="grid gap-24 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#2E5FA7]">
                OUR SERVICES
              </p>

              <h2 className="mt-16 max-w-xl text-6xl font-black leading-[0.95] tracking-[-0.07em] text-[#08142E] md:text-7xl">
                Systems that create
                <br />
                confidence.
              </h2>

              <p className="translate-y-4 mt-8 max-w-md text-base leading-8 text-slate-600">
                We help regulated organisations move from reactive compliance
                to practical assurance through disciplined strategy and systems.
              </p>

            </div>


            <div>

              <div className="border-t border-slate-200">

                {services.map((service, index) => (

                  <Reveal
                    key={service.number}
                    delay={index * 0.08}
                  >

                    <div className="grid items-start gap-8 border-b border-slate-200 py-14 lg:grid-cols-[90px_1fr_1.15fr]">

                      <span className="text-2xl font-black tracking-[-0.05em] text-[#D6A03A]">
                        {service.number}
                      </span>


                      <div>

                        <h3 className="text-2xl font-bold tracking-[-0.04em] text-[#08142E]">
                          {service.title}
                        </h3>

                      </div>


                      <p className="text-base leading-8 text-slate-600">
                        {service.text}
                      </p>


                    </div>

                  </Reveal>

                ))}

              </div>

            </div>

          </div>

        </Reveal>

      </Container>

    </section>
  );
}