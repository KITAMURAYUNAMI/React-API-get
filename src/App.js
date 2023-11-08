import "./styles.css";
import axios from "axios";
export default function App() {
  const onClickusers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((rez) => {
        console.log(rez.data);
      })
      .catch((err) => console.log(err)); //エラーが起きたときに発動する処理：この場合はエラーの内容を表示
  };

  const user1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/1").then((rez) => {
      console.log(rez.data);
    });
  };

  return (
    <div className="App">
      <button onClick={onClickusers}>users</button>
      <button onClick={user1}>id1user</button>
    </div>
  );
}
