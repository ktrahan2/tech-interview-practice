const data = [
    {
        difficulty_level: 1,
        name: "Welcome"
    },
    {
        difficulty_level: 1,
        name: "HVAC"
    },
    {
        difficulty_level: 1,
        name: "HVAC2"
    },
    {
        difficulty_level: 3,
        name: "Advanced"
    },
    {
        difficulty_level: 3,
        name: "HVAC motors"
    },
    {
        difficulty_level: 2,
        name: "Advanced"
    }
]

//create an object to hold the data key: value = difficulty_level = [courses]
//insert the courses into the difficulty array by "binary insert" so they are alphabetically sorted

const sortByDifficulty = (courses) => {
    const coursesObject = {};

    courses.forEach(course => {
        if (coursesObject[course.difficulty_level] && course.difficulty_level) {
            coursesObject[course.difficulty_level] = insertCourseByNameAlphabetically(course, coursesObject[course.difficulty_level])
        } else if (!course.difficulty_level && courses["randoms"]) {
            coursesObject["randoms"] = insertCourseByNameAlphabetically(course, coursesObject["randoms"])
        } else if ( !course.difficulty_level) {
            coursesObject["randoms"] = [course]
        }
         else {
            coursesObject[course.difficulty_level] = [course]
        }
    });
    
    return coursesObject;
};

const insertCourseByNameAlphabetically = (value, array, startVal, endVal ) => {
    
    const length = array.length
    const start = typeof startVal !== "undefined" ? startVal : 0
    const end = typeof endVal !== "undefined" ? endVal : length - 1
    const middle = start + Math.floor((end - start)/2)
    
    if ( value.name.toLowerCase() > array[end].name.toLowerCase() ) {
        array.splice(end + 1, 0, value)
        return array
    }

    if ( value.name.toLowerCase() < array[start].name.toLowerCase() ) {
        array.splice(start, 0, value)
        return array
    }

    if ( start >= end ) {
        return
    }

    if ( value.name.toLowerCase() < array[middle].name.toLowerCase() ) {
        insertCourseByNameAlphabetically(value, array, start, middle - 1)
        return array
    }

    if ( value.name.toLowerCase() > array[middle].name.toLowerCase() ) {
        insertCourseByNameAlphabetically(value, array, middle + 1, end) 
        return array
    }

}

console.log(sortByDifficulty(data))

//expected output
// {
//     1: [
//         {
//             difficulty_level = 1,
//             name: "HVAC"
//         },
//         {
//             difficulty_level = 1,
//             name: "HVAC2"
//         },
//         {
//             difficulty_level = 1,
//             name: "Welcome"
//         },
//     ]
//     3: [
//         {
//             difficulty_level = 3,
//             name: "Advanced"
//         }
//     ]
// }