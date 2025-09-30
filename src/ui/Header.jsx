export default function Header({children, classname}) {
  return (
    <header className={classname}>
      {children}
    </header>
  )
}
