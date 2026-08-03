import Page from "../components/layout/Page";
import Reveal from "../components/ui/Reveal";
import Container from "../components/layout/Container";

const insights = [
  {
    number: "01",
    category: "REGULATORY LANDSCAPE",
    title: "Understanding the path to NDIS registration.",
    subtitle: "Key considerations before entering the registration process.",
    text: "Registration requires more than completing documentation. Organisations must consider their service model, governance arrangements and ability to demonstrate consistent practice.",
  },
  {
    number: "02",
    category: "QUALITY MANAGEMENT",
    title: "Why compliance frameworks matter.",
    subtitle: "Connecting standards with operational reality.",
    text: "Effective frameworks connect everyday operations with accountability, record keeping and continuous improvement practices.",
  },
  {
    number: "03",
    category: "ORGANISATIONAL DESIGN",
    title: "Designing organisations for the next stage.",
    subtitle: "When growth requires a different approach.",
    text: "As organisations expand, clearer roles, processes and internal controls become essential to maintaining quality and consistency.",
  },
];

export default function Insights() {
  return (
    <Page
      eyebrow="INSIGHTS"
      title={
        <>
          Thinking that
          <br />
          strengthens
          <br />
          leaders.
        </>
      }
      description="Perspectives on regulation, quality and organisational development to help leaders make informed decisions in a changing environment."
    >

      {/* FEATURED INSIGHT */}

      <section className="mt-32">
        <div
          className="
            rounded-[36px]
            bg-[#08142E]
            p-10
            text-white
            md:p-16
          "
        >

          <p className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.4em]
            text-[#D6A03A]
          ">
            FEATURED INSIGHT
          </p>


          <h2 className="
            mt-8
            max-w-3xl
            text-4xl
            font-black
            leading-[0.95]
            tracking-[-0.06em]
            md:text-5xl
          ">
            Preparing organisations
            <br />
            for the registration journey.
          </h2>


          <p className="
            translate-y-4
            mt-8
            max-w-xl
            text-lg
            leading-8
            text-slate-300
          ">
            Registration requires more than documentation. Understanding expectations,
            responsibilities and evidence requirements early creates a clearer pathway
            forward.
          </p>


          <button className="
            mt-10
            rounded-xl
            bg-white
            px-8
            py-4
            text-xs
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#08142E]
          ">
            Read Insight →
          </button>

        </div>
      </section>
      <Container>
        <Reveal>

          <div className="mt-28 grid gap-16 lg:grid-cols-3">

            {insights.map((item, index) => (

             <article
  key={item.title}
  className="
    flex
    min-h-[520px]
    flex-col
    border-t
    border-slate-200
    pt-12
  "
>

                <p className="
  text-xs
  font-semibold
  uppercase
  tracking-[0.3em]
  text-[#2E5FA7]
">
  {item.category}
</p>


<h3 className="
  mt-8
  text-3xl
  font-black
  leading-tight
  tracking-[-0.05em]
  text-[#08142E]
">
  {item.title}
</h3>


<p className="
  mt-4
  text-xs
  font-semibold
  uppercase
  tracking-[0.25em]
  text-slate-400
">
  {item.subtitle}
</p>


<p className="
  mt-6
  translate-y-4
  text-base
  leading-8
  text-slate-600
">
  {item.text}
</p>

             <a
  className="
    mt-auto
    inline-flex
    w-fit
    items-center
    rounded-xl
    bg-[#08142E]
    px-6
    py-3
    text-xs
    font-semibold
    uppercase
    tracking-[0.25em]
    text-white
    transition
    hover:bg-[#183A75]
  "
>
  Read Insight →
</a>

              </article>

            ))}

          </div>

        </Reveal>

      </Container>

    </Page>
  );
}