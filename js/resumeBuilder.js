

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

   "welcomeMessage":"Thanks for taking the time to view my resumé, and also being awesome!",
   "skills":
   ["HTML","CSS","Javascript","JQuery","AngularJS","node.js","MySQL","saving the world"]


}


$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contact);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);

var work = {};

work.employer = "Red Robin";
work.position = "Manager";
work.year = 1;
work.location = "Saratoga";

var education = {};

education["school"] = "Foothill College";
education["years"] = "2013-2014";
education["city"] = "Los Altos, California, US";


$("#main").append(work["position"]);
$("#main").append(education.name);








