import "../Styles/main.css";
import "../Styles/container.css";

function Container({ title = "" }) {
  return (
    <div className="container">
      <img id="containerImage" src="../assets/img1.png" alt="Your Image" />
      <br />
      <div className="text-container">
        <p>{title}</p>
        <p>Consultancy</p>
        <br />
        <button id="pdfButton">Get Brochure</button>
      </div>
    </div>
  );
}

export default Container;
