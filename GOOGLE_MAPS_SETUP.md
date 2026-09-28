# Fix Google Maps InvalidKeyMapError

## Problem
Console shows: `Google Maps JavaScript API error: InvalidKeyMapError`

## Solution

### Step 1: Get Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Go to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **API Key**
5. Copy the generated API key

### Step 2: Enable Required APIs

In Google Cloud Console, enable these APIs:
- **Maps JavaScript API**
- **Places API**
- **Geocoding API**

Go to: **APIs & Services** → **Library** → Search and enable each API

### Step 3: Configure API Key Restrictions

1. Go to **APIs & Services** → **Credentials**
2. Click on your API key to edit
3. Under **Application restrictions**:
   - Select: **HTTP referrers (websites)**
   - Add these referrers:
     ```
     http://localhost:5173/*
     http://127.0.0.1:5173/*
     http://localhost:3000/*
     http://127.0.0.1:3000/*
     ```

4. Under **API restrictions**:
   - Select: **Restrict key**
   - Choose:
     - Maps JavaScript API
     - Places API
     - Geocoding API

5. Click **Save**

### Step 4: Add API Key to Project

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and replace with your actual API key:
   ```
   VITE_GOOGLE_MAPS_API_KEY=AIzaSyC_YOUR_ACTUAL_API_KEY_HERE
   ```

### Step 5: Restart Development Server

```bash
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 6: Verify

1. Open browser console (F12)
2. Check for: `✅ Google Maps loaded successfully`
3. Type in pickup/drop location inputs
4. Autocomplete suggestions should appear

## Troubleshooting

### Still seeing InvalidKeyMapError?
- Wait 5 minutes after creating/updating API key (propagation delay)
- Clear browser cache and hard reload (Ctrl+Shift+R)
- Verify API key is correctly copied (no extra spaces)
- Check all 3 APIs are enabled in Google Cloud Console

### Autocomplete not showing?
- Check console for errors
- Verify `.env.local` file exists and has correct key
- Ensure server was restarted after adding .env.local
- Check z-index in browser DevTools (dropdown should be visible)

### Billing Error?
- Google Maps requires billing enabled (free tier: $200/month credit)
- Go to Google Cloud Console → Billing → Enable billing
