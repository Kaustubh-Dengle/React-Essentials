const readDescriptions = ["Fundamental", "Crucial", "Core"];
import "./Header.css"
import reactImage from "../../src/assets/react-core-concepts.png"

function genRandomDesc(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {

  const description = readDescriptions[genRandomDesc(2)];

  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}