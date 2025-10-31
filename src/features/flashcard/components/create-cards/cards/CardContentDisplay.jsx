import Container from "/src/ui/Container";
import Card from "/src/components/Card";

export default function CardContentDisplay() {
  return (
    <Container adjust={true} classname={"px-6 grid grid-cols-4 gap-6"}>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </Container>
  );
}

function Cards() {
  return (
    <Card classname={"cursor-pointer"}>
      <h1 className="mb-6">Titile</h1>
      <div className="flex items-center justify-between">
        <p># card(s)</p>
        <p>timing</p>
      </div>
    </Card>
  );
}
