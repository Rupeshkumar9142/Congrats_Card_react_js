const element = (
  // Write your code here.
  <div className="container">
    <h1 className="heading">Congratulations</h1>
    <div className="card">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="imgs"
        />
      </div>
      <div>
        <p>Kiran V</p>
        <p>Vishnu Institute of Computer Education and Technology, Bhimavaram</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="imgs"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
