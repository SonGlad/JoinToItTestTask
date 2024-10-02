import { HeaderStyled } from "./Header.styled";
import Avatar from "../../images/images/Avatar@2x.png";
import { ReactComponent as ArrowDownIcon} from "../../images/svg-icons/arrow_down.svg";
import { ReactComponent as SupportIcon} from "../../images/svg-icons/support_icon.svg";
import { ReactComponent as NotifocationMainIcon} from "../../images/svg-icons/notification_main.svg";
import { ReactComponent as NotificationBelowIcon} from "../../images/svg-icons/notification_below.svg";
import { ReactComponent as NotificationBadgeIcon} from "../../images/svg-icons/notification_badge.svg";
import { ReactComponent as MainBellIcon} from "../../images/svg-icons/main_bell.svg";
import { ReactComponent as BellRingIcon} from "../../images/svg-icons/bell_ring.svg";
import { ReactComponent as SearchIcon} from "../../images/svg-icons/icon_search.svg";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";



export const Header = () => {
    const [searchValue, setSearchValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState(searchValue);


    const onValueChange = (e) => {
        setSearchValue(e.target.value);
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(searchValue);
        }, 500); 

        return () => {
            clearTimeout(handler);
        };
    }, [searchValue]);

    useEffect(() => {
        if (debouncedValue) {
            console.log(debouncedValue);
        }
    }, [debouncedValue]);


    return (
        <HeaderStyled>
            <div className="header-container">
                <div className="logo-container">
                    <div className="filter-container">
                        <NavLink to='/'>
                            <p className="logo-text">IMPEKABLE</p>
                        </NavLink>
                    </div>
                </div>
                <div className="search-container">
                    <form className="search-form">
                        <SearchIcon className="search-icon" width={16} height={16}/>
                        <label className="search-label" htmlFor="searchValue">
                            <input className="search-input" 
                                type="text"
                                value={searchValue}
                                onChange={onValueChange}
                                id='searchValue'
                                name="searchValue"
                                placeholder="Search transactions, invoices or help"
                                required
                            />
                        </label>
                    </form>
                </div>
                <div className="info-container">
                    <div className="info-icon-cont">
                        <SupportIcon className="icon" width={16} height={16}/>
                        <div className="notification-icon-cont">
                            <NotifocationMainIcon className="icon" width={13} height={12}/>
                            <NotificationBelowIcon className="icon icon-notification" width={10} height={9}/>
                        </div>
                        <div className="bell-icon-cont">
                            <NotificationBadgeIcon className="icon-badge" width={8} height={8}/>
                            <MainBellIcon className="icon" width={16} height={13}/>
                            <BellRingIcon className="icon icon-bell-ring" width={4} height={2}/>
                        </div>
                    </div>
                    <div className="info-name-cont">
                        <p className="name-text">John Doe</p>
                        <ArrowDownIcon className="icon" width={11} height={11}/>
                    </div>
                    <div className="info-photo-cont">
                        <img className="user-avatar-img" src={Avatar} alt="avatar" />
                    </div>
                </div>
            </div>
        </HeaderStyled>
    );
};