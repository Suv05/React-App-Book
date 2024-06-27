import ModalSet from "./components/ModalSet";

function App() {
  let m = [
    {
      title: "Modal title",
      body: "Woo-hoo, you're reading this text in a modal!",
    },
  ];
  return (
    <>
      <ModalSet mod={m} />
    </>
  );
}

export default App;
