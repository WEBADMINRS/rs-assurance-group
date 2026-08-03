import Page from "../components/layout/Page";
import Founder from "../components/about/Founder";
import Philosophy from "../components/about/Philosophy";

export default function About() {
  return (
    <Page
      eyebrow="ABOUT RS ASSURANCE GROUP"

title={
  <>
    Building confidence
    <br />
    through disciplined
    <br />
    advisory.
  </>
}

description="RS Assurance Group supports organisations through governance, compliance and operational improvement, helping leaders establish stronger foundations for sustainable performance."
    >

      <Philosophy />

<Founder />

    </Page>
    
  );
}