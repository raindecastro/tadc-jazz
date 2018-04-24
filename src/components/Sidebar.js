import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class SideBar extends React.Component {
    
    state = {
        menuOpen: false 
    };

    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
    };

    closeMenu () {
        this.setState({menuOpen: false})
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    }

    render () {
    return (
        <Menu 
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
        <a id="logo" className="menu-item" onClick={() => 
            {
                scroll.scrollTo(0);
                this.closeMenu();
            }
        }>Logo</a>
        <a id="about" className="menu-item" onClick={() => 
            {
                scroll.scrollTo(740)
                this.closeMenu();
            }
        }>About</a>
        <a id="team" className="menu-item" onClick={() => 
            {
                scroll.scrollTo(1480)
                this.closeMenu();
            }
        }>Team</a>
      </Menu>
    );
  }
}