# Verve - Social Media (Frontend)

Verve is a full-stack social media application combining a Spring backend and a React frontend.

[![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)](#)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](#)
[![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)](#)
[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](#)
[![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)](#)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](#)
[![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)](#)
[![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white)](#)


## Description

The Verve frontend delivers a responsive UI for creating and consuming text, image and video posts while managing social connections and engagement. Key capabilities include content creation with tagging, achievements, configurable profile/settings, a mixed personal/public activity feed, and notifications. The frontend syncs with a backend API.

Details of the application features are given below:
- Account & profile: create and manage accounts, edit profile details and privacy and view post/comment history.  
- Connections: discover users, send/accept/decline friend requests, follow or unfollow others to shape what appears in the personal feed.  
- Content: compose posts with text, images or video, mention/tag users, attach media, and edit or remove your own posts
- Engagement: react with likes/dislikes, reply in the comments section, share content on other media platforms.  
- Feed & history: a personalized feed that mixes friends/followers and public posts.  
- Achievements & notifications: receive achievement notifications and view friend requests, mentions, reactions and system alerts with the notifications system.

The application was first deployed on AWS then moved to Azure with github actions integration. \
UX prototype was designed using Figma.

## Demo

A deployed demo of the application can be found [here](https://agreeable-wave-0aa157103.4.azurestaticapps.net/).

## Screenshots
<!-- <img height="325" alt="image" src="https://github.com/user-attachments/assets/d1c2e5fa-379e-4739-b0d7-1ae7a81cf780" /> -->
<img height="325" alt="image" src="https://github.com/user-attachments/assets/1784c83e-3f12-4e48-b2cc-7b5bff1e0946" />
<img height="325" alt="image" src="https://github.com/user-attachments/assets/2dd69147-8659-4142-bf1a-1e07825a0bf6" />
<img height="325"  alt="image" src="https://github.com/user-attachments/assets/ab6b8429-715e-423d-a2dd-de9d73bd8c4d" />
<img height="325" alt="image" src="https://github.com/user-attachments/assets/2520e78f-c64a-4810-be48-2d5a1a4020a2" />

## Built with

The following technologies were used for development:
1. [Spring](https://spring.io/) - Java backend framework
2. [React](https://reactjs.org/) - component-based UI library
3. [Figma](https://www.figma.com/) - design & prototyping
4. [PostgreSQL](https://www.postgresql.org/) - relational database
5. [Docker](https://www.docker.com/) - containerization platform
6. [Nginx](https://www.nginx.com/) - web server & reverse proxy

## Getting Started
For building and running the application you need:

- [Node 16](https://www.python.org/downloads/release/python-3114/) or higher
- [Docker](https://www.docker.com/)
- [Java 18](https://www.java.com/en/) or higher
- [Postgresql](https://www.postgresql.org/) 

### Running the application locally

The guide uses docker for the local setup. The frontend, backend and database can be setup individually as well. \
Clone this repo and run the following npm commands to get a UI build ready for the docker container.
```
npm install
npm run build
```
Next, clone the [backend repo](https://github.com/DaanishShk/Verve-Social-Media-backend) and create a frontend_build directory in the root folder. Copy the frotend build and the UI Dockerfile to this folder.\
Then run the following command to create a jar for the backend container.
```
mvn compile
```
After the above steps are complete, open the terminal in the backend repo and run the following command to initiate the orchestration.
```shell
docker-compose up
```
Once the build processes are complete the UI should be accessible at localhost:80.

## Author

Daanish Shaikh - [@github](https://github.com/DaanishShk)\
repo link - [Verve-Social-Media-Frontend](https://github.com/DaanishShk/Verve-Social-Media-frontend)


## License

This project is licensed under the MIT License.
