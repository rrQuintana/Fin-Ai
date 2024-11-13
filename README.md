# Financial Management Application

## Overview

This repository contains the code for a financial management application that helps users track their expenses, manage budgets, set financial goals, and monitor their financial health. The application leverages a microservices architecture deployed on AWS for scalability and high availability, utilizing Kubernetes (EKS), Docker, and integrated CI/CD.

## Features

- **Transaction Management**: Record, view, edit, and delete transactions.
- **Card Management**: Add and manage multiple financial cards, track spending per card, and receive payment reminders.
- **Payment Reminders**: Track payment due dates and receive notifications.
- **Budgets**: Set budgets, track expenses against them, and receive alerts.
- **Financial Bot**: Get financial insights and guidance through a chatbot.
- **Expense Analytics**: Visualize spending patterns with graphs, reports, and feedback.

## Architecture

The application follows a microservices-based architecture, deployed in **Amazon EKS** using **Kubernetes**. The main components include:

- **Docker**: Containerizes each microservice for consistency across environments.
- **Amazon EKS (Elastic Kubernetes Service)**: Manages Kubernetes clusters for scalable container orchestration.
- **Amazon ECR (Elastic Container Registry)**: Stores Docker images used by the application.
- **Amazon RDS (Aurora)**: Provides a reliable relational database for secure data storage.
- **Amazon S3**: Stores static files and backups.
- **Amazon CloudWatch**: Monitors the application, collecting logs and performance metrics.
- **Amazon SNS**: Sends notifications and alerts based on CloudWatch metrics.
