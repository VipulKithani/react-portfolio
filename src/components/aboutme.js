import React, { Component } from 'react';
import { Tabs, Tab, Grid,Chip,ChipContact, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton , Textfield} from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div >
       <Card shadow={5} style={{width:800,marginLeft:200,marginTop:20}}>
            <CardTitle style={{color: 'black', height: '100px'}} >BlogiX: A decentralized alternative for microblogging </CardTitle>
            <CardText style={{fontSize:20}}>
            The current social media applications like facebook, twitter are centralized and also the data is owned by these 
            companies. We are aiming at a truly decentralised idea sharing platform for the masses to express their ideology 
            and views and support one another. These posts won’t be under any supervision or governance by a central authority and will
             be controlled by the users themselves. The posts cannot be censored nor deleted as a result of which the users have full control over their data. 
             The users have the option of encrypting their data and they themselves have the authority to decrypt it. All the direct messages can be encrypted 
             in an end-to-end fashion thus keeping user’s privacy in the forefront. Our platform supports 
            selective privacy of information which provides users the authority to control the privacy of their posts.
            </CardText>

            <CardMenu style={{color: 'black'}}>
              
            </CardMenu>
          </Card>  

          <Card shadow={5} style={{width:800,marginLeft:200,marginTop:20}}>
          
            <CardTitle style={{color: 'black', height: '80px'}} >
           
                 Dr.Shalu Chopra </CardTitle>
            <CardText style={{fontSize:20}} >
               
            <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
                 <br/>
                <div style={{marginLeft:250,marginTop:-120}}>
              Teacher<br/>
              <br/>
              Department of Information Technology<br/>
              Vivekanand Education Society’s Institute of Technology<br/>
              Mumbai,India<br/>
              shalu.chopra@ves.ac.in<br/>
              </div>
            </CardText>

            <CardMenu style={{color: 'black'}}>
              
            </CardMenu>
          </Card>  

          <Card shadow={5} style={{width:800,marginLeft:200,marginTop:20}}>
            <CardTitle style={{color: 'black', height: '100px'}} >Arvind Narayanan</CardTitle>
            <CardText style={{fontSize:20}}>
            <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
                  <br/>
                <div style={{marginLeft:250,marginTop:-120}}>
              Student<br/>
              <br/>
              Department of Information Technology<br/>
              Vivekanand Education Society’s Institute of Technology<br/>
              Mumbai,India<br/>
              2015arvind.narayanan@ves.ac.in<br/>
              </div>
            
            </CardText>

            <CardMenu style={{color: 'black'}}>
              
            </CardMenu>
          </Card>  

          <Card shadow={5} style={{width:800,marginLeft:200,marginTop:20}}>
            <CardTitle style={{color: 'black', height: '100px'}} >Vipul Kithani </CardTitle>
            <CardText style={{fontSize:20}}>
            <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            <br/>
                <div style={{marginLeft:250,marginTop:-120}}>
              Student<br/>
              <br/>
              Department of Information Technology<br/>
              Vivekanand Education Society’s Institute of Technology<br/>
              Mumbai,India<br/>
              2015vipul.kithani@ves.ac.in<br/>
              </div>
            </CardText>

            <CardMenu style={{color: 'black'}}>
              
            </CardMenu>
          </Card>  

          <Card shadow={5} style={{width:800,marginLeft:200,marginTop:20}}>
            <CardTitle style={{color: 'black', height: '100px'}} >Om Uparkar </CardTitle>
            <CardText style={{fontSize:20}}>
            <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
           <br/>
                <div style={{marginLeft:250,marginTop:-120}}>
              Student<br/>
              <br/>
              Department of Information Technology<br/>
              Vivekanand Education Society’s Institute of Technology<br/>
              Mumbai,India<br/>
              2015om.uparkar@ves.ac.in<br/>
              </div>
            </CardText>

            <CardMenu style={{color: 'black'}}>
              
            </CardMenu>
          </Card>  
      </div>
      
      
    )
    
    
  }
}



export default About;
