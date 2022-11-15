import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import './memegenerator.css'
class Memegenerator extends React.Component { 
 
  state={
    topText:'',
    bottomText:'',
    allMemeImg:[],
    randomImg:''
  }
  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(content=>{
      // console.log(content)
      this.setState({
        allMemeImg: content.data.memes
      })
    })
  }
  handleChange=(e)=>{
    const {name,value}=e.target;
    this.setState({[name]:value})
  }
  handleSubmit = event => {
    event.preventDefault();
    const { allMemeImg } = this.state;
    // console.log(allMemeImg)
    const rand =
    allMemeImg[Math.floor(Math.random()
      * allMemeImg.length)]?.url;
    this.setState({
      randomImg: rand
    });
  };
 
 render()
 
 { return (
        <div>
          <h1> Meme generator by <span>Mahlil Mahee</span></h1>
         <form className='meme-form' onSubmit={this.handleSubmit}>
  <input
    type='text'
    name='topText'
    value={this.state.topText}
    onChange={this.handleChange}
    placeholder='Top Text' />
  <input
    type='text'
    name='bottomText'
    value={this.state.bottomText}
    onChange={this.handleChange}
    placeholder='Bottom Text'
  />
  <button type='submit'>Gen</button>
</form>
<br />
        <div className="meme">
          {/* // Only show the below elements when the image is ready to be displayed */}
          {this.state.randomImg === "" ? "" :
            <img src={this.state.randomImg} alt="meme" />}
          {this.state.randomImg === "" ? "" :
            <h2 className="top">{this.state.topText}</h2>}
          {this.state.randomImg === "" ? "" :
            <h2 className="bottom">{this.state.bottomText}</h2>}
        </div>
            
        </div>
    );
}

}





export default Memegenerator;