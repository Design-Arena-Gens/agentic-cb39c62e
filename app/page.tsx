"use client";

import { useState, useEffect } from "react";

const messageCategories = {
  fitness: [
    "Move today. Breathe tomorrow. Transform forever.",
    "Your body is listening. Give it the right command.",
    "Sweat is just strength leaving doubt behind.",
    "Train the body. Mind follows. जीवन बदलता है.",
    "One rep closer. एक कदम आगे. Victory waits.",
    "Strong body. Calm mind. This is the way.",
    "Push through. The fire builds warriors within.",
    "Discipline beats motivation. हर दिन. हर बार.",
    "Your future self is watching. Make them proud.",
    "Burn calories. Build character. Become unstoppable."
  ],
  yogic: [
    "Breathe deep. The universe responds to your stillness.",
    "Asana builds the body. Pranayama frees the soul.",
    "Balance within creates balance everywhere. स्थिरता is power.",
    "Yoga is not flexibility. It is meeting yourself daily.",
    "Inhale courage. Exhale fear. Repeat until freedom.",
    "The mat is your mirror. Show up honestly.",
    "Stretch the body. Expand the mind. Transform completely.",
    "Every breath is a new beginning. चेतना awakens.",
    "Stillness is not silence. It is listening deeply.",
    "Union of body and breath. This is yoga."
  ],
  affirmations: [
    "I am strong. I am focused. मैं तैयार हूं.",
    "Today I choose power over comfort. Growth over ease.",
    "My body deserves my respect. My mind deserves peace.",
    "I honor my practice. मेरा संकल्प अटल है.",
    "Energy flows where intention goes. I am intentional.",
    "I am building the life I deserve. One day.",
    "My discipline is my superpower. कोई बहाना नहीं.",
    "I breathe. I move. I rise. This is me.",
    "Challenges refine me. I welcome the burn. आग में तपना.",
    "I am enough. I am becoming. The journey continues."
  ],
  mindset: [
    "Small wins daily. Big transformation yearly. Trust the process.",
    "The mind quits first. Train it harder than muscles.",
    "Comfort kills dreams. Discipline builds empires. Choose wisely.",
    "You are not starting over. You are starting wiser.",
    "Progress not perfection. Movement not excuses. जीत पक्की.",
    "Champions are built in the dark. Keep going.",
    "Your story is being written. Make it legendary.",
    "Hard today. Stronger tomorrow. This is the path.",
    "What you allow becomes your standard. Raise it.",
    "Fear is temporary. Regret lasts forever. Move now."
  ],
  discipline: [
    "Show up. Even when you do not feel like it.",
    "Consistency is not sexy. But results are. Keep going.",
    "Discipline is choosing what you want most over now.",
    "Wake up. Work. Win. Repeat. यही जीवन है.",
    "The body achieves what the mind believes. Commit fully.",
    "No shortcuts. No excuses. Pure dedication. आगे बढ़ो.",
    "Every champion was once a beginner who refused to quit.",
    "Build habits. Not just goals. Habits create destiny.",
    "Your commitment level determines your result level. Always.",
    "Do it anyway. Motivation follows action. Not before."
  ],
  integration: [
    "Body moves. Breath guides. Mind witnesses. This is flow.",
    "Strength without breath is just force. Unite them both.",
    "Inhale power. Exhale tension. Move with awareness.",
    "Fitness meets mindfulness. This is where magic happens.",
    "Train hard. Breathe deep. Recover fully. Repeat wisely.",
    "Connect breath to movement. Feel the transformation begin.",
    "Muscles grow in gym. Character grows in practice. Both matter.",
    "Physical strength. Mental clarity. Spiritual peace. Integrate all three.",
    "Move like a warrior. Breathe like a yogi. साधना.",
    "Energy management is life management. Master your breath first."
  ]
};

export default function Home() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [savedMessages, setSavedMessages] = useState<string[]>([]);
  const [copySuccess, setCopySuccess] = useState(false);

  const generateMessage = () => {
    const categories = Object.keys(messageCategories);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const messages = messageCategories[randomCategory as keyof typeof messageCategories];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    setCurrentMessage(randomMessage);
    setCurrentCategory(randomCategory);
    setCopySuccess(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentMessage);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const saveMessage = () => {
    if (currentMessage && !savedMessages.includes(currentMessage)) {
      setSavedMessages([currentMessage, ...savedMessages]);
    }
  };

  const generateMultiple = (count: number) => {
    const allMessages: string[] = [];
    const categories = Object.keys(messageCategories);

    for (let i = 0; i < count; i++) {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const messages = messageCategories[randomCategory as keyof typeof messageCategories];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];

      if (!allMessages.includes(randomMessage)) {
        allMessages.push(randomMessage);
      }
    }

    setSavedMessages([...allMessages, ...savedMessages]);
  };

  useEffect(() => {
    generateMessage();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-orange-600 mb-3">
            ShaktiFlow Motivator
          </h1>
          <p className="text-gray-600 text-lg">
            Daily Fitness & Yogic Inspiration by Sheryl
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Yog & Fitness Expert • Mindful Living Coach
          </p>
        </header>

        {/* Main Message Display */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-orange-200">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold uppercase tracking-wide">
              {currentCategory || "Inspiration"}
            </span>
          </div>

          <div className="text-center mb-8">
            <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed">
              {currentMessage}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={generateMessage}
              className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-md"
            >
              Generate New
            </button>

            <button
              onClick={copyToClipboard}
              className="px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-md"
            >
              {copySuccess ? "Copied!" : "Copy Message"}
            </button>

            <button
              onClick={saveMessage}
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md"
            >
              Save to List
            </button>
          </div>
        </div>

        {/* Batch Generation */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Batch Generation</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => generateMultiple(3)}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Generate 3 Messages
            </button>
            <button
              onClick={() => generateMultiple(5)}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Generate 5 Messages
            </button>
            <button
              onClick={() => generateMultiple(10)}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Generate 10 Messages
            </button>
          </div>
        </div>

        {/* Saved Messages */}
        {savedMessages.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Saved Messages ({savedMessages.length})
              </h2>
              <button
                onClick={() => setSavedMessages([])}
                className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
              >
                Clear All
              </button>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {savedMessages.map((msg, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                >
                  <p className="text-gray-800 leading-relaxed">{msg}</p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(msg);
                    }}
                    className="mt-2 text-sm text-orange-600 hover:text-orange-700 font-medium"
                  >
                    Copy
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category Guide */}
        <div className="mt-8 bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-6 border border-orange-200">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Message Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <span className="font-semibold text-orange-700">Fitness Motivation</span>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <span className="font-semibold text-orange-700">Yogic Wisdom</span>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <span className="font-semibold text-orange-700">Affirmations</span>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <span className="font-semibold text-orange-700">Mindset</span>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <span className="font-semibold text-orange-700">Discipline</span>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <span className="font-semibold text-orange-700">Body-Mind-Breath</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-600 text-sm">
          <p>Created with शक्ति and discipline by Sheryl</p>
          <p className="mt-1">Yog & Fitness Expert • Empowering Communities Daily</p>
        </footer>
      </div>
    </main>
  );
}
