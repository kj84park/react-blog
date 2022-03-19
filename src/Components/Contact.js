import React, {Component} from "react";
import {Fade, Slide} from "react-reveal";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterFollowButton,
    TwitterHashtagButton,
    TwitterMentionButton,
    TwitterTweetEmbed,
    TwitterMomentShare,
    TwitterDMButton,
    TwitterVideoEmbed,
    TwitterOnAirButton
} from 'react-twitter-embed';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

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
                        {/*<div className="two columns header-col">*/}
                        {/*    <h1>*/}
                        {/*        <span>Get In Touch.</span>*/}
                        {/*    </h1>*/}
                        {/*</div>*/}

                        {/*<div className="ten columns">*/}
                        {/*    <p className="lead">{message}</p>*/}
                        {/*</div>*/}
                    </div>
                </Fade>

                <div className="row">
                    <Slide left duration={1000}>
                        <div className="eight columns">
                            <h4 className="widget-title">Videos related to my work</h4>
                            <LiteYouTubeEmbed
                                id="f46N8-T0Jmw"
                                title="Video: APAC 2021: Open Source LINE FIDO2 Server Overview"
                            />
                            <h4 className="widget-title"> </h4>
                            <LiteYouTubeEmbed
                                id="JRu6IVSPEzE"
                                title="Open source contribution Starting with LINE FIDO2 Server"
                            />
                            <h4 className="widget-title">YOUNGGAM-TV</h4>
                            <LiteYouTubeEmbed
                                id="KYPk2LJRA7A"
                                params="&list=PLXYDdTyno5RCBoXcGz2zj0CQILoyVdIlT"
                                title="YOUNGGAM-TV"
                            />
                        </div>
                    </Slide>

                    <Slide right duration={1000}>
                        <aside className="four columns footer-widgets">
                            {/*<div className="widget widget_tweets">*/}
                            <h4 className="widget-title">Latest My Tweets</h4>
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="OwenKj00"
                                options={{height: 400}}
                            />
                            <h4 className="widget-title">Tweets related to me</h4>
                            <TwitterTweetEmbed
                                tweetId={'1462933919506989059'}
                            />
                            <TwitterTweetEmbed
                                tweetId={'1445640238697566219'}
                            />

                            {/*</div>*/}
                        </aside>
                    </Slide>
                </div>
            </section>
        );
    }
}

export default Contact;
