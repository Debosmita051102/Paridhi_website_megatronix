
import React, { useEffect, useRef } from 'react';
import '../OurTeam/OurTeam.styled';

const TeamsCard = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const VanillaTilt = (function () {
      'use strict';

      class VanillaTilt {
        constructor(element, settings = {}) {
          if (!(element instanceof Node)) {
            throw ("Can't initialize VanillaTilt because " + element + " is not a Node.");
          }
          this.width = null;
          this.height = null;
          this.clientWidth = null;
          this.clientHeight = null;
          this.left = null;
          this.top = null;
          this.gammazero = null;
          this.betazero = null;
          this.lastgammazero = null;
          this.lastbetazero = null;
          this.transitionTimeout = null;
          this.updateCall = null;
          this.event = null;
          this.updateBind = this.update.bind(this);
          this.resetBind = this.reset.bind(this);
          this.element = element;
          this.settings = this.extendSettings(settings);
          this.reverse = this.settings.reverse ? -1 : 1;
          this.glare = VanillaTilt.isSettingTrue(this.settings.glare);
          this.glarePrerender = VanillaTilt.isSettingTrue(this.settings["glare-prerender"]);
          this.fullPageListening = VanillaTilt.isSettingTrue(this.settings["full-page-listening"]);
          this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);
          this.gyroscopeSamples = this.settings.gyroscopeSamples;
          this.elementListener = this.getElementListener();

          if (this.glare) {
            this.prepareGlare();
          }

          if (this.fullPageListening) {
            this.updateClientSize();
          }

          this.addEventListeners();
          this.updateInitialPosition();
        }
        // VanillaTilt methods...
      }

      if (typeof document !== "undefined") {
        /* expose the class to window */
        window.VanillaTilt = VanillaTilt;

        /**
         * Auto load
         */
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
      }

      return VanillaTilt;
    }());

    const vanillaTiltInstance = new VanillaTilt(cardRef.current, {
      reverse: true,
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.5
      // Add any other options you want to configure here
    });

    return () => {
      vanillaTiltInstance.destroy();
    };
  }, []);

  return (
    <section>
      <div
        ref={cardRef}
        className="card"
        data-tilt
        data-tilt-glare
        data-tilt-max-glare="0.8"
        data-tilt-scale="1.1"
      >
        <center>
          <img src="https://cdn.shopify.com/s/files/1/0162/2116/articles/Most_Stylish_Glasses_For_Men_300x300.jpg?v=1596724226" alt="image" />
          <h2>Someone Famous</h2>
          <p>
            A paragraph is a series of related sentences developing a central idea, called the topic. This is only a sample text. Lorem Ipsum Dolor Sit Amet.
          </p>
          <a href="#"><button style={{ background: '#4267B2' }}><i className="fa fa-facebook"></i></button></a>
          <a href="#"><button style={{ background: '#1DA1F2' }}><i className="fa fa-twitter"></i></button></a>
          <a href="#"><button style={{ background: '#e4405f' }}><i className="fa fa-instagram"></i></button></a>
          <a href="#"><button style={{ marginRight: 0, background: '#0e76a8' }}><i className="fa fa-linkedin"></i></button></a>
        </center>
      </div>
    </section>
  );
};

export default TeamsCard;
