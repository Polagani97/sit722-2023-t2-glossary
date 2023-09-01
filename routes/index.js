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
{ 'id': '11.', 'Term' : 'Continuous Integration (CI) ', 'Explanation' : 'Automating the build and testing processes and often merging code changes into a common repository to find and fix integration problems as soon as they arise.', 'Acknowledgement': 'Atlassian (2019). What is Continuous Integration | Atlassian. [online] Atlassian. Available at: https://www.atlassian.com/continuous-delivery/continuous-integration.'}, 
{ 'id': '12.', 'Term' : 'Continuous Deployment (CD) ', 'Explanation' : 'a development of continuous integration that makes that code updates are automatically sent to production settings after clearing several vetting and approval phases.', 'Acknowledgement': 'www.synopsys.com. (n.d.). What Is CI/CD and How Does It Work? | Synopsys. [online] Available at: https://www.synopsys.com/glossary/what-is-cicd.html#:~:text=Continuous%20delivery%20(CD)%20is%20the.'}, 
{ 'id': '13.', 'Term' : 'INFRASTRUCTURE AS CODE ', 'Explanation' : 'a technique for managing and provisioning infrastructure using machine-readable configuration files rather than human procedures, resulting in deployments that are more effective and reliable.', 'Acknowledgement': 'RedHat (2022). What is Infrastructure as Code (IaC)? [online] www.redhat.com. Available at: https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac. '}, 
{ 'id': '14.', 'Term' : 'Version Control ', 'Explanation' : 'the act of utilising version control tools like Git to monitor and manage changes to file configurations or the source code.', 'Acknowledgement': 'Atlassian (2019b). What is version control. [online] Atlassian. Available at: https://www.atlassian.com/git/tutorials/what-is-version-control. '}, 
{ 'id': '15.', 'Term' : 'Incident Management ', 'Explanation' : 'the act of promptly and methodically reacting to issues and outages and resolving them.', 'Acknowledgement': 'SafetyCulture. (n.d.). What is Incident Management? [online] Available at: https://safetyculture.com/topics/incident-management/. '}, 
{ 'id': '16.', 'Term' : 'Metrics ', 'Explanation' : 'The industry standard for assessing the dependability and calibre of software delivery inside an organisation is considered to be DevOps metrics. We will be able to locate bottlenecks that are delaying delivery and resulting in deployed code problems by monitoring these data. ', 'Acknowledgement': 'www.pluralsight.com. (n.d.). 11 key DevOps metrics to measure team success. [online] Available at: https://www.pluralsight.com/blog/teams/devops-metrics#:~:text=DevOps%20metrics%20are%20regarded%20as [Accessed 4 Aug. 2023]. '}, 
{ 'id': '17.', 'Term' : 'Deployment Pipeline ', 'Explanation' : 'a set of automated processes that code changes go through from development to deployment in production.', 'Acknowledgement': 'PagerDuty. (n.d.). What is a Deployment Pipeline? [online] Available at: https://www.pagerduty.com/resources/learn/what-is-a-deployment-pipeline/#:~:text=In%20software%20development%2C%20a%20deployment. '}, 
{ 'id': '18.', 'Term' : 'Configuration Management ', 'Explanation' : 'the method of automating system configuration management and tracking in order to preserve consistency and stability.', 'Acknowledgement': 'RedHat (2019). What is configuration management. [online] www.redhat.com. Available at: https://www.redhat.com/en/topics/automation/what-is-configuration-management. '}, 
{ 'id': '19.', 'Term' : 'Application Performance Monitoring', 'Explanation' : 'Applications behaviour and performance are tracked and analysed to find problems and fix them. ', 'Acknowledgement': 'Anderson, D. (2021). What is APM? Application performance monitoring in a cloud-native world. [online] Dynatrace news. Available at: https://www.dynatrace.com/news/blog/what-is-apm-2/. '}, 
{ 'id': '20.', 'Term' : 'GitOps ', 'Explanation' : 'a method of developing software where all system modifications are controlled by Git repositories, offering a declarative method of managing infrastructure and applications.', 'Acknowledgement': ' about.gitlab.com. (n.d.). What is GitOps? | GitLab. [online] Available at: https://about.gitlab.com/topics/gitops/.'}, 
{ 'id': '21.', 'Term' : 'Azure ', 'Explanation' : 'Azure, referred to as Microsoft Azure, stands as a cloud computing platform and an array of services offered by Microsoft. ', 'Acknowledgement': 'azure.microsoft.com. (n.d.). What is Azure—Microsoft Cloud Services | Microsoft Azure. [online] Available at: https://azure.microsoft.com/en-au/resources/cloud-computing-dictionary/what-is-azure/. '}, 
{ 'id': '22.', 'Term' : 'Bootstrapping ', 'Explanation' : 'A well-known open-source framework for the front end that offers pre-designed CSS and JavaScript elements to assist developers in rapidly creating web applications that are both responsive and visually attractive.', 'Acknowledgement': 'Kenton, W. (2023). What Is Bootstrapping? [online] Investopedia. Available at: https://www.investopedia.com/terms/b/bootstrapping.asp. '}, 
{ 'id': '23.', 'Term' : 'Docker Compose ', 'Explanation' : 'Docker Compose streamlines the tasks of describing, executing, and overseeing multi-container applications, offering significant utility in the realms of development and deployment procedures. ', 'Acknowledgement': 'Docker Documentation. (2022). Use Docker Compose. [online] Available at: https://docs.docker.com/get-started/08_using_compose/. '}, 
{ 'id': '24.', 'Term' : 'Azure Storage ', 'Explanation' : 'Azure Storage stands as a cloud-oriented storage service offered by Microsoft Azure, delivering expandable and safeguarded storage options suitable for a wide array of data, spanning from minor files to substantial quantities of both organized and unstructured data. ', 'Acknowledgement': 'tamram (2023). Introduction to Azure Storage - Cloud storage on Azure. [online] learn.microsoft.com. Available at: https://learn.microsoft.com/en-us/azure/storage/common/storage-introduction. '}, 
{ 'id': '25.', 'Term' : 'Container ', 'Explanation' : 'A container, as the name suggests, serves as a holder for something within it. In this context, well employ it to encapsulate or host a microservice. ', 'Acknowledgement': 'www.oreilly.com. (n.d.). 3 Publishing your first microservice - Bootstrapping Microservices with Docker, Kubernetes, and Terraform [Book]. [online] Available at: https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/03.htm#heading_id_5. '}, 
{ 'id': '26.', 'Term' : 'WSL ', 'Explanation' : 'It functions as a compatibility interface within Windows operating systems, permitting the direct execution of a Linux environment on a Windows computer. ', 'Acknowledgement': 'craigloewen-msft (n.d.). What is Windows Subsystem for Linux. [online] learn.microsoft.com. Available at: https://learn.microsoft.com/en-us/windows/wsl/about. '}, 
{ 'id': '27.', 'Term' : 'Vagrantfile ', 'Explanation' : 'A Vagrantfile is a setup file employed with the Vagrant tool to establish and arrange virtual machine (VM) environments. Vagrant serves as a utility to generate and oversee development settings that can be conveniently distributed and duplicated within a team. ', 'Acknowledgement': 'MariaDB KnowledgeBase. (n.d.). Creating a Vagrantfile. [online] Available at: https://mariadb.com/kb/en/creating-a-vagrantfile/#:~:text=A%20Vagrantfile%20is%20a%20Ruby [Accessed 26 Aug. 2023]. '}, 
{ 'id': '28.', 'Term' : 'Alipine ', 'Explanation' : 'Alpine Linux is a Linux distribution that prioritizes being both lightweight and security-conscious. It is crafted for minimalism, effectiveness, and robust security, which renders it widely favored for containerized applications and settings. ', 'Acknowledgement': 'www.linkedin.com. (n.d.). How do you scale and deploy docker alpine or ubuntu containers across multiple servers or clouds? [online] Available at: https://www.linkedin.com/advice/0/how-do-you-scale-deploy-docker-alpine-ubuntu-containers#:~:text=Alpine%20is%20a%20lightweight%20Linux [Accessed 26 Aug. 2023]. '}, 
{ 'id': '29.', 'Term' : 'Container registry ', 'Explanation' : 'A container registry serves as a centralized location where container images are stored, organized, and shared. ', 'Acknowledgement': 'www.redhat.com. (n.d.). What is a container registry? [online] Available at: https://www.redhat.com/en/topics/cloud-native-apps/what-is-a-container-registry#:~:text=A%20container%20registry%20is%20a [Accessed 26 Aug. 2023]. '}, 
{ 'id': '30.', 'Term' : 'Private container ', 'Explanation' : 'A private container is an image contained within a private container registry, and it is not accessible to the public. ', 'Acknowledgement': 'Docker Documentation. (2023). Deploy a registry server. [online] Available at: https://docs.docker.com/registry/deploying/. '}, 
{ 'id': '31.', 'Term' : 'Rabbit MQ ', 'Explanation' : 'RabbitMQ finds extensive application in microservices infrastructures, distributed systems, and enterprise-level software to facilitate asynchronous communication among various components or services. ', 'Acknowledgement': 'Rabbitmq.com. (2019). Messaging that just works — RabbitMQ. [online] Available at: https://www.rabbitmq.com/. '}, 
{ 'id': '32.', 'Term' : 'YAML ', 'Explanation' : 'It is often used for configuration files and data exchange between languages with different data structures. ', 'Acknowledgement': 'www.redhat.com. (n.d.). What is YAML? [online] Available at: https://www.redhat.com/en/topics/automation/what-is-yaml. '}, 
{ 'id': '33.', 'Term' : 'Body Parser ', 'Explanation' : 'A body parser is middleware or a software component used in web applications to parse and extract data from the HTTP request body. ', 'Acknowledgement': 'https://www.simplilearn.com/tutorials/nodejs-tutorial/body-parser-in-express-js#:~:text=BootcampExplore%20Program-,What%20Is%20Body%2Dparser%3F,allows%20you%20to%20access%20req. '}, 
{ 'id': '34.', 'Term' : 'Cluster ', 'Explanation' : 'A cluster is a group of interconnected computers or servers that work together to perform a specific task or provide a set of services.  ', 'Acknowledgement': 'WhatIs.com. (n.d.). What is cluster? - Definition from WhatIs.com. [online] Available at: https://www.techtarget.com/whatis/definition/cluster. '}, 
{ 'id': '35.', 'Term' : 'Continous delivery ', 'Explanation' : 'is a software development practice that aims to automate and streamline the process of delivering software changes, updates, or new features to production ', 'Acknowledgement': 'Amazon Web Services, Inc. (n.d.). What is Continuous Delivery? – Amazon Web Services. [online] Available at: https://aws.amazon.com/devops/continuous-delivery/. '}, 
{ 'id': '36.', 'Term' : 'Direct messaging ', 'Explanation' : ' Instant messaging apps like WhatsApp, Facebook Messenger, or Slack often provide direct messaging functionality. Users can send private, one-on-one messages to specific individuals or small groups. ', 'Acknowledgement': 'K, A. (2023). Chat and Messaging Tools. [online] DevOpsSchool.com. Available at: https://www.devopsschool.com/blog/chat-and-messaging-tools/#:~:text=Instant%20Communication [Accessed 1 Sep. 2023]. '}, 
{ 'id': '37.', 'Term' : 'Puppet ', 'Explanation' : 'An infrastructure automation tool for managing the configuration of servers and resources. ', 'Acknowledgement': 'clairecadman (n.d.). Introduction to Puppet. [online] puppet.com. Available at: https://www.puppet.com/docs/puppet/6/puppet_overview.html. '}, 
{ 'id': '38.', 'Term' : 'Load Balancing ', 'Explanation' : 'Distributing incoming network traffic across multiple servers to improve availability and performance. ', 'Acknowledgement': 'Amazon Web Services, Inc. (n.d.). What is Load Balancing? - Load Balancing Algorithm Explained - AWS. [online] Available at: https://aws.amazon.com/what-is/load-balancing/#:~:text=Load%20balancing%20is%20the%20method. '}, 
{ 'id': '39.', 'Term' : 'Log aggregation ', 'Explanation' : 'Collecting and centralizing log data from various sources for analysis. ', 'Acknowledgement': 'Datadog (2021). Log Aggregation: What It Is & How It Works | Datadog. [online] Log Aggregation: What It Is & How It Works. Available at: https://www.datadoghq.com/knowledge-center/log-aggregation/#:~:text=Log%20aggregation%20is%20the%20process [Accessed 1 Sep. 2023]. '}, 
{ 'id': '40.', 'Term' : 'Version control ', 'Explanation' : ' Managing and tracking changes to source code using tools like Git. ', 'Acknowledgement': 'Atlassian (2019). What is version control. [online] Atlassian. Available at: https://www.atlassian.com/git/tutorials/what-is-version-control. '}, 







];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DevOps Glossary', sub: ' Glossary Terms and their Description ', names: nameList });
});

module.exports = router;
