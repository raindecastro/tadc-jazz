import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import logo from '../../dist/img/logo.png';
import image1 from '../../dist/img/image1.jpg';
import image2 from '../../dist/img/image2.jpg';
import sue1 from '../../dist/img/sue1.png';
import chris1 from '../../dist/img/chris1.png';

export default class SideBar extends React.Component {
        
    state = {
        menuOpen: false 
    };
    //Menu
    closeMenu () {
        this.setState({menuOpen: false})
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    }
    //Scroller
    componentDidMount() {

        Events.scrollEvent.register('begin', function () {
          console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function () {
          console.log("end", arguments);
        });
    
      }
      scrollToTop() {
        scroll.scrollToTop();
      }
      scrollTo() {
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          containerId: 'ContainerElementID'
        })
        console.log('should scroll')
      }
      scrollToWithContainer() {
    
        let goToContainer = new Promise((resolve, reject) => {
    
          Events.scrollEvent.register('end', () => {
            resolve();
            Events.scrollEvent.remove('end');
          });
    
          scroller.scrollTo('scroll-container', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          });
    
        });
    
        goToContainer.then(() =>
          scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
          }));
      }
      componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }

    render () {
        return (
            <div>
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
                <Link 
                    activeClass="active"
                    className="menu-item"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onClick={() => this.closeMenu()}
                >
                    About
                </Link>
                <Link 
                    activeClass="active"
                    className="menu-item"
                    to="team"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onClick={() => this.closeMenu()}
                >
                    Photos
                </Link>
                <Link 
                    activeClass="active"
                    className="menu-item"
                    to="coach"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onClick={() => this.closeMenu()}
                >
                    Coach
                </Link>
                </Menu>
                <header className="header">
                    <img className="logo" src={logo} />
                </header>
                <div name="about" className="main__container">
                    <div className="welcome">
                        <h1 className="welcome__header">Welcome</h1>
                        <p className="welcome__message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum, purus vitae eleifend venenatis, ipsum arcu mollis orci, vel bibendum eros nulla nec urna. Phasellus ac tincidunt arcu. Aliquam ut facilisis nunc, at laoreet magna. Morbi a vulputate elit. Nullam sed velit eros. Vestibulum tellus urna, porta vel hendrerit placerat, porttitor ultricies ante. Mauris nec dolor in lacus consequat viverra. Vivamus rhoncus dolor diam, eu rutrum quam rhoncus quis. Sed molestie risus nec semper luctus. Pellentesque eu consequat lectus, auctor consectetur metus. Duis cursus est elit, ac posuere risus efficitur sed. Aliquam gravida varius dui ac luctus. Etiam ut elementum mauris, eu suscipit libero. Sed vitae placerat odio, at auctor diam.</p>
                    </div>
                </div>
                <div name="coach" className="image3__container">
                    <h1 className="welcome__header">coaches</h1>
                    <div className="coaches__container">
                        <p>Sue</p>
                        <img className="coach__image" src={sue1} />
                        <p>Chris</p>
                        <img className="coach__image" src={chris1} />
                    </div>
                </div>
                <div name="team" className="image1__container">
                    <img className="image1" src={image1} />
                </div>
                <div name="team" className="image2__container">
                    <img className="image1" src={image2} />
                </div>
                
            </div>
    );
  }
}