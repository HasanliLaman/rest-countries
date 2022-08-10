import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (configParams) => {
  const [res, setRes] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataUsingAxios(configParams);
  }, [configParams]);

  const fetchDataUsingAxios = async () => {
    await axios
      .request(configParams)
      .then((res) => setRes(res))
      .catch((err) => setErr(err))
      .finally(() => setLoading(false));
  };

  return [res, loading, err];
};
export default useAxios;
