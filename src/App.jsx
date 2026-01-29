import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Main from "./components/main";
import Todos from "./components/todos";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  }
];

export default function App() {
  return (
    <div>
      <Navbar brandName="Test" links={links}/>
      <Main />
      <Todos />
      <Footer />
    </div>
  );
}

// export const name = "Aniket";
// export const age = 2;

// export default App;

// export { name, age }