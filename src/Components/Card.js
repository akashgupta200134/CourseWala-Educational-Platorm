import React from "react";
import { FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedcourses = props.likedcourses;
  let setlikedcourses = props.setlikedcourses;


  function clickHandler() {

if(likedcourses.includes(course.id) ) {

    setlikedcourses((prev) => prev.filter((cid) => (cid !== course.id)) );
    toast.warning("Like removed");

}

else{

    if(likedcourses.length === 0){
      setlikedcourses([course.id]);

    }

    else{

        setlikedcourses((prev) => [...prev , course.id]);
    }

    toast.success("Liked Successfully");

}


  }

  return (
    <div className="w-[300px] bg-slate-900 bg-opacity-80 rounded-md overflow-hidden ">
      <div className="relative">
        <img src={course.image.url}></img>

        <div className="w-[40px] h-[40px] bg-white rounded-full  absolute  right-2 bottom-[-14px] grid place-items-center">
          <button onClick={clickHandler}>
             
            {

                likedcourses.includes(course.id)? (<FcLike fontSize="1.75rem" />) :(<FcLikePlaceholder fontSize="1.75rem"/>)   

            }

          </button>


        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">{course.title} </p>
     <p className="mt-2 text-white"> 
         
         {
            course.description.length > 100  ? ( course.description.substr(0,100)) + "..." : ( course.description)
         }
 </p>

      </div>
    </div>
  );
};

export default Card;
