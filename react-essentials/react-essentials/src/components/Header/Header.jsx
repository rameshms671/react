import './Header.css';
import coreConceptsImage from '../../assets/react-core-concepts.png';

export default function Header(){
  const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

  function getRandomInt(max){
    return Math.floor(Math.random() * (max + 1));
  }

  return (
    <header className="header">
      <img src={coreConceptsImage} />
      <h1>React Essentials</h1>
      <p>{reactDescriptions[getRandomInt(2)]} React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
}