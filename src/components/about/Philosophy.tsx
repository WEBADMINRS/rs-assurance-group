import Container from "../layout/Container";
import Reveal from "../ui/Reveal";

const principles = [
  {
    number: "01",
    title: "Clarity Before Action",
    text: "Effective organisations begin with a clear understanding of their responsibilities, priorities and direction.",
  },
  {
    number: "02",
    title: "Structure That Supports Growth",
    text: "Strong organisations rely on clear frameworks, accountable leadership and practical approaches that support sustainable progress.",
  },
  {
    number: "03",
    title: "Practical Advisory",
    text: "Our approach focuses on meaningful improvements that can be applied in real operational environments.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-[#F8F8F6] py-32">
      <Container>

        <Reveal>

          <div className="grid gap-20 lg:grid-cols-[0.8fr_1.2fr]">

            {/* LEFT */}
            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#2E5FA7]">
                OUR PHILOSOPHY
              </p>


              <h2 className="mt-10 max-w-xl text-6xl font-black leading-[0.95] tracking-[-0.07em] text-[#08142E] md:text-7xl">
                Built on
                <br />
                discipline.
              </h2>

            </div>



            {/* RIGHT */}
            <div>

              <p className="translate-y-4 max-w-2xl text-xl leading-[1.8] text-slate-700">
                Strong organisations are created long before they are tested.
                They are built through disciplined governance, decisive
                leadership and systems designed to withstand uncertainty.
              </p>



              <div className="mt-20 border-t border-slate-200">

                {principles.map((item, index) => (

                  <Reveal
                    key={item.number}
                    delay={index * 0.08}
                  >

                    <div className="grid gap-8 border-b border-slate-200 py-16 lg:grid-cols-[100px_1fr]">


                      <span className="text-3xl font-black tracking-[-0.05em] text-[#D6A03A]">
                        {item.number}
                      </span>



                      <div>

                        <h3 className="text-2xl font-bold tracking-[-0.04em] text-[#08142E]">
                          {item.title}
                        </h3>


                        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                          {item.text}
                        </p>

                      </div>


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