export function Td({ children, className = "" }) {
  return <td className={`p-5 ${className}`}>{children}</td>;
}
export function Th({ children, className = "" }) {
  return <th className={`p-5 ${className}`}>{children}</th>;
}
