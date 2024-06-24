import { useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [input, setInput] = useState("");
  const [qrCode, setQrcode] = useState("");

  const handleSetQrcode = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    setQrcode(input);
    setInput("");
  };

  return (
    <div className="container">
      <div className="input-group mb-3 mt-5 mx-4">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="form-control"
          placeholder="Enter Your Name"
        />
        <button
          className="btn btn-outline-info btn-lg"
          type="button"
          id="button-addon1"
          disabled={!input.trim()}
          onClick={handleSetQrcode}
        >
          Generate
        </button>
      </div>
      {qrCode && (
        <div className="text-center mt-4">
          <QRCode size={400} bgColor="#4B70F5" value={qrCode} />
        </div>
      )}
    </div>
  );
}

export default App;
