import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { NavLink } from 'react-router-dom';
import image1 from '../../dist/img/image1.jpg';
import image2 from '../../dist/img/image2.jpg';
import SueModal from '../components/SueModal';
import ChrisModal from '../components/ChrisModal';
import logo2 from '../../dist/img/logo2.png';
import SecondBlock from '../components/SecondBlock';
import ThirdBlock from '../components/ThirdBlock';

export default class SideBar extends React.Component {
        
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
    };

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    };

    //Scroller
    componentDidMount() {

        Events.scrollEvent.register('begin', function () {
          console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function () {
          console.log("end", arguments);
        });
    
    };

    scrollToTop() {
        scroll.scrollToTop();
    };

    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          containerId: 'ContainerElementID'
        })
        console.log('should scroll')
    };

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
    };

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    };

    // openModal(person) {
    //     console.log(person)
    //     if(person === 'sue') {
    //         this.setState({sueIsOpen: true});
    //     } else if(person === 'chris') {
    //         this.setState({chrisIsOpen: true});
    //     } 
    // };
    openModal = (person) => {
        console.log(person)
        if(person === 'sue') {
            this.setState({sueIsOpen: true});
        } else if(person === 'chris') {
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
            <div>
                <div className="app-header">
                <Menu 
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
                    burgerButtonClassName={ "menu__button" }
                    customBurgerIcon={this.state.customBurgerIcon}
                    width={ '45%' }
                >
                <a id="logo" className="menu-item" onClick={() => 
                    {
                        scroll.scrollTo(0);
                        this.closeMenu();
                    }
                }>Home</a>
                <Link 
                    activeClass="active"
                    className="menu-item"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100} 
                    onClick={() => this.closeMenu()}
                >
                    About
                </Link>
                <Link 
                    activeClass="active"
                    className="menu-item"
                    to="third"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100} 
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
                    offset={-100} 
                    onClick={() => this.closeMenu()}
                >
                    Talents
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
                    Media
                </Link>
                </Menu>
                <div className="app-header__logo__container">
                <a className="app-header__logo" onClick={() => 
                    {
                        scroll.scrollTo(0);
                        this.closeMenu();
                    }
                }><img className="app-header__logo" src={logo2} /></a>
                    
                </div>  
                </div>
                

                <div className="left-body">
                    <div className="first-block">
                        <h1 className="first-block__message">LIVE BREATHE DANCE</h1>
                        <Link 
                            to="second"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={-100} 
                        >
                        <div className="arrow"></div>
                    </Link>
                    </div>
                </div>

                <div className="right-body">
                    <div name="second">
                        <SecondBlock />
                    </div>
                   

                    <div name="third">
                        <ThirdBlock openModal={this.openModal} hideMenuIcon={this.hideMenuIcon} />

                    </div>

                    <div name="team" className="image1__container">
                        <NavLink to="/team" className="image1__link" activeClassName="is-active" exact={true}>
                            <img className="image1" src={image1} />
                        </NavLink>
                    </div>

                    <div name="team" className="image2__container">
                        <img className="image1" src={image2} />
                        <img className="image1" src={image2} />
                        <img className="image1" src={image2} />
                    </div>
                </div>
                <SueModal 
                isOpen={this.state.sueIsOpen}
                closeModal={this.closeModal}
                showMenuIcon={this.showMenuIcon}
        />
        <ChrisModal 
                isOpen={this.state.chrisIsOpen}
                closeModal={this.closeModal}
                showMenuIcon={this.showMenuIcon}
        />
                
            </div>
    );
  }
}