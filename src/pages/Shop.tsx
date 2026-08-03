import Page from "../components/layout/Page";
import Container from "../components/layout/Container";

const products = [
  {
    number: "01",
    category: "REGISTRATION TOOLKIT",
    title: "NDIS Registration Readiness Toolkit",
    price: "$299 AUD",
text: "A structured preparation system helping organisations understand expectations, organise evidence and approach the registration process with confidence.",    cta: "Purchase Toolkit",
  },
  {
    number: "02",
    category: "COMPLIANCE RESOURCES",
    title: "Provider Compliance Framework",
    price: "$499 AUD",
text: "A collection of operational templates and governance tools designed to strengthen internal systems and support ongoing compliance readiness.",    cta: "Purchase Framework",
  },
  {
    number: "03",
    category: "AUDIT PREPARATION",
    title: "Audit Preparation Framework",
    price: "$199 AUD",
text: "A practical review system designed to help organisations evaluate evidence, identify gaps and prepare for external assessment.",    cta: "Purchase Framework",
  },
];

export default function Shop() {
  return (
    <Page
      eyebrow="RESOURCE SHOP"
      title={
        <>
          Practical tools
          <br />
          for organisations
          <br />
          building capability.
        </>
      }
      description="Structured templates, guides and operational resources designed to help organisations strengthen systems, improve readiness and build capability."
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
            RESOURCE COLLECTION
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
            Built for organisations
            <br />
            ready to strengthen.
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
           Access practical frameworks, templates and guidance designed to
help organisations improve preparation, consistency and operational
confidence.
          </p>


        </div>

            </section>


      {/* PRODUCTS */}

   <section className="mt-24 md:mt-32">

  <Container>

    <div className="border-t border-slate-200">

      {products.map((product) => (

            <div
              key={product.number}
              className="
                grid
                gap-8
                border-b
                border-slate-200
                py-14
                lg:grid-cols-[100px_1fr_200px]
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
                {product.number}
              </span>


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
                  {product.category}
                </p>


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
                  {product.title}
                </h3>


                <p
                  className="
                    mt-6
                    max-w-2xl
                    text-base
                    leading-8
                    text-slate-600
                  "
                >
                  {product.text}
                </p>


              </div>


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
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#D6A03A]
                  "
                >
                  {product.price}
                </p>


                <button
  className="
    mt-8
    rounded-xl
    bg-[#08142E]
    px-6
    py-3
    text-xs
    font-semibold
    uppercase
    tracking-[0.2em]
    text-white
    transition
    duration-300
    hover:bg-[#D6A03A]
    hover:text-[#08142E]
  "
>
  {product.cta} →
</button>


              </div>


            </div>

          ))}

        </div>

          </Container>

      </section>


    </Page>
  );
}