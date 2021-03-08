import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

//Pages
import Landing from './Pages/Landing/Landing';
import Menu from './Pages/Menu/Menu';
import Booking from './Pages/Booking/Booking';
import OurStory from './Pages/OurStory/OurStory';
import Experience from './Pages/Experience/Experience';

//Components 
import Navigation from './Constant-Comp/Navigation';
import Footer from './Constant-Comp/Footer';
import SideNav from './Constant-Comp/SideNav';
import Overlay from './Global-Comp/Overlay';
import SocialTags from './Global-Comp/SocialTags';
import ScrollToTop from './Constant-Comp/ScrollToTop';





export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      NavOpen: false,
      ActiveTab: ''
    }
  }


  render() {



      const ToggleNav = () => {
        this.setState((prevState) => {
          return {NavOpen: !prevState.NavOpen}
        });
      }

      const CloseNav = () => {
        this.setState({NavOpen: false});
      }

          const MenuTabActive = () => {
            this.setState({ActiveTab: 'menu'});
          }

          const BookingTabActive = () => {
            this.setState({ActiveTab: 'booking'});
          }

          const StoryTabActive = () => {
            this.setState({ActiveTab: 'story'});
          }

          const ExperienceTabActive = () => {
            this.setState({ActiveTab: 'experience'});
          }

           const LandingTabActive = () => {
            this.setState({ActiveTab: ''});
          }


      let BackDrop;
      if(this.state.NavOpen === true){
        BackDrop = <Overlay CloseNav={this.CloseNav} />
      }

    return (

      <Router >
        <ScrollToTop>
           <div className='App'>
        
              <Navigation ToggleNav={ToggleNav} ActiveTab={this.state.ActiveTab} MenuTabActive={MenuTabActive} BookingTabActive={BookingTabActive} StoryTabActive={StoryTabActive} ExperienceTabActive={ExperienceTabActive} LandingTabActive={LandingTabActive}/>
              <SideNav CloseNav={CloseNav} NavOpen={this.state.NavOpen} />
                
                {BackDrop}

                    <Switch>

                        <Route path='/' exact render={(props) => <Landing {...props} MenuTabActive={MenuTabActive} BookingTabActive={BookingTabActive} StoryTabActive={StoryTabActive} />} />
                        <Route path='/menu' component={Menu}/>
                        <Route path='/booking' component={Booking}/>
                        <Route path='/ourstory' component={OurStory}/>
                        <Route path='/experience' component={Experience}/>

                    </Switch>

                <SocialTags />
              <Footer />

          </div>
        </ScrollToTop>
      </Router>
      
    )
  }
}