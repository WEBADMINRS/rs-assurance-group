import founder from "../../assets/founder.png";
import Container from "../layout/Container";

export default function Founder() {
  return (
    <section className="bg-[#FCFCFA] py-32">

      <Container>

        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">


          <div>

            <img
              src={founder}
              alt="Rriyan Salvator"
              className="
                aspect-[4/5]
                w-full
                rounded-[36px]
                object-cover
              "
            />

          </div>



          <div>


           <p
  className="
    text-xs
    font-semibold
    uppercase
    tracking-[0.45em]
    text-[#2E5FA7]
  "
>
  Meet The Founder
</p>



            <h2
              className="
              translate-y-4
                mt-12
                text-6xl
                font-black
                tracking-[-0.07em]
                leading-none
                text-[#08142E]
              "
            >
              Rriyan Salvator
            </h2>



            <p
              className="
              translate-y-4
                mt-12
                text-base
                uppercase
                tracking-[0.65em]
                text-slate-500
                font-semibold
              "
            >
              Founder & Director
            </p>



            <div
              className="
                mt-12
                h-px
                bg-slate-200
              "
            />



            <h3
              className="
              translate-y-5
                mt-10
                max-w-xl
                text-2xl
                font-semibold
                leading-snug
                tracking-[-0.03em]
                text-[#08142E]
              "
            >
             Helping leaders navigate complexity
            with clarity and direction.
            </h3>



            <div
              className="
                mt-10
                max-w-xl
              "
            >

             <p
  className="
    text-lg
    leading-9
    text-slate-600
  "
>
  RS Assurance Group was established to help organisations navigate the
complexities of governance, compliance and operational improvement.
Through a practical advisory approach, Rriyan works with leaders to
identify challenges, clarify priorities and develop strategies that
support sustainable organisational improvement.
</p>


            </div>



            <div
              className="
                mt-12
                grid
                grid-cols-3
                border-t
                border-slate-200
                pt-8
              "
            >

              <div>
                <p className="text-[15px] uppercase tracking-[0.5em] text-slate-400">
                  Focus
                </p>
                <p className="mt-3 font-semibold text-[#08142E]">
                  Advisory
                </p>
              </div>


              <div>
                <p className="text-[15px] uppercase tracking-[0.5em] text-slate-400">
                  Expertise
                </p>
                <p className="mt-3 font-semibold text-[#08142E]">
                  Governance
                </p>
              </div>


              <div>
                <p className="text-[15px] uppercase tracking-[0.5em] text-slate-400">
                  Approach
                </p>
                <p className="mt-3 font-semibold text-[#08142E]">
                  Practical Strategy
                </p>
              </div>


            </div>


          </div>


        </div>


      </Container>

    </section>
  );
}