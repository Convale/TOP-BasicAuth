<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">TOP - Express/MongoDB Template</h3>

  <p align="center"> 
A simple, effective, and easy to use website template with user login/authentication.
    <br />
    <br />
    <a href="https://github.com/Convale/TOP-BasicAuth/issues">Report Bug</a>
    ·
    <a href="https://github.com/Convale/TOP-BasicAuth/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Dev Deployment](#dev-deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Basic Authentication Screen Shot][product-screenshot]](https://convale.github.io/TOP-BasicAuth/)

A quickly deployable user authenticated website. It helps you hit the ground running without any of the fluff. It's build with Node/Express as the backend server, pug for views, passport/bcrypyt for authentication, and MongoDB for the database. It's a barbones implementation, so you can get set up quickly and adapt it however you'd prefer.

For the dev dependencies, it's currently loaded with dotenv for environmetal variables and nodemon for continously deploying saved items.

This is part of The ODIN Project's Fullstack Javascript Bootcamp to teach budding web developers the basics.
Want to learn to be a web developer? [Check out The ODIN Project](https://www.theodinproject.com/)

### Built With

- HTML / CSS / Javascript
- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Pug](https://pugjs.org/)
- [Passport](http://www.passportjs.org/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [MongoDB](https://www.mongodb.com/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Set up a MongoDB database
   --Recommended: [MongoDB Atlas](https://docs.atlas.mongodb.com/getting-started/)

2. Clone the repo

```sh
git clone https://github.com/Convale/TOP-BasicAuth.git
```

3.  Install NPM packages

```sh
npm install
```

4.  Follow `.env.sample` to deploy your MongoDB URL

```sh
DB_HOST = <YOUR_MONGODB_URL>
```

5.  Follow `.env.sample` to deploy your session secret

```sh
SESSION_SECRET = <YOUR_SESSION_SECRET>
```

### Dev Deployment

1. Run Nodemon

```sh
nodemon server
```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/Convale/TOP-BasicAuth/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See [`LICENSE`](https://github.com/Convale/TOP-BasicAuth/blob/master/LICENSE) for more information.

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/Convale/TOP-BasicAuth
[contributors-url]: https://github.com/Convale/TOP-BasicAuth/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Convale/TOP-BasicAuth
[forks-url]: https://github.com/Convale/TOP-BasicAuth/network/members
[stars-shield]: https://img.shields.io/github/stars/Convale/TOP-BasicAuth
[stars-url]: https://github.com/Convale/TOP-BasicAuth/stargazers
[issues-shield]: https://img.shields.io/github/issues/Convale/TOP-BasicAuth
[issues-url]: https://github.com/Convale/TOP-BasicAuth/issues
[license-shield]: https://img.shields.io/github/license/Convale/TOP-BasicAuth
[license-url]: https://github.com/Convale/TOP-BasicAuth/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/payneshaun
[product-screenshot]: public/images/screenshot.png
