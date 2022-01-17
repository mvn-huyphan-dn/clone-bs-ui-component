import { useEffect, useRef } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function AccordionItem({
  children,
  title,
  active,
  onToggle,
  className,
  defaultState,
  handleToggle,
}) {
  const content = useRef();

  useEffect(() => {
    if (defaultState) handleToggle(title);
  }, []); //eslint-disable-line

  return (
    <div className={`accordion-item ${className ? className : ""}`}>
      <div className="accordion-header" onClick={() => onToggle()}>
        <button className={`accordion-title ${active ? "active" : ""}`}>
          {title}
          <span className="accordion-icon">
            {active ? <BsChevronUp /> : <BsChevronDown />}
          </span>
        </button>
      </div>
      <div
        className="accordion-content__wrapper"
        ref={content}
        style={
          active ? { height: content.current.scrollHeight } : { height: "0px" }
        }
      >
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
}
