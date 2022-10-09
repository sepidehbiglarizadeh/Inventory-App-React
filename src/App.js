import Category from "./components/Category";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <div className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-2">
            <Category/>
        </div>
      </div>
    </>
  );
};

export default App;
