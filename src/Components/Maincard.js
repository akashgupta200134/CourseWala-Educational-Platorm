import React, { useState } from 'react';
import Card from './Card';

const Maincard = (props) => {
  const { courses, category } = props;
  const [likedcourses, setlikedcourses] = useState([]);

  function getCourses() {
    if (!courses || !category) {
      return []; // Handle the case where courses or category is not defined
    }

    if (category === 'All') {
      let allcourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allcourses.push(courseData);
        });
      });
      return allcourses;
    } else {
      return courses[category] || []; // Handle the case where courses[category] is not defined
    }
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {getCourses().map((course) => (
        <Card key={course.id} course={course} likedcourses={likedcourses} setlikedcourses={setlikedcourses} />
      ))}
    </div>
  );
};

export default Maincard;
