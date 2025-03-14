import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Tabs from "./components/Tabs"

const App = () => {
  return (
    <section className="flex h-[100vh]">
      <Sidebar />
      <section className="flex flex-col w-full overflow-auto" >
        <Header />
        <Tabs />
      </section>
    </section>
  );
};

export default App;