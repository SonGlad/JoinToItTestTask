import styled from "styled-components";


export const CalendarStyled = styled.div`
    padding: 0 43px;
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
        font-family: 400;
        font-size: 15px;
        letter-spacing: 0;
        line-height: 12px;
        padding: 0;
    }
    
    .fc .fc-daygrid-day-number {
        padding: 17px 15px;
        color: ${p => p.theme.color.table_number};
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
        /* background-color: pink;
        height: 10px; */
        display: none;
    }
    
    
    .fc-direction-ltr .fc-timegrid-now-indicator-arrow {
        border-bottom-color: none;
        border-top-color: none;
        border-width: 0;
        left: 78px;
    }

    .fc .fc-timegrid-col-frame {
        min-height: 100%;
        position: static;
    }

    .fc .fc-timegrid-now-indicator-arrow {
        width: 8px;
        height: 8px;
        background-color: ${p => p.theme.color.text_active};
        border-radius: 50%;
        margin-top: -4px;
        position: absolute;
        z-index: 5;
    }

    .fc .fc-timegrid-now-indicator-line {
        border-color: ${p => p.theme.color.text_active};
        border-style: solid;
        border-width: 1px 0px 0px;
        position: absolute;
        width: 100%;
        left: 0;
        right: 0;
        z-index: 4;
        transform: translateX(85px);
    }
`