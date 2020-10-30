import React,{useEffect, useState} from 'react';
import Time from '@material-ui/icons/TimerOutlined';
import './Tasks.css';
import TodoItems from './TodoItems';

const Tasks = () => {
    
    const [items, setItem] = useState(TodoItems);

    const [task, setTask] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    onsubmit = (e) => {
        e.preventDefault();
        TodoItems.unshift({
            task:task,
            date:date,
            time:time
        });
        setItem(TodoItems);
        alert(`Submitting Name ${items.length}`)

        

    }


    return (
        <div className="main" onSubmit={onsubmit}>
            <form className="container">
                <div className="upper__container">
                
                    <div className="backwards">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="30" height="30"
                        viewBox="0 0 50 45"><path d="M 6.9804688 8.9902344 A 1.0001 1.0001 0 0 0 6.2929688 9.2929688 L 1.3808594 14.205078 A 1.0001 1.0001 0 0 0 1.3769531 15.792969 A 1.0001 1.0001 0 0 0 1.3828125 15.796875 L 6.2929688 20.707031 A 1.0001 1.0001 0 1 0 7.7070312 19.292969 L 4.4140625 16 L 28 16 A 1.0001 1.0001 0 1 0 28 14 L 4.4140625 14 L 7.7070312 10.707031 A 1.0001 1.0001 0 0 0 6.9804688 8.9902344 z"></path></svg>
                    </div>
                    
                    <div className="uc__head">
                        <h4> Create <br/> New Task</h4>
                    </div>
                    
                    <div className="write__name"> Name </div>
                    <input type = "text" value={task} placeholder="Task Name" className="get__task" onChange={e => setTask(e.target.value)}/>
                    
                </div>



                <div className="below__container">

                    <div className="date__name">Date</div>
                    <div className="date__data">
                        <input type="text" className="date__input" placeholder="DD/MM/YYYY" value={date} onChange={e => setDate(e.target.value)}/>
                        <div className="date__logo">
                        
                        <img src="https://img.icons8.com/dotty/24/000000/calendar-16.png"/>
                        </div>
                    </div>
                    

                    <div className="time__name">Starting Time</div>
                    <div className="time__data">
                        <input type="text" className="time__input" placeholder="HH:MM" value={time} onChange={e => setTime(e.target.value)}/>
                        <div className="clock__icon">
                        <Time/> 
                        </div>
                    </div> 

                    <div className="Remind__me"> 
                        <div className="remind__me">Remind Me</div>
                        <input type="checkbox" className="checkbox" id="chk" />
                        <label className="label" htmlFor="chk">
                            <i className="fas fa-moon"></i>
                            <i className="fas fa-sun"></i>
                            <div className="ball"></div>
                        </label>
                    </div>


                    <div className="category">
                        <div className="cat__title">Category</div>
                        <div className="study">Study</div>
                        <div className="prod">Productive</div>
                        <div className="life">Life</div>  
                    </div>

                    <button className="button__add" type="submit" value="Submit">
                        <div className="plus__sign">+</div>
                        <div className="add__title">CREATE TASK</div>
                    </button>

                </div>

            </form>

        </div>
    )
}

export default Tasks;