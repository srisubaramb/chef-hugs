
# 🍳 Chef Hugs

**Chef Hugs** is your friendly kitchen buddy.
Got random ingredients lying around?
Don’t know what to cook?
Chef Hugs gives you recipe ideas in seconds — powered by **Mistral from Hugging Face**.

The goal is simple:
✨ Make cooking less stressful.
✨ Reduce food waste.
✨ Turn your fridge into inspiration.

---

## 🎉 What You Can Do

- 📝 **Add ingredients** you have at home
- 👀 **See your pantry list** at a glance
- 🤖 **Generate a recipe** idea with one click
- ⚡ **Instant results** thanks to Hugging Face models
- **Works anywhere** (built with Vite + React, deployed on Vercel)

Think of it as a mini "AI chef" that adapts to whatever you already own in the kitchen.

---

## 🛠️ Setup (for developers)

If you’d like to run Chef Hugs locally:

1. Clone this repo:

   ```bash
   git clone https://github.com/your-username/chef-hugs.git
   cd chef-hugs
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root with your Hugging Face API key:

   ```env
   VITE_HF_ACCESS_TOKEN=hf_your_api_key_here
   ```

   👉 You can grab a free key from [Hugging Face](https://huggingface.co/settings/tokens).

4. Start the app:

   ```bash
   npm run dev
   ```

   Then open [http://localhost:5173](http://localhost:5173).

---

## 🌐 Deployment

The app is designed to run smoothly on **Vercel**.
Just push to GitHub, connect with Vercel, and add the environment variable (`VITE_HF_ACCESS_TOKEN`) in the project settings. That’s it 🚀

---

## 🔮 Future Plans

- Save your favorite recipes
- Add “I don’t like this ingredient” filters
- Multi-language support (so Chef Hugs speaks your kitchen’s language)
- Smarter recipe generation using multiple Hugging Face models

---

## 📌 Tech Behind the Apron

- [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- [Hugging Face Inference API](https://huggingface.co/inference-api)
- [Vercel](https://vercel.com/)

---

> Chef Hugs isn’t just an app — it’s about making cooking **more playful, less wasteful, and always inspiring**.

---
