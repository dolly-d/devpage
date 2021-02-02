import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
      <div id="about">
        <div className="container">
          <div >
            <main className="grid">
              <img src="../img/me.jpg" width="50" alt="" />
              <img src="../img/me2.jpg" width="50" alt="" />
              <img src="../img/me3.jpg" width="50" alt="" />
              <div > </div>
            </main>
            <div >
              <div className="about-text">
                <p>
                  {this.props.data ? this.props.data.paragraph : "loading..."}
                </p>
                <h2>Tech Stack</h2>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data
                        ? this.props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data
                        ? this.props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default about
