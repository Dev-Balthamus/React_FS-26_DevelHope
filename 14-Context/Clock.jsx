import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const language = useContext(LanguageContext);

  return (
    <h2>
      {language === "it" ? "Ora corrente: " : "Current time: "} {date.toLocaleTimeString()}
    </h2>
  );
}
