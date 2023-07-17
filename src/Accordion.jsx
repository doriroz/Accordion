import Item from "./Item";
const Accordion = (props) => {
  return (
    <div className="accordion">
      {props.faqs.map((item, ind) => {
        return <Item key={ind} number={ind + 1} item={item} />;
      })}
    </div>
  );
};

export default Accordion;
