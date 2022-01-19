export default function Badge({ className, children }) {
  return <span className={`badge ${className} txt-center`}>{children}</span>;
}
