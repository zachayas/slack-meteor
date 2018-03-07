import React from 'react';
import { Container, Menu, Image, Dropdown } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    const src1 = 'https://stdlib.com/static/images/wordmarks/slack.svg';
    const src2 = 'https://slack-files2.s3-us-west-2.amazonaws.com/' +
        'avatars/2018-01-04/293806485728_f546719f1d747f9cb241_88.png';
    const src3 = 'https://slack-files2.s3-us-west-2.amazonaws.com/' +
        'avatars/2017-06-21/201113641265_ee90edd90fd1a9738bf0_88.png';
    const src4 = 'https://slack-files2.s3-us-west-2.amazonaws.com/' +
        'avatars/2016-08-29/74208005351_f40dc4d4ccec8d042385_88.png';
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Image src={src1} className="smaller"/>
            <Menu.Item position='right'>Why Slack?</Menu.Item>
            <Menu.Item>Pricing</Menu.Item>
            <Menu.Item>About US</Menu.Item>

             <Dropdown
                 button
                 text='Your Workspaces'
                 basic
                 icon={null}
             >
               <Dropdown.Menu direction='left'>
                 <Dropdown.Item><Image src={src2} size="small" rounded/>ics314s18</Dropdown.Item>
                 <Menu.Item><Image src={src3} size="small" rounded/>uhm-ics-community</Menu.Item>
                 <Menu.Item><Image src={src4} size="small" rounded/>GreyHats@UHM</Menu.Item>
                 <Dropdown.Divider/>
                 <Menu.Item>Sign into Another Workspace</Menu.Item>
                 <Menu.Item>Create Workspace</Menu.Item>
               </Dropdown.Menu>

             </Dropdown>
          </Container>
        </Menu>
    );
  }
}
