import Header from "./Header";

export default function Heading({ children, classname }) {
  return <Header classname={classname}>{children}</Header>;
}
