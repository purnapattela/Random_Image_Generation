/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const NavBar = () => {
    return (
      <div className="bg-[#FF6969] min-w-full min-h-[120px]">
        <div className="flex justify-around pt-9 p-2">
        <h1 className="text-2xl capitalize text-white font-mono">{`Welcome 🙏  ${new Date().toLocaleString()}`}</h1>
  
        {/* <button className="button border-2 px-4 py-2 rounded-md bg-white text-[#FF6969]">Refresh</button> */}
        </div>
      </div>
    )
  }
  
  export default NavBar