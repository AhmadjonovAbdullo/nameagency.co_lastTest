import React, {Component} from 'react';
import {Link} from "react-router-dom";
import img from "../name-design-agency-gliz.jpg";
import Headroom from "react-headroom";
import "../style/style.css";
import Menu from './menu';

class homePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        }
    };

    openMenu = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        })
    };

    render() {
        const { isMenuOpen } = this.state; 
        return (
            <>
            {isMenuOpen ? <Menu /> : ''}
            <div className="container-fluid text-white">
                <div className="row">
                    <div className="col-12 column column-1 Vh-100 p-0 position-relative">
                        <Headroom>
                            <nav className="w-100 d-flex">
                                <div className="w-100 h-50 ml-5 pl-3 mt-3">
                                    <Link to='/' className="Link text-decoration-none text-white font-weight-bold">Name.</Link>
                                </div>
                                <div className="w-25 h-100 mr-5 mt-2 position-relative">
                                    <div className="mt-4 menu-btn position-relative d-flex justify-content-center align-items-center">
                                        <button className={`menu-btn-elt btn btn-link shadow-none ${isMenuOpen ? 'open':''}`} onClick={this.openMenu}/>
                                    </div>
                                </div>
                            </nav>
                        </Headroom>
                        <div className="ml-5 mb-2 position-absolute" style={{bottom: '10px'}}><Link to='/work/gliz' className="Link text-decoration-none text-white font-weight-bold ">Gliz.</Link> Eat
                            well, look good.
                        </div>
                    </div>
                    <div className="col-12 Vh-150 p-0 column">
                        <div className="row h-50 w-100">
                            <div className="col-1 col-sm-12 h-50"/>
                            <div className="col-1 col-md-2"/>
                            <div className="col-sm-8 text-white-50" style={{fontSize: '35px', lineHeight: '38px'}}>
                                <h1 className="text-white font-weight-bold">What we do?</h1>
                                <p className="font-weight-bold">
                                    We enhance business <br/>
                                    with simple, clear and <br/>
                                    honest design <br/>
                                    solutions. <br/>
                                </p>
                                <Link to='/about' className="Link text-decoration-none text-white"
                                      style={{fontSize: '20px'}}>More about us.</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 offset-1 Vh-200 p-0 column">
                        <div className="row w-100 h-100 m-0">
                            <Link to='/work/le-uropea' className="col-sm-6 h-33 mb-2 card-1 cards p-0"><img src={img} alt=""/><div className="hover m-0 p-0 w-100 h-100"/></Link>
                            <Link to='/work/mute' className="col-sm-6 h-33 mb-2 card-2 cards p-0"><img src={img} alt=""/><div className="hover m-0 p-0 w-100 h-100"/></Link>
                            <Link to='/work/fusta' className="col-sm-12 h-33 mb-2 cards p-0"><img src={img} alt=""/><div className="hover m-0 p-0 w-100 h-100"/></Link>
                            <Link to='/work/desa' className="col-sm-6 h-33 mb-2 card-1 cards p-0"><img src={img} alt=""/><div className="hover m-0 p-0 w-100 h-100"/></Link>
                            <Link to='/work/leisure-guide-2016' className="col-sm-6 h-33 mb-2 card-2 cards p-0"><img src={img} alt=""/><div className="hover m-0 p-0 w-100 h-100"/></Link>
                            <div className="col-md-12 Vh-150 p-0 column">
                                <div className="row h-50 w-100">
                                    <div className="col-1 col-sm-12 h-50"/>
                                    <div className="col-1"/>
                                    <div className="col-sm-8 text-white-50"
                                         style={{fontSize: '35px', lineHeight: '38px'}}>
                                        <h1 className="text-white font-weight-bold">Interested in working
                                            together?</h1>
                                        <p className="font-weight-bold">
                                            Drop us a line and tell <br/>
                                            us a bit more about <br/>
                                            your project. <br/>
                                        </p>
                                        <Link to='/contact' className="Link text-decoration-none text-white"
                                              style={{fontSize: '20px'}}>Contact us.</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-1 col-md-3 Vh-85 column"/>
                                    <p><Link to='/about'
                                             className="Link text-decoration-none text-white font-weight-bold column display-x position-absolute"
                                             style={{left: '2%', top: '40%'}}>Get to know us.</Link></p>
                                    <div className="column column-1 col-10 col-md-9 bg-danger vh-85 position-relative" style={{zIndex:'-1'}}/>
                                </div>
                            </div>
                            <div className="col-12 h-10">
                                <div className="row w-100 h-100 mt-4">
                                    <div className="col-12 col-sm-10 mb-2"><Link to='/'
                                                                                 className="Link text-decoration-none text-white font-weight-bold">Name.</Link> Enjoy.
                                        Believe. Create.
                                    </div>
                                    <div className="col-6 col-md-1"><Link to='info@nameagency.co'
                                                                          className="Link text-decoration-none text-white font-weight-bold">Email.</Link>
                                    </div>
                                    <div className="col-6 col-md-1"><Link to='www.instagram.com/nameagency/'
                                                                          className="Link text-decoration-none text-white font-weight-bold">Instagram.</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

homePage.propTypes = {};

export default homePage;
