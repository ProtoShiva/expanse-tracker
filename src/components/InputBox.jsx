import React, { useState } from "react"

const InputBox = () => {
  const [inputValue, setInputValue] = useState("")
  const [userName, setUserName] = useState([])
  const users = ["himanshu", "kanchu", "minu", "Harry", "Paras"]
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleClick = (name) => {
    setUserName((prevUserNames) => [...prevUserNames, name])
  }
  return (
    <div className="flex justify-center">
      <div className="bg-gray-400 w-1/2 flex flex-col items-center py-5 gap-1">
        <div className="w-[70%] rounded-md h-8 relative ">
          <input
            type="text"
            onChange={handleChange}
            value={inputValue}
            className="w-full h-full rounded-md bg-red-400 outline-none p-2 "
          />
          <div className="absolute inset-0 bg-teal-400 w-fit rounded-full px-2 flex items-center ">
            <p className="mr-2"> {userName}</p>

            <div className="absolute top-0 right-1">x</div>
          </div>
        </div>

        <div className="w-[70%] bg-green-300 rounded-md p-3  flex flex-col">
          {users.map((item) => (
            <p
              className="cursor-pointer w-fit bg-sky-300"
              onClick={() => handleClick(item)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InputBox
