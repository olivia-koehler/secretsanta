import { useState } from "react";
import "./App.css";

const SECRET_CODE = "oliviaWinsSecretSanta";
function App() {
  const [inputText, setInputText] = useState("");
  const [giftDisplayed, setGiftDisplayed] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (ev) => {
    setInputText(ev.target.value);
    setIsError(false);
  };

  const handleSubmit = () => {
    if (inputText.toLowerCase() === SECRET_CODE.toLowerCase()) {
      setGiftDisplayed(true);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  return (
    <>
      <div className="title">Merry Christmas</div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            margin: 50,
          }}
        >
          <input
            onChange={handleChange}
            className="theCodeIsoliviaWinsSecretSanta"
            type="text"
            id="code"
            name="code"
            value={inputText}
            placeholder="Enter Secret Code to Access Gift..."
          />
          <input
            className="submit-button"
            type="button"
            value="Submit"
            onClick={handleSubmit}
          />
        </form>
        {isError ? (
          <div style={{ color: "red", fontWeight: 800, fontSize: "3rem" }}>
            !! WRONG ANSWER !!
          </div>
        ) : null}
        {giftDisplayed ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.prezzee.com/gift/open/5d335e7c-f0f7-4222-9110-29e2f96c7aaf/"
          >
            CLICK HERE FOR YOUR GIFT
          </a>
        ) : null}
      </div>
    </>
  );
}

export default App;
