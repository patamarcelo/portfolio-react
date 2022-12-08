export const Projects = [
    {
      name: 'rice',
      project: {
        title: 'Rice Brokers - System',
        access: {
          link: 'https://ricefoods.herokuapp.com/',
          user: '',
          password: ''
        },
        href: 'https://ricefoods.herokuapp.com/',
        pictures: 16,
        problem:
          "System was created with the Python language, using the Django Framework that works on the MVT model. published my company's website in this framework, and within the same project I created the system to control Orders, Commissions, Loads of each order, classification of loads, invoices... The data is all handled in Python on the backend, using PostgreSql as the database. the Front-end was made in Django templates, with CSS, Bootstrap, javascript and more.",
        idea: 'idea that we can work on',
        features: [
          'CRUD to control everything (suppliers, Customers, Orders, Loads…), load report with weighted average of classifications per order, invoice report, commission report, chart with order price tracking per customer, summary table monthly shipments, limited access for employees;',
          'Files such as excel spreadsheets of orders, pdf of Notes, photos from home, all saved directly in dropbox;',
          "e-mail sent to each client with the Notes and Guides according to the panel's specifications, and if the same was released to be sent; reading an xml file on the system to record data such as value, weight, nf number and issue date;",
          'table with unloading forecast based on the date of the invoice, considering several factors such as customer, number of vehicles already scheduled or maximum weight per day allowed per customer, transit time from each destination.',
          'added modals on the home screen with ajax calls to be able to update the data in the backend without having to reload the page, making changes directly to the table',
          'created table with filters to control commissions, with all possible types of data filters',
          'CSS and Midia query to mobile responsive html with info table, infinite scroll'
        ],
        final:
          'used by all company employees to control cargo loading operations.'
      }
    },
    {
      name: 'binancescript',
      project: {
        title: 'Binance TradeBot - Script',
        access: {
          link: '',
          user: '',
          password: ''
        },
        href: '',
        pictures: 8,
        problem:
          'Involved In the stock market for over 10 years, and a few years ago in the crypto market, the need arose to build a BOT to automate operations according to the strategies created. In YouTube tutorials and reading Binance documentation, I developed a BOT to operate on the exchange using an API ( KEY and SECRET ).',
        idea: 'idea that we can work on',
        features: [
          'WebSocket receiving coin data in real time',
          'Using libraries like TA-Lib, I build buy and sell strategies like SRI, Move Average, Trailing Stop Loss/Gain',
          'All executed orders sent the information by email at the time of the operation',
          'All trading history saved in JSON file, by currency pair',
          'Deployed on a server that ran 24/7'
        ],
        final:
          'Used it for some time, it ran very well obeying all the programmed guidelines.'
      }
    },
    {
      name: 'stockinformation',
      project: {
        title: 'Stock Information - Script',
        access: {
          link: '',
          user: '',
          password: ''
        },
        href: '',
        pictures: 7,
        problem:
          'In order to record all the operations carried out in the Brazilian stock market, the need arose to scrape all the invoices of the operations, get all the information and save it in a database, using scripts in Python and PostgreSQL as a Database.',
        idea: 'idea that we can work on',
        features: [
          'Read and save all information from pdf files',
          'Handle data and save operations, differentiating by user in DB',
          'Get quotes from companies in real time from yahoo finance, and once a day, send by email the current result of the operation in a pdf file',
          'Used ElephantSQL as remote database',
          'Through calculations, generate the results of operations when there is a sale, showing average purchase price, Taxes to be collected in accordance with Brazilian legislation and more...'
        ],
        final:
          'Program used to collect income tax for the current year (2022), with the results of operations on the stock market.'
      }
    },
    {
      name: 'social',
      project: {
        title: 'Social Media Estrategy',
        access: {
          link: 'www.quasar-test2.netlify.app/',
          user: 'admin@admin.com',
          password: '12345ADMIN'
        },
        href: 'https://quasar-test2.netlify.app/',
        pictures: 8,
        problem:
          'Project developed with the intention of generating marketing strategy for small and medium companies, according to their field and their choices.form must be filled and the algorithm generates the strategy. technology used: Javascript, Vuejs Framework. this project is frontend only, backend was done in python/django/djangorest',
        idea: 'idea that we can work on on social media',
        features: [
          'form with validation',
          "skeleton when the content it's not loaded yet",
          'Login page',
          "password's validation",
          'quasar framwork',
          'calendar interaction',
          'Pinia to manage app state',
          'css with tailwind'
        ],
        final:
          'Under development yet, but the front and back are communicating great, and everything is working fine.'
      }
    },
    {
      name: 'binance',
      project: {
        title: 'Binance Front-end Dashboard',
        access: {
          link: '',
          user: '',
          password: ''
        },
        href: '',
        pictures: 12,
        problem:
          'Project developed to collect information from Binance Trades, and save all operations in the database. This project has as front end Vuejs (Javascript) and some libraries to help like Vuetify and Chartjs; Electron (javascript) was used to develop the desktop App In the backend, Django Rest Framework was used to serve the APIS and model the database. Highly scalable design to be used by multiple users ',
        idea: 'idea that we can work on on social media',
        features: [
          'profit or loss from the operation',
          'weighted average purchase value of the transaction',
          'tax owed, if actually owed',
          'report generation in excel'
        ],
        final:
          'Project working normally, with the database in the cloud running smoothly and several users can use it, but it ended up being used only for personal purposes'
      }
    },
    {
      name: 'house',
      project: {
        title: 'Real State - Home for Sale',
        access: {
          link: 'www.casaq-mp.herokuapp.com/',
          user: '',
          password: ''
        },
        href: 'https://casaq-mp.herokuapp.com/',
        pictures: 5,
        problem:
          'website for the sale of my house, promoting through google adds and attracting customers to buy.',
        idea: 'idea that we can work on on social media',
        features: [
          'Flask as DEV Mode to run some tests',
          'Django as back e front',
          'Bootstrap',
          'CSS',
          'Javascript',
          'form management',
          'table with all customers that have contacted in PostgreSql',
          'google maps with location'
        ],
        final:
          'Many people have contacted us to find out more about the property.          '
      }
    },
    {
      name: 'react-dashboard',
      project: {
        title: 'React Dashboard',
        access: {
          link: 'https://react-dashboard-mp.netlify.app/',
          user: 'admin@admin.com',
          password: '12341234'
        },
        href: 'https://react-dashboard-mp.netlify.app/',
        pictures: 14,
        problem:
          'Dashboard Tutorial project to improve knowledge and use differentes components in React',
        idea: '',
        features: [
          'Auth User Function using Firebase',
          'Dashboard with multiple pages, Charts, Form, Data Tables',
          'Implementation of Dark and Light theme',
          'Dashboard Page responsive using grid layout',
          "Saving Form Data using Firebase Storage, and retrieving data as well",
          'Multiple Packages like: Mui Material, Nivo, Formik, Yup, Fullcalendar, React-pro-sidebar ',
        ],
        final:
        "Have more knowledge about how to use React and its components in different ways"
      }
    },{
      name: 'vue-modern-cv',
      project: {
        title: 'Modern CV - Vue',
        access: {
          link: 'https://mpata.eth.limo ',
          user: '',
          password: ''
        },
        href: 'https://mpata.eth.limo',
        pictures: 5,
        problem:
          'Modern Vue App to show my CV and keep updated',
        idea: 'idea that we can work on on social media',
        features: [
          'Vue App with Authentication feature and password protection',
          'Quasar Framework with Vite',
          'Tailwind Framework',
          'Modern Skeleton to hadle loading state',
          'Responsive design',
          'Generated beautifull PDF from html template'
        ],
        final:
          'App used to show my personal CV'
      }
    },
    {
      name: 'react-ecommerce',
      project: {
        title: 'React E-Commerce - ZTM React Course',
        access: {
          link: 'https://crn-clothing-mp.netlify.app/',
          user: '',
          password: ''
        },
        href: 'https://crn-clothing-mp.netlify.app/',
        pictures: 7,
        problem:
          'E-Commerce to learn a lot of features, and advanced features from React',
        idea: '',
        features: [
          'Learned in deep how to use Functional Components',
          'Login Auth in Firebase with Google Authentication',
          'Learned on practice how to use State Management on React, [Context, Reducer and Redux]',
          'Deploy project on Netlify directly from Github',
          'Understand and implement React-Router',
          'Stripe Payment in dev Mode implemented'
        ],
        final:
        "Good understanding of React and it's features"
      }
    },
    {
      name: 'react-portfolio',
      project: {
        title: 'React Portfolio',
        access: {
          link: 'https://react-portfolio-mp.netlify.app/admin',
          user: 'admin@admin.com',
          password: '12345ADMIN'
        },
        href: 'https://react-portfolio-mp.netlify.app/admin',
        pictures: 6,
        problem:
          'Personal Website built in React to Show my Portfolio',
        idea: '',
        features: [
          'Implementation of some features like Redux and Router',
          'Simple Home page with cards to show projects, and single page to show each project in detail',
          'Infinite Paginator to navigate between projects, Carousel troug pictures',
          'Auth Section differentiating users and users infos, getting data from an already built Django project handling Database and API\'s ',
          'Fetch Data from Django, chart ploting and table, with option to filter data'

        ],
        final:
        "Implementation of React knowledge, and developed a scalable plataform to show all my projects"
      }
    },
    {
      name: 'pitaya-pay',
      project: {
        title: 'Bussiness Payment System - POS',
        access: {
          link: '',
          user: '',
          password: ''
        },
        href: '',
        pictures: 12,
        problem:
          'Company need give support for your sellers, instead of buy a lot of machine been one for each seller, what is expensive and can become obsolete by pass time, has been developed a system that could be like a Cart Checkout from a website, containing his products and prices and making it easy to take care of the payment.',
        idea: '',
        features: [
          'PWA to have a good experience by Sellers while using this app in all devices',
          'React used by create this app, Redux and Reducer used to manage state, React Router',
          'MUI and Others libraries used to create Components, such as CardComponents, Formik to handle forms',
          'Firebase used to handle all users and Authentication method, used Firebase Firestore Database and Storage to manage files and data, using collections to save all necessary data',
          'Nodejs Server used to handle payment method and make the connection between frontend and Asaas Payment Service',
          'API created in NodeJS Server to always retrieve a updated database of products'
        ],
        final:
        "Solved a changing game problem, like can make payments and scale to all his sellers, registering new ones and dispensing acquisition of lot equipaments. "
      }
    }
  ]