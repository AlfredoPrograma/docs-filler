# Next-Template by ZenWebApplications

Almost every web application is built using a set of fundamental technologies that are repeatedly configured. While this consistency offers familiarity, it also requires time-consuming setup for each new project.

**Next-Template** by _ZenWebApplications_ is a fine-tuned application starter based on [Next.js](https://nextjs.org/), pre-configured with essential libraries and tools to streamline development.

---

## 🚀 Configured Libraries

- **[NextAuth.js](https://next-auth.js.org/):** Authentication framework with extensive provider compatibility.
- **[Prisma](https://www.prisma.io/docs/orm):** A powerful type-safe ORM for database interactions.
- **[T3 Env](https://env.t3.gg/):** Runtime environment variables validator.
- **[TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview)** & **[Axios](https://axios-http.com/):** Data fetching layer and HTTP client.
- **[ShadCN](https://ui.shadcn.com/)** & **[Tailwind CSS](https://tailwindcss.com/):** Component catalog and styling framework.

---

## 🛠️ Configured Tools

- **[ESLint](https://eslint.org/):** JavaScript and TypeScript linter.
- **[Prettier](https://prettier.io/):** Code formatter for consistent styling.
- **[Husky](https://typicode.github.io/husky/):** Git hooks manager with pre-configured tasks:
  - **Commit-msg:** Runs [Commitlint](https://commitlint.js.org/) to enforce standardized commit messages.
  - **Pre-commit:** Uses [Lint-staged](https://www.npmjs.com/package/lint-staged) to lint and format staged files before committing.

---

## 🏗️ Setting Up the Development Environment

1. Ensure you have **[Node.js v22 LTS](https://nodejs.org/docs/latest-v22.x/api/index.html)** installed.
2. Clone the repository:
   ```sh
   git clone git@github.com:Zen-Web-Applications/next-template.git
   ```
3. Navigate to the project folder and install dependencies:
   ```sh
   cd next-template
   npm install
   ```
   - If you encounter legacy dependency warnings, run:
     ```sh
     npm install --legacy-peer-deps
     ```
4. Create and configure the environment variables:
   - Copy the `.env.example` file to a new `.env` file:
     ```sh
     cp .env.example .env
     ```
   - Fill in the necessary values in the `.env` file.
5. Start the development server:
   ```sh
   npm run dev
   ```

> [!IMPORTANT]
> Environment variables are validated at runtime by `core/env.ts`. If validation fails, the application will not run.

---

## ⚙️ Optional Configuration

- Install the **[Prettier-VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)** extension to enable automatic formatting on file save.

---

## ⚠️ Considerations

Since this template uses **cutting-edge** technologies, some dependencies may not be fully stable:

- **NextAuth.js** is currently in version `5.0.0-beta.25`.
- **Some ShadCN peer dependencies** do not officially support React v19 yet.

> [!NOTE]
> This template will be updated as stable versions of these libraries are released.

# License
Copyright 2025 ZenWebApplications

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.