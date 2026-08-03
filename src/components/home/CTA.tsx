import Container from "../layout/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

export default function CTA() {
  return (
    <section className="bg-[#08142E] py-32 text-white">

      <Container>

        <Reveal>

          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">


            <p className="text-center text-xs font-semibold uppercase tracking-[0.45em] text-[#D6A03A]">
  START A CONVERSATION
</p>



            <h2 className="
  mt-16
  mb-16
  text-4xl
  font-black
  leading-[0.95]
  tracking-[-0.06em]
  md:mt-24
  md:mb-24
  md:text-6xl
  lg:text-7xl
">

  Build confidence
  <br />
  before you
  <br />
  need it.

</h2>


<p className="mx-auto translate-y-4 max-w-xl text-lg leading-9 text-slate-300">

  Whether you are preparing for registration, strengthening
  governance or improving operational performance, we help
  organisations build foundations that last.

</p>



            <div className="
  mt-12
  flex
  flex-col
  justify-center
  gap-4
  sm:flex-row
  sm:gap-5
">


              <Button>
                Book a Consultation
              </Button>



              <Button
                variant="secondary"
                to="/contact"
              >
                Contact Us
              </Button>


            </div>


          </div>


        </Reveal>


      </Container>


    </section>
  );
}