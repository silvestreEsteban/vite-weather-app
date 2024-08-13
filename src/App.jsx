import './App.css'

function App() {
 

  return (
    <>
     <div className="main-body">
            <div className="form-body">
               <h1 id='header1'>Silvestre's Vite Weather App</h1>
               <form className='form' id='form'>
                 <label htmlFor="city-input">Please enter a city:</label>
                 <br />
                 <input type='text' id='city-input' placeholder='e.g. Tokyo'></input>
                 <br />
                 <button type='submit' id="submit-button">Submit</button>
               </form>
               <div className='text-output'></div>
            </div>
            
        </div>
    </>
  )
}

export default App
