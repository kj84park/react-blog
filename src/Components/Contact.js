import React, {Component} from "react";
import {Fade, Slide} from "react-reveal";

class Contact extends Component {
    render() {
        if (!this.props.data) return null;

        const name = this.props.data.name;
        const street = this.props.data.address.street;
        const city = this.props.data.address.city;
        const state = this.props.data.address.state;
        const zip = this.props.data.address.zip;
        const phone = this.props.data.phone;
        const message = this.props.data.contactmessage;

        return (
            <section id="contact">
                <Fade bottom duration={1000}>
                    <div className="row section-head">
                        <div className="two columns header-col">
                            <h1>
                                <span>Get In Touch.</span>
                            </h1>
                        </div>

                        <div className="ten columns">
                            <p className="lead">{message}</p>
                        </div>
                    </div>
                </Fade>

                <div className="row">
                    <Slide left duration={1000}>
                        <div className="eight columns">
                            <form action="" method="post" id="contactForm" name="contactForm">
                                <fieldset>
                                    <div>
                                        <label htmlFor="contactName">
                                            Name <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue=""
                                            size="35"
                                            id="contactName"
                                            name="contactName"
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contactEmail">
                                            Email <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue=""
                                            size="35"
                                            id="contactEmail"
                                            name="contactEmail"
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contactSubject">Subject</label>
                                        <input
                                            type="text"
                                            defaultValue=""
                                            size="35"
                                            id="contactSubject"
                                            name="contactSubject"
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contactMessage">
                                            Message <span className="required">*</span>
                                        </label>
                                        <textarea
                                            cols="50"
                                            rows="15"
                                            id="contactMessage"
                                            name="contactMessage"
                                        ></textarea>
                                    </div>

                                    <div>
                                        <button className="submit">Submit</button>
                                        <span id="image-loader">
                      <img alt="" src="images/loader.gif"/>
                    </span>
                                    </div>
                                </fieldset>
                            </form>

                            <div id="message-warning"> Error boy</div>
                            <div id="message-success">
                                <i className="fa fa-check"></i>Your message was sent, thank you!
                                <br/>
                            </div>
                        </div>
                    </Slide>

                    <Slide right duration={1000}>
                        <aside className="four columns footer-widgets">
                            <div className="widget widget_tweets">
                                <h4 className="widget-title">Latest Tweets</h4>
                                <ul id="twitter">
                                    <li>
                                        <a className="twitter-timeline"
                                           href="https://twitter.com/OwenKj00?ref_src=twsrc%5Etfw">Tweets by
                                            OwenKj00</a>
                                        <script
                                            async src="https://platform.twitter.com/widgets.js"
                                            charSet="utf-8"></script>
                                    </li>
                                    <li>

                                        <a href="https://twitter.com/intent/tweet?screen_name=OwenKj00&ref_src=twsrc%5Etfw"
                                           className="twitter-mention-button" data-show-count="false">Tweet to
                                            @OwenKj00</a>
                                        <script async
                                                src="https://platform.twitter.com/widgets.js"
                                                charSet="utf-8"></script>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </Slide>
                </div>
            </section>
        );
    }
}

export default Contact;
