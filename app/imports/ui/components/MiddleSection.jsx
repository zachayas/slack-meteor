import React from 'react';
import { Container, Image, Button, Grid } from 'semantic-ui-react';

export default class MiddleSection extends React.Component {
  render() {
    const src1 = 'https://a.slack-edge.com/52353/marketing/img/home/home_illo.png';
    const gstyle = { height: '700px' };
    const tstyle = { paddingTop: '20px', paddingBottom: '90px' };
    return (
        <Container>
          <Grid columns={2} style={gstyle} verticalAlign="middle" centered>
            <Grid.Row>

              <Grid.Column>
                <Image src={src1} size='large'/>
              </Grid.Column>
              <Grid.Column>
                <div className="big-bold-text"> Where Work<br/> Happens</div>
                <div className="big-text">When your team needs to kick off a
                  project, hire a new employee, deploy some code, review a sales
                  contract, finalize next year&#39;s budget, measure an A/B test,
                  plan your next office opening, and more, Slack has you covered.</div>
                <Button size='big' >
                  Get Started
                </Button>
                <div style={tstyle}>Already using Slack? <a>Sign In.</a></div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}
