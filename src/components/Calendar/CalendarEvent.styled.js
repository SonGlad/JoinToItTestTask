import styled from "styled-components";


export const CalendarEventStyled = styled.div`
    width: 200px;
    background-color: ${p => p.theme.color.white_bg};
    border: 1px solid ${p => p.theme.color.aside_bg};
    border-radius: 10px;
    box-shadow:  0px 3px 18px ${p => p.theme.color.grey_light};
    position: absolute;
    top: ${p => p.$isEventInfo.y ? `${p.$isEventInfo.y}px` : 'auto'};
    left: ${p => p.$isEventInfo.x ? `${p.$isEventInfo.x}px` : 'auto'};
    transform: ${p => p.$isEventForUpdate 
        ? (p.$showOnTop ? `translate(-50%, -115%)` : `translate(-50%, 9%)`)
        : (p.$showOnTop ? `translate(-50%, -115%)` : `translate(-50%, 0%)`)
    };
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition: opacity ${p => p.theme.transition.event_transition},
                visibility ${p => p.theme.transition.event_transition};

    &.active{
        opacity: 1;
        visibility: visible;
    }

    .event-content-div{
        position: relative;
    }

    .triangular-top{
        position: absolute;
        top:-20px;
        left:50%;
        border: 9px solid transparent;
        border-bottom: 11px solid ${p => p.theme.color.table_number};
        transform: translateX(-50%);
    }

    .triangular-bottom{
        position: absolute;
        bottom:-23px;
        left:50%;
        border: 9px solid transparent;
        border-top: 11px solid ${p => p.theme.color.table_number};
        transform: translateX(-50%);
    }

    .for-update{
        position: absolute;
        top: 0;
        left: 48%;
        width: 11px;
        height: 11px;
        border: 1px solid ${p => p.theme.color.table_number};
        background-color: transparent;
        transform: rotate(45deg) translate(-50%, -3px);
        border-bottom: none;
        border-right: none;
    }

    .clos-bth{
        position: absolute;
        top: 6px;
        right: 7px;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        fill: ${p => p.theme.color.form_light_grey};
    }

    .event-form{
        width: 100%;
        padding: 22px 25px 25px 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
    }

    .event-label{
        width: 100%;
        height: 28px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: relative;
    }

    .event-text,
    .event-color-text{
        position: absolute;
        top: 0;
        left: 0;
        font-size: 9px;
        line-height: 11px;
        color: ${p => p.theme.color.form_light_grey};
        opacity: 1;
        visibility: visible;
        transition: opacity ${p => p.theme.transition.event_transition},
                    visibility ${p => p.theme.transition.event_transition};
    }

    .event-input:focus + .event-text,
    .event-input:not(:placeholder-shown) + .event-text {
        opacity: 0;
        visibility: hidden;
    }

    .event-icon{
        position: absolute;
        top: 0;
        right: 0;
        width: 20px;
        height: 20px;
        fill: ${p => p.theme.color.form_light_grey}; 
    }

    .icon-date{
        width: 24px;
        height: 24px;
        transform: translate(3px, -2px);
        transition: transform ${p => p.theme.transition.event_transition};
    }

    .icon-time{
        transform: translate(0, 0);
        transition: transform ${p => p.theme.transition.event_transition};
    }

    .event-input:focus + .icon-date,
    .event-input:not(:placeholder-shown) + .icon-date {
        transform: translate(3px, 4px)
    }

    .event-input:focus + .icon-time,
    .event-input:not(:placeholder-shown) + .icon-time {
        transform: translate(0px, 6px)
    }

    .event-input:focus + .event-icon + .event-text,
    .event-input:not(:placeholder-shown) + .event-icon + .event-text {
        opacity: 0;
        visibility: hidden;
    }
    
    .event-input{
        width: 100%;
        height: 19px;
        padding: 0 20px 8px 0;
        border: none;
        outline: none;
        border-bottom: 1px solid ${p => p.theme.color.form_light_grey};
        font-size: 9px;
        line-height: 11px;
        color: ${p => p.theme.color.table_number};
    }

    .color-label{
        height: 38px;
    }
    .color-input{
        padding: 0;
        height: 29px;
    }

    .notes {
        font-weight: 200;
        font-style: italic; 
    }

    .button-container{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 17px;

        & .save-btn{
            font-size: 12px;
            color: ${p => p.theme.color.text_edit};
            line-height: 15px;
            letter-spacing: 0;

            &:disabled {
                opacity: 0.5;
                pointer-events: none;
            }
        }

        & .cancel-btn{
            font-size: 12px;
            color: ${p => p.theme.color.text_discard};
            line-height: 15px;
            letter-spacing: 0;
        }
    }

    .date-format-text{
        position: absolute;
        bottom: -40%;
        left: 0;
        color: ${p => p.theme.color.text_discard};
        font-size: 8px;
    }
`