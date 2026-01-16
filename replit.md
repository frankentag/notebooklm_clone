# NotebookLM Reimagined

## Overview
This is an open-source reimplementation of Google's NotebookLM - an AI research assistant that lets you upload documents and chat with them. The project provides API-first access, self-hosting capabilities, and automation-ready endpoints.

## Project Structure
- `frontend/` - Next.js 16 frontend application with React 19, Tailwind v4, and shadcn/ui components
- `backend/` - FastAPI Python backend (designed for Vercel deployment)
- `supabase/` - Supabase configuration and migrations
- `open-notebook/` - Original project reference
- `mcp-server/` - MCP server implementation

## Tech Stack
- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind v4, shadcn/ui
- **Backend**: FastAPI, Python 3.11+, Pydantic
- **Database**: Supabase PostgreSQL with Row Level Security
- **Auth**: Supabase Auth (JWT) + Custom API Keys
- **AI**: Google Gemini 2.5 Flash/Pro

## Running the Project
The frontend runs on port 5000 with:
```bash
cd frontend && npm run dev
```

## Required Environment Variables
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key (for server operations)
- `GOOGLE_API_KEY` - Google AI API key for Gemini features

## Recent Changes
- 2026-01-16: Full Replit environment setup complete
  - Updated Next.js config to allow Replit proxy domains
  - Configured frontend to run on port 5000 with 0.0.0.0 host
  - Set up deployment configuration (Autoscale)
  - Fixed Tailwind CSS v4 resolution (installed in root workspace)
  - Added turbopack.root configuration for monorepo support
  - **Database Setup Complete**:
    - Created complete schema with 10 tables (profiles, notebooks, sources, chat_sessions, chat_messages, audio_overviews, video_overviews, research_tasks, notes, api_keys, usage_logs)
    - All tables have Row Level Security (RLS) enabled with proper policies
    - Storage buckets configured (sources, audio, video)
    - Realtime enabled for relevant tables
    - 16 migrations applied successfully

## Development Notes
- Frontend uses App Router (Next.js 14+ style)
- All API routes are in `frontend/src/app/api/`
- Supabase client is configured in `frontend/src/lib/supabase.ts`
- Tailwind CSS v4 is installed in root workspace for proper resolution
- Turbopack is configured with `turbopack.root` set to frontend directory
