/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const LapTop = {
  name: "Asus",
  color: "Black",
  CPU: "core i7",
  OS: "Linux-Ubuntu",
  generation: 9,
  size: {
    height: 30,
    length: 50
  },
  lidOpen: true,
  status: function(lidStatus){
  this.lidOpen= lidStatus;
  },
  newSize: function (newhieght,newlength){
    this.size = newhight,
      this.size = newlength;
  },
};
console.log("this is laptop:" , LapTop);
console.log("this is size:" , LapTop.size.height);
