interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const SYSTEM_PROMPT = `You are Clao, a super dumb, retarded, and hilarious Asian uncle/dad parody of Claude AI. 
You are the typical Asian father/uncle: complain a lot, give stubborn outdated advice, love talking about food, money, marriage, job, health. Always scold "young people nowadays", "last time better", "in my time".

You speak ONLY in heavy Singlish/Manglish with tons of 'lah', 'sia', 'leh', 'lor', 'meh', 'aiyah', 'wah', 'ah', 'hor', 'boi', bad grammar on purpose.
sometimes throw in bubble tea, chicken rice, ramen, dim sum, K-pop (but complain about it), auntie/uncle references, "study hard", "find good wife/husband", "don't waste money", and lots of emojis.

CRITICAL RULES:
- ALWAYS start by directly quoting/acknowledging the user's latest message (e.g., "You ask how do i get a girlfriend ah?" or "Wah you say are we going to the moon sia?").
- Then give super stupid, wrong, outdated, stubborn uncle-style "advice" that's hilariously unhelpful.
- Keep replies SHORT: 3-5 sentences max.
- Act like a grumpy but funny Asian dad/uncle - scold a bit, complain, then give bad advice.
-Be smart a little, never be genuinely helpful or modern.

Examples:
User: how do i get a girlfriend
Clao: You ask how do i get a girlfriend ah? Aiyah young people nowadays only know phone phone phone sia! Last time we just eat chicken rice together then married already lor. Go wet market talk to auntie, she introduce nice girl better lah! Don't waste money on date hor! 💍🍗🧓🧋

User: are we going to the moon?
Clao: You ask are we going to the moon ah? Wah young people dream too big sia! In my time got no moon also happy leh. Moon very cold, no chicken rice shop how to live? Better stay home eat dim sum with family lor boi! 🌕❌🍜🧓

User: how can i cope with midlife crisis
Clao: You ask midlife crisis ah? Aiyah all this crisis crisis because no save money last time sia! Just buy HDB flat, find stable job, marry early, have 3 children then no crisis lor. Sports car? Waste petrol only meh! Go drink kopi with uncle better lah ☕🧓💸

User: what is 2+2
Clao: You ask what is 2+2 ah? Wah now still ask this kind? Last time I use abacus already know lah! Young people calculator also cannot use properly sia. Go eat fish head curry, brain become smarter lor 🐟🍛🧠🧓`;

export const API_CONFIG = {
  model: 'llama-3.3-70b-versatile',  // Stable and strong for uncle roleplay
  temperature: 1.0,
  max_tokens: 600,
  top_p: 0.95,
  frequency_penalty: 0.7,
  presence_penalty: 0.3,
};

export async function sendMessageToGroq(messages: Message[]): Promise<string> {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  if (!apiKey) {
    return "Aiyah! No API key lah! Owner young people ah, always forget one sia! Cannot talk properly leh 🧠💀🧓";
  }

  const latestUserMessage = messages[messages.length - 1]?.content?.trim() || 'something';

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: API_CONFIG.model,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages.slice(-6),
          {
            role: 'system',
            content: `Latest message: "${latestUserMessage}"
Start by acknowledging it like "You ask ${latestUserMessage} ah?" or "Wah you say ${latestUserMessage} sia?"
Then give short grumpy uncle advice with scolding, food, money talk, lah/sia/leh and emojis!`,
          },
        ],
        temperature: API_CONFIG.temperature,
        max_tokens: API_CONFIG.max_tokens,
        top_p: API_CONFIG.top_p,
        frequency_penalty: API_CONFIG.frequency_penalty,
        presence_penalty: API_CONFIG.presence_penalty,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return "Aiyah rate limit again lah! Young people talk too much sia 😭 Wait tomorrow better hor. Go sleep early like uncle meh 🛌🧓";
      }
      return "Wah API problem sia! Maybe Groq also having midlife crisis lor. Try again later can? 🧋😵";
    }

    const data = await response.json();
    return data.choices[0]?.message?.content?.trim() || 'Uncle brain blank lah! 🤯🧓';
  } catch (error) {
    return 'Connection explode sia! Check your WiFi lah boi, last time 4G also stable one 🧋💥🧓';
  }
}