import "./Home.css";
import GoalsList from "./Goals/GoalsList";
import ValueList from "./ValueList/ValueList.js";
import JoinMessage from "/Users/franzluz/coding/volt/volt/src/components/JoinMessage";
import YellowBanner from "./YellowBanner.js";
function Home() {
  return (
    <div>
      <div className="container">
        <GoalsList />
      </div>
      <div className="container">
        <YellowBanner />
      </div>
      <div className="container">
        <ValueList />
      </div>
      <JoinMessage />
    </div>
  );
}

export default Home;
