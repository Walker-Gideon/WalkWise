import HeaderText from "/src/ui/HeaderText"
import Paragraph from "/src/ui/Paragraph"
import Header from "/src/ui/Header"

export default function InformationOnHeader() {
  return (
    <Header classname="middle:col-span-2 mb-8 text-left font-medium">
      <HeaderText classname="middle:text-6xl text-4xl font-bold">Why WalkWise?</HeaderText>
      <Paragraph type="sm" classname="py-1 text-slate-500">
        Forget last-minute cramming — learn the smarter way.
      </Paragraph>
      <Paragraph type="xl" classname="font-semibold">
        WalkWise isn’t just another study app. It’s your all-in-one learning
        assistant, built for real students facing real challenges.
      </Paragraph>
    </Header>
  )
}
