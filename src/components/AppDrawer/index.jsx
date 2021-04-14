import React from 'react';
import { Col, Row, Card, CardTitle } from 'reactstrap';
import {
  Drawer,
  // // DrawerHeader,
  DrawerContent,
  Icon,
  // List,
  ListItem,
  ListItemGraphic,
  ListItemText,
  // ListGroup,
  // // ListGroupSubheader,
  // ListDivider,
} from "mdc-react";



const AppDrawer = ({lists}) => {
  return(
    <Drawer id="app-drawer" xs={12} className="px-0 p-3 my-2 rounded">
      {/*<DrawerHeader />*/}
      <DrawerContent>
        <Col className="d-flex">
          <Col xs={3}>
            {[
              {title: 'Tasks', icon: 'home'},
              {title: 'Important', icon: 'star'},
              {title: 'Planed', icon: 'event'},
            ].map(item =>
              <Row key={item.icon}>
                <Col>
                  <Icon>{item.icon}</Icon>
                </Col>
                <ListItemText tag="h5">
                  {item.title}
                </ListItemText>
              </Row>
            )}
          </Col>
          <ListItemText>
          <hr className="my-2" />
          </ListItemText>
          <Col xs={3}>
            {[
              {title: 'Tasks2', icon: 'home2'},
              {title: 'Important2', icon: 'star2'},
              {title: 'Planed2', icon: 'event2'},
            ].map(item =>
              <Row key={item.key}>
                <Row>
                  <Col xs={12} className="px-0">{item.icon}</Col>
                </Row>
                <ListItemText tag="h5">
                  {item.title}
                </ListItemText>
              </Row>
            )}
          </Col>
          <hr className="my-2" />
        </Col>
      </DrawerContent>
    </Drawer>
  );
}

export default AppDrawer;