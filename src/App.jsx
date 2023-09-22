import { useState } from "react"

function App() {
  const [day, setDay] = useState(true)
  const [appBackgroundColor, setAppBackgroundColor] = useState('#FAFAFA')
  const [appBackgroundImg, setAppBackgroundImg] = useState("url('https://s3-alpha-sig.figma.com/img/03b8/22a8/10f232874b021926bb904eafb394287f?Expires=1696204800&Signature=LoiyTI1hmPFdhLEvL7MadcUZNQI8VCxZ9uNzplVWxm2EY37gJQ6h9ggojSAvyTr3fHEZXdAmBQrwdhwr1U5T7xjCp8weDhm3qXWpnu-Qt8ZYJahBRw3HN4LW~azznNJqDuMOXoJBNaNiJXrpg23BObk9nqDOypF~HL8vCt353oNjT1w9mDG2n9UTCVL54PU~a9Rf~CE8DhRK2US9cTcGeAmHIE58tA~ZfYe9KeJlJO0mPD7E1IcSXEyAxrIRt3Ag8gkCO7X5FWUf6oWwB2B54P2Jy2K9FDe~XnDf4iMtsI~8vkkhw6BKtPgERbMmNS411Fm3Sndiwiwdzid1-VTFAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')")
  const [appBackgroundImgColor, setBackgroundImgColor] = useState('linear-gradient(to left, rgb(85, 221, 255, 0.25), rgb(192, 88, 243)')
  const [listBackground, setListBackground] = useState('#FFF')
  const [checkBorder, setCheckBorder] = useState('1px solid #E3E4F1')
  const [footerColor, setFooterColor] = useState('#9495A5')

  return (
    <div className='App' style={{backgroundColor: appBackgroundColor}}>
      <div className="header">
        <div className='backgroundImg' style={{backgroundImage: appBackgroundImg}}/>
        <div className="backgroundImgColor" style={{background: appBackgroundImgColor}}/>
      </div>

      <div className="wrapper">
        <div className="title">
          <p className="todo">TODO</p>
          {day? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8244 0.166024C8.14853 0.922784 5.38462 4.17708 5.38462 8.07692C5.38462 12.5377 9.00078 16.1538 13.4615 16.1538C15.766 16.1538 17.8451 15.1887 19.3166 13.6406C17.8608 17.3633 14.2383 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C10.6231 0 11.2328 0.0569837 11.8244 0.166024Z" fill="white"/>
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.23077 0.769231C9.23077 0.344396 9.57517 0 10 0C10.4248 0 10.7692 0.344396 10.7692 0.769231V3.07692C10.7692 3.50176 10.4248 3.84615 10 3.84615C9.57517 3.84615 9.23077 3.50176 9.23077 3.07692V0.769231ZM13.8462 10C13.8462 12.1242 12.1242 13.8462 10 13.8462C7.87583 13.8462 6.15385 12.1242 6.15385 10C6.15385 7.87583 7.87583 6.15385 10 6.15385C12.1242 6.15385 13.8462 7.87583 13.8462 10ZM10 16.1538C9.57517 16.1538 9.23077 16.4982 9.23077 16.9231V19.2308C9.23077 19.6556 9.57517 20 10 20C10.4248 20 10.7692 19.6556 10.7692 19.2308V16.9231C10.7692 16.4982 10.4248 16.1538 10 16.1538ZM19.2308 9.23077C19.6556 9.23077 20 9.57517 20 10C20 10.4248 19.6556 10.7692 19.2308 10.7692H16.9231C16.4982 10.7692 16.1538 10.4248 16.1538 10C16.1538 9.57517 16.4982 9.23077 16.9231 9.23077H19.2308ZM3.84615 10C3.84615 9.57517 3.50176 9.23077 3.07692 9.23077H0.769231C0.344396 9.23077 0 9.57517 0 10C0 10.4248 0.344396 10.7692 0.769231 10.7692H3.07692C3.50176 10.7692 3.84615 10.4248 3.84615 10ZM15.9832 2.92893C16.2836 2.62853 16.7707 2.62853 17.0711 2.92893C17.3715 3.22934 17.3715 3.71639 17.0711 4.01679L15.4393 5.64857C15.1389 5.94898 14.6518 5.94898 14.3514 5.64857C14.051 5.34817 14.051 4.86112 14.3514 4.56072L15.9832 2.92893ZM5.64857 14.3514C5.34817 14.051 4.86112 14.051 4.56072 14.3514L2.92893 15.9832C2.62853 16.2836 2.62853 16.7707 2.92893 17.0711C3.22934 17.3715 3.71639 17.3715 4.01679 17.0711L5.64857 15.4393C5.94898 15.1389 5.94898 14.6518 5.64857 14.3514ZM17.0711 15.9832C17.3715 16.2836 17.3715 16.7707 17.0711 17.0711C16.7707 17.3715 16.2836 17.3715 15.9832 17.0711L14.3514 15.4393C14.051 15.1389 14.051 14.6518 14.3514 14.3514C14.6518 14.051 15.1389 14.051 15.4393 14.3514L17.0711 15.9832ZM5.64857 5.64857C5.94898 5.34817 5.94898 4.86112 5.64857 4.56072L4.01679 2.92893C3.71639 2.62853 3.22934 2.62853 2.92893 2.92893C2.62853 3.22934 2.62853 3.71639 2.92893 4.01679L4.56072 5.64857C4.86112 5.94898 5.34817 5.94898 5.64857 5.64857Z" fill="white"/>
                </svg>}
        </div>

        <div className="input-container" style={{backgroundColor: listBackground}}>
          <div className="check" style={{border: checkBorder}}></div>
          <form className='form' action="">
            <input type="text" placeholder="Create a new todo..."/>
          </form>
        </div>

      <div className="main" style={{backgroundColor: listBackground}}>

      </div>

      <div className="footer" style={{backgroundColor: listBackground, color: footerColor}}>
        <p className="all">All</p>
        <p className="active">Active</p>
        <p className="complete">Completed</p>
      </div>

      <p className="last" style={{color: footerColor}}>Drag and drop to reorder list</p>
      </div>
    </div>
  )
}

export default App