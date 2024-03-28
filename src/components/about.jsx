import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div >
        <section className="colorlib-about" data-section="about" >
        <div className="colorlib-narrow-content">
            <div className="row" >
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h1 className="colorlib-heading">Who Am I?</h1>
                    <p>I am Omkar Dharkar currently living in Vapi,India. I work at Amplify Tech. as a Application Developer and
                    I am passionate about creating applications that are fun and exciting to work on.
                     I love exploring new technologies and often amazed by the progress we as a human species have mad so far in the recent years.

                     </p>
                    <p>I am a creative wierdo who likes to think outside the box solutions for any given problem.
                    I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease.
                    I believe that a person should work on developing their professional skills and learning new things all the time.
                     Currently, I am looking for new career opportunities my current job position cannot provide.
                    Apart from that I am easy to communicate and passionate about the things I do. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Android Applications</h3>
                    <p>Coming from the Developers background, I have good grasp over fundamental concepts of Java and Android </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Cloud Computing</h3>
                    <p>I pursued my internship as Cloud Engineer at Amplify Technologies and worked on Code Compiler, MERN</p>
                </div>
                </div>
            </div>


            </div>
        </div>
        </section>
      </div>
    )
  }
}
