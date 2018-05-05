import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { NavLink } from 'react-router-dom';
import logo2 from '../../dist/img/logo2.png';   

export default class Burger extends React.Component {
    state = {
        menuOpen: false,
        sueIsOpen: false,
        chrisIsOpen: false,
        iconVisible: {
            visibility: 'visible'
        },
        customBurgerIcon: undefined
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
    
          openModal(person) {
            console.log(person)
            if(person === 'sue'){
                this.setState({sueIsOpen: true});
            }else if(person === 'chris') {
                this.setState({chrisIsOpen: true});
            } 
          };
    
          afterOpenModal() {
            // references are now sync'd and can be accessed.
            this.subtitle.style.color = '#f00';
          };
    
          closeModal = () => {
            this.setState(() => ({sueIsOpen: false, chrisIsOpen: false}));
          };
    
          hideMenuIcon = () => {
            this.setState(() => ({ customBurgerIcon: false }));
          };
    
          showMenuIcon = () => {
              this.setState(() => ({ customBurgerIcon: undefined }));
          };

          render () {
              return (
                <div className="app-header">
                <Menu 
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
                width={ '45%' }
                customBurgerIcon={this.state.customBurgerIcon}
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
                to="coach"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => this.closeMenu()}
            >
                Coach
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
            </Menu>
            <div className="app-header__logo__container">
                <NavLink to="/" className="app-header__logo" onClick={() => 
                    {
                        
                        this.closeMenu();
                    }
                }><img className="app-header__logo" src={`/${logo2}`} /></NavLink>
                    
                </div>  
            </div>
              );
          }
}

