import React, { useEffect, useState } from "react";
import "./style/style.scss";
import axios from "axios";

const App = () => {
  const [quote, setQuote] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const getQuotesFromApi = async () => {
    try {
      const allQuotes = await axios.get("https://api.quotable.io/random");
      setQuote(allQuotes.data.content);
      setAuthor(allQuotes.data.author);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuotesFromApi();
  }, []);

  return (
    <div className="app">
      <div className="content__wrapper">
        <div className="quote_wrapper">
          <p className="quote__content">'{quote}'</p>
          <p className="quote__author">{author}</p>
        </div>
        <div className="quote__button" onClick={getQuotesFromApi}>
          {" "}
          New quote
        </div>
      </div>
    </div>
  );
};

export default App;
