import React, {useState} from "react";

interface HeaderProps {
   onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> =  ({ onSearch }) => {
   const [input, setInput] = useState<string>("");

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      setInput(value);
      onSearch(value);
   }

   return(<div>
      <header className={"flex flex-col sm:flex-row items-center justify-around bg-white shadow-md rounded-md p-4 mb-6"}>
         <input type="text" placeholder="Search notes" value={input} onChange={handleChange} className={"w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"}/>
         <h1 className={"text-3xl font-bold text-gray-800 mb-3 sm:mb-0 text-center sm:text-left"}>Notes App</h1>
      </header>

   </div>)
}
export default Header;