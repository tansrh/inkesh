## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/inksesh.git
cd inksesh

2. Install Dependencies
npm install

3. Set Up Environment Variables
Create a .env.local file in the root directory and add:

DATABASE_URL=your_neon_postgres_connection_string
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NODE_ENV='development'

(Replace DATABASE_URL with your Neon Postgres connection string.)

4. Seed the Database (Optional)
If you want sample data, run:

npx tsx [seed.ts](http://_vscodecontentref_/0)

5. Run the Development Server

npm run dev

Visit http://localhost:3000 in your browser.

Deployment (Vercel Recommended)
Push your code to a public GitHub repository.
Go to vercel.com, sign in with GitHub, and import your repo.
Add your environment variables (DATABASE_URL, NEXT_PUBLIC_BASE_URL) in the Vercel dashboard.
Click “Deploy”.
Your app will be live at https://your-project.vercel.app.



Running Tests

:> npm run test


Tech Stack
Next.js (App Router)
Neon Postgres (DB)
Tailwind CSS
Vercel (Deployment)
Jest + React Testing Library (Testing)

Contact
For any questions, open an issue or email me on mtanujchoudhary@gmail.com

