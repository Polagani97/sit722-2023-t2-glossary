var express = require('express');
var router = express.Router();

const nameList = [
{ 'id': '1.', 'Term' : 'DevSecOps', 'Explanation' : 'Incorporating security testing at each level of the software development procedure is known as devsecops.', 'Acknowledgement': 'Amazon Web Services, Inc. (n.d.). What is DevSecOps? - Developer Security Operations - AWS. [online] Available at: https://aws.amazon.com/what-is/devsecops/.'},
{ 'id': '2.', 'Term' : 'DevOps', 'Explanation' : 'The phrases "Development" and "Operations" are combined to form the term "DevOps." Promoting the growth and operation process together is part of the culture. ', 'Acknowledgement': 'www.javatpoint.com. (n.d.). DevOps Tutorial - javatpoint. [online] Available at: https://www.javatpoint.com/devops.'},
{ 'id': '3.', 'Term' : 'Terraform', 'Explanation' : 'Terraform is an infrastructure as code solution that makes it safe and effective to create, modify, and version cloud and on-premise resources. ', 'Acknowledgement': ' Hashicorp (n.d.). What is Terraform | Terraform | HashiCorp Developer. [online] What is Terraform | Terraform | HashiCorp Developer. Available at: https://developer.hashicorp.com/terraform/intro.'},
{ 'id': '4.', 'Term' : 'AIops', 'Explanation' : 'Artificial intelligence for IT operations is referred to as AIOps it is used in the context to describe the use of AI and ML technologies to enhance and streamline various processes related to IT operations and the creation of software. ', 'Acknowledgement': ' Cisco. (n.d.). What Is AIOps? Artificial Intelligence for IT Operations. [online] Available at: https://www.cisco.com/c/en/us/solutions/artificial-intelligence/what-is-aiops.html.'},
{ 'id': '5.', 'Term' : 'Agile', 'Explanation' : 'Agile refers to software development methodologies that prioritize iterative delivery, teamwork, ongoing planning, and continuous learning.  ', 'Acknowledgement': 'mijacobs (n.d.). What is Agile? - Azure DevOps. [online] learn.microsoft.com. Available at: https://learn.microsoft.com/en-us/devops/plan/what-is-agile.'},
{ 'id': '6.', 'Term' : 'Kubernetes', 'Explanation' : 'For controlling containerized applications and services, Kubernetes is a portable, adaptable, open-source platform that supports expressive configuration and orchestration. ', 'Acknowledgement': 'Kubernetes. (n.d.). Overview. [online] Available at: https://kubernetes.io/docs/concepts/overview/.'},
{ 'id': '7.', 'Term' : 'Docker', 'Explanation' : 'A tool for executing apps within containers is called Docker. Containers combine all the code and dependencies required for your program to function into a single file that will function identically on any machine. ', 'Acknowledgement': 'Heddings, A. (n.d.). What Does Docker Do, and When Should You Use It? [online] How-To Geek. Available at: https://www.howtogeek.com/devops/what-does-docker-do-and-when-should-you-use-it/.'},
{ 'id': '8.', 'Term' : 'Silos', 'Explanation' : 'A silo is a discrete area within a system where data is kept apart from other components of an organizations information and communication technology architecture, either consciously or unconsciously. ', 'Acknowledgement': ' Techopedia.com. (2020). What is a Silo? - Definition from Techopedia. [online] Available at: https://www.techopedia.com/definition/25939/silo.'},
{ 'id': '9.', 'Term' : 'Cloud Storage', 'Explanation' : ' Digital data is saved on servers located off-site in a kind of computer data storage known as cloud storage.', 'Acknowledgement': ' Google (n.d.). What is Cloud Storage & How Does it Work? [online] Google Cloud. Available at: https://cloud.google.com/learn/what-is-cloud-storage.'},
{ 'id': '10.', 'Term' : 'Microservices ', 'Explanation' : ' One such service in charge of software development is the microservice. It enables you to check the architecture for service and performance and aids in the identification of potential debugging issues.', 'Acknowledgement': 'mijacobs (n.d.). What are Microservices? - Azure DevOps. [online] learn.microsoft.com. Available at: https://learn.microsoft.com/en-us/devops/deliver/what-are-microservices.'}, 
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DevOps Glossary', sub: ' Glossary Terms and their Description ', names: nameList });
});

module.exports = router;
