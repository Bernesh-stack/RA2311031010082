import { useEffect, useState } from "react";
import { fetchNotifications } from "../services/notifications";
import { getTopNotifications } from "../utils/priority";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const list = await fetchNotifications();
        const top = getTopNotifications(list);
        setData(top);
      } catch (err) {
        console.error("Error:", err);
      }
    };
    load();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Top Notifications</h2>

      {data.length === 0 && <p>Loading...</p>}

      {data.map((n) => (
        <div key={n.ID} style={{ marginBottom: "10px" }}>
          <b>{n.Type}</b> — {n.Message}
          <div>{n.Timestamp}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;