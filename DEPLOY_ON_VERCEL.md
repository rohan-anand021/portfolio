## Deploying This Portfolio to `rh-anand.vercel.app`

Follow these steps to replace the current Vercel deployment with this updated Next.js site.

### 1. Prepare the codebase
- Make sure all desired changes are committed in this repo.
- Push the repository to your Git provider (GitHub/GitLab/Bitbucket).
- Optional but recommended: from the project root run  
  `npm install`  
  `npm run lint`  
  `npm run build`  
  to confirm the app builds cleanly.

### 2. Point the Vercel project at this repo
Option A – Vercel dashboard:
1. Log in to [Vercel](https://vercel.com) and open the project currently serving `rh-anand.vercel.app`.
2. Navigate to **Settings → Git**.
3. Change the linked repository/branch to this portfolio repo. (If Vercel cannot swap repos for the project, re-import it: click **Import Project**, select this repo, and choose the existing project when prompted so it overwrites the old code.)

Option B – Vercel CLI (if you prefer the terminal):
```bash
npm install -g vercel   # if you don’t already have it
vercel link             # choose the existing project for rh-anand.vercel.app
vercel --prod           # triggers a production deployment from this folder
```

### 3. Trigger a deployment
- From the dashboard, create a new deployment (Vercel will run `npm install` and `npm run build` automatically).
- Wait for the build to finish; Vercel will assign a preview URL and, if you reused the same project, will automatically update the production alias.

### 4. Confirm the production alias
- If you imported a **new** project, go to **Settings → Domains**.
- Ensure `rh-anand.vercel.app` is attached to the new deployment. Remove it from the old project if necessary so the alias only points to this code.

### 5. Verify and tidy up
- Visit `https://rh-anand.vercel.app` to confirm the live site now matches this repo.
- Keep automatic deployments enabled (default) so pushing to your chosen branch will redeploy.
- Update or add any required environment variables later; this project does not require any by default.

That’s it—your Vercel site will now serve the redesigned portfolio.***
