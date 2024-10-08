import { CalendarStyled } from "./Calendar.styled";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import momentPlugin from '@fullcalendar/moment';
import interactionPlugin from '@fullcalendar/interaction';
import { useState, useRef, useCallback, useEffect } from "react";
import { CalendarEvent } from "./CalendarEvent";



export const CalendarComponent = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isEventInfo, setEventInfo] = useState({ information: null, x: 'auto', y: 'auto' });
    const previousActiveDayEl = useRef(null);
    const previousActiveEventEl = useRef(null);
    const originalStyles = useRef({});
    const [calendarEvents, setCalendarEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [newEvent, setNewEvent] = useState({id: '', title: '', date: '', time: '', notes: '', color: '#3B86FF', textColor: '#fff', editable: true});
    const [isValidDateFormat, setValidDateFormat] = useState(true);
    const [isValidTimeFormat, setValidTimeFormat] = useState(true);
    const [isPastDate, setPastDate] = useState(false);
    const [isPastTime, setPastTime] = useState(false);
    const formRef = useRef(null);
    const [showOnTop, setShowOnTop] = useState(false);
    const [isEventForUpdate, setEventForUpdate] = useState(false);
    const [isColorChange, setColorChange] = useState(false);
    const [validEventTitle, setValidEventTitle] = useState(false);
    const [validEventNotes, setValidEventNotes] = useState(false);
    const [validFieldDate, setValidFieldDate] = useState(false);
    const [validFieldTime, setValidFieldTime] = useState(false);
    const [activeDayTable, setActiveDayTable] = useState(false);
  


    const isDateInThePast = (selectedDate) => {
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        return new Date(selectedDate) < currentDate;
    };

    const normalizeDate = (dateStr) => {
        return dateStr.split('T')[0];
    };
   
    const openEventForm = (info) => {
        const normalizedDate = normalizeDate(info.dateStr);
        setSelectedDate(normalizedDate);
        if (!isDateInThePast(info.dateStr)){
            setPastDate(false);
            setPastTime(false);
            setValidDateFormat(true);
            setValidTimeFormat(true);
            setNewEvent({id: '', title: '', date: '', time: '', notes: '', color: '#3B86FF', textColor: '#fff', editable: true});
            setIsFormOpen(true);
            setColorChange(true);
            setValidEventTitle(false);
            setValidEventNotes(false);
            setValidFieldDate(true);
            setValidFieldTime(true);
            if (info) {
                setEventInfo({
                    information: info,
                    x: info.jsEvent.pageX,
                    y: info.jsEvent.pageY
                })
                if(isEventForUpdate){
                    setEventForUpdate(false);
                    applyStylesToActiveEvent(info);
                }
                if(info.jsEvent.pageY > 840){
                    setShowOnTop(true);
                } else {
                    setShowOnTop(false);
                }
            }
            applyStylesToActiveCell(info);
        } else {
            closeEventForm();
        }
    };


    const closeEventForm = useCallback(() => {
        setIsFormOpen(false);
        setPastDate(false);
        setPastTime(false);
        setValidDateFormat(true);
        setValidTimeFormat(true);
        setValidFieldDate(false);
        setValidFieldTime(false);
        setNewEvent({id: '', title: '', date: '', time: '', notes: '', color: '#3B86FF', textColor: '#fff', editable: true});
        resetStylesForActiveCell();
        setColorChange(false);
        setValidEventTitle(false);
        setValidEventNotes(false);
        if(isEventForUpdate){
            resetStylesToActiveEvent();
            setTimeout(() => {
                setEventForUpdate(false);
            },300)
        }
    },[isEventForUpdate]);


    const toggleEventFormClass = () => {
        return isFormOpen ? 'active' : '';
    };


    const applyStylesToActiveCell = (info) => {
        if (previousActiveDayEl.current) {
            const prevInnerDiv = previousActiveDayEl.current.querySelector('div');
            if (prevInnerDiv) {
                prevInnerDiv.style.boxShadow = '';
                prevInnerDiv.style.overflow = '';
                prevInnerDiv.style.backgroundColor = '';


                const prevInnerInnerDiv = prevInnerDiv.querySelector('div');
                const prevAnchor = prevInnerInnerDiv.querySelector('a');
                if (prevAnchor) {
                    prevAnchor.style.fontWeight = "400"
                    prevAnchor.style.textShadow = '';
                }
            }
        }

        const innerDiv = info.dayEl.querySelector('div');
        if (innerDiv) {
            innerDiv.style.overflow = 'visible';
            innerDiv.style.boxShadow = '0px 3px 6px #00000029';
            innerDiv.style.backgroundColor = 'transparent';

            const innerInnerDiv = innerDiv.querySelector('div');
            if (innerInnerDiv) {
                const anchor = innerInnerDiv.querySelector('a');
                if (anchor) {
                    anchor.style.fontWeight = "600"
                    anchor.style.textShadow = '0px 3px 6px #43425D';
                }
            }

            previousActiveDayEl.current = info.dayEl;
        };
    };


    const resetStylesForActiveCell = () => {
        if (previousActiveDayEl.current) {
            const prevInnerDiv = previousActiveDayEl.current.querySelector('div');
            if (prevInnerDiv) {
                prevInnerDiv.style.boxShadow = '';
                prevInnerDiv.style.overflow = '';

                const prevInnerInnerDiv = prevInnerDiv.querySelector('div');
                const prevAnchor = prevInnerInnerDiv.querySelector('a');
                if (prevAnchor) {
                    prevAnchor.style.fontWeight = "400"
                    prevAnchor.style.textShadow = '';
                }
            }
        }
    };


    const addEventToCalendar = (newCalendarEvent) => {
        setCalendarEvents((prevEvents) => {
            const existingEventIndex = prevEvents.findIndex(event => event.id === newCalendarEvent.id);
    
            let updatedEvents;
    
            if (existingEventIndex !== -1) {
                updatedEvents = [...prevEvents];
                updatedEvents[existingEventIndex] = { ...updatedEvents[existingEventIndex], ...newCalendarEvent };
            } else {
                updatedEvents = [...prevEvents, newCalendarEvent];
            }

            localStorage.setItem('calendarEvents', JSON.stringify(updatedEvents));
    
            return updatedEvents;
        });
    };


    const deleteEventFromCalendar = (eventId) => {
        setCalendarEvents((prevEvents) => {
            const updatedEvents = prevEvents.filter(event => event.id !== eventId);
            localStorage.setItem('calendarEvents', JSON.stringify(updatedEvents));
            return updatedEvents;
        });
    };


    const handleBackdropClick = useCallback((e) => {
        const bodyElement = document.querySelector('.fc-view-harness');
        
        if (isFormOpen 
            && bodyElement 
            && !bodyElement.contains(e.target) 
            && formRef.current 
            && !formRef.current.contains(e.target)) {               
            closeEventForm();
        }
    }, [closeEventForm, isFormOpen]);


    const handleKeyDown = useCallback(event => {
        if (event.key === "Escape") {
            closeEventForm();
        }
    },[closeEventForm]);


    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener('click', handleBackdropClick);
    
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener('click', handleBackdropClick);
        };
    },[handleBackdropClick, handleKeyDown]);


    const handleEventDrop = (info) => {
        const { event } = info;        
        const newAllDay = false;
        const newStart = event.startStr;
        updateEvent(event.id, newStart, newAllDay);
    };


    const updateEvent = (id, newStart, newAllDay) => {
        setCalendarEvents((prevEvents) => {
            const updatedEvents = prevEvents.map((evt) =>
                evt.id === id ? { ...evt, start: newStart, allDay: newAllDay} : evt
            );
    
            localStorage.setItem('calendarEvents', JSON.stringify(updatedEvents));            
            return updatedEvents;
        });
    };


    const updateSelectedEvent = (info) => {
        resetStylesForActiveCell();
        const { event } = info;         
        const selectedEvent = calendarEvents.find(ev => ev.id === event.id);
        const [date, time] = selectedEvent.start.split('T');

        let correctTime; 
        if (time) {
            const formattedtime = time.slice(0, 5);
            correctTime = formattedtime;
        } else {
            correctTime = ''
        }
        
        if (info) {
            setEventInfo({
                information: info,
                x: info.jsEvent.pageX,
                y: info.jsEvent.pageY
            })
        }
        setPastDate(false);
        setPastTime(false);
        setValidDateFormat(true);
        setValidTimeFormat(true);
        setColorChange(false);
        setValidEventTitle(false);
        setValidEventNotes(false);
        setValidFieldDate(false);
        setValidFieldTime(false);
        setNewEvent({
            id: selectedEvent.id, 
            title: selectedEvent.title, 
            date: date, 
            time: correctTime, 
            notes: selectedEvent.notes, 
            color: selectedEvent.color, 
            textColor: selectedEvent.textColor, 
            editable: selectedEvent.editable
        });
        setEventForUpdate(true);
        setIsFormOpen(true);
        applyStylesToActiveEvent(info);
    };

   

    const applyStylesToActiveEvent = (info) => {       
        if (info.event) {
            const contains = info.el.classList.contains('fc-daygrid-dot-event');
            const currentEventId = info.event.id;

            if (previousActiveEventEl.current) {
                const prevEventId = previousActiveEventEl.current.event.id;
                if (originalStyles.current[prevEventId]) {
                    resetStylesToActiveEvent();
                }
            } 

            originalStyles.current[currentEventId] = {
                backgroundColor: info.event.backgroundColor,
                borderColor: info.event.borderColor,
                textColor: info.event.textColor
            };
           

            if (contains) {
                info.el.style.border = `1px solid ${originalStyles.current[currentEventId].backgroundColor}`;
                info.el.style.color = originalStyles.current[currentEventId].backgroundColor;
                if (info.el.firstChild) {
                    info.el.firstChild.style.display = 'none';
                }
            } else {
                info.event.setProp('backgroundColor', 'transparent');
                info.event.setProp('borderColor', originalStyles.current[currentEventId].backgroundColor);
                info.event.setProp('textColor', originalStyles.current[currentEventId].backgroundColor);
            }

            info.el.style.boxShadow = '0px 3px 6px #00000063, 0px 0px 6px #00000063 inset';
            previousActiveEventEl.current = info;

        } else {
            if (previousActiveEventEl.current) {
                resetStylesToActiveEvent();
            }
        }
    }; 


    const resetStylesToActiveEvent = () => {
        if (previousActiveEventEl.current) {
            const prevEventId = previousActiveEventEl.current.event.id;
            if (originalStyles.current[prevEventId]) {
                previousActiveEventEl.current.event.setProp('backgroundColor', originalStyles.current[prevEventId].backgroundColor);
                previousActiveEventEl.current.event.setProp('borderColor', originalStyles.current[prevEventId].borderColor);
                previousActiveEventEl.current.event.setProp('textColor', originalStyles.current[prevEventId].textColor);
                previousActiveEventEl.current.el.style.boxShadow = 'none';

                previousActiveEventEl.current.el.style.border = 'none';
                previousActiveEventEl.current.el.style.color = originalStyles.current[prevEventId].textColor;
                if (previousActiveEventEl.current.el.firstChild) {
                    previousActiveEventEl.current.el.firstChild.style.display = 'block';
                }  
            } 
        }
    };


    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem('calendarEvents')) || [];
        setCalendarEvents(storedEvents);
    }, []);


    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(() => {
                const activeButton = document.querySelector('.fc-button-active');
                if (activeButton) {
                    if (activeButton.innerText === 'Day') {
                        setActiveDayTable(true);
                    } else {
                        setActiveDayTable(false);
                    }
                }
            });
        });

        const config = { attributes: true, childList: true, subtree: true };
        const targetNode = document.querySelector('.fc-button-group');

        if (targetNode) {
            observer.observe(targetNode, config);
        }

        return () => {
            if (targetNode) {
                observer.disconnect();
            }
        };
    }, []);

     
    return(
        <CalendarStyled $activeDayTable={activeDayTable}>
            <h1 className="title">Calendar</h1>
            <CalendarEvent 
                toggleEventFormClass={toggleEventFormClass}
                closeEventForm={closeEventForm}
                isEventInfo={isEventInfo}
                addEventToCalendar={addEventToCalendar}
                selectedDate={selectedDate}
                newEvent={newEvent}
                setNewEvent={setNewEvent}
                setValidDateFormat={setValidDateFormat}
                isValidDateFormat={isValidDateFormat}
                isValidTimeFormat={isValidTimeFormat}
                setValidTimeFormat={setValidTimeFormat}
                isDateInThePast={isDateInThePast}
                setPastDate={setPastDate}
                isPastDate={isPastDate}
                setPastTime={setPastTime}
                isPastTime={isPastTime}
                formRef={formRef}
                showOnTop={showOnTop}
                isEventForUpdate={isEventForUpdate}
                deleteEventFromCalendar={deleteEventFromCalendar}
                isColorChange={isColorChange}
                setColorChange={setColorChange}
                validEventTitle={validEventTitle}
                setValidEventTitle={setValidEventTitle}
                validEventNotes={validEventNotes}
                setValidEventNotes={setValidEventNotes}
                validFieldDate={validFieldDate}
                setValidFieldDate={setValidFieldDate}
                validFieldTime={validFieldTime}
                setValidFieldTime={setValidFieldTime}
            />
            <div className="calendar-cont">
                <h2 className="sub-title">Calendar View</h2>
                <FullCalendar
                    plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, momentPlugin, interactionPlugin ]}
                    initialView="dayGridMonth"
                    selectable={true}
                    headerToolbar={{
                    start: 'today,prev,next',
                    center: 'title',
                    end: 'dayGridMonth,timeGridWeek,timeGridDay,list',
                    }}
                    nowIndicator={true}
                    events={calendarEvents}
                    dateClick={function (info) {
                        openEventForm(info);
                        info.dayEl.style.position = 'relative';
                        applyStylesToActiveCell(info);
                    }}
                    editable={true}
                    eventDrop={function(info) {
                        handleEventDrop(info);
                    }}
                    eventClick={function(info) {
                        updateSelectedEvent(info);
                    }}
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