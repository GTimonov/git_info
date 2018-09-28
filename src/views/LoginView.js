import React from 'react';
import {View , Image} from 'react-native';

import { Container, Header, Content, Form, Item, Input, Label, Icon, Button, Text } from 'native-base';

export default  class LoginView extends React.Component {
    state = {}

    render() {
          return (
            <Container >         
                     <Content>
                     <Text>Welcome</Text>
                         <Form>
                             <Item inlineLabel>
                                 <Label>Username</Label>
                                 <Input />
                             </Item>
                             <Item inlineLabel last>
                                 <Label>Password</Label>
                                 <Input />
                             </Item>
                            
                        </Form>
                        <Button><Text>Log In</Text></Button>
                     </Content>
                 </Container>
          );
     }
}

