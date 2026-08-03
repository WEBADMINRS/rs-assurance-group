import Page from "../components/layout/Page";
import Container from "../components/layout/Container";

const resources = [
  {
    number: "01",
    type: "FREE GUIDE",
    title: "NDIS Registration Readiness Guide",
    text: "Understand the foundations, evidence requirements and preparation steps organisations need before beginning their registration journey.",
    price: "FREE",
    cta: "Get Guide",
  },
  {
    number: "02",
    type: "TEMPLATES & TOOLKITS",
    title: "Provider Compliance Toolkit",
    text: "Access practical policies, procedures and operational templates designed to help providers strengthen their systems and maintain compliance readiness.",
    price: "COMING SOON",
    cta: "View Templates",
  },
  {
    number: "03",
    type: "ADVISORY CONSULTATION",
    title: "RS Assurance Advisory Support",
    text: "Work directly with RS Assurance Group to identify gaps, strengthen systems and develop a clearer pathway forward.",
    price: "BOOK CONSULTATION",
    cta: "Start Conversation",
  },
];

export default function Resources() {
  return (
    <Page
      eyebrow="INSIGHTS & RESOURCES"
      title={
        <>
          Practical tools
          <br />
          for stronger
          <br />
          organisations.
        </>
      }
      description="Access frameworks, guides and operational resources designed to help organisations improve compliance, governance and long-term capability."
    >

      {/* FEATURED RESOURCE */}

      <section className="mt-32 md:mt-40">

        <div
          className="
            grid
            gap-12
            rounded-[32px]
            bg-[#08142E]
            p-10
            text-white
            md:p-16
            lg:grid-cols-[1fr_320px]
            lg:items-center
          "
        >

          <div>

            <p className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.4em]
              text-[#D6A03A]
            ">
              FEATURED RESOURCE
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
              Build capability
              <br />
              before challenges arrive.
            </h2>


            <p className="
              mt-8
              translate-y-4
              max-w-xl
              text-base
              leading-8
              text-slate-300
              md:text-lg
            ">
              Download practical guidance designed to help organisations
              understand registration requirements, evidence expectations and
              preparation steps.
            </p>


           <button
  className="
    mt-10
    inline-flex
    items-center
    rounded-full
    bg-white
    px-8
    py-4
    text-xs
    font-bold
    uppercase
    tracking-[0.25em]
    text-[#08142E]
    transition
    hover:bg-[#D6A03A]
  "
>
  Get Your Free Guide →
</button>

          </div>



          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-8
            "
          >

            <p className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#D6A03A]
            ">
              FREE DOWNLOAD
            </p>


            <h3 className="
              mt-6
              text-3xl
              font-black
              leading-tight
            ">
              NDIS Registration
              <br />
              Readiness Guide
            </h3>


            <p className="
              mt-6
              text-sm
              leading-7
              text-slate-300
            ">
              A practical starting point for providers preparing for their
              registration journey.
            </p>


          </div>


        </div>

      </section>



      {/* RESOURCES */}

      <section className="mt-24 md:mt-32">

<Container>

  <div className="border-t border-slate-200">

    {resources.map((resource) => (

      <div
        key={resource.number}
        className="
          grid
          gap-8
          border-b
          border-slate-200
          py-14
          md:grid-cols-[80px_1fr]
          lg:grid-cols-[120px_1fr_180px]
          lg:items-start
        "
      >

        {/* NUMBER */}

        <span
          className="
            text-sm
            font-black
            tracking-[0.25em]
            text-[#D6A03A]
          "
        >
          {resource.number}
        </span>



        {/* CONTENT */}

        <div>

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#2E5FA7]
            "
          >
            {resource.type}
          </p>


          <h3
            className="
              mt-5
              text-3xl
              font-black
              leading-tight
              tracking-[-0.05em]
              text-[#08142E]
              md:text-4xl
            "
          >
            {resource.title}
          </h3>


          <p
            className="
              mt-5
              max-w-3xl
              text-base
              leading-8
              text-slate-600
              md:text-lg
            "
          >
            {resource.text}
          </p>


        </div>



        {/* RIGHT SIDE */}

        <div
          className="
            flex
            flex-col
            items-start
            lg:items-end
          "
        >

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#D6A03A]
            "
          >
            {resource.price}
          </p>


         <button
  className="
    mt-8
    inline-flex
    items-center
    rounded-full
    border
    border-[#08142E]
    px-6
    py-3
    text-xs
    font-bold
    uppercase
    tracking-[0.25em]
    text-[#08142E]
    transition
    hover:bg-[#08142E]
    hover:text-white
  "
>
  {resource.cta} →
</button>


        </div>


      </div>

    ))}

  </div>
  </Container>

</section>



{/* CONSULTATION CTA */}

<section className="mt-32">

<Container>

  <div
          className="
            rounded-[32px]
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
            NEED TAILORED SUPPORT?
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
            Build stronger systems
            <br />
            with expert guidance.
          </h2>


          <p className="
            mt-8
            translate-y-4
            max-w-xl
            text-lg
            leading-8
            text-slate-300
          ">
            From registration readiness to audit preparation,
            RS Assurance Group helps organisations strengthen their
            governance, compliance and operational foundations.
          </p>


          <button
 className="
   mt-10
   inline-flex
   items-center
   rounded-full
   bg-white
   px-8
   py-4
   text-xs
   font-bold
   uppercase
   tracking-[0.25em]
   text-[#08142E]
   transition
   hover:bg-[#D6A03A]
 "
>
 Book Consultation →
</button>


  </div>

</Container>

</section>


    </Page>
  );
}