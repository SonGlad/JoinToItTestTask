import styled from "styled-components";


export const CalendarStyled = styled.div`
    padding: 0 43px;
    padding-bottom: 103px;
    flex: 1 1;

    .title{
        font-size: 28px;
        line-height: 40px;
        letter-spacing: 0;
        margin-bottom: 32px;
        font-weight: 400;
    }

    .calendar-cont {
        padding: 20px;
        padding-bottom: 35px;
        background-color: ${p => p.theme.color.white_bg};
    }

    .sub-title{
        font-weight: 400;
        font-size: 18px;
        letter-spacing: 0;
        margin-bottom: 15px;
        height: 23px;
    }

    .fc .fc-button {
        background-color: ${p => p.theme.color.white_bg};
        color: ${p => p.theme.color.text_main};
        box-shadow: inset 0 0 0 1px ${p => p.theme.color.button_border};
        outline: none;
        border: none;
        padding: 8px 18px;
        border-radius: 5px;
        font-size: 11px;
        letter-spacing: 0;
        line-height: 17px;
        font-weight: 400;
    }

    .fc .fc-button:not(:disabled):active:focus {
        box-shadow: inset 0 0 0 1px ${p => p.theme.color.button_border};
        color: ${p => p.theme.color.text_main};
    }

    .fc .fc-today-button:disabled{
        background-color: ${p => p.theme.color.white_bg};
        color: ${p => p.theme.color.text_active};
        outline: none;
        opacity: 1;
    }

    .fc .fc-prev-button{
        padding: 8px 16px;
    }

    .fc .fc-next-button{
        padding: 8px 25px 8px 20px;
    }

    .fc .fc-button:hover,
    .fc .fc-button:focus {
        background-color: ${p => p.theme.color.white_bg};
        color: ${p => p.theme.color.text_active};
    }

    .fc .fc-toolbar.fc-header-toolbar {
        margin-bottom: 20px;
    }

    .fc .fc-toolbar-title{
        font-weight: 400;
        font-size: 18px;
        letter-spacing: 0;
        line-height: 13px;
    }

    .fc .fc-button-group{
        box-shadow: 0px 2px 3px #0000000D;
    }

    .fc .fc-toolbar .fc-toolbar-chunk:last-child{
        position: relative;
        width: 270px;

        & .fc-button-group{
            position: absolute;
            bottom: 0;
            right: 0;
            transform: translate(0, -55%);
        }
    }

    .fc .fc-button-primary:not(:disabled).fc-button-active{
        background-color: transparent;
        border-color: transparent;
        color: ${p => p.theme.color.text_active};
    }

    .fc .fc-button-primary:not(:disabled).fc-button-active:focus {
        box-shadow: inset 0 0 0 1px ${p => p.theme.color.button_border};
    }

    .fc .fc-dayGridMonth-button,
    .fc .fc-dayGridWeek-button{
        padding: 8px 16px;
    }

    .fc .fc-timeGridDay-button,
    .fc .fc-list-button{
        padding: 8px 18px;
    }

    .fc-theme-standard th,
    .fc-theme-standard td {
        border: 1px solid ${p => p.theme.color.table_border};
    }

    .fc-scroller table thead{
        background-color: ${p => p.theme.color.table_header_color};
        font-weight: 600;
        font-size: 11px;
        letter-spacing: 0;
        line-height: 14px;
        color: ${p => p.theme.color.table_header_text};
        text-transform: uppercase;
        
        & tr th{
            padding: 15px;
            border: none;
        }
    }

    .fc .fc-col-header-cell-cushion {
        padding: 0;
    }

    .fc .fc-day-past, 
    .fc-day-today,
    .fc-day-future{
        text-transform: none;
    }

    .fc .fc-scrollgrid {
        border-collapse: collapse;
    }

    .fc .fc-daygrid-day-frame {
        font-weight: 400;
        font-size: 15px;
        letter-spacing: 0;
        line-height: 12px;
        padding: 0;
    }
    
    .fc .fc-daygrid-day-number {
        margin-top: 17px;
        margin-right: 15px;
        padding: 0;
        color: ${p => p.theme.color.table_number};
        background-color: transparent;
    }


    .fc-direction-ltr .fc-timegrid-slot-label-frame {
        text-align: center;
    }

    
    .fc .fc-timegrid-axis-frame {
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        text-align: center;
    }

    .fc .fc-timegrid-axis-cushion, .fc .fc-timegrid-slot-label-cushion {
        font-weight: 400;
        font-size: 11px;
        letter-spacing: 0;
        line-height: 17px;
        color: ${p => p.theme.color.text_main};
        padding: 0;
        width: 80px;
    }


    .fc .fc-scrollgrid tbody .fc-scrollgrid-section:nth-child(2) {
        display: none;
    }

    
    .fc .fc-timegrid-now-indicator-container {
        bottom: 0px;
        overflow: ${p => p.$activeDayTable ? 'hidden' : 'visible'};
    }
    
    .fc-direction-ltr .fc-timegrid-now-indicator-arrow {
        border: none;
        width: 8px;
        height: 8px;
        background-color: ${p => p.theme.color.text_active};
        border-radius: 50%;
        margin-top: -4px;
        transform: translateX(78px);
        z-index: 100;
    }


    .fc .fc-timegrid-now-indicator-line {
        border-color: ${p => p.theme.color.text_active};
        width: 900%;
        transform: translateX(-22.1%);
    }


    .fc-h-event {
        background-color: transparent;
    }

    .fc-v-event {
        background-color: transparent;
    }

    .fc-timegrid-event .fc-event-main {
        padding: 0px;
        margin-left: 2px;
        margin-right: 2px;
    }

    .fc-h-event .fc-event-title {
        padding: 6px 14px;
        font-size: 13px;
        line-height: 17px;
        border-radius: 4px;
    }

    .fc-direction-ltr .fc-daygrid-event.fc-event-end, .fc-direction-rtl .fc-daygrid-event.fc-event-start {
        margin-right: 2px;
    }

    .fc-direction-ltr .fc-daygrid-event.fc-event-start, .fc-direction-rtl .fc-daygrid-event.fc-event-end {
        margin-left: 2px;
    }

    .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
        min-height: 4em;
        margin-bottom: 0;
    }

    .total{
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: aqua;
        top: 0;
        right: 0;
    }

    .fc-daygrid-dot-event {
        padding: 0px 0px;
        font-size: 13px;
        height: 31px;
        margin-top: 2px;
        justify-content: flex-start;
        position: relative;
        overflow: hidden;
        color: ${p => p.theme.color.white_bg};
        transform: translateY(-1px);
    }

    .fc-daygrid-event-dot {
        position: absolute;
        width: 100%;
        margin: 0;
        top: 0px;
        left: 0;
        border: 16px solid;
    }

    .fc-direction-ltr .fc-daygrid-event .fc-event-time {
        display: none;
    }

    .fc-daygrid-dot-event .fc-event-title {
        position: absolute;
        top: 50%;
        left: 14px;
        transform: translate(0%, -50%);
    }


    .fc-timegrid-event .fc-event-time {
        display: none;
    }

    .fc-timegrid-event-harness-inset .fc-timegrid-event, .fc-timegrid-event.fc-event-mirror, .fc-timegrid-more-link {
        padding: 3px 14px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .fc-timegrid-event-short .fc-event-title {
        font-size: 13px;
        line-height: 17px;
    }
`