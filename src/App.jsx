import prSVG from './assets/pc-display-horizontal.svg'
import gitSVG from './assets/github.svg'
import linkSVG from './assets/linkedin.svg'
import dcSVG from './assets/discord.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='h-screen bg-gradient-to-br from-zinc-900 to-zinc-700 flex justify-center items-center'>
        <div className='h-3/4 w-auto bg-zinc-700 rounded-3xl columns-2 flex justify-around'>
          <div className='flex flex-col justify-center gap-10 pl-20'>
            <img className='size-48 rounded-full' src="./profile.jpeg" alt="" />
            
            <h1 className='text-4xl text-white poppins-medium'>MuhammdIqball</h1>
            <h1 className='text-2xl text-white w-2/3 poppins-regular'>Hello, Welcome to my Portofolio Pages!</h1>
          </div>
          <div className='flex flex-col justify-center pr-20'>
            <a href="https://muhammdiqballprojects.carrd.co/">
              <button className='text-2xl bg-white h-14 w-auto rounded-2xl flex justify-around items-center mb-5'>
                <p className='poppins-regular px-5'>Projects</p>
                <img className='size-8 mx-10' src={prSVG} alt="" />
              </button>
            </a>

            <a href="https://github.com/MuhammdIqball">
              <button className='flex justify-around h-14 w-auto items-center text-2xl bg-white flex-row rounded-2xl mb-5'>
                <p className='poppins-regular mx-6'>GitHub</p>
                <img className='size-8 mx-11' src={gitSVG} alt="" />
              </button>
            </a>

            <a href="https://www.linkedin.com/in/muhammadiqbalqa/">
              <button className='text-2xl bg-white h-14 w-auto rounded-2xl flex justify-around items-center mb-5'>
                <p className='poppins-regular px-5'>LinkedIn</p>
                <img className='size-8 mx-10' src={linkSVG} alt="" />
              </button>
            </a>

            <a href="http://">
              <button className='text-2xl bg-white h-14 w-auto rounded-2xl flex justify-around items-center mb-5'>
                <p className='poppins-regular px-5'>Discord</p>
                <img className='size-8 mx-11' src={dcSVG} alt="" />
              </button>
            </a>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
