import { AiOutlineClose } from "react-icons/ai";

export default function Alert({ className, children, closeButton }) {
  return (
    <div className={`alert ${className} flex align-item-center`}>
      {children}
      {closeButton && (
        <span className="close-button flex align-item-center">
          <AiOutlineClose />
        </span>
      )}
    </div>
  );
}
