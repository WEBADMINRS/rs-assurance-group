import Page from "../components/layout/Page";
import Container from "../components/layout/Container";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "NDIS Registration Advisory",
    subtitle: "From intention to approval.",
    text: "Guiding organisations through the complexities of NDIS registration by clarifying requirements, identifying preparation priorities and establishing a structured pathway towards submission.",
  },
  {
    number: "02",
    title: "Audit & Regulatory Advisory",
    subtitle: "Clarity when it matters most.",
    text: "Helping providers navigate regulatory expectations through evidence reviews, compliance mapping and practical recommendations that address operational gaps.",
  },
  {
    number: "03",
    title: "Governance Advisory",
    subtitle: "Leadership supported by structure.",
    text: "Designing governance approaches that improve accountability, decision-making and organisational oversight across growing service providers.",
  },
  {
    number: "04",
    title: "Operational Improvement",
    subtitle: "Turning complexity into consistency.",
    text: "Reviewing internal processes, workflows and documentation to create more efficient operations that support quality service delivery.",
  },
];

export default function Services() {
  return (
    <Page
      eyebrow="OUR SERVICES"
title={
  <>
    Advisory solutions
    <br />
    for organisations
    <br />
    navigating complexity.
  </>
}
      description="RS Assurance Group helps organisations strengthen governance, compliance and operational systems through practical advisory support designed for long-term capability."
    >

   <section
  className="
    mt-32
    border-t
    border-slate-200
    md:mt-40
  "
>

<Container>

  {services.map((service) => (

          <div
            key={service.number}
            className="
              group
              grid
              gap-8
              border-b
              border-slate-200
              py-16
              transition-all
              duration-300
              md:py-20
              lg:grid-cols-[80px_1fr_1fr]
              lg:gap-12
              
            "
          >

            <div>

              <span
                className="
                  text-sm
                  font-black
                  tracking-[0.3em]
                  text-[#D6A03A]
                "
              >
                {service.number}
              </span>

            </div>



            <div>

              <h3
                className="
                  translate-y-4
                  text-4xl
                  font-black
                  leading-none
                  tracking-[-0.06em]
                  text-[#08142E]
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                  md:text-5xl
                "
              >
                {service.title}
              </h3>


              <p
                className="
                translate-y-4
                  mt-5
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-slate-400
                "
              >
                {service.subtitle}
              </p>


            </div>



            <div
              className="
                flex
                items-center
                justify-between
                gap-8
              "
            >

              <p
                className="
                  max-w-xl
                  text-base
                  leading-8
                  text-slate-600
                  md:text-lg
                "
              >
                {service.text}
              </p>


              <span
                className="
                  hidden
                  text-2xl
                  text-[#D6A03A]
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                  lg:block
                "
              >
                →
              </span>


            </div>


          </div>

        ))}
       
        </Container>

      </section>



      <section
        className="
          mt-32
          overflow-hidden
          rounded-[36px]
          bg-[#08142E]
          p-10
          text-white
          md:mt-40
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
  OUR APPROACH
</p>


<h2
  className="
    mt-10
    max-w-4xl
    text-5xl
    font-black
    leading-[0.95]
    tracking-[-0.07em]
    md:text-6xl
  "
>
  A structured approach
  <br />
  to organisational improvement.
</h2>


<div
  className="
    mt-12
    grid
    gap-10
    md:grid-cols-3
  "
>

  <div>
   <p
  className="
    text-lg
    font-black
    tracking-[0.2em]
    text-[#D6A03A]
  "
>
  01
</p>

    <h3
  className="
    mt-4
    text-2xl
    font-black
    tracking-[-0.03em]
    text-white
    md:text-3xl
  "
>
  Assess
</h3>

    <p
  className="
    mt-4
    text-base
    leading-7
    text-slate-300
  "
>
      Understand current structures, processes and operational challenges.
    </p>
  </div>


  <div>
     <p
  className="
    text-lg
    font-black
    tracking-[0.2em]
    text-[#D6A03A]
  "
>
  02
</p>

      <h3
  className="
    mt-4
    text-2xl
    font-black
    tracking-[-0.03em]
    text-white
    md:text-3xl
  "
>
  Strengthen
</h3>

        <p
  className="
    mt-4
    text-base
    leading-7
    text-slate-300
  "
  >
      Develop practical improvements aligned with organisational needs.
    </p>
  </div>


  <div>
       <p
  className="
    text-lg
    font-black
    tracking-[0.2em]
    text-[#D6A03A]
  "
>
      03
    </p>

      <h3
  className="
    mt-4
    text-2xl
    font-black
    tracking-[-0.03em]
    text-white
    md:text-3xl
  "
>
      Maintain
    </h3>

        <p
  className="
    mt-4
    text-base
    leading-7
    text-slate-300
  "
  >
      Establish practices that support ongoing operational discipline.
    </p>
  </div>

</div>


      </section>
      <section className="mt-16 md:mt-20">

 <div
    className="
      rounded-[36px]
      bg-[#08142E]
      p-10
      text-white
      md:p-14
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
      START A CONVERSATION
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
  Let's discuss  
  <br />
  your organisation's
  <br />
  next steps.
</h2>


<p
  className="
    translate-y-4
    mt-8
    max-w-xl
    text-lg
    leading-8
    text-slate-300
  "
>
  Whether you are preparing for registration,
  reviewing compliance requirements or improving operations,
  our advisory team can help identify the next steps.
</p>


<Link
  to="/booking"
  className="
    mt-10
    inline-flex
    rounded-full
    bg-white
    px-8
    py-4
    text-xs
    font-bold
    uppercase
    tracking-[0.25em]
    text-[#08142E]
    transition-all
    duration-300
    hover:bg-[#D6A03A]
hover:text-[#08142E]
  "
>
  Book Advisory Conversation →
</Link>

  </div>

</section>


    </Page>
  );
}