import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {Link} from 'react-router-dom'
import ClickOutside from './clickOutside'
import { showLogin } from '../actions/userActions'
import { connect } from 'react-redux'

class NavBar extends React.Component{

    state={
        expanded: false,
        showLogin: false
    }
     handleLogout = () => {
        localStorage.removeItem('token')
     }
     handleLoginClick = async () => {
        await this.setState({
            showLogin: !this.state.showLogin
        })
        this.props.showLogin(this.state.showLogin)
     }

    render(){
        console.log(this.state.showLogin)
        
        return(
            <ClickOutside style={{}}
                onClickOutside={() => {
                    this.setState({ expanded: false });
                }}
            >
                <SideNav 
                    style={{backgroundColor:'lightBlue'}}
                    id='sideNav' 
                    onSelect={(selected) => {}}
                    expanded={this.state.expanded}
                    onToggle={(expanded) => {
                        this.setState({ expanded });
                    }}
                    
                >
                    <SideNav.Toggle />
                    <SideNav.Nav >
                        <NavItem eventKey="home">
                            
                                <NavIcon>
                                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                </NavIcon>

                                <NavText style={{fontSize:'1.75vw' }}>
                                    <Link style={{color:'black'}} to='/'>Home </Link>
                                </NavText>
                        
                        </NavItem>
                        <NavItem eventKey="Login" onClick={()=>this.handleLoginClick()}>
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText style={{fontSize:'1.75vw'}}>
                                <p style={{color:'black'}}>Login</p>
                            </NavText>
                            
                        </NavItem>
                        <NavItem eventKey="Logout">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText style={{fontSize:'1.75vw'}}>
                            <p onClick={()=> {this.handleLogout(); this.handleLoginClick()}} style={{color:'black'}} >Logout</p>
                            </NavText>
                            
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </ClickOutside>
        )
    }
}
const mapStateToProps = state => ({
    
})
export default connect(mapStateToProps, { showLogin })(NavBar)