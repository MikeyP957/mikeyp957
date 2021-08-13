import forumImage from '../media/projectImages/blog01.png';
import germPodImg from '../media/projectImages/germpod.png'
import weatherImg from '../media/projectImages/weather01.png';
import letsVentureImg from '../media/projectImages/addVenture.png';
import * as FaIcons from 'react-icons/fa'
import * as GiIcons from 'react-icons/gi'
import * as SiIcons from 'react-icons/si'


const projectArr = [
    {
        "title":"Let's +Venture",
        "url":"https://lets-add-venture.netlify.app/",
        "image":letsVentureImg,
        "description":"This social media style app, Let's (Add)Venture, was created collaboratively with 4 other colleagues and myself. We wanted to create an application that allowed users to create profiles, find friends and share outdoor activities that they mutually enjoyed. Users can access Google maps and search for rock climbing routes by location. We completed this task by continuing to use an Agile framework to organize our project tasks to make incremental change to complete a greater goal. GitHub was used for version control. The app uses google  geocoder API's to connect users queries to access the third party climbing API, Openbeta.io. Users are able to save this climbing data on their profile to show other users what climbs they have climbed or are interested in climbing. The app uses a relational database to store user information including friends, personal information, and climbs saved from the climber API. The user interface was created using React.js. We used React Router DOM to direct users to the various pages and protected routes using OAuth.",
        "contribution":"I was responsible for designing the backend for this app so that users could create accounts, save climbs that they found and connect with other users. I used a relational database to set up the relationships between users, profiles and saved data. The database code was written with node.js and an object relational mapper, Sequelize. I also supported the group by creating API routes, connecting users with their data, searching for information through a third party API, and saving that information to access for future reference. I also worked collaboratively to create the Maps page so that users can search for climbs and filter each climb by difficulty. This task taught me how to implement pagination so that a user is not overwhelmed by an abundance of search results.",
        icons: [<FaIcons.FaReact/>,'   ', <FaIcons.FaNodeJs/>,'   ', <FaIcons.FaDatabase/>,'   ', <SiIcons.SiGooglemaps/>]
    },
    {
        "title":"Covid Germ Pod Profiles",
        "url":"https://hidden-island-12801.herokuapp.com/",
        "image":germPodImg,
        "description":"Covid Germ Pod was created collaboratively by a team of 4 of my colleagues and myself. In order to build a web app together we adopted an Agile framework and used GitHub for version control. We wanted to create a full stack application that had a responsive layout and would allow users to connect and share information. We used Model-View-Controller for our design pattern to develop the user interface. The data was stored in a relational database, MySQL, and written with an Object-relational mapping package, Sequelize. RESTful API's were created using Node.js and Express.js. The user interface was created using Handlebars.js.",
        "contribution":"My initial responsibilities included writing RESTful API's to allow the users access to the database to create, read, update and delete data. I collaborated with 2 of my colleagues to troubleshoot ideas for the database structure, and as project progressed I contributed to the layout and deployed the application using Heroku.",
        icons: [<GiIcons.GiMustache/>,'   ', <FaIcons.FaNodeJs/>,'   ', <FaIcons.FaDatabase/>,'   ', <SiIcons.SiHeroku/>]
    },
    {
        "title":"CMS-style blog",
        "url":"https://vigilante-octo-spruce.herokuapp.com/",
        "image":forumImage,
        "description":"This application, V-O-S, utelizes a content management system to allow users to interact with digital content by creating users, blog posts and comments to posts. Users also have acess to managing their own contributions through updates and deletions. Authorization helper functions ensure that users may only modify content that they, themselves, have created. The user interface was developed using a model-view-controller design pattern. The SQL relational database was designed using an object-relational mapper, Sequelize. RESTful API's were built using express.js and node.js. The user interface was built with handlebars.js and allows for dynamically rendered html, specific for each individual user.",
        "contribution":"Being the sole author of this application I created all of the components to build the storage of data, the functionality and interface.",
        icons: [<GiIcons.GiMustache/>,'   ', <FaIcons.FaNodeJs/>,'   ', <FaIcons.FaDatabase/>,'   ', <SiIcons.SiHeroku/>]
    },
    {
        "title":"Weather Search",
        "url":"https://mikeyp957.github.io/global_weather_calendar/",
        "image":weatherImg,
        "description":`This application calls a third party API, Open Weather Map, to retrieve weather data queried by a user. Local storage is used to allow the user to view past searches.`,
        "contribution":"Being the sole author of this application I created all of the components to build the functionality and interface. ",
        icons: [<SiIcons.SiJavascript/>,'   ', <FaIcons.FaNodeJs/>,'   ', <SiIcons.SiBootstrap/>]
    }
]

export default projectArr