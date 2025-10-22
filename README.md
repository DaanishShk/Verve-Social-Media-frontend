# Verve - Social Media (Frontend)

Verve is a full-stack social media application combining a Spring backend and a React frontend to support text/image/video posts, friends & followers, comments, reactions, user tagging, achievements, and notifications.

[![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)](#)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](#)
[![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)](#)
[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](#)
[![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)](#)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](#)
[![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)](#)
[![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white)](#)


## Description

The Verve frontend delivers a responsive UI for creating and consuming text, image and video posts while managing social connections and real-time engagement. Key capabilities include content creation with tagging, threaded reactions, achievements, configurable profile/settings, a mixed personal/public activity feed, and notifications. The frontend syncs with a backend API.

Typical flows:
- Account & profile: create and manage accounts, sign in/out, edit profile details and privacy, and view personal post/comment history.  
- Connections: discover users, send/accept/decline friend requests, follow or unfollow others to shape what appears in the personal feed.  
- Content: compose posts with text, images or video, mention/tag users, attach media, and edit or remove your own posts; post views show comment and reaction counts.  
- Engagement: react with likes/dislikes, reply in comments section, share content on other media platforms, and receive notifications for mentions and replies.  
- Feed & history: a personalized feed that mixes friends/followers and public posts.  
- Achievements & notifications: receive achievement notifications and view friend requests, mentions, reactions and system alerts with the notifications system.

The application was first deployed on AWS then moved to Azure. Currently there is no active demo version deployed.



## Built with

The following technologies were used for development:
1. [Spring](https://spring.io/) - Java backend framework
2. [React](https://reactjs.org/) - component-based UI library
3. [Figma](https://www.figma.com/) - design & prototyping
4. [Postman](https://www.postman.com/) - API testing tool
5. [PostgreSQL](https://www.postgresql.org/) - relational database
6. [Docker](https://www.docker.com/) - containerization platform
7. [Nginx](https://www.nginx.com/) - web server & reverse proxy
8. [Azure](https://azure.microsoft.com/) - cloud hosting & services

## Getting Started
For building and running the application you need:

- [Node 16](https://www.python.org/downloads/release/python-3114/) or higher
- [Docker](https://www.docker.com/)
- [Java 18](https://www.java.com/en/) or higher
- [Postgresql](https://www.postgresql.org/) 

### Running the application locally

Clone this repo and run the following npm commands to get a UI build ready for the docker container.
```
npm install
npm run build
```
Next, clone the [backend repo](https://github.com/DaanishShk/Verve-Social-Media-backend) and run the following command.
```
mvn compile
```

Create a frontend_build directory in the root folder of the backend repo. Copy the UI build and its Dockerfile to this folder.

In the backend repo directory, open the terminal and run the following command
```shell
docker-compose up
```
The UI should be accessible at localhost:80.

## Author

Daanish Shaikh - [@github](https://github.com/DaanishShk)\
repo link - [Verve-Social-Media-Frontend](https://github.com/DaanishShk/Verve-Social-Media-frontend)


## License

This project is licensed under the MIT License.
