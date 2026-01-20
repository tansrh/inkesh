## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/tansrh/inkesh.git
cd inkesh
```

2. Install Dependencies
```sh
npm install
```

3. Set Up Environment Variables
```sh
Create a .env.local file in the root directory and add:

DATABASE_URL=your_neon_postgres_connection_string
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NODE_ENV='development'

(Replace DATABASE_URL with your Neon Postgres connection string.)
```

4. Seed the Database (Optional)
```sh
If you want sample data, run:

npx tsx src/db/seed.ts
```

5. Run the Development Server
```sh

npm run dev

Visit http://localhost:3000 in your browser.
```
Deployment (Vercel Recommended)
Push your code to a public GitHub repository.
Go to vercel.com, sign in with GitHub, and import your repo.
Add your environment variables (DATABASE_URL, NEXT_PUBLIC_BASE_URL) in the Vercel dashboard.
Click “Deploy”.
Your app will be live at https://your-project.vercel.app.



Running Tests
```sh

:> npm run test
```

Tech Stack
```sh
Next.js (App Router)
Neon Postgres (DB)
Tailwind CSS
Vercel (Deployment)
Jest + React Testing Library (Testing)
```


Key Implementation Choices and Tradeoffs
```sh
Next.js App Router: Enables full-stack features (SSR, SSG, API routes) and rapid prototyping.
Static images: Used for artist portfolios to ensure fast, reliable, and optimized delivery without the complexity of uploads.
Minimal auth: Only a contact field is required, reducing friction for users and speeding up development.
Focus on core flows: Prioritized a working discovery → profile → booking flow over edge-case completeness or admin features.
Testing: Added basic Jest/RTL tests for key components, but kept coverage minimal to stay within the timebox.
Form: Used uncontrolled components (via refs) for the booking form to minimize unnecessary rerenders and keep the code simple and performant.
```


How You Deployed (Services Used & Why)
```sh
Vercel: Chosen for its seamless Next.js integration, automatic serverless API support, and global CDN for fast static/image delivery.
Neon Postgres: Used as a managed, serverless Postgres database for easy setup and free tier.
GitHub: For version control and easy integration with Vercel’s CI/CD pipeline.
Environment variables (DB connection, base URL) were set in the Vercel dashboard for secure, production-ready deployment.
```

Shortcuts Taken and Why
```sh
No advanced authentication or user accounts, as the brief allowed for minimal auth.
No image upload feature; static images were used for speed and simplicity.
No admin dashboard or booking management UI, to focus on the main user flow.
Minimal test coverage to maximize time spent on core features and polish.
```


What would you add to the project as an improvement?
```sh
An artist/admin dashboard for managing bookings and updating portfolios.
Image upload with previews (using S3 or Supabase).
Email/SMS notifications for new bookings.
Advanced search/filter (by style, location, availability).
More tests, accessibility improvements, and UI polish.
```


Contact
For any questions, open an issue or email me on mtanujchoudhary@gmail.com

