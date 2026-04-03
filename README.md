# Playwright UI & API Automation

## Overview
End-to-end automation project using Playwright with Page Object Model (POM).

## Features
- UI Automation (Message Box & Form Upload)
- API Testing with validation
- POM structure
- Session-based authentication using auth.json
- Retry mechanism for stability

## Setup
npm install
npx playwright install# Playwright UI & API Automation

## Overview
This project demonstrates end-to-end automation using Playwright.  
It covers both UI and API testing with a structured and maintainable approach using the Page Object Model (POM).

## Features
- UI Automation:
  - Message Box workflow
  - Form creation and file upload
- API Testing with response validation
- Page Object Model (POM) design pattern
- Session-based authentication using `auth.json`
- Retry mechanism for improved test stability
- Cross-browser support (Chromium, Firefox, WebKit)

## Tech Stack
- Playwright
- JavaScript (Node.js)

## Test Coverage

### UI Tests
- Navigation to Automation section
- Task Bot creation
- Form creation and file upload
- UI validations with assertions

### API Tests
- Status code validation
- Response structure validation

## Notes
- `auth.json` is excluded for security reasons
- `.gitignore` is configured to prevent sensitive data upload
- Selectors may need updates if UI changes


npx playwright test
