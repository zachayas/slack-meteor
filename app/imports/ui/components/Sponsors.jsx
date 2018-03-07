import React from 'react';
import { Image, Grid, Button } from 'semantic-ui-react';


export default class Sponsors extends React.Component {
  render() {
    const fstyle = { fontSize: '15px' };
    const bstyle = { marginBottom: '48px' };
    const src1 = 'https://a.slack-edge.com/c04e5/marketing/img/logos/company/airbnb.png';
    const src2 = 'https://a.slack-edge.com/c04e5/marketing/img/logos/company/capital_one.png';
    const src3 = 'https://a.slack-edge.com/c04e5/marketing/img/logos/company/harvard.png';
    const src4 = 'https://a.slack-edge.com/4b6fe/marketing/img/logos/company/los-angeles-times.png';
    const src5 = 'https://a.slack-edge.com/c04e5/marketing/img/logos/company/oracle.png';
    const src6 = 'https://a.slack-edge.com/c04e5/marketing/img/logos/company/ticketmaster.png';
    return (
        <div className='grey-background'>
          <Grid centered>
            <Grid.Row>
              <div className="medium-bold-text"> You&#39;re in good company</div>
            </Grid.Row>

            <Grid.Row>
              <p style={fstyle}>Millions of people around the world have
                already made Slack the place where their work happens.</p>
            </Grid.Row>

            <Grid.Row>
              <Button style={bstyle} size='big' basic> DISCOVER WHY</Button>
            </Grid.Row>

            <Grid celled='internally' centered style={bstyle}>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Image src={src1} centered/>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Image src={src2} centered/>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Image src={src3} centered/>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={bstyle}>
                <Grid.Column width={5}>
                  <Image src={src4} centered/>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Image src={src5} centered/>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Image src={src6} centered/>
                </Grid.Column>
              </Grid.Row>
            </Grid>

          </Grid>

        </div>

    );
  }
}
