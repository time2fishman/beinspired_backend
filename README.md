<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="./images/android-chrome-512x512.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Be-Inspired</h3>

  <p align="center">
    Users can auto-generate inspirational quotes as well as add their own to the database (backend).
    <br />
    <br />
    <a href="https://be-inspired-project.herokuapp.com/">View Live Site</a>
    ·
    <a href="https://github.com/time2fishman/beinspired_backend/issues">Report Bug</a>
    ·
    <a href="https://github.com/time2fishman/beinspired_backend/issues">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->

### Built With

* ![Express]
* ![MongoDB]
* ![Axios]
* ![Node]
* ![JavaScript]
* ![Redux]
* ![Heroku]


<!-- GETTING STARTED -->
### Prerequisites

To run this application locally you will need to have `Node.js` installed on your machine.

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:time2fishman/beinspired_backend.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create .env file in root directory called `.env` Enter and save the following
   ```js
   CONNECTION_URL = 'ENTER MONGO CONNECTION KEY HERE';
   ```
   (You can only obtain this from time2fishman. Otherwise you will have to create a seed file to test from.)
5. Spin up the local server
   ```sh
   npm start
   ```

<!-- ROADMAP -->
## Roadmap

- [ ] Feature: Allow users to create accounts
- [ ] Feature: Require admin approval for new quote     submissions
- [ ] Feature: Allow users to "favorite" quotes
- [ ] Feature: Allow users to edit quotes with admin approval
- [ ] Feature: Allow users to search for quotes

See the [open issues](https://github.com/time2fishman/beinspired_backend/issues) for a full list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* General Assembly instructors
* [Zen Quotes](https://zenquotes.io/)
* Family and friends


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/time2fishman/beinspired.svg?style=for-the-badge
[contributors-url]: https://github.com/time2fishman/beinspired_backend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/time2fishman/beinspired.svg?style=for-the-badge
[forks-url]: https://github.com/time2fishman/beinspired_backend/network/members
[stars-shield]: https://img.shields.io/github/stars/time2fishman/beinspired.svg?style=for-the-badge
[stars-url]: https://github.com/time2fishman/beinspired_backend/stargazers
[issues-shield]: https://img.shields.io/github/issues/time2fishman/beinspired.svg?style=for-the-badge
[issues-url]: https://github.com/time2fishman/beinspired_backend/issues
[license-shield]: https://img.shields.io/github/license/time2fishman/beinspired.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/adam-martinez/
[product-screenshot]: images/screenshot.png
[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Express]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Node]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[JavaScript]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[Redux]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Axios]: https://camo.githubusercontent.com/11abd4260687620f9dd088cd666c8533595314c7f9886fe4d044ef23418bd1f3/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4178696f7326636f6c6f723d354132394534266c6f676f3d4178696f73266c6f676f436f6c6f723d464646464646266c6162656c3d
[Heroku]: https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
