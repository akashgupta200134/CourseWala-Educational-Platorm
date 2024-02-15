import React from 'react';
import Navbar from "./Components/Navbar";
import Maincard from "./Components/Maincard";
import Filter from "./Components/Filter";
import { apiurl, filterData } from "./Components/data";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setcategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiurl);
      let output = await response.json();

      setCourses(output.data);
    }
    
    catch (error) {
      toast.error("There Is An Issues In Your Network");
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='min-h-screen flex flex-col bg-slate-700'>
      
      <div>
        <Navbar />
      </div>

      <div className='bg-slate-700'>
        <div>
          <Filter 
            filterData={filterData}
            category={category}
            setcategory={setcategory}
          />
        </div>
        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-w justify-center items-center min-h-[50vh]'>
          {
          
          loading ? <Loader /> : <Maincard courses={courses} category={category} />
          
          }
        </div>
      </div>
    </div>
  );
};

export default App;
