import FaqAccordion from "./FaqAccordion/FaqAccordion";
import faq from "../../assets/faq.json";
import "./faq.scss";

export default function Faq() {
  return (
    <section className="faq-block">
      <div className="container">
        <h2 className="title">Frequently Asked Questions</h2>
        <div className="accordion">
          {faq.map((item) => (
            <FaqAccordion
              key={item.id}
              title={item.title}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
