import React from 'react';

export default function BlogHome() {
  const categories = [
    { name: "IA & Machine Learning", color: "border-emerald-500 text-emerald-500 bg-emerald-500/10" },
    { name: "Carrière Tech", color: "border-blue-600 text-blue-600 bg-blue-600/10" },
    { name: "Développement Web", color: "border-purple-500 text-purple-500 bg-purple-500/10" },
    { name: "Cybersécurité", color: "border-red-500 text-red-500 bg-red-500/10" },
    { name: "Cloud & DevOps", color: "border-orange-500 text-orange-500 bg-orange-500/10" },
    { name: "Afrique Tech", color: "border-yellow-500 text-yellow-500 bg-yellow-500/10" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* 1. HEADER */}
      <header className="border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-[#0F172A]">
              CampusTech<span className="text-[#2563EB]">.io</span>
            </span>
            <span className="text-xs bg-[#10B981] text-white px-2 py-0.5 rounded-full font-medium">Blog</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-[#2563EB]">Articles</a>
            <a href="#" className="hover:text-[#2563EB]">Formations</a>
            <a href="#" className="hover:text-[#2563EB]">À propos</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* 2. SECTION HERO */}
        <section className="mb-12 bg-slate-900 rounded-2xl overflow-hidden shadow-sm grid md:grid-cols-2">
          <div className="h-64 md:h-full bg-gradient-to-br from-[#2563EB]/20 to-[#10B981]/20 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-slate-800">
            <div className="text-center">
              <span className="text-5xl">🤖</span>
              <p className="text-slate-400 mt-2 text-sm font-mono">Edge AI / Offline System</p>
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center bg-[#0F172A] text-white">
            <div className="mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                IA & Machine Learning
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 text-white leading-tight">
              L'ère du logiciel embarqué : Relever le défi de l'IA sans connexion internet
            </h1>
            <p className="text-slate-300 text-base mb-6 leading-relaxed">
              Comment concevoir des architectures logicielles autonomes capables de faire tourner de l'intelligence artificielle en zone rurale, sans aucune dépendance au réseau Cloud.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span>⏱️ 5 min de lecture</span>
              <span>•</span>
              <span>22 Mai 2026</span>
            </div>
          </div>
        </section>

        {/* 3. BARRE DES CATÉGORIES */}
        <section className="mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex gap-3 whitespace-nowrap">
            {categories.map((cat, idx) => (
              <button key={idx} className={`px-4 py-1.5 text-xs font-semibold rounded-full border ${cat.color} transition-all hover:opacity-80`}>
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* 4. GRILLE D'ARTICLES */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-[#0F172A] mb-6">Articles Récents</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-slate-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-44 bg-slate-50 flex items-center justify-center text-3xl">💻</div>
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Carrière Tech</span>
                <h3 className="font-bold text-base mt-2 text-[#0F172A] hover:text-[#2563EB] cursor-pointer">Comment devenir Data Scientist en Afrique en 2026</h3>
                <p className="text-slate-500 text-xs mt-2 line-clamp-2">Le guide complet pour s'orienter, acquérir les bonnes compétences et décrocher son premier emploi.</p>
                <div className="text-[11px] text-slate-400 mt-4">20 Mai 2026</div>
              </div>
            </div>
            <div className="border border-slate-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-44 bg-slate-50 flex items-center justify-center text-3xl">🔒</div>
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-500">Cybersécurité</span>
                <h3 className="font-bold text-base mt-2 text-[#0F172A] hover:text-[#2563EB] cursor-pointer">Les 5 menaces numériques qui guettent les PME locales</h3>
                <p className="text-slate-500 text-xs mt-2 line-clamp-2">Comprendre les bases de la sécurité informatique pour protéger vos données contre les attaques.</p>
                <div className="text-[11px] text-slate-400 mt-4">18 Mai 2026</div>
              </div>
            </div>
            <div className="border border-slate-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-44 bg-slate-50 flex items-center justify-center text-3xl">🌍</div>
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-600">Afrique Tech</span>
                <h3 className="font-bold text-base mt-2 text-[#0F172A] hover:text-[#2563EB] cursor-pointer">L'essor des infrastructures décentralisées</h3>
                <p className="text-slate-500 text-xs mt-2 line-clamp-2">Analyse de la transformation digitale et des solutions locales émergentes sur le continent.</p>
                <div className="text-[11px] text-slate-400 mt-4">15 Mai 2026</div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. NEWSLETTER */}
        <section className="bg-[#F1F5F9] rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-3">Ne manquez aucune innovation</h2>
          <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">Rejoignez la communauté CampusTech pour recevoir nos analyses technologiques directement dans votre boîte mail.</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input type="email" placeholder="Ton adresse email" className="px-4 py-2 rounded-lg border border-slate-200 text-sm w-full focus:outline-none focus:border-[#2563EB]" />
            <button className="bg-[#2563EB] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap">S'abonner</button>
          </div>
        </section>
      </main>

      {/* 6. FOOTER */}
      <footer className="bg-[#0F172A] text-slate-400 text-xs mt-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-medium text-slate-300">CampusTech – Comprendre la technologie. Construire l’avenir.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">X (Twitter)</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
