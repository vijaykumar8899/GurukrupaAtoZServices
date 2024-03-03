import "../Styles/main.css";
import "../Styles/container.css";

function Container({ title = "", image = "", fontSize = "" }) {
  return (
    <div className="container">
      <img id="containerImage" src={image} alt="Your Image" />
      <br />
      <div className="text-container">
        <div className="text">
          <p>{title}</p>
          <p>Consultancy</p>
        </div>
        <br />
        <button id="pdfButton">Get Brochure</button>
      </div>
    </div>
  );
}

export default Container;
