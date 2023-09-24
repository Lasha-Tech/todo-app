import { useState } from "react"

function App() {
  const [day, setDay] = useState(true)
  const [checked, setChecked] = useState(false)

  const [todoArray, setTodoArray] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState('all')
  //Filter Colors
  const [allColor, setAllColor] = useState('#3A7CFD')
  const [activeColor, setActiveColor] = useState('#9495A5')
  const [completeColor, setCompleteColor] = useState('#9495A5')

  //Footer Color Changing Function
  const handleAllClick = () => {
    setFilter('all')
    digit = 0;
    if(day) {
      setAllColor('#3A7CFD')
      setActiveColor('#9495A5')
      setCompleteColor('#9495A5')
    } else {
      setAllColor('#3A7CFD')
      setActiveColor('#5B5E7E')
      setCompleteColor('#5B5E7E')
    }  
  }
  const handleActiveClick = () => {
    setFilter('active')
    digit = 0;
    if(day) {
      setAllColor('#9495A5')
      setActiveColor('#3A7CFD')
      setCompleteColor('#9495A5')
    } else {
      setAllColor('#5B5E7E')
      setActiveColor('#3A7CFD')
      setCompleteColor('#5B5E7E')
    } 
  }
  const handleCompleteClick = () => {
    setFilter('complete')
    digit = 0;
    if(day) {
      setAllColor('#9495A5')
      setActiveColor('#9495A5')
      setCompleteColor('#3A7CFD')
    } else {
      setAllColor('#5B5E7E')
      setActiveColor('#5B5E7E')
      setCompleteColor('#3A7CFD')
    } 
  }
  //Day & Night Colors
  const handleDayNightClick = () => {
    setDay(!day)
    setFilter('all')
    if(!day) {
      setAllColor('#3A7CFD')
      setActiveColor('#9495A5')
      setCompleteColor('#9495A5')
    } else {
      setAllColor('#3A7CFD')
      setActiveColor('#5B5E7E')
      setCompleteColor('#5B5E7E')
    } 
  }
  //Submit Function
  const handleSubmitFunc = (e) => {
    e.preventDefault();
    if(inputValue) {
      setInputValue('')
      setChecked(false)

      const newTodo = {
        value: inputValue,
        id: Math.random(),
        active: checked? true: false
      }

      const newTodoArray = [...todoArray, newTodo];
      setTodoArray(newTodoArray)
    }
  }
  //Todo Active/Complete Function
  let digit = 0;
  const handleTodoItemClick = (index) => {
    digit += 1
    const updatedArray = [...todoArray]
    updatedArray[index] = {...updatedArray[index], active: !updatedArray[index].active}
    setTodoArray(updatedArray)
  } 
  const todoItemClick = (index) => {
    digit -= 1
    const updatedArray = [...todoArray]
    updatedArray[index] = {...updatedArray[index], active: !updatedArray[index].active}
    setTodoArray(updatedArray)
  } 
  //Delete Button Click Function
  const handleDeleteFunction = (index) => {
    const newArr = todoArray.filter(todo => todoArray.indexOf(todo) != index);
    setTodoArray(newArr)
  }
  //Clear Completed Function
  const handleClearCompleted = () => {
    const newArr = todoArray.filter(todo => !todo.active);
    setTodoArray(newArr)
  }
  //Todo Color Style
  const todoColorStyle = (todo) => {
    if(day) {
      if(todo) {
        return '#D1D2DA'
      } else {
        return '#494C6B'
      }
    } else {
      if(todo) {
        return '#4D5067'
      } else {
        return '#C8CBE7'
        }
      }
  }
  //Todo Text Decoration Style
  const todoTextDecorationStyle = (todo) => {
    if(day) {
      if(todo) {
        return 'line-through #D1D2DA'
      } else {
        return 'none'
      }
    } else {
      if(todo) {
        return 'line-through #4D5067'
      } else {
        return 'none'
        }
      }
  }
  
  
  return (
    <div className='App' style={{backgroundColor: day?'#FFF':'#171823'}}>
      <div className="header">
        <div className='backgroundImg' style={{backgroundImage: day? "url('https://s3-alpha-sig.figma.com/img/03b8/22a8/10f232874b021926bb904eafb394287f?Expires=1696204800&Signature=LoiyTI1hmPFdhLEvL7MadcUZNQI8VCxZ9uNzplVWxm2EY37gJQ6h9ggojSAvyTr3fHEZXdAmBQrwdhwr1U5T7xjCp8weDhm3qXWpnu-Qt8ZYJahBRw3HN4LW~azznNJqDuMOXoJBNaNiJXrpg23BObk9nqDOypF~HL8vCt353oNjT1w9mDG2n9UTCVL54PU~a9Rf~CE8DhRK2US9cTcGeAmHIE58tA~ZfYe9KeJlJO0mPD7E1IcSXEyAxrIRt3Ag8gkCO7X5FWUf6oWwB2B54P2Jy2K9FDe~XnDf4iMtsI~8vkkhw6BKtPgERbMmNS411Fm3Sndiwiwdzid1-VTFAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')"
        : "url('https://s3-alpha-sig.figma.com/img/a0f4/beb0/598988b6993552d320eca695eaadbb10?Expires=1696204800&Signature=nJ~fnYUC6oEbFMey6DjoTEJYj1vkmL7z5-kWIvYQrL8aT~Q9xyj4pQUN59OkOjel8UFZdpbzYrKOlun8r4T2otfFJQMdoUQkMBV1qS47dYBen9G783HYvcw05fWQftp89qut9-Te1SeCxUWTdICcqcEwI66E7iatCP76d3AvWOPwxnNAxNSowSH0nXOyg7rzsk0tb~QA8WrLLC0AatjIP5jary8rYSmkI0BMeKTOK6QGsc9M~mlrQrXWqFf24MDaHGT5~7KOJCWYFg72F430pD1nNImaCJ-Hvt85pinCZGz5-v9Dy4Mk0E4tLEETEnKx5fw6arAaJU~zoSdY8x~abw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')"}}/>
        <div className="backgroundImgColor" style={{background: day? 'linear-gradient(to left, rgb(85, 221, 255, 0.25), rgb(192, 88, 243)'
        : 'linear-gradient(to right, rgb(55, 16, 189), rgb(164, 35, 149)'}}/>
      </div>

      {/* Title  */}
      <div className="wrapper">
        <div className="title">
          <p>TODO</p>
          {day? <svg onClick={() => handleDayNightClick()} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.8244 0.166024C8.14853 0.922784 5.38462 4.17708 5.38462 8.07692C5.38462 12.5377 9.00078 16.1538 13.4615 16.1538C15.766 16.1538 17.8451 15.1887 19.3166 13.6406C17.8608 17.3633 14.2383 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C10.6231 0 11.2328 0.0569837 11.8244 0.166024Z" fill="white"/>
                </svg> : <svg onClick={() => handleDayNightClick()} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.23077 0.769231C9.23077 0.344396 9.57517 0 10 0C10.4248 0 10.7692 0.344396 10.7692 0.769231V3.07692C10.7692 3.50176 10.4248 3.84615 10 3.84615C9.57517 3.84615 9.23077 3.50176 9.23077 3.07692V0.769231ZM13.8462 10C13.8462 12.1242 12.1242 13.8462 10 13.8462C7.87583 13.8462 6.15385 12.1242 6.15385 10C6.15385 7.87583 7.87583 6.15385 10 6.15385C12.1242 6.15385 13.8462 7.87583 13.8462 10ZM10 16.1538C9.57517 16.1538 9.23077 16.4982 9.23077 16.9231V19.2308C9.23077 19.6556 9.57517 20 10 20C10.4248 20 10.7692 19.6556 10.7692 19.2308V16.9231C10.7692 16.4982 10.4248 16.1538 10 16.1538ZM19.2308 9.23077C19.6556 9.23077 20 9.57517 20 10C20 10.4248 19.6556 10.7692 19.2308 10.7692H16.9231C16.4982 10.7692 16.1538 10.4248 16.1538 10C16.1538 9.57517 16.4982 9.23077 16.9231 9.23077H19.2308ZM3.84615 10C3.84615 9.57517 3.50176 9.23077 3.07692 9.23077H0.769231C0.344396 9.23077 0 9.57517 0 10C0 10.4248 0.344396 10.7692 0.769231 10.7692H3.07692C3.50176 10.7692 3.84615 10.4248 3.84615 10ZM15.9832 2.92893C16.2836 2.62853 16.7707 2.62853 17.0711 2.92893C17.3715 3.22934 17.3715 3.71639 17.0711 4.01679L15.4393 5.64857C15.1389 5.94898 14.6518 5.94898 14.3514 5.64857C14.051 5.34817 14.051 4.86112 14.3514 4.56072L15.9832 2.92893ZM5.64857 14.3514C5.34817 14.051 4.86112 14.051 4.56072 14.3514L2.92893 15.9832C2.62853 16.2836 2.62853 16.7707 2.92893 17.0711C3.22934 17.3715 3.71639 17.3715 4.01679 17.0711L5.64857 15.4393C5.94898 15.1389 5.94898 14.6518 5.64857 14.3514ZM17.0711 15.9832C17.3715 16.2836 17.3715 16.7707 17.0711 17.0711C16.7707 17.3715 16.2836 17.3715 15.9832 17.0711L14.3514 15.4393C14.051 15.1389 14.051 14.6518 14.3514 14.3514C14.6518 14.051 15.1389 14.051 15.4393 14.3514L17.0711 15.9832ZM5.64857 5.64857C5.94898 5.34817 5.94898 4.86112 5.64857 4.56072L4.01679 2.92893C3.71639 2.62853 3.22934 2.62853 2.92893 2.92893C2.62853 3.22934 2.62853 3.71639 2.92893 4.01679L4.56072 5.64857C4.86112 5.94898 5.34817 5.94898 5.64857 5.64857Z" fill="white"/>
                </svg>}
        </div>
        
        {/* Input Container  */}
        <div className="input-container" style={{backgroundColor: day? '#FFF':'#25273D'}}>
          <div className="check" onClick={() => setChecked(!checked)} style={{border: day? '1px solid #E3E4F1': '1px solid #767992'}}>
            {checked && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9.5" fill="white" stroke="#E3E4F1"/>
            <circle cx="10" cy="10" r="10" fill="url(#paint0_linear_0_371)"/>
            <path d="M6.66675 10.2534L8.91333 12.5L13.9133 7.5" stroke="white" strokeWidth="2"/>
            <defs>
            <linearGradient id="paint0_linear_0_371" x1="-10" y1="10" x2="10" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#55DDFF"/>
            <stop offset="1" stopColor="#C058F3"/>
            </linearGradient>
            </defs>
            </svg>}
          </div>

          <form className='form' onSubmit={e => handleSubmitFunc(e)}>
            <input type="text" style={{backgroundColor: day? '#FFF': '#25273D', color: day? '#494C6B':'#C8CBE7'}}
            value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Create a new todo..."/>
            <button type='submit'></button>
          </form>
        </div>

        {/* Main  */}
      <div className="main" style={{backgroundColor: day? '#FFF': '#25273D', boxShadow: day? '0px 35px 50px -15px rgba(194, 195, 214, 0.50)'
      : '0px 35px 50px -15px rgba(0, 0, 0, 0.50)'}}>
        {/* All */}
        {filter == 'all'? todoArray.map((todo, index) => {
          if(!todo.active) {
            digit += 1
          }
            return (
            <div key={index} className="todo-item" style={{borderTop: day? '1px solid #E3E4F1': '1px solid #393A4B'}}>
              <div className="left">
                {/* Text & Checkbox  */}
                <div className="check-todo" onClick={() => handleTodoItemClick(index)} style={{border: day? '1px solid #E3E4F1': '1px solid #767992'}}>
                    {todo.active? <svg onClick={() => todoItemClick(index)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9.5" fill="white" stroke="#E3E4F1"/>
            <circle cx="10" cy="10" r="10" fill="url(#paint0_linear_0_371)"/>
            <path d="M6.66675 10.2534L8.91333 12.5L13.9133 7.5" stroke="white" strokeWidth="2"/>
            <defs>
            <linearGradient id="paint0_linear_0_371" x1="-10" y1="10" x2="10" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#55DDFF"/>
            <stop offset="1" stopColor="#C058F3"/>
            </linearGradient>
            </defs>
            </svg>: null}
                </div>
                <p className="todo" style={{color: todoColorStyle(todo.active), textDecoration: todoTextDecorationStyle(todo.active)}}>{todo.value}</p>
              </div>
              {/* Delete Button  */}
              <svg onClick={() => handleDeleteFunction(index)} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                <path d="M11.7851 0.471404L11.3137 0L5.89256 5.42115L0.471404 0L0 0.471404L5.42115 5.89256L0 11.3137L0.471404 11.7851L5.89256 6.36396L11.3137 11.7851L11.7851 11.3137L6.36396 5.89256L11.7851 0.471404Z"
                 fill={'#494C6B'}/>
              </svg>
            </div>
            )})
            // Active 
            : filter == 'active'? todoArray.map((todo, index) => {
              if(!todo.active) {
                digit += 1
                return (
                  <div key={index} className="todo-item" style={{borderTop: day? '1px solid #E3E4F1': '1px solid #393A4B'}}>
                    <div className="left">
                      {/* Text & Checkbox  */}
                      <div className="check-todo" onClick={() => handleTodoItemClick(index)} style={{border: day? '1px solid #E3E4F1': '1px solid #767992'}}>
                          {todo.active? <svg onClick={() => todoItemClick(index)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9.5" fill="white" stroke="#E3E4F1"/>
                  <circle cx="10" cy="10" r="10" fill="url(#paint0_linear_0_371)"/>
                  <path d="M6.66675 10.2534L8.91333 12.5L13.9133 7.5" stroke="white" strokeWidth="2"/>
                  <defs>
                  <linearGradient id="paint0_linear_0_371" x1="-10" y1="10" x2="10" y2="30" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#55DDFF"/>
                  <stop offset="1" stopColor="#C058F3"/>
                  </linearGradient>
                  </defs>
                  </svg>: null}
                      </div>
                      <p className="todo" style={{color: day? '#494C6B':'#C8CBE7', textDecorationLine: todo.active? 'line-through grey': 'none'}}>{todo.value}</p>
                    </div>
                    {/* Delete Button  */}
                    <svg onClick={() => handleDeleteFunction(index)} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                      <path d="M11.7851 0.471404L11.3137 0L5.89256 5.42115L0.471404 0L0 0.471404L5.42115 5.89256L0 11.3137L0.471404 11.7851L5.89256 6.36396L11.3137 11.7851L11.7851 11.3137L6.36396 5.89256L11.7851 0.471404Z"
                       fill={'#494C6B'}/>
                    </svg>
                  </div>
                  )
              }
            })
            // Complete 
            : filter == 'complete'? todoArray.map((todo, index) => {
              if(todo.active) {
                digit += 1
                return (
                  <div key={index} className="todo-item" style={{borderTop: day? '1px solid #E3E4F1': '1px solid #393A4B'}}>
                    <div className="left">
                      {/* Text & Checkbox  */}
                      <div className="check-todo" onClick={() => handleTodoItemClick(index)} style={{border: day? '1px solid #E3E4F1': '1px solid #767992'}}>
                          {todo.active? <svg onClick={() => todoItemClick(index)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9.5" fill="white" stroke="#E3E4F1"/>
                  <circle cx="10" cy="10" r="10" fill="url(#paint0_linear_0_371)"/>
                  <path d="M6.66675 10.2534L8.91333 12.5L13.9133 7.5" stroke="white" strokeWidth="2"/>
                  <defs>
                  <linearGradient id="paint0_linear_0_371" x1="-10" y1="10" x2="10" y2="30" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#55DDFF"/>
                  <stop offset="1" stopColor="#C058F3"/>
                  </linearGradient>
                  </defs>
                  </svg>: null}
                      </div>
                      <p className="todo" style={{color: day? '#494C6B':'#C8CBE7', textDecoration: todo.active? 'line-through grey': 'none'}}>{todo.value}</p>
                    </div>
                    {/* Delete Button  */}
                    <svg onClick={() => handleDeleteFunction(index)} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                      <path d="M11.7851 0.471404L11.3137 0L5.89256 5.42115L0.471404 0L0 0.471404L5.42115 5.89256L0 11.3137L0.471404 11.7851L5.89256 6.36396L11.3137 11.7851L11.7851 11.3137L6.36396 5.89256L11.7851 0.471404Z"
                       fill={'#494C6B'}/>
                    </svg>
                  </div>
                  )
              }
            }) : null
          }
  
          {/* Main Footer  */}
        <div className="main-footer" style={{borderTop: day? '1px solid #E3E4F1': '1px solid #393A4B'}}>
          <p className="items-counter" style={{color: day? '#9495A5':'#5B5E7E'}}>{digit} Items left</p>
          <p onClick={() => handleClearCompleted()} className="completed-cleaner" style={{color: day? '#9495A5':'#5B5E7E'}}>Clear Completed</p>
        </div>
      </div>

          {/* Footer  */}
      <div className="footer" style={{backgroundColor: day? '#FFF': '#25273D', boxShadow: day? '0px 35px 50px -15px rgba(194, 195, 214, 0.50)'
      : '0px 35px 50px -15px rgba(0, 0, 0, 0.50)'}}>
        <p className="all" onClick={() => handleAllClick()} style={{color: allColor}}>All</p>
        <p className="active" onClick={() => handleActiveClick()} style={{color: activeColor}}>Active</p>
        <p className="complete" onClick={() => handleCompleteClick()} style={{color: completeColor}}>Completed</p>
      </div>
      </div>
    </div>
  )
}

export default App