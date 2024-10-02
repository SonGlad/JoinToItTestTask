import styled from "styled-components";


export const HeaderStyled = styled.header`
    box-shadow:  0px 2px 6px rgba(0, 0, 0, 0.04);
    width: 100%;


    .header-container{
        display: flex;
        align-items: center;
    }

    .logo-container{
        width: 260px;
        font-size: 15px;
        letter-spacing: 3px;
        line-height: 21px;
        color: ${p => p.theme.color.white_bg};
        background-color: ${p => p.theme.color.aside_bg};

        & .filter-container{
            padding: 25px 20px;
            background-color: ${p => p.theme.color.filter_color};

            & .logo-text{
                font-weight: 700;
            }
        }
    }


    .search-container{
        padding-left: 20px;
        margin-left: 0;
        width: auto;

        & .search-form{
            font-size: 13px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 20px;
            color: ${p => p.theme.color.text_main};
            position: relative;
            width: 100%;
        }

        & .search-icon{
            width: 16px;
            height: 16px;
            fill: ${p => p.theme.color.header_icon};
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(0, -50%);
        }

        & .search-label{
            width: 100%;
        }

        & .search-input{
            padding-left: 26px;
            padding-right: 0;
            width: 100%;
            border: none;
            outline: none;

            &::placeholder {
                color: ${props => props.theme.color.primary_grey};
            }
        }
    }




    .info-container{
        padding: 16px 20px 16px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;


        & .info-icon-cont{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 30px;
            margin-right: 20px;


            & .notification-icon-cont,
            & .bell-icon-cont {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-direction: column;
                width: 16px;
                height: 16px;
                position: relative;
            }
    
            & .icon {
                fill: ${p => p.theme.color.header_icon};
            }

            & .icon-notification{
                position: absolute;
                bottom: 0;
                right: -2px;
            }

            & .icon-bell-ring{
                position: absolute;
                bottom: 0;
            }
    
            & .icon-badge {
                fill: ${p => p.theme.color.header_orange};
                stroke: ${p => p.theme.color.white_bg};
                stroke-width: 2px;
                position: absolute;
                top: -25%;
                right: -5%;
            }
        }



        & .info-name-cont {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin-right: 7px;
            padding-left: 20px;
            border-left: 1px solid ${p => p.theme.color.header_divider};

            & .name-text{
                font-weight: 500;
                font-size: 13px;
                line-height: 20px;
                letter-spacing: 0;
            }

            & .icon{
                width: 11px;
                height: 11px;
                fill: ${p => p.theme.color.header_arrow};
            }
        }
        
        & .info-photo-cont{
            border-radius: 50%;
            width: 38px;
            height: 38px;
            overflow: hidden;

            & .user-avatar-img{
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

    }
`