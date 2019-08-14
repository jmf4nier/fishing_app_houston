import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {Link} from 'react-router-dom'
import ClickOutside from './clickOutside'

export default class NavBar extends React.Component{

    state={
        expanded: false
    }
    

    render(){
        
        return(
            <ClickOutside style={{}}
                onClickOutside={() => {
                    this.setState({ expanded: false });
                }}
            >
                <SideNav id='sideNav' 
                    onSelect={(selected) => {}}
                    expanded={this.state.expanded}
                    onToggle={(expanded) => {
                        this.setState({ expanded });
                    }}
                    
                    
                >
                    <SideNav.Toggle />
                    <SideNav.Nav>
                        <NavItem eventKey="home">
                            
                                <NavIcon>
                                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                </NavIcon>

                                <NavText>
                                    <Link to='/'>Home </Link>
                                </NavText>
                        
                        </NavItem>
                        <NavItem eventKey="charts">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Charts
                            </NavText>
                            <NavItem eventKey="charts/linechart">
                                <NavText>
                                    Line Chart
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="charts/barchart">
                                <NavText>
                                    Bar Chart
                                </NavText>
                            </NavItem>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </ClickOutside>
        )
    }
}