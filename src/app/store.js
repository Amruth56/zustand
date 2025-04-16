import create from "zustand";

// through persist we cvan store all the information in the local torage of the browser
import { devtools, persist } from "zustand/middleware";

const CourseStore = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((course) => course.id !== courseId),
    }));
  },
  toggleCourseStatus: (courseId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === courseId
          ? { ...course, completed: !course.completed }
          : course
      ),
    }));
  },
});

const useCourseStore = create(
    devtools(
        persist(CourseStore,{
            name:"courses"
        })
    )
)
export default useCourseStore;
