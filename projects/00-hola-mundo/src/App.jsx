import "./App.css";
import { TwitterFollowCard } from "./Components/TwitterFollowCard";

function App() {
  return (
    <section className="sectionCards">
      <TwitterFollowCard userName={"israeloxlaj"} name={"Israel Oxlaj"} />
      ;
      <TwitterFollowCard userName={"israeloxlaj"} name={"Israel Oxlaj"} />;
    </section>
  );
}
export default App;
