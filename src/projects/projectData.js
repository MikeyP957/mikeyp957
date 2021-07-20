import forumImage from '../media/projectImages/blog01.png';
import germPodImg from '../media/projectImages/germpod.png'
import weatherImg from '../media/projectImages/weather01.png';
import letsVentureImg from '../media/projectImages/addVenture.png';
import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'


const projectArr = [
    {
        "title":"Let's +Venture",
        "url":"https://lets-add-venture.netlify.app/",
        "image":letsVentureImg,
        "description":"This social media style app lets users connect with other users and share information about their climbing ability. The app uses google maps and geocoder API's to help users search for climbs near a given location. Users can also save completed climbs to their profile by clicking the 'save' button. The app uses a relational database to store user information including friends, personal information, and climbs saved from the climber API.",
        icons: [<FaIcons.FaReact/>,'   ', <FaIcons.FaNodeJs/>,'   ', <FaIcons.FaDatabase/>,'   ', <SiIcons.SiGooglemaps/>]
    },
    {
        "title":"Covid Germ Pod Profiles",
        "url":"https://hidden-island-12801.herokuapp.com/",
        "image":germPodImg,
        "description":"Covid Germ Pod is an app that allows users to create groups and share information with other members of their group, or Germpod. Users create a profile and can either join an existing group or create their own. The app uses handlebars to create the UI, SQL for the database and express for API routing."
    },
    {
        "title":"Forum Template",
        "url":"https://vigilante-octo-spruce.herokuapp.com/",
        "image":forumImage,
        "description":"This forum style app allows users to create posts and comment on other published posts. Users must first create a profile using an email address and password, which is encrypeted using an npm package, bcrypt. The data for this app is stored in a SQL database. Models and relationships were created using sequelize ORM."
    },
    {
        "title":"Search Weather API",
        "url":"https://mikeyp957.github.io/global_weather_calendar/",
        "image":weatherImg,
        "description":"..."
    }
]

export default projectArr