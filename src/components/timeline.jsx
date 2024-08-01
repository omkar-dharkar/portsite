import React, { Component } from 'react';

export default class Timeline extends Component {
  render() {
    return (
      <div style={{ backgroundImage: 'url(images/bg3.jpg)' }}>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Highlights</span>
                <h2>Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full Stack Developer at Vibhu Chem Private Limited <span>Jun 2024 - Present</span></h2>
                        <p>I started working as a Full Stack Developer at Vibhu Chem Private Limited from June 26, 2024. My role involves developing and maintaining both the front-end and back-end of web applications. I work with a range of technologies, including HTML, CSS, JavaScript, React, Node.js, and various databases. My contributions have streamlined processes, enhanced user experiences, and improved overall system efficiency.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship as Web Developer at Amplify Technologies <span>Dec 2023</span></h2>
                        <p>I joined Amplify Technologies as a Cloud Engineer. My responsibilities included testing and updating existing apps and creating designs and workflows for new and upcoming applications.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelor's in Computer Applications <span>2021-2021</span></h2>
                        <p>I completed my Bachelor's in Computer Applications with a major in web development. During my semesters, I was introduced to the basics of programming and database management. I developed a strong interest in solving problems using programming fundamentals, which helped me improve my understanding of various programming languages and enhance my coding skills.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
