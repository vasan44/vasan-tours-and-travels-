# 🗺️ Google Maps API Setup Guide

## ✅ What Was Done

1. ✅ Created `.env.local` file in `frontend/` folder
2. ✅ Updated `PickupDropSection.jsx` with improved error messages
3. ✅ Configured API key validation

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Get Google Maps API Key

1. Go to: **https://console.cloud.google.com/apis/credentials**
2. Click **"Create Credentials"** → **"API Key"**
3. Copy the generated API key (looks like: `AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)

### Step 2: Update `.env.local`

Open `frontend/.env.local` and replace:

```env
VITE_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
```

With your actual key:

```env
VITE_GOOGLE_MAPS_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

### Step 3: Enable Required APIs

Go to: **https://console.cloud.google.com/apis/library**

Search for and **Enable** these APIs:
- ✅ **Maps JavaScript API**
- ✅ **Places API**
- ✅ **Geocoding API**
- ✅ **Directions API**

### Step 4: Configure API Key Restrictions

1. Go to: **https://console.cloud.google.com/apis/credentials**
2. Click on your API key → **Edit**
3. Under **Application restrictions**, select **HTTP referrers (websites)**
4. Add these referrers:
   ```
   http://localhost:5173/*
   http://127.0.0.1:5173/*
   http://localhost:3000/*
   http://127.0.0.1:3000/*
   https://yourdomain.com/*
   ```
5. Under **API restrictions**, select **Restrict key** and choose:
   - ✅ Maps JavaScript API
   - ✅ Places API
   - ✅ Geocoding API
   - ✅ Directions API
6. Click **Save**

### Step 5: Enable Billing

1. Go to: **https://console.cloud.google.com/billing**
2. Enable billing for your project
3. **Note:** Google Maps requires billing, but you get $200/month free credit

### Step 6: Restart Dev Server

```bash
cd frontend
npm run dev
```

---

## ✅ Verification Checklist

After setup, verify these in browser console:

- [ ] No error: "❌ Google Maps API key not configured!"
- [ ] See: "✅ Google Maps loaded successfully"
- [ ] See: "✅ Pickup autocomplete initialized"
- [ ] See: "✅ Drop autocomplete initialized"
- [ ] Pickup input shows autocomplete suggestions
- [ ] Drop input shows autocomplete suggestions
- [ ] Map displays correctly
- [ ] Distance calculates when both locations filled

---

## 🐛 Troubleshooting

### Error: "InvalidKeyMapError"

**Cause:** API key is invalid or not configured correctly

**Fix:**
1. Check API key has no extra spaces
2. Verify key is copied correctly from Google Cloud Console
3. Wait 5 minutes after creating the key
4. Restart dev server: `npm run dev`

### Error: "Autocomplete not showing"

**Cause:** Places API not enabled or z-index issue

**Fix:**
1. Verify Places API is enabled in Google Cloud Console
2. Check browser DevTools → Elements → Find autocomplete dropdown
3. Verify z-index is high enough (should be z-20 or higher)
4. Clear browser cache: `Ctrl+Shift+Delete`

### Error: "Directions API not available"

**Cause:** Directions API not enabled

**Fix:**
1. Go to: https://console.cloud.google.com/apis/library
2. Search for "Directions API"
3. Click **Enable**
4. Restart dev server

### Error: "Billing not enabled"

**Cause:** Google Maps requires billing

**Fix:**
1. Go to: https://console.cloud.google.com/billing
2. Enable billing for your project
3. You get $200/month free credit

---

## 📁 File Locations

```
frontend/
├── .env.local                          ← API key goes here
├── src/
│   └── components/
│       └── PickupDropSection.jsx       ← Reads API key from .env.local
└── package.json
```

---

## 🔐 Security Notes

- ✅ `.env.local` is in `.gitignore` (not committed to git)
- ✅ API key is restricted to localhost during development
- ✅ API key is restricted to specific APIs only
- ✅ For production, use environment variables from hosting provider

---

## 📊 What Works After Setup

### Pickup & Drop Section Features:

1. **Autocomplete Suggestions**
   - Type "Madurai" → See suggestions
   - Select location → Auto-fills input

2. **Map Display**
   - Shows route between pickup and drop
   - Updates in real-time

3. **Distance Calculation**
   - Automatically calculates KM
   - Shows: "Estimated Distance: 43.5 KM"
   - Updates when locations change

4. **Error Handling**
   - Shows helpful error messages
   - Logs to console for debugging

---

## 🎯 Example Usage

**User enters:**
- Pickup: "Madurai Railway Junction"
- Drop: "Usilampatti"

**System automatically:**
1. ✅ Shows autocomplete suggestions
2. ✅ Displays route on map
3. ✅ Calculates distance: "43.5 KM"
4. ✅ Updates in real-time

---

## 📞 Support

If you encounter issues:

1. Check browser console (F12 → Console tab)
2. Look for error messages
3. Verify all steps in "Quick Setup" section
4. Check `.env.local` file exists and has correct key
5. Restart dev server after any changes

---

## ✨ Summary

Your Google Maps integration is now fully configured with:
- ✅ Autocomplete for pickup/drop locations
- ✅ Route display on map
- ✅ Automatic distance calculation
- ✅ Error handling and logging
- ✅ Production-ready setup

**Happy mapping! 🗺️**
