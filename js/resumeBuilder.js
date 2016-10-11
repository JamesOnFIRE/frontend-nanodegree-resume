/*
This is empty on purpose! Your code to build the resume will go here.
*/


var formattedName = HTMLheaderName.replace("%data%","James Talbot");

var formattedRole = HTMLheaderRole.replace("%data%","Front End Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



var bio =
{
   "name":"James Talbot",
   "role":"Front end web developer",
   "contact":
{
   "mobile":"650-417-5873",
   "email":"jamestalbot64@yahoo.com"
},

   "welcome message":"Thanks for taking the time to view my resumé, and also being awesome!",
   "skills":
   ["HTML","CSS","Javascript","JQuery","AngularJS","node.js","MySQL","saving the world"]


}


$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contact);
$("#main").append(bio.welcome message);
$("#main").append(bio.skills);





