import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton , Textfield} from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div>
           <Card shadow={5} style={{width:800,marginLeft:200,marginBottom:20}}>
            <CardTitle style={{color: 'black', height: '100px',marginLeft:200}} >Lets Post Something New!!</CardTitle>
            <div>
            <Textfield
            onChange={() => {}}
            label="Enter Your #Tags..!!"
            floatingLabel
            style={{width: '700px',marginLeft:20}}
            />
            </div>
            <div>
            <Textfield
            onChange={() => {}}
            label="Whats On your Mind??"
            floatingLabel
            style={{width: '700px',marginLeft:20}}
            />
            
            </div> 
            <div style={{marginLeft:280,paddingBottom:30}}><Button raised colored >Post</Button></div>

            <CardMenu style={{color: 'black'}}>
              
            </CardMenu>
          </Card>  

          {/* Project 1 */}
          <Card shadow={5} style={{width:800,marginLeft:200}}>
            <CardTitle style={{color: 'black', height: '100px'}} >1000 kg bombs, Mirage 2000 jets: India attacks Pakistan, what we know so far</CardTitle>
            <CardText>
            Indian Air Force (IAF) jets crossed the Line of Control (LoC) and destroyed terror camps in Pakistan, sources said. The air strike was carried out in Balakot sector at 3.30 am.            
            Sources said ten Mirage 2000 aircraft dropped 1,000 kg bombs on terrorist camps across the LoC. As per sources, three control rooms of Jaish-e-Mohammed (JeM) were destroyed in Balakot, Chakoti and Muzzafarabad.
            </CardText>

            <CardMenu style={{color: 'black'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>  
         <IconButton style={{marginLeft:200,marginTop:20,marginBottom:20 }} name="thumb_up" />
         <IconButton style={{marginLeft:10,marginTop:20,marginBottom:20 }} name="thumb_down" />
         

        <div>
        <Textfield
        onChange={() => {}}
        label="Comment..!!"
        floatingLabel
        style={{width: '800px',marginLeft:200}}
        />
        </div>
        

         <Card shadow={5} style={{width:800,marginLeft:200}}>
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
          <IconButton style={{marginLeft:200,marginTop:20,marginBottom:20 }} name="thumb_up" />
         <IconButton style={{marginLeft:10,marginTop:20,marginBottom:20 }} name="thumb_down" />

         <div>
        <Textfield 
        onChange={() => {}}
        label="Comment..!!"
        floatingLabel
        style={{width: '800px',marginLeft:200}}
        />
        </div>
          <Card shadow={5} style={{width:800,marginLeft:200}}>
            <CardTitle style={{color: 'black', height: '100px'}} >3. 20% of Earth’s oxygen is produced by the Amazon rainforest</CardTitle>
            <CardText>
            Our atmosphere is made up of roughly 78 per cent nitrogen and 21 per cent oxygen, 
            with various other gases present in small amounts. 
            The vast majority of living organisms on Earth need oxygen to survive, 
            converting it into carbon dioxide as they breathe. 
            Thankfully, plants continually replenish our planet’s oxygen levels through photosynthesis.
             During this process, carbon dioxide and water are converted into energy, releasing oxygen as a by-product. Covering 5.5 million square kilometres (2.1 million square miles), the Amazon rainforest cycles a significant proportion of the Earth’s oxygen, 
            absorbing large quantities of carbon dioxide at the same time.
            </CardText>

            <CardMenu style={{color: 'black'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>  
         <IconButton style={{marginLeft:200,marginTop:20,marginBottom:20 }} name="thumb_up" />
         <IconButton style={{marginLeft:10,marginTop:20,marginBottom:20 }} name="thumb_down" />

         <div>
        <Textfield
        onChange={() => {}}
        label="Comment..!!"
        floatingLabel
        style={{width: '800px',marginLeft:200}}
        />
        </div>       
         </div>
      )
      
    } 

  }



  render() {
    return(
      <div>
       


          <Grid>
            
            <Cell col={6}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
