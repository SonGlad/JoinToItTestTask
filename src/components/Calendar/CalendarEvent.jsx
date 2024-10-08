import { CalendarEventStyled } from "./CalendarEvent.styled";
import {ReactComponent as CloseIcon} from "../../images/svg-icons/close.svg";
import {ReactComponent as DateIcon} from "../../images/svg-icons/date_range.svg";
import {ReactComponent as ClockIcon} from "../../images/svg-icons/clock.svg";
import { nanoid } from "nanoid";
import { parse, format, isValid } from "date-fns";
import { useState, forwardRef,} from "react";



export const CalendarEvent = forwardRef(({ 
    closeEventForm, 
    isEventInfo, 
    toggleEventFormClass, 
    addEventToCalendar,
    selectedDate, 
    setNewEvent,
    newEvent,
    isValidDateFormat,
    setValidDateFormat,
    setValidTimeFormat,
    isValidTimeFormat,
    isDateInThePast,
    setPastDate,
    isPastDate,
    isPastTime,
    setPastTime,
    formRef,
    showOnTop,
    isEventForUpdate,
    deleteEventFromCalendar,
    isColorChange,
    setColorChange,
    validEventTitle,
    setValidEventTitle,
    validEventNotes,
    setValidEventNotes,
    validFieldDate,
    setValidFieldDate,
    validFieldTime,
    setValidFieldTime,
},ref) => {
    const [islongTitle, setLongTitle] = useState(false);
    const [islongNotes, setLongNotes] = useState(false);
    
    
    const handleInputChange = (e) => {
        setColorChange(false);
        const { name, value } = e.target;
        if (name === 'title') {
            if(value.length > 0 && value.length <= 30){
                setValidEventTitle(true);
                setLongTitle(false);
                setValidEventTitle(true);
            } else if (value.length > 30){
                setLongTitle(true);
                setValidEventTitle(false);
            } else {
                setLongTitle(true);
                setValidEventTitle(false);
            }
        }
        if (name === 'notes') {
            if(value.length > 0 && value.length <= 30){
                setLongNotes(false);
                setValidEventNotes(true);
                setValidEventNotes(true);
            } else if (value.length > 30){
                setLongNotes(true);
                setValidEventNotes(false);
            } else {
                setLongNotes(false);
                setValidEventNotes(true);
            }
        }
        if (name === 'color') {
            if (value !== newEvent.color) {
                setColorChange(true);
            }
        }
        if (name === 'date') {
            if (value !== newEvent.date) {
                setValidFieldDate(true);
            }
        }
        if (name === 'time') {
            if (value !== newEvent.time) {
                setValidFieldTime(true);
            }
        }

        setNewEvent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    


    const convertToISODate = (inputDate) => {
        const possibleFormats = ['dd/MM/yyyy', 'dd.MM.yyyy', 'dd-MM-yyyy', 'yyyy-MM-dd', 'yyyy/MM/dd', 'yyyy.MM.dd'];
        let parsedDate = null;
        for (let formatString of possibleFormats) {
            parsedDate = parse(inputDate, formatString, new Date());
    
            if (isValid(parsedDate)) {
                setValidDateFormat(true);
                break;
            }
        }
        if (!isValid(parsedDate)) {
            setValidDateFormat(false);
            return;
        }
        return format(parsedDate, 'yyyy-MM-dd');
    };


    const isValidTimeFormatFunction = (time) => {
        const timeFormat = /^([01]\d|2[0-3]):([0-5]\d)$/;
        return timeFormat.test(time);
    };


    const isTimeInThePast = (inputTime) => {       
        const currentTime = new Date();
        const [inputHours, inputMinutes] = inputTime.split(':').map(Number);
        const inputDate = new Date();
        inputDate.setHours(inputHours, inputMinutes, 0, 0);
    
        return inputDate < currentTime;
    };


    const submitEventForm = () => {
        const isAllDay = newEvent.time === '';
        const isDate = newEvent.date === '';
        const id = newEvent.id ? newEvent.id : nanoid();
        
        let eventStart;
        if (isAllDay) {
            if (isDate) {
                eventStart = selectedDate;
            } else {
                const formattedDate = convertToISODate(newEvent.date);
                if(!isDateInThePast(formattedDate)){
                    setPastDate(false);
                    eventStart = formattedDate;
                } else {
                    setPastDate(true);
                }
            }
        } else {
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);

            if (isDate) {
                const dateSelected = new Date(selectedDate);
                dateSelected.setHours(0, 0, 0, 0);
                const validTimeFormat = isValidTimeFormatFunction(newEvent.time);
                if (dateSelected > currentDate) {
                    if (validTimeFormat) {
                        setValidTimeFormat(true);
                        setPastTime(false);
                        eventStart = `${selectedDate}T${newEvent.time}`;
                    } else {
                        setValidTimeFormat(false);
                    }
                } else {
                    if (validTimeFormat) {
                        setValidTimeFormat(true);
                        if (!isTimeInThePast(newEvent.time)) {
                            setPastTime(false);
                            eventStart = `${selectedDate}T${newEvent.time}`;
                        } else {
                            setPastTime(true);                    
                        }
                    } else {
                        setValidTimeFormat(false);
                    }               
                }
            } else {
                const formattedDate = convertToISODate(newEvent.date);
                const dateEntered = new Date(formattedDate);
                dateEntered.setHours(0, 0, 0, 0);
                const validTimeFormat = isValidTimeFormatFunction(newEvent.time);
                if (dateEntered > currentDate) {
                    if(validTimeFormat){
                        setValidTimeFormat(true);
                        setPastTime(false);
                        setPastDate(false);
                        eventStart = `${formattedDate}T${newEvent.time}`;
                    } else {
                        setValidTimeFormat(false);
                    }
                } else {
                    if (validTimeFormat) {
                        if (!isTimeInThePast(newEvent.time) && !isDateInThePast(formattedDate)) {
                            setValidTimeFormat(true);
                            setPastTime(false);
                            setPastDate(false);
                            eventStart = `${formattedDate}T${newEvent.time}`;
                        } else if (isDateInThePast(formattedDate)) {
                            setPastDate(true);
                            setPastTime(true);
                        } else if (isTimeInThePast(newEvent.time)) {
                            setPastTime(true);
                            setPastDate(false);
                        }
                    } else {
                        setValidTimeFormat(false);
                    }
                }
            }
        }

        if (eventStart) {
            addEventToCalendar({
                id: id,
                title: newEvent.title,
                start: eventStart,
                allDay: isAllDay,
                notes: newEvent.notes,
                color: newEvent.color,
                textColor: '#fff',
                editable: true,
            });
            closeEventForm();
        }
    };


    const removeEvent = () => {
        deleteEventFromCalendar(newEvent.id);
        closeEventForm();
    };

   
    return(
        <CalendarEventStyled 
            $isEventInfo={isEventInfo}
            $showOnTop={showOnTop} 
            className={toggleEventFormClass()} 
            ref={formRef}
            $isEventForUpdate ={isEventForUpdate }
        >
            <div className="event-content-div">
                {!isEventForUpdate ? (
                    !showOnTop ? (
                        <span className="triangular-top"></span>
                    ) : (
                        <span className="triangular-bottom"></span> 
                    )
                ) : (
                    <div className="for-update"></div>
                )}
                <button type='button' className="clos-bth" 
                    onClick={closeEventForm}
                >
                    <CloseIcon className="close-icon" width={20} height={20}/>
                </button>
                <form className="event-form" onSubmit={(e) => e.preventDefault()}>
                    <label className="event-label" htmlFor="title">
                        <input className="event-input"
                            type="text"
                            value={newEvent.title}
                            onChange={handleInputChange}
                            id='title'
                            name="title"
                            placeholder=""
                            autoComplete="off"
                        />
                        <p className="event-text">event name</p>
                        {islongTitle && (
                            <p className="date-format-text">Title is too long</p>
                        )}
                    </label>
                    <label className="event-label" htmlFor="date">
                        <input className="event-input"
                            type="text"
                            value={newEvent.date}
                            onChange={handleInputChange}
                            id='date'
                            name="date"
                            placeholder=""
                            autoComplete="off"
                        />
                        <DateIcon className="event-icon icon-date" width={20} height={20}/>
                        <p className="event-text">event date</p>
                        {!isValidDateFormat && (
                            <p className="date-format-text">Invalid Date Format</p>
                        )}
                        {isPastDate && (
                            <p className="date-format-text">Date in the past is not allowed</p>
                        )}
                    </label>
                    <label className="event-label" htmlFor="time">
                        <input className="event-input"
                            type="text"
                            value={newEvent.time}
                            onChange={handleInputChange}
                            id='time'
                            name="time"
                            placeholder=""
                            autoComplete="off"
                        />
                        <ClockIcon className="event-icon icon-time" width={20} height={20}/>
                        <p className="event-text">event time</p>
                        {!isValidTimeFormat && (
                           <p className="date-format-text">Invalid Time Format</p> 
                        )}
                        {isPastTime && (
                            <p className="date-format-text">Time in the past is not allowed</p>
                        )}
                    </label>
                    <label className="event-label" htmlFor="notes">
                        <input className="event-input notes"
                            type="text"
                            value={newEvent.notes}
                            onChange={handleInputChange}
                            id='notes'
                            name="notes"
                            placeholder=""
                            autoComplete="off"
                        />
                        <p className="event-text">notes</p>
                        {islongNotes && (
                            <p className="date-format-text">Notes is too long</p>
                        )}
                    </label>
                    <label className="event-label color-label" htmlFor="reminder-color">
                        <input className="event-input color-input"
                            type="color" 
                            value={newEvent.color}
                            onChange={handleInputChange}
                            id="reminder-color" 
                            name="color" 
                        />
                        <p className="event-color-text">Choose color:</p>
                    </label>
                    {!isEventForUpdate ? (
                        <div className="button-container">
                            <button type="button" className="cancel-btn"
                                onClick={closeEventForm}
                            >Cancel</button>
                            <button type="submit" className="save-btn"
                                onClick={submitEventForm}
                                disabled={!validEventTitle || !validEventNotes}
                            >Save</button>
                        </div>
                    ) : (
                        <div className="button-container">
                        <button type="button" className="cancel-btn"
                            onClick={removeEvent}
                        >DISCARD</button>
                        <button type="submit" className="save-btn"
                            onClick={submitEventForm}
                            disabled={!(isColorChange || validEventTitle || validEventNotes || validFieldDate || validFieldTime)}
                        >EDIT</button>
                    </div>
                    )}
                </form>
            </div>
        </CalendarEventStyled>
    );
});