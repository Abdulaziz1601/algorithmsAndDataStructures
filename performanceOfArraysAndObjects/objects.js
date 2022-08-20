let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4]
};

// Fast access, insetion and removal

// Insertion - O(1)
// Removal - O(1)
// Searching - O(n)
// Access - O(1)

// When we don't need any ordering, object is the best choice

// Methods of Object

// O(n)
console.log(Object.keys(instructor));
// Code inside keys is going to add key to result array N times -> O(n)

// O(n)
console.log(Object.values(instructor));

// O(n)
console.log(Object.entries(instructor));

// O(1)
console.log(instructor.hasOwnProperty("firstName"));

