'use client';
import { useState } from 'react';

export default function HomePage() {
  const [amount, setAmount] = useState('25');

  const campaigns = [
    {
      id: 1,
      title: "Daily Hot Meals for 200 Street Children",
      category: "Nutrition",
      target_amount: "5,000",
      raised_amount: "3,450",
      progress_percentage: 69,
      cover_image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
      description: "Providing warm, healthy, nutrient-rich meals every afternoon for children without shelter."
    },
    {
      id: 2,
      title: "School Kits & Books for Primary Students",
      category: "Education",
      target_amount: "3,000",
      raised_amount: "1,800",
      progress_percentage: 60,
      cover_image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      description: "Supplying backpacks, notebooks, uniforms, and textbooks so kids can attend school safely."
    }
  ];

  const impactUpdates = [
    {
      id: 1,
      title: "350 Winter Jackets Delivered to Shelter #4",
      story: "Thanks to your generous contributions last week, our field team distributed heavy winter coats and socks to 350 children.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop",
      date: "2 days ago"
    },
    {
      id: 2,
      title: "New Desks Installed in Community Center",
      story: "Our volunteer carpentry team set up 40 study desks and delivered 100 new science books.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop",
      date: "5 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-black text-blue-600 tracking-tight">HOPE<span className="text-amber-500">FOR</span>KIDS</span>
          <a href="#donate" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-5 rounded-full text-sm transition shadow-sm">
            Donate Now ♥
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-slate-900 text-white py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            100% Direct Impact Guaranteed
          </span>
          <h1 className="text-4xl sm:text-6xl font-black mt-4 leading-tight">
            Help Children Thrive, Learn, and Stay Safe.
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Emergency meals, shelter, and school books. See live video & photographic proof of where every single dollar goes.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#donate" className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-3.5 rounded-xl transition shadow-lg">
              Feed a Child Today
            </a>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-10 border-b border-gray-100 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          <div>
            <p className="text-3xl font-black text-gray-900">25,000+</p>
            <p className="text-xs text-gray-500 uppercase mt-1">Meals Delivered</p>
          </div>
          <div>
            <p className="text-3xl font-black text-gray-900">1,200+</p>
            <p className="text-xs text-gray-500 uppercase mt-1">Kids in School</p>
          </div>
          <div>
            <p className="text-3xl font-black text-gray-900">850+</p>
            <p className="text-xs text-gray-500 uppercase mt-1">Shelters Provided</p>
          </div>
          <div>
            <p className="text-3xl font-black text-emerald-600">100%</p>
            <p className="text-xs text-gray-500 uppercase mt-1">Direct Transparency</p>
          </div>
        </div>
      </section>

      {/* Active Relief Campaigns */}
      <section id="donate" className="py-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Active Relief Campaigns</h2>
          <p className="text-gray-500 mt-2">Pick a direct cause and support immediately.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campaigns.map((c) => (
            <div key={c.id} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col bg-white">
              <img src={c.cover_image} alt={c.title} className="h-60 w-full object-cover" />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">
                    {c.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{c.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{c.description}</p>

                  <div className="mt-4">
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>${c.raised_amount} raised</span>
                      <span>{c.progress_percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: `${c.progress_percentage}%` }}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 space-y-3">
                  <div className="flex gap-2">
                    {['10', '25', '50', '100'].map((val) => (
                      <button
                        key={val}
                        onClick={() => setAmount(val)}
                        className={`flex-1 py-2 rounded-lg text-sm font-semibold border ${
                          amount === val ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-300'
                        }`}
                      >
                        ${val}
                      </button>
                    ))}
                  </div>
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition shadow">
                    Donate ${amount} Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Multimedia Impact Feed */}
      <section className="py-16 bg-slate-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Proof of Impact</h2>
            <p className="text-gray-500 mt-2">Recent updates posted directly by field staff.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactUpdates.map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <span className="text-xs text-blue-600 font-bold uppercase">{item.date}</span>
                  <h4 className="text-lg font-bold text-gray-800 mt-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-2">{item.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-8 text-center text-sm">
        <p>© 2025 HOPE FOR KIDS Non-Profit Organization. All rights reserved.</p>
      </footer>
    </div>
  );
}