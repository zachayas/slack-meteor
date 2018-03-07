import React from 'react';
import MiddleSection from '../components/MiddleSection';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';

export default class Slack extends React.Component {
  render() {
    return (
        <div>
          <MiddleSection/>
          <Sponsors/>
          <Footer/>
        </div>
    );
  }
}
