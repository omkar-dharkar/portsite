import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div style={{backgroundImage: 'url(images/bg3.jpg)'}}>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2>Timeline</h2>
              </div>
            </div>
            <div className="row"  >
              <div className="col-md-12">
                <div className="timeline-centered">

                {/* <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-1">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Working as Web Developer at CodeSmart  <span>Jan 2020 - Present</span></h2>
                      <p>I recently have joined CodeSmart as Web Developer right after my graduation was completed.
                      Here I worked on range of projects in web development using Html, Css, Javascript, React and Google firebase.</p>
                    </div>
                  </div>
                </article> */}

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship as Web Developer at Amplify Technologies <span>Dec 2023</span></h2>
                        <p>I joined the Amplify Technologies as cloud engineer.
                      Major part of my work was to test and update exciting apps and create design and flows for their new and upcomming apps. </p>
                      </div>
                    </div>
                  </article>
                  {/* <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Post Graduate Diploma in Mobile Application <span>2018-2020</span></h2>
                        <p>I have completed my PGD in Mobile Applications with major subjects like Android gaming ,IOS gaming.
                        During my semesters I have worked numerous short applications starting with web and moving forward towards Android and IOS Development.
                        I also got chance to learn new technologies spritekit and arkit while working on my Trem Projects. </p>
                      </div>
                    </div>
                  </article> */}

                  {/* <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Masters In computer Applicatons <span>2015 - 2017</span></h2>
                        <p>I have completed my Masters in Computer Applications with major subjects as android and python.
                        During my semesters, I worked on number of projects in web and Android. I was also introduced to the concept of mobile app development using Android and java.</p>
                      </div>
                    </div>
                  </article> */}

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bacholers in Computer Applications <span>2021-2021</span></h2>
                        <p>I have completed my Becholers in Computer applications with major in web development. During my semisters, I was introduced with basic concepts of programming and database management.
                        I developed interest in solving problems using fundamentals of programing languages which helped me to improve my understanding of different programming languages and also my programming skills.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
