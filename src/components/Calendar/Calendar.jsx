import { CalendarStyled } from "./Calendar.styled";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import momentPlugin from '@fullcalendar/moment';


export const CalendarComponent = () => {

    
    return(
        <CalendarStyled>
            <h1 className="title">Calendar</h1>
            <div className="calendar-cont">
                <h2 className="sub-title">Calendar View</h2>
                <FullCalendar
                    plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, momentPlugin ]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                    start: 'today,prev,next',
                    center: 'title',
                    end: 'dayGridMonth,timeGridWeek,timeGridDay,list',
                    }}
                    nowIndicator={true}
                    views={{
                        dayGridMonth: {
                            titleFormat: { year: 'numeric', month: 'long' }
                        },
                        timeGridWeek: {
                            titleFormat: { month: 'short', day: 'numeric' },
                            dayHeaderFormat: 'ddd DD/MM',
                            slotDuration: '02:00:00',
                            slotLabelFormat: {
                                hour: 'numeric',
                                minute: '2-digit',
                                omitZeroMinute: false,
                                meridiem: 'long'
                            },
                            expandRows: true,
                        },
                        timeGridDay: {
                            titleFormat: {weekday: 'long', month: 'short', day: 'numeric', omitCommas: true},
                            dayHeaderFormat: 'ddd DD/MM',
                            slotDuration: '02:00:00',
                            slotLabelFormat: {
                                hour: 'numeric',
                                minute: '2-digit',
                                omitZeroMinute: false,
                                meridiem: 'long'
                            },
                            expandRows: true
                        },
                    }}
                    buttonText={{
                        today: 'Today',
                        prev: 'Back',
                        next: 'Next',
                        month: 'Month',
                        week: 'Week',
                        day: 'Day',
                        list: 'Agenda'
                    }}
                    height={"774px"}
                />
            </div>
        </CalendarStyled>
    );
};