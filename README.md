# Clao - Your Dumb Asian AI Assistant

A hilarious parody chatbot website that mimics Claude AI but with intentionally dumb Asian-accented responses.

## Features

- Fixed sidebar with logo and community link
- Full-screen chat interface with scrolling message history
- Contract address section with copy functionality
- Powered by Groq API (free tier available)
- Fully responsive design (mobile and desktop)
- Black theme with purple accents
- Intentionally funny and unhelpful AI responses

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Get Your Free Groq API Key

1. Visit [https://console.groq.com/](https://console.groq.com/)
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key

### 3. Configure Environment Variables

Create a `.env` file in the root directory (already exists, just add your key):

```env
VITE_GROQ_API_KEY=your_groq_api_key_here
```

### 4. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variable: `VITE_GROQ_API_KEY`
5. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Add environment variable: `VITE_GROQ_API_KEY`
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy!

## Customization Guide

### Change the Logo

Edit `src/components/Sidebar.tsx`:
- Replace the 🥟 emoji with your own image or emoji
- Adjust the size (currently 150x150px)

### Update Community Link

In `src/components/Sidebar.tsx`, change:
```typescript
href="https://your-community-link.com"
```
to your actual Telegram/Discord/community link.

### Change Contract Address

Edit `src/components/ContractAddress.tsx`:
```typescript
const contractAddress = 'YOUR_ACTUAL_CONTRACT_ADDRESS';
```

### Modify AI Personality

Edit the system prompt in `src/services/groqApi.ts`:
```typescript
const SYSTEM_PROMPT = `Your custom personality here...`;
```

### Change Colors

The current theme uses:
- Background: `#000000` (black)
- Sidebar: `#111111` (dark gray)
- Accent: Purple (`bg-purple-600`)

You can change these in the respective component files using Tailwind CSS classes.

## File Structure

```
src/
├── components/
│   ├── Sidebar.tsx           # Left sidebar with logo and community button
│   ├── ChatInterface.tsx     # Main chat interface with message history
│   ├── ChatMessage.tsx       # Individual chat message component
│   └── ContractAddress.tsx   # Bottom contract address section
├── services/
│   └── groqApi.ts           # Groq API integration
├── App.tsx                   # Main app component
├── main.tsx                 # App entry point
└── index.css                # Global styles
```

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Groq API (llama-3.1-70b-versatile)
- Lucide React (for icons)

## Important Notes

- The API key is client-side and visible in the browser. For production apps with sensitive keys, use a backend proxy.
- Groq's free tier has rate limits. Check their documentation for details.
- This is a parody project meant for entertainment purposes only.

## License

MIT

---

Made with lah, sia, and lots of bubble tea! 🧋
