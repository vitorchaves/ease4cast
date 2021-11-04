import Layout from "../components/Layout";
import Work from "../components/Work";
import Waves from "../components/Waves";
import Contact from "../components/Contact";

export default function Home() {

  const speak = (msg) => {
    const sp = new SpeechSynthesisUtterance(msg);
    [sp.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(sp);
  }

  speak("Try it!");

  return (
    <Layout>
      <Work />
      <Waves />
      <Contact />
    </Layout>
  );
}
