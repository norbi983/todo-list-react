import "./style.css";

const Section = ({ tittle, body, extraHeaderContent }) => (
    <section className="section">
        <header className="section__header">
            <h3 className="section__tittle">{tittle}</h3>
          {extraHeaderContent}
        </header>
        <div className="section__content">
          {body} 
        </div>
      </section>
);

export default Section;