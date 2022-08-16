import logo from "./logo.svg";
import "./App.css";
import Laptop from "./components/Laptop";

// this is a comment 

function App() {
  const laptops = [
    {
      type: "dell350",
      price: 500,
      name: "dell",
      imgsrc:
        "https://static.toiimg.com/thumb/resizemode-4,msid-72207604,imgsize-96766,width-720/72207604.jpg",
    },
    {
      type: "hp250",
      price: 330,
      name: "HP",
      imgsrc:
        "https://hk-media.apjonlinecdn.com/catalog/product/5/4/548B4PA_AB5-3_T1657856227.png",
    },
    {
      type: "Apel Mac",
      price: 1050,
      name: "Apel",
      imgsrc:
        "https://media.wired.com/photos/5fb2cc575c9914713ead03de/master/w_1920,c_limit/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg",
    },
  ];
  return (
    <div className="App">
      <form>
  <label>
  Enter The Name Of Laptop:
    <input type="text" name="name" />
  </label>
  <br></br>
  <label>
    Enter The Price Of Laptop:
    <input type="text" name="name" />
  </label>
  <br></br>
  <label>
    Enter The Color Of Laptop:
    <input type="text" name="name" />
  </label>
  <br></br>
  <button>Add a New Laptop</button>
</form>
      <Laptop
        type={laptops[0].type}
        price={laptops[0].price}
        name={laptops[0].name}
        src={laptops[0].imgsrc}
      ></Laptop>
      <Laptop
        type={laptops[1].type}
        price={laptops[1].price}
        name={laptops[1].name}
        src={laptops[1].imgsrc}
      ></Laptop>
      <Laptop
        type={laptops[2].type}
        price={laptops[2].price}
        name={laptops[2].name}
        src={laptops[2].imgsrc}
      ></Laptop>
      <button>change the background color</button>
    </div>
  );
}

export default App;