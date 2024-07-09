import React, { useState } from "react"
const expenseList = []
const Expense = () => {
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState("")
  const handleSubmit = () => {
    setDescription("")
    setAmount(0)
    setDate("")
    expenseList.push({
      description: description,
      amount: amount,
      date: date
    })

    //to persist data we can use local storage, and get the item from there
  }

  const handleDelete = (delAmount) => {
    expenseList.filter((data) => {
      data.amount === delAmount
    })
  }

  return (
    <div>
      <div className="flex justify-around mt-8 w-full bg-gray-200">
        <div className="flex flex-col justify-center items-center">
          {" "}
          <p>Description</p>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            className="rounded-md p-1 text-gray-500"
            value={description}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          {" "}
          <p>Amount</p>
          <input
            type="text"
            onChange={(e) => setAmount(e.target.value)}
            className="rounded-md p-1 text-gray-500"
            value={amount}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          {" "}
          <p>Date</p>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            className="rounded-md p-1 text-gray-500"
            value={date}
          />
        </div>
        <button
          className="px-2 bg-blue-500 rounded-lg w-[150px]"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>

      <div className="mt-6 p-2">
        <h2 className="text-2xl text-orange-500">Your Expenses</h2>
        {expenseList.map((data) => {
          return (
            <div key={data.description} className="mb-3">
              <p>{data.description}</p>
              <p>{data.amount}</p>
              <p>{data.date}</p>
              <button
                className="bg-red-500 px-2"
                onClick={handleDelete(data.amount)}
              >
                delete
              </button>
            </div>
          )
        })}

        <p>
          Your Total amount is
          {expenseList.reduce((acc, data) => (acc += data.amount), 0)}
        </p>
      </div>
    </div>
  )
}

export default Expense
