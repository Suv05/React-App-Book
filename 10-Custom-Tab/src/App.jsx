import CustomTabs from "./Components/CustomTabs";
function App() {
  const data = [
    {
      label: "Tab1",
      content:
        "1️⃣Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi evenietnemo vel. Quaerat ex eius perferendis, repellendus dolores voluptate praesentium ipsam nisi assumenda iure hic. Quasi necessitatibus ipsa voluptatibus",
    },
    {
      label: "Tab2",
      content:
        "2️⃣ipsa doloribus natus vero dolor saepe quibusdam tempore quae earum minus nostrum, ad libero dicta unde. Earum nesciunt ducimus, voluptates possimus enim veniam nulla eius rem laudantium cum laboriosam. Fugiat,adipisct?",
    },
    {
      label: "Tab3",
      content:
        "3️⃣Quasi cum consequatur omnis molestiae aperiam, non totam culpa veniam officiis sint reprehenderit in necessitatibus? Provident eos repellatrepudiandae saepe, excepturi molestiae tempora deleniti illum aperiam doloribus eligendi dolore, quia doloremque cupiditate! Ducimus deleniti ex placeat.",
    },
  ];

  return (
    <>
      <CustomTabs tabs={data} />
    </>
  );
}

export default App;
