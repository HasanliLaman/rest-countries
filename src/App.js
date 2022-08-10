import Navbar from "./components/Navbar/Navbar";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import { useMemo, useState } from "react";
import useAxios from "./hooks/useAxios";

function App() {
  const params = useMemo(() => {
    return {
      url: "https://restcountries.com/v3.1/all",
      method: "get",
      body: {},
      headers: {},
    };
  }, []);

  const [countries, loading] = useAxios(params);

  const [isDark, setIsDark] = useState(false);

  const getBorders = function (el) {
    const element = countries.data.find((el2) => {
      return el2.cca3 === el;
    });
    return element.name.common;
  };

  return (
    <div className={isDark ? "theme-dark" : "theme-light"}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Routes>
        <Route path="/" element={<Main />} />
        {!loading &&
          countries.data.map((el) => (
            <Route
              path={el.name.common.replace(/\s/g, "")}
              key={el.name.common}
              element={<Detail el={el} getBorders={getBorders} />}
            />
          ))}
      </Routes>
    </div>
  );
}

export default App;
