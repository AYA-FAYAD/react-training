import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      id: "dd12332",
      label: "hi can you help me",
      content: "yes what can i help you",
    },
    {
      id: "gegg123",
      label: "did you forget me",
      content: "yes what can i help you",
    },
    {
      id: "fsff2",
      label: "thank you",
      content: "yes what can i help you",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
