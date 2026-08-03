import Page from "../components/layout/Page";
import Container from "../components/layout/Container";

const packages = [
  {
    number: "01",
    title: "Registration Advisory",
    subtitle: "Preparing for the journey ahead.",
    text: "Support for organisations seeking clarity around registration requirements, preparation priorities and submission readiness.",
    cta: "Book Consultation",
  },
  {
    number: "02",
    title: "Compliance Review",
    subtitle: "Understanding where you stand.",
    text: "A structured review of current practices, documentation and processes to identify improvement opportunities.",
    cta: "Request Review",
  },
  {
    number: "03",
    title: "Advisory Partnership",
    subtitle: "Ongoing guidance for growth.",
    text: "Continued advisory support for organisations requiring strategic guidance, operational reviews and improvement planning.",
    cta: "Discuss Options",
  },
];
export default function Packages() {
  return (
    <Page
      eyebrow="ADVISORY PACKAGES"
      title={
        <>
          Strategic support
          <br />
          designed around
          <br />
          your organisation.
        </>
      }
      description="Structured advisory pathways designed to support organisations through registration preparation, compliance improvement and operational growth."
    >

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

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.4em]
              text-[#D6A03A]
            "
          >
            FIND THE RIGHT PATHWAY
          </p>


          <h2
            className="
              mt-8
              max-w-4xl
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.06em]
              md:text-5xl
            "
          >
            Advisory support
            <br />
            built around your needs.
          </h2>


          <p
            className="
              translate-y-4
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-slate-300
            "
          >
            Whether you are preparing for registration, strengthening
            internal processes or seeking ongoing guidance, our advisory
            pathways provide structured support for your next stage.
          </p>


        </div>

      </section>
<section className="mt-24 md:mt-32">
    <Container>

  <div className="border-t border-slate-200">

    {packages.map((item) => (

      <div
        key={item.number}
        className="
          grid
          gap-8
          border-b
          border-slate-200
          py-14
          lg:grid-cols-[100px_1fr_180px]
          lg:items-start
        "
      >

        <span
          className="
            text-sm
            font-black
            tracking-[0.25em]
            text-[#D6A03A]
          "
        >
          {item.number}
        </span>


        <div>


          <h3
            className="
              mt-5
              text-3xl
              font-black
              tracking-[-0.05em]
              text-[#08142E]
              md:text-4xl
            "
          >
            {item.title}
          </h3>


          <p
            className="
              mt-4
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-slate-400
            "
          >
            {item.subtitle}
          </p>


          <p
            className="
            translate-y-4
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-slate-600
            "
          >
            {item.text}
          </p>

        </div>


<a
  href="/contact"
  className="
    mt-4
    inline-flex
    rounded-xl
    bg-[#08142E]
    px-6
    py-3
    text-xs
    font-semibold
    uppercase
    tracking-[0.2em]
    text-white
    transition-all
    duration-300
    hover:bg-[#D6A03A]
    hover:text-[#08142E]
    lg:justify-self-end
  "
>
  {item.cta} →
</a>


      </div>

    ))}

  </div>

</Container>

</section>

    </Page>
  );
}