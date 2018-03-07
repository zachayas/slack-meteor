import React from 'react';
import { Container, Image, Grid, List } from 'semantic-ui-react';


export default class Footer extends React.Component {
  render() {
    const src1 = 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png';
    const pstyle = { paddingTop: '80px', marginRight: '50px' };
    const small = { width: '60px', height: '60px' };
    return (
        <div className="white-background">
          <Container>
            <Grid columns={5} padded>
              <Grid.Column width={3} style={pstyle}>
                <Image src={src1} style={small} />
              </Grid.Column>

              <Grid.Column width={2} style={pstyle}>
                <h3>Company</h3>
                <List>
                  <List.Item>About Us</List.Item>
                  <List.Item>Careers</List.Item>
                  <List.Item>Blog</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={2} style={pstyle}>
                <h3>Product</h3>
                <List>
                  <List.Item>Why Slack?</List.Item>
                  <List.Item>Enterprise</List.Item>
                  <List.Item>Security</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={2} style={pstyle}>
                <h3>Resources</h3>
                <List>
                  <List.Item>Download</List.Item>
                  <List.Item>Help Center</List.Item>
                  <List.Item>Guides</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={2} style={pstyle}>
                <h3>Extras</h3>
                <List>
                  <List.Item>Podcast</List.Item>
                  <List.Item>Slack Shop</List.Item>
                  <List.Item>Slack Fund</List.Item>
                </List>
              </Grid.Column>

            </Grid>
          </Container>
        </div>
    );
  }
}
