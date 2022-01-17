import { useState } from "react";
import { AccordionItem } from "..";

export default function Accordion({
  children,
  className,
  allowMultipleOpens = false,
}) {
  const [openItem, setOpenItem] = useState({});

  const handleToggle = (title) => {
    const status = !!openItem[title];
    if (allowMultipleOpens) {
      setOpenItem({ ...openItem, [title]: !status });
    } else {
      setOpenItem({ [title]: !status });
    }
  };

  return (
    <div className={`accordion ${className ? className : ""}`}>
      {children.map((child, index) => {
        return (
          <AccordionItem
            key={index}
            onToggle={() => handleToggle(child.props.title)}
            title={child.props.title}
            active={!!openItem[child.props.title]}
            className={child.props.className}
            defaultState={child.props.active}
            handleToggle={handleToggle}
          >
            {child.props.children}
          </AccordionItem>
        );
      })}
    </div>
  );
}
