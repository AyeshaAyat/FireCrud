import React, { useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { getDatabase, push, ref, set } from "firebase/database";
const ToDo = () => {
  const [task, setTask] = useState("");
  const [taskError, setTaskError] = useState("");
  const db = getDatabase();
  const handleTaskInput = (e) => {
    setTask(e.target.value);
  };
  const handleTaskBtn = () => {
    if (!task) {
      setTaskError("Task is missing");
    } else {
      set(
        push(ref(db, "taskcollection/")),
        {
          name: task,
        }
      )
          .then(()=>alert("hoyeche"))
          .catch(()=>taskError)
       
    }
  };
  return (
    <>
      <div className="bg-blue-300 py-40">
        <div className="max-w-sm mx-auto">
          <div className="mb-4">
            <label className="block mb-2.5 text-[21px] text-center  italic font-medium text-gray-900 dark:text-white">
              To-Do List
            </label>
            <input
              onChange={handleTaskInput}
              type="email"
              className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="add task here"
            />
            {taskError && (
              <>
                <div className="flex">
                  <MdErrorOutline className="text-[18px] mt-0.5 ml-2 text-red-600 " />
                  <p className="text-[14px] text-red-600 ml-0.5 ">
                    {taskError}
                  </p>
                </div>
              </>
            )}
          </div>
          <button
            onClick={handleTaskBtn}
            className="text-white  bg-yellow-400 hover:bg-pink-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-small w-full sm:w-auto px-41 ml-0.5 py-2.5  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDo;
