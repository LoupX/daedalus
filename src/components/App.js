import React, { Fragment } from 'react';
import '../css/App.css';

class App extends React.Component{

pause = (e) => {
  //Setting "video" and "playCtrl" each time here 'cause I didn´t make
  //it work using "componentDidMount"
  let video = document.getElementById("videoLoop");
  let playCtrl = document.getElementById("btnPause");

  if (video.paused){
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

      <video autoPlay={true} loop={false} id="videoLoop">
        <source src="video/nyanCat.mp4" type="video/mp4" />
        Your browser does not support HTML5 video 😥
      </video>

      <div className="content">
        <h1>Hello!</h1>
        <p>
          I've not yet found that fantastic topic to create my full page, meanwhile you can send me an e-mail to
          <a href="mailto:hi@josevargas.online?Subject=Contact%20from%20your%20site"
            target="_top"> hi@josevargas.online</a>.
        </p>
        <button className="btn" id="btnPause" onClick={this.pause}> ⏸ </button>
        <button className="btn" id="btnResume" onClick={this.resume}>
          Go to my Resume
        </button>
      </div>

    </Fragment>
  )
}

}

export default App;
