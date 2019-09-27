import React, { Component } from "react";


import Quote from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">My Travels</h1>
        </header>
        <Quote
          destination="Barcelona"
          country="Spain"
          distance="Far"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Barcelona_collage.JPG/280px-Barcelona_collage.JPG"
        />
        <Quote
          destination="Tokyo"
          country="Japan"
          distance="very far"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Tokyo_Montage_2015.jpg/280px-Tokyo_Montage_2015.jpg"
        />
      </div>
    );
  }
}

export default App;
