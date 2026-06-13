export default function List({children, classname, ...rest}) {
  return (
    <li className={classname} {...rest}>{children}</li>
  )
}
