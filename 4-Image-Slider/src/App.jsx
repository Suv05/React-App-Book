import Image from "./Components/Imageslider";
function App() {
  const url="picsum.photos/v2/list?page=1&limit=10"

  return (
    <>
      <Image url={url}></Image>
    </>
  );
}

export default App;
