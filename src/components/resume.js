import React, { Component } from 'react';
import { Grid, Cell,Chip,ChipContact,Badge, Textfield,FABButton,Icon,Card,CardText,CardTitle,CardMenu,IconButton } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Followers from './follower';
import { Link } from 'react-router-dom';


class Resume extends Component {
  render() {
    return(
      <div>
        
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />

            </div>
       

          <FABButton colored ripple>
          <Icon name="add" />
          </FABButton>
            <h2 style={{paddingTop: '0em'}}>Vipul Kithani</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          <Chip>
          <ChipContact className="mdl-color--teal mdl-color-text--white">5</ChipContact>
          <Link to="/follower">Followers</Link>
          
          </Chip>
          
          </Cell>
          <Cell className="resume-right-col" col={8}>
          <div></div>
            <h2>Edit Your Profile </h2>
            
            <div>
            <Textfield
            onChange={() => {}}
            label="Edit Your Name.."
            floatingLabel
            style={{width: '200px'}}
            />
            </div>
            <div>
            <Textfield
            onChange={() => {}}
            label="Edit Your Email Id...!"
            floatingLabel
            style={{width: '200px'}}
            />
            </div>
   <hr style={{borderTop: '3px solid #e22947'}} />
   <Card shadow={5} style={{width:700,marginLeft:20,marginTop:50}}>
            <CardTitle style={{color: 'black', height: '100px'}} >1000 kg bombs, Mirage 2000 jets: India attacks Pakistan, what we know so far</CardTitle>
            <CardText>
            Indian Air Force (IAF) jets crossed the Line of Control (LoC) and destroyed terror camps in Pakistan, sources said. The air strike was carried out in Balakot sector at 3.30 am.            
            Sources said ten Mirage 2000 aircraft dropped 1,000 kg bombs on terrorist camps across the LoC. As per sources, three control rooms of Jaish-e-Mohammed (JeM) were destroyed in Balakot, Chakoti and Muzzafarabad.
            </CardText>

            <CardMenu style={{color: 'black'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>  
         <IconButton style={{marginLeft:20,marginTop:20,marginBottom:20 }} name="thumb_up" />
         <IconButton style={{marginLeft:10,marginTop:20,marginBottom:20 }} name="thumb_down" />         

         <div>
        <Textfield 
        onChange={() => {}}
        label="Comment..!!"
        floatingLabel
        style={{width: '800px',marginLeft:20}}
        />
        </div>


         <Card shadow={5} style={{width:700,marginLeft:20,marginTop:50}}>
            <CardTitle style={{color: 'black', height: '100px'}} >What is a decentralized platform in blockchain and how does it work?</CardTitle>
            <CardText>
            Decentralised platform in the Blockchain context means that there is no centralised data storage mechanism
The information is available with all the participants in the network
Hence from a system design perspective, you will have nodes instead of client server
As to how it works… this requires a bit of understanding of peer to peer programming and information theory (noise, conflict and consensus)
As of now, there is no standard way of implementation, which can be applied across all the industries
Most of the designs are in context of the industry (SCM, Finance etc)
            </CardText>

            <CardMenu style={{color: 'black'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>  
          <IconButton style={{marginLeft:20,marginTop:20,marginBottom:20 }} name="thumb_up" />
         <IconButton style={{marginLeft:10,marginTop:20,marginBottom:20 }} name="thumb_down" />

         <div>
        <Textfield 
        onChange={() => {}}
        label="Comment..!!"
        floatingLabel
        style={{width: '800px',marginLeft:20}}
        />
        </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
