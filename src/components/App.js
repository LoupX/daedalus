import React, { Fragment } from 'react';
import '../css/index.css';

class App extends React.Component {

  pause = (e) => {
    //Setting "video" and "playCtrl" each time here 'cause I didn´t make
    //it work using "componentDidMount"
    let video = document.getElementById("videoLoop");
    let playCtrl = document.getElementById("btnPause");

    if (video.paused) {
      video.play();
      playCtrl.innerHTML = "⏸";
    }
    else {
      video.pause();
      playCtrl.innerHTML = "▶️";
    }
  }

  resume = () => {
    console.log("resume")
  }

  render() {
    return (
      <Fragment>

        <div className="container-fluid">
        <h3 className="center">Hello World!!!</h3>
          <div className="embed-responsive embed-responsive-1by1">
            <video className="embed-responsive-item" autoPlay={false} loop={false} id="videoLoop">
            <source src="video/nyanCat.mp4" type="video/mp4" />
            Your browser does not support HTML5 video 😥
            </video>
          </div>
          <p>
            I've not yet found that fantastic topic to create my full page, meanwhile you can send me an e-mail to
          <a href="mailto:hi@josevargas.online?Subject=Contact%20from%20your%20site"
              target="_top"> hi@josevargas.online</a>.
        </p>
          <button className="btn" id="btnPause" onClick={this.pause}> ⏸ </button>
          <button className="btn" id="btnResume" onClick={this.resume}>
            <button type="button" class="btn btn-primary">Primary</button>
            Go to my Resume
        </button>
        </div>

      </Fragment>
    )
  }
}

export default App;
