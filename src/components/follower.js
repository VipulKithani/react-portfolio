import React, { Component } from 'react';
import { List,ListItem,ListItemContent,Icon,ListItemAction } from 'react-mdl';

class Followers extends Component {
  render() {
    return(
      <div>

        <List style={{width: '300px',marginLeft:500}}>
        <ListItem twoLine>
        <ListItemContent avatar="person" subtitle="Engineer">Bryan Cranston</ListItemContent>
        <ListItemAction>
        <a href="#"><Icon name="star" /></a>
        </ListItemAction>
        </ListItem>
        <ListItem twoLine>
        <ListItemContent avatar="person" subtitle="Actor">Aaron Paul</ListItemContent>
        <ListItemAction>
        <a href="#"><Icon name="star" /></a>
        </ListItemAction>
        </ListItem>
        <ListItem twoLine>
        <ListItemContent avatar="person" subtitle="Student">Bob Odenkirk</ListItemContent>
        <ListItemAction>
        <a href="#"></a>
        </ListItemAction>
        </ListItem>
        <ListItem twoLine>
        <ListItemContent avatar="person" subtitle="Engineer">Arvind Narayanan</ListItemContent>
        <ListItemAction>
        <a href="#"></a>
        </ListItemAction>
        </ListItem>
        <ListItem twoLine>
        <ListItemContent avatar="person" subtitle="Engineer">Om Uparkar</ListItemContent>
        <ListItemAction>
        <a href="#"></a>
        </ListItemAction>
        </ListItem>
        </List>
      </div>

      
      
    )
  
  }
  
}



export default Followers;
