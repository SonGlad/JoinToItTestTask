import { AsidePanelStyled } from "./AsidePanel.styled";
import { NavLink } from "react-router-dom";
import {ReactComponent as HomeIcon} from "../../images/svg-icons/home.svg";
import {ReactComponent as DashboardIcon} from "../../images/svg-icons/bar_chart.svg";
import {ReactComponent as InboxIcon} from "../../images/svg-icons/mail.svg";
import {ReactComponent as InvoicesIcon} from "../../images/svg-icons/invoices.svg";
import {ReactComponent as CalendarIcon} from "../../images/svg-icons/calendar.svg";
import {ReactComponent as HelpCenterIcon} from "../../images/svg-icons/help_center.svg";
import {ReactComponent as SettingsIcon} from "../../images/svg-icons/settings.svg";
// import {ReactComponent as ChatIcon} from "../../images/svg-icons/chat.svg";
import IconUser from "../Icons/UserIcon";
import IconChat from "../Icons/Chat";
import React from "react";



export const AsidePanel = React.memo(() => {

    return(
        <AsidePanelStyled>
            <nav className="navigation">
                <ul className="navigation-list">
                    <li className="navigation-item">
                        <NavLink className='nav-link' to='/'>
                            <HomeIcon className="header-icon" width={16} height={16}/>
                            <span className="header-link-text">Home</span>
                        </NavLink>
                    </li>
                    <li className="navigation-item">
                        <NavLink className='nav-link' to='/dashboard'>
                            <DashboardIcon className="header-icon dashboard-icon" width={16} height={16}/>
                            <span className="header-link-text">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="navigation-item">
                        <NavLink className='nav-link' to='/inbox'>
                            <InboxIcon className="header-icon" width={16} height={16}/>
                            <span className="header-link-text">Inbox</span>
                        </NavLink>
                    </li>
                    <li className="navigation-item">
                        <NavLink className='nav-link' to='/products'>
                            <div className="producst-svg-cont">
                                <span className="span span1"></span>
                                <span className="span span2"></span>
                                <span className="span span3"></span>
                                <span className="span span4"></span>
                                <span className="span span5"></span>
                            </div>
                            {/* <InboxIcon className="header-icon" width={16} height={16}/> */}
                            <span className="header-link-text">Products</span>
                        </NavLink>
                    </li>
                    <li className="navigation-item">
                        <NavLink className='nav-link' to='/invoices'>
                            <InvoicesIcon className="header-icon" width={16} height={16}/>
                            <span className="header-link-text">Invoices</span>
                        </NavLink>
                    </li>
                    <li className="navigation-item">
                        <NavLink className='nav-link' to='/customers'>
                            <IconUser className="header-icon"/>
                            <span className="header-link-text">Customers</span>
                        </NavLink>
                    </li>
                    <li className="navigation-item">
                        <NavLink className='nav-link' to='/chatRoom'>
                            <IconChat className="header-icon chatroom-icon"/>
                            {/* <ChatIcon className="header-icon chatroom-icon" width={16} height={16}/> */}
                            <span className="header-link-text">Chat Room</span>
                        </NavLink>
                    </li>
                    <li className="navigation-item">
                        <NavLink className='nav-link' to='/calendar'>
                            <CalendarIcon className="header-icon" width={16} height={16}/>
                            <span className="header-link-text">Calendar</span>
                        </NavLink>
                    </li>
                    <li className="navigation-item">
                        <NavLink className='nav-link' to='/helpCenter'>
                            <HelpCenterIcon className="header-icon" width={16} height={16}/>
                            <span className="header-link-text">Help Center</span>
                        </NavLink>
                    </li>
                    <li className="navigation-item">
                        <NavLink className='nav-link' to='/settings'>
                            <SettingsIcon className="header-icon" width={16} height={16}/>
                            <span className="header-link-text">Settings</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </AsidePanelStyled>
    );
});