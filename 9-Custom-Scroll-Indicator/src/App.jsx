import ScrollIndicator from "./Components/ScrollIndicator";

function App() {
  const url = "https://dummyjson.com/products?limit=80";

  return (
    <>
      <ScrollIndicator url={url} />
    </>
  );
}

export default App;
