import React,{useState} from "react"


function App() {

  const [name, setName] = useState('')
  const [email, setMail] = useState('')

const [oneChecked, setOne] = useState(false)
const toggleOne = (e) => setOne(e.target.checked)

const [twoChecked, setTwo] = useState(false)
const toggleTwo = (e) => setTwo(e.target.checked)

const [threeChecked, setThree] = useState(false)
const toggleThree = (e) => setThree(e.target.checked)


  const handleName = (e) => setName(e.target.value)
   const handleMail = (e) => setMail(e.target.value)

const [submit, setSubmit] = useState(false)

const handleSubmit = (e) => {
  e.preventDefault()
  setSubmit((submit) => !submit)
}

  
  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>




        <form  onSubmit={handleSubmit}>

     {submit? <h2>I Made This?! Oh Yeah, I Made This!!</h2>: null}

        <label htmlFor="name">Enter your Name:</label>
        <input
        type="text"
        id="name"
        value={name}
        placeholder="name"
        onChange={handleName}
        />
        <label htmlFor="email">Enter your Email address:</label>
        <input
        type="text"
        id="email"
        value={email}  
         placeholder="email address "
        onChange={handleMail} 
        />



      <div>
      <input
      type="checkbox"
      id="one"
      checked={oneChecked}
      onChange={toggleOne}

      />
      <label htmlFor="one">One</label>
      <input
      type="checkbox"
      id="two"
      checked={twoChecked}
      onChange={toggleTwo}
      />
      <label htmlFor="two">Two</label>
      <input
      type="checkbox"
      id="three"
      checked={threeChecked}
      /*aria-checked = {threeChecked}*/
      onChange={toggleThree}

      />
       <label htmlFor="three">Three</label>
       </div>

      <button type="submit">Submit This</button>
        </form>
      </div>
    </main>
  );
}

export default App;
