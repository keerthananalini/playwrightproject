# Playwright UI & API Testing Project

End-to-end testing framework for **AutomationExercise.com** using Playwright with TypeScript, implementing Page Object Model (POM) design pattern.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [CI/CD](#cicd)
- [Environment Variables](#environment-variables)
- [Reports](#reports)

---

## 🎯 Project Overview

This project provides automated testing for:
- **UI Testing**: Login, Product browsing, Cart operations, Checkout flows
- **API Testing**: API validations using Playwright's API testing capabilities
- **Page Object Model**: Maintainable and reusable test code structure

**Technologies Used:**
- **Playwright** v1.59.1
- **TypeScript** 
- **Node.js** (LTS recommended)
- **GitHub Actions** for CI/CD

---

## ✅ Prerequisites

Before setting up this project, ensure you have the following installed:

1. **Node.js** (v16 or higher)
   ```bash
   node --version
   npm --version
   ```

2. **Git** (for version control)

---

## 🚀 Installation

Follow these steps to set up the project locally:

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd Playwright_UI_API_Project
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install Playwright browsers
```bash
npx playwright install
```

### 4. Install browser system dependencies (Linux/CI only)
```bash
npx playwright install-deps
```

---

## ⚙️ Configuration

### Environment Setup

1. **Copy the example environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` file** with your credentials:
   ```env
   BASE_URL=https://automationexercise.com/
   EMAIL=your-email@example.com
   PASSWORD=your-password-here
   ```

### Playwright Configuration

The `playwright.config.ts` file contains:
- **Test directory**: `./tests`
- **Base URL**: Loaded from `.env` file
- **Browsers**: Chromium, Firefox, WebKit
- **Parallel execution**: Enabled
- **Retry logic**: 2 retries on CI
- **Reports**: HTML reporter enabled

---

## 📁 Project Structure

```
Playwright_UI_API_Project/
├── .github/
│   └── workflows/
│       └── playwright.yml          # GitHub Actions CI/CD pipeline
├── fixtures/
│   └── baseTest.ts                 # Custom test fixtures
├── pages/                          # Page Object Models
│   ├── Login.ts
│   ├── cart.ts
│   └── products.ts
├── tests/                          # Test specifications
│   ├── loginwithoutpom.spec.ts
│   └── scenariowithpom.spec.ts
├── utils/
│   └── apiHelper.ts                # API testing utilities
├── test-results/                   # Test execution results
├── playwright-report/              # HTML test reports
├── .env                            # Environment variables (git-ignored)
├── .env.example                    # Environment template
├── .gitignore                      # Git ignore rules
├── playwright.config.ts            # Playwright configuration
├── package.json                    # Project dependencies
└── README.md                       # This file
```

---

## 🧪 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run specific test file
```bash
npx playwright test tests/loginwithoutpom.spec.ts
```

### Run tests on specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run tests in UI mode (interactive)
```bash
npx playwright test --ui
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

---

## 📊 Reports

### View HTML Report
After running tests, view the report:
```bash
npx playwright show-report
```

### View Trace Viewer
For failed tests with traces:
```bash
npx playwright show-trace test-results/<test-folder>/trace.zip
```

---

## 🔐 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `BASE_URL` | Application base URL | `https://automationexercise.com/` |
| `EMAIL` | Test user email | `test@example.com` |
| `PASSWORD` | Test user password | `Test@123` |

**⚠️ Never commit `.env` file to version control!**

---

## 🔄 CI/CD

This project uses **GitHub Actions** for continuous integration.

### Workflow Details
- **Trigger**: Push/PR to `main` or `master` branch
- **Runner**: Ubuntu latest
- **Steps**:
  1. Checkout code
  2. Setup Node.js (LTS)
  3. Install dependencies
  4. Install Playwright browsers
  5. Run all tests
  6. Upload test reports as artifacts

### View CI Results
- Check the **Actions** tab in your GitHub repository
- Download test reports from workflow artifacts

---

## 🛠️ Useful Commands

| Command | Description |
|---------|-------------|
| `npx playwright test` | Run all tests |
| `npx playwright test --headed` | Run tests with browser UI |
| `npx playwright test --ui` | Open Playwright UI mode |
| `npx playwright test --debug` | Run tests in debug mode |
| `npx playwright show-report` | Open HTML report |
| `npx playwright codegen` | Generate test code |

---

## 📝 Writing Tests

### Example with Page Object Model:
```typescript
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login';

test('Login test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(process.env.EMAIL!, process.env.PASSWORD!);
  await expect(page).toHaveURL(/account/);
});
```

---

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Write/update tests
4. Ensure all tests pass
5. Submit a pull request

---

## 📄 License

This project is for educational/testing purposes.

---

## 📧 Contact

For questions or issues, please open an issue in the repository.
