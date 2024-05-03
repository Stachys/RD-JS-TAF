# JS TAF (JavaScript Test Automation Framework)

Welcome to the JS TAF project! This is an educational project aimed at helping you learn JavaScript test automation. Follow the steps below to set up the project and run UI, API, and unit tests.

## Prerequisites

Before you can start using this project, make sure you have the following prerequisites installed on your system:

1. **Git**: Install Git from [https://git-scm.com/](https://git-scm.com/)
2. **Node.js**: Install Node.js from [https://nodejs.org/](https://nodejs.org/)

## Getting Started

Once you have Git and Node.js installed, follow these steps:

1. **Clone the Repository**: Open your terminal and run the following command to clone the repository:

```bash
git clone https://github.com/Stachys/RD-JS-TAF.git
```

2. **Install npm Packages**: Navigate to the project directory and run the following command to install the required npm packages:

```bash
npm install
```

3. **Create .env File**: Create a `.env` file in the root of the project directory and add the following environment variables:

```
POSTMAN_USERNAME=your-username
POSTMAN_PASSWORD=your-password
POSTMAN_API_KEY=your-api-key
```

## Running Tests

You can run the following tests using the scripts defined in the `package.json` file:

-   **UI Tests**: Run UI tests using Playwright:

```bash
npm run test:ui:pw
```

-   **UI Tests**: Run UI tests using WDIO with Report Portal:

```bash
npm run test:ui:wdio
```

-   **API Tests**: Run API tests using Mocha:

```bash
npm run test:api
```

-   **Unit Tests**: Run unit tests using Mocha:

```bash
npm run test:unit
```
