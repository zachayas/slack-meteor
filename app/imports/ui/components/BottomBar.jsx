import React from 'react';
import { Container, Menu, Dropdown, Icon } from 'semantic-ui-react';


const options = [
  { key: 'us', flag: 'us', text: 'English (US)', value: 1 },
  { key: 'jp', flag: 'jp', text: '日本語', value: 2 },
  { key: 'de', flag: 'de', text: 'Deutsch', value: 3 },
];

export default class BottomBar extends React.Component {
  state = { value: 1 }
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state;
    return (
        <div className = 'grey-background'>
         <Menu borderless className="bottom">
          <Container>
            <Menu.Item>Status</Menu.Item>
            <Menu.Item>Privacy & Terms</Menu.Item>
            <Menu.Item>Contact Us</Menu.Item>
            <Menu.Menu position='right'>
            <Dropdown
                upward
                onChange={this.handleChange}
                options={options}
                selection
                value={value}
                icon='chevron down'
            />
            </Menu.Menu>
            <Menu.Item fitted><Icon name='twitter' size='large'/></Menu.Item>
            <Menu.Item fitted><Icon name='facebook' size='large'/></Menu.Item>
            <Menu.Item fitted><Icon name='youtube play' size='large'/></Menu.Item>
          </Container>
         </Menu>
        </div>
    );
  }
}
