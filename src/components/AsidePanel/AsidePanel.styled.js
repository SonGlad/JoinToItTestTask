import styled from "styled-components";


export const AsidePanelStyled = styled.aside`
    max-width: 260px;
    min-width: 260px;
    background-color: ${p => p.theme.color.aside_bg};
    flex-grow: 1;
    min-height: 92.3svh;


    .navigation-item{
        color: ${p => p.theme.color.white_bg};
        font-size: 15px;
        line-height: 19px;
        margin-top: 6px;
    }

    
    .nav-link{
        padding: 18px 25px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 11px;
        position: relative;
        background-color: transparent;
        fill: ${p => p.theme.color.icon_color};
        transition: background-color ${p => p.theme.transition.main_transition},
                    fill ${p => p.theme.transition.main_transition};


        &:hover{
            background-color: ${p => p.theme.color.filter_color};
            fill: ${p => p.theme.color.nav_after};
        }

        &:after{
            position: absolute;
            content: '';
            width: 5px;
            height: 100%;
            top: 0;
            left: 0;
            background-color: ${p => p.theme.color.nav_after};
            transform-origin: bottom;
            transform: scaleY(0);
            transition: transform ${p => p.theme.transition.main_transition};
        }

        &.active::after {
            transform-origin: top;
            transform: scaleY(1);
        }
    }


    .nav-link.active{
        background-color: ${p => p.theme.color.filter_color};
        fill: ${p => p.theme.color.nav_after};
    } 


    .dashboard-icon{
        transform: scale(1.75) scaleX(-1);
    }

    .chatroom-icon{
        transform: scaleX(-1);
        width: 18px;
        height: 18px;
    }

    .header-link-text{
        margin-bottom: -3px;
    }


    .producst-svg-cont{
        width: 16px;
        height: 16px;
        display: flex;
        justify-content: space-between;
    }

    .span{
        width: 2px;
        height: 16px;
        background-color: ${p => p.theme.color.icon_color};
        border-radius: 1px;
        transition: background-color ${p => p.theme.transition.main_transition};
    }

    .span2,
    .span3,
    .span4{
        height:10px;
    }

    .span3{
        width: 4px;
    }

    .nav-link.active .producst-svg-cont .span{
        background-color: ${p => p.theme.color.nav_after};
    } 
`