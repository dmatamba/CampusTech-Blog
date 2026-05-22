/**
 * @file /app/blog/page.tsx
 * @description Page d'accueil officielle et Blog de CampusTech - Next.js (App Router)
 * @author Expert Next.js, Tailwind CSS & TypeScript
 * @license SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useState } from "react";
import { 
  BookOpen, 
  Calendar, 
  ArrowRight, 
  Cpu, 
  Mail, 
  Send, 
  CheckCircle2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github, 
  GraduationCap, 
  Search,
  SlidersHorizontal 
} from "lucide-react";

// --- TYPES DE DONNÉES ---
interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string; // Style Tailwind personnalisé
  readTime: string;
  publishDate: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
}

// --- JEU DE DONNÉES TECHNIQUE ---
const ARTICLES_FICTIFS: Article[] = [
  {
    id: "art-1",
    title: "Optimiser le LCP de Next.js 15 pour les connexions 3G en Afrique",
    excerpt: "Comment l'usage stratégique du Partial Prerendering (PPR) et la minification agressive des polices permettent d'afficher vos pages en moins d'une seconde.",
    category: "Next.js",
    categoryColor: "bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-900/50",
    readTime: "4 min",
    publishDate: "20 Mai 2026",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    author: {
      name: "Dr. Amadou Diallo",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    }
  },
  {
    id: "art-2",
    title: "Comprendre TypeScript 5.8 et l'inférence stricte de types",
    excerpt: "Maîtriser les nouveautés de l'inférence de retour et l'optimisation mémoire pour créer des bundles d'applications légers et véloces.",
    category: "TypeScript",
    categoryColor: "bg-indigo-50 text-indigo-600 border-indigo-100 dark:bg-indigo-950/40 dark:text-indigo-400 dark:border-indigo-900/50",
    readTime: "6 min",
    publishDate: "18 Mai 2026",
    coverImage: "https://images.unsplash.com/photo-1516116211223-5c359a36298a?auto=format&fit=crop&w=600&q=80",
    author: {
      name: "Marcelle N'Guessan",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
    }
  },
  {
    id: "art-3",
    title: "Pourquoi l'architecture Offline-First est l'avenir du mobile",
    excerpt: "Concevoir des applications résilientes aux coupures de réseau grâce à la synchronisation différée avec SQLite et React Native.",
    category: "Développement Mobile",
    categoryColor: "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900/50",
    readTime: "8 min",
    publishDate: "14 Mai 2026",
    coverImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    author: {
      name: "Yassine Benali",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    }
  },
  {
    id: "art-4",
    title: "L'art du CSS ultra-léger grâce aux nouveautés de Tailwind v4",
    excerpt: "Analyse du nouveau compilateur Rust ultra-rapide et l'impact sur le Cumulative Layout Shift (CLS) de vos web apps.",
    category: "Tailwind CSS",
    categoryColor: "bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-900/50",
    readTime: "3 min",
    publishDate: "09 Mai 2026",
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    author: {
      name: "Marcelle N'Guessan",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
    }
  },
  {
    id: "art-5",
    title: "Construire un tunnel RAG local avec Python et Chromadb",
    excerpt: "Comment intégrer de la recherche sémantique au sein de votre système d'information universitaire sans dépendance cloud payante.",
    category: "IA & Machine Learning",
    categoryColor: "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900/50",
    readTime: "7 min",
    publishDate: "04 Mai 2026",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80",
    author: {
      name: "Dr. Amadou Diallo",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    }
  },
  {
    id: "art-6",
    title: "Réussir son insertion tech en Afrique subsaharienne en 2026",
    excerpt: "Le guide ultime des soft-skills et hard-skills indispensables pour capter l'intérêt des recruteurs internationaux.",
    category: "Carrière",
    categoryColor: "bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-900/50",
    readTime: "5 min",
    publishDate: "27 Avril 2026",
    coverImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
    author: {
      name: "Yassine Benali",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    }
  }
];

// --- RANGÉE DES CATÉGORIES (CHARTE GRAPHIQUE) ---
const CATEGORIES_TABS = [
  { name: "Tous", colorClass: "hover:border-slate-300 hover:text-slate-900" },
  { name: "Next.js", colorClass: "text-blue-600 bg-blue-50 border-blue-200 hover:bg-blue-100" },
  { name: "Tailwind CSS", colorClass: "text-rose-600 bg-rose-50 border-rose-200 hover:bg-rose-100" },
  { name: "TypeScript", colorClass: "text-indigo-600 bg-indigo-50 border-indigo-200 hover:bg-indigo-100" },
  { name: "IA & Machine Learning", colorClass: "text-[#10B981] bg-emerald-50 border-emerald-200 hover:bg-emerald-100" },
  { name: "Développement Mobile", colorClass: "text-amber-700 bg-amber-50 border-amber-200 hover:bg-amber-100" },
  { name: "Carrière", colorClass: "text-purple-600 bg-purple-50 border-purple-200 hover:bg-purple-100" }
];

export default function BlogHomePage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Filtrage d'articles selon l'état
  const articlesFiltrés = ARTICLES_FICTIFS.filter((art) => {
    const correspondRecherche = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const correspondCategorie = selectedCategory === "Tous" || art.category === selectedCategory;
    return correspondRecherche && correspondCategorie;
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      setEmailInput("");
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col antialiased selection:bg-blue-100 selection:text-blue-600">
      
      {/* 1. HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo de la marque */}
            <div className="flex items-center gap-2.5 cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center text-white shadow-xs">
                <GraduationCap className="w-5.5 h-5.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-[#0F172A] leading-none">
                  Campus<span className="text-[#2563EB]">Tech</span>
                </span>
                <span className="text-[9px] font-mono tracking-wider text-[#10B981] font-semibold uppercase mt-0.5">
                  L'élite Numérique
                </span>
              </div>
            </div>

            {/* Navigation simple */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#accueil" className="font-medium text-sm text-[#0F172A] border-b-2 border-[#2563EB] pb-1">
                Blog
              </a>
              <a href="#formations" className="font-medium text-sm text-slate-500 hover:text-[#0F172A] transition-colors">
                Nos Formations
              </a>
              <a href="#recherche" className="font-medium text-sm text-slate-500 hover:text-[#0F172A] transition-colors">
                R&D
              </a>
              <a href="#bourses" className="font-medium text-sm text-slate-500 hover:text-[#0F172A] transition-colors">
                Bourses d'Études
              </a>
            </nav>

            {/* CTA Bouton */}
            <div className="flex items-center gap-3">
              <button className="text-xs font-bold text-white bg-[#2563EB] hover:bg-blue-700 px-4 py-2.5 rounded-lg shadow-sm transition-all cursor-pointer">
                Candidater en ligne
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ZONE DE CONTENU PRINCIPALE */}
      <main className="flex-grow">

        {/* 2. SECTION HERO (DERNIER ARTICLE MAJEUR) */}
        <section className="py-12 md:py-16 bg-slate-50/50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 md:p-10">
              
              {/* Illustration de l'article phare */}
              <div className="lg:col-span-6 relative overflow-hidden rounded-2xl aspect-video lg:aspect-auto min-h-[240px] bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80" 
                  alt="IA offline embarquée" 
                  referrerPolicy="no-referrer"
                  className="object-cover w-full h-full transform hover:scale-102 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 inline-flex items-center text-xs font-bold px-3 py-1 bg-[#10B981] text-white rounded-md uppercase font-mono tracking-wider shadow-sm">
                  Exclusif R&D
                </span>
              </div>

              {/* Contenu textuel */}
              <div className="lg:col-span-6 flex flex-col justify-between py-2">
                <div className="space-y-4">
                  
                  {/* Badge & Lecteur */}
                  <div className="flex items-center gap-3.5">
                    <span className="inline-flex items-center text-xs font-bold px-2.5 py-1 bg-[#10B981]/15 text-[#10B981] rounded-md border border-[#10B981]/25 uppercase font-mono tracking-tight">
                      IA & Machine Learning
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      ⏱️ 5 min de lecture
                    </span>
                    <span className="text-slate-200">|</span>
                    <span className="text-xs font-mono text-slate-400">Publié le 22 Mai 2026</span>
                  </div>

                  {/* Grand Titre (H1) */}
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                    L'ère du logiciel embarqué : Relever le défi de l'IA sans connexion internet
                  </h1>

                  {/* Résumé */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    L'un des défis majeurs du numérique en Afrique est l'accès permanent aux infrastructures de réseau. Découvrez comment CampusTech conçoit des architectures Edge Computing capables d'exécuter localement des modèles de langage compressés sur smartphones et ordinateurs d'étudiants, sans nécessiter d'accès internet à haut débit.
                  </p>

                </div>

                {/* Métadonnées auteur et action */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 mt-8">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80" 
                      alt="Auteur" 
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#0F172A] leading-tight">Dr. Amadou Diallo</div>
                      <div className="text-[10px] text-slate-500">Directeur Académique CampusTech</div>
                    </div>
                  </div>

                  <button className="flex items-center gap-1.5 font-bold text-xs text-[#2563EB] hover:text-blue-700 transition-colors group cursor-pointer">
                    Lire le livre blanc
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 3. BARRE DES CATÉGORIES */}
        <section className="py-8 bg-white border-b border-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
              
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-slate-400" />
                <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Filtrer les publications
                </span>
              </div>

              {/* Barre de recherche d'appoint intégrée */}
              <div className="relative w-full md:max-w-xs shrink-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Rechercher par mot-clé..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-xs text-[#0F172A] placeholder-slate-400 focus:outline-hidden focus:border-[#2563EB] focus:bg-white transition-all"
                />
              </div>

            </div>

            {/* Rangée horizontale de badges interactifs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 mt-4 scrollbar-thin">
              {CATEGORIES_TABS.map((tab) => {
                const estActif = selectedCategory === tab.name;
                return (
                  <button
                    key={tab.name}
                    onClick={() => setSelectedCategory(tab.name)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-bold border transition-all whitespace-nowrap cursor-pointer ${
                      estActif
                        ? tab.name === "IA & Machine Learning"
                          ? "bg-[#10B981] text-white border-[#10B981] shadow-xs"
                          : tab.name === "Tous"
                          ? "bg-[#0F172A] text-white border-[#0F172A] shadow-xs"
                          : "bg-[#2563EB] text-white border-[#2563EB] shadow-xs"
                        : `bg-white text-slate-600 border-slate-200 ${tab.colorClass}`
                    }`}
                  >
                    {tab.name}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. GRILLE D'ARTICLES (GRID) */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Résultats du filtre */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-bold text-[#0F172A] tracking-tight">
                {selectedCategory === "Tous" ? "Toutes les études" : `Articles : ${selectedCategory}`}
              </h2>
              <span className="font-mono text-xs text-slate-400">
                {articlesFiltrés.length} {articlesFiltrés.length > 1 ? "articles indexés" : "article indexé"}
              </span>
            </div>

            {articlesFiltrés.length === 0 ? (
              <div className="text-center py-16 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 max-w-md mx-auto">
                <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <h3 className="text-sm font-bold text-[#0F172A]">Aucun article trouvé</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                  Aucun article n'est catalogué dans cette section pour le moment. Essayez d'autres catégories.
                </p>
                <button
                  onClick={() => { setSelectedCategory("Tous"); setSearchQuery(""); }}
                  className="bg-[#2563EB] text-white text-xs font-semibold px-4 py-2 rounded-lg mt-4 cursor-pointer"
                >
                  Tout réinitialiser
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articlesFiltrés.map((art) => (
                  <article 
                    key={art.id}
                    className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-3xs hover:shadow-md hover:border-slate-200 transition-all cursor-pointer flex flex-col h-full group"
                  >
                    
                    {/* Illustration animée */}
                    <div className="relative aspect-video overflow-hidden bg-slate-50">
                      <img 
                        src={art.coverImage} 
                        alt={art.title} 
                        referrerPolicy="no-referrer"
                        className="object-cover w-full h-full transform group-hover:scale-104 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <span className={`inline-flex items-center text-[10px] font-extrabold px-2 py-0.5 rounded-md border shadow-xs ${art.categoryColor}`}>
                          {art.category}
                        </span>
                      </div>
                    </div>

                    {/* Descriptif */}
                    <div className="p-5.5 flex-grow flex flex-col justify-between">
                      <div className="space-y-3">
                        
                        {/* Date & Lecture info */}
                        <div className="flex items-center gap-3.5 text-[11px] font-mono text-slate-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {art.publishDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3.5 h-3.5" />
                            {art.readTime}
                          </span>
                        </div>

                        {/* Titre (H3) */}
                        <h3 className="font-sans font-bold text-base sm:text-lg text-[#0F172A] tracking-tight hover:text-[#2563EB] duration-150 line-clamp-2 leading-snug">
                          {art.title}
                        </h3>

                        {/* Extrait */}
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
                          {art.excerpt}
                        </p>

                      </div>

                      {/* Signature signature en bas */}
                      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img 
                            src={art.author.avatar} 
                            alt={art.author.name}
                            referrerPolicy="no-referrer"
                            className="w-7 h-7 rounded-full object-cover border border-slate-100"
                          />
                          <span className="text-xs font-semibold text-slate-700">{art.author.name}</span>
                        </div>
                        <span className="text-xs font-bold text-[#2563EB] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          Lire l'article
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>

                    </div>

                  </article>
                ))}
              </div>
            )}

          </div>
        </section>

        {/* 5. SECTION NEWSLETTER (BANDEAU SUR FOND GRIS CLAIR #F1F5F9) */}
        <section className="py-14 bg-[#F1F5F9] border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-10 shadow-xs text-center space-y-6">
              
              <div className="w-12 h-12 bg-blue-50 text-[#2563EB] rounded-full flex items-center justify-center mx-auto border border-blue-100">
                <Mail className="w-5.5 h-5.5" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                  Rejoignez la veille technologique CampusTech
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-lg mx-auto">
                  Recevez directement dans votre boîte mail nos articles académiques, guides pratiques de codage, tutoriels et annonces de bourses exclusives de l'école.
                </p>
              </div>

              {isSubscribed ? (
                <div className="flex gap-2.5 items-center justify-center bg-emerald-50 text-[#10B981] p-4 rounded-xl text-xs sm:text-sm font-semibold border border-emerald-100 max-w-md mx-auto">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Votre inscription a été enregistrée avec succès !</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="votre.email@domain.com"
                    required
                    className="bg-slate-50 border border-slate-200 focus:border-[#2563EB] placeholder-slate-400 text-sm rounded-xl px-4 py-3 grow focus:outline-hidden focus:bg-white transition-all text-[#0F172A]"
                  />
                  <button
                    type="submit"
                    className="bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs px-5 py-3.5 rounded-xl transition-all shadow-sm shrink-0 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    S'abonner
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

              <p className="text-[10px] text-slate-400 font-mono">
                Pas de spam. Désabonnement possible en un seul clic à tout moment.
              </p>

            </div>
          </div>
        </section>

      </main>

      {/* 6. FOOTER (FOND NOIR PROFOND #0F172A) */}
      <footer className="bg-[#0F172A] text-slate-300 font-sans border-t border-slate-950">
        
        {/* Grille principale du Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Colonne Marque */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center text-white">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="font-extrabold text-lg text-white">
                  Campus<span className="text-[#2563EB]">Tech</span>
                </span>
              </div>
              
              {/* Signature officielle requise */}
              <p className="text-sm font-semibold text-[#10B981] font-sans">
                "CampusTech – Comprendre la technologie. Construire l’avenir."
              </p>

              <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                Première école supérieure d'ingénierie formant les bâtisseurs du web et de l'intelligence artificielle en Afrique subsaharienne.
              </p>
            </div>

            {/* Colonne Mentions */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
                Programmes Académiques
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li>Bachelor Développeur Full-Stack (Next.js & React)</li>
                <li>Master IA & Cloud (Machine Learning Ops)</li>
                <li>Bootcamp Mobile (Flutter, Swift & Expo)</li>
              </ul>
            </div>

            {/* Colonne Réseaux Sociaux & Liens */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
                Rejoignez la communauté
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Suivez nos actualités en temps réel pour être averti de nos webinaires gratuits et de nos piscines de code mensuelles.
              </p>
              
              {/* Icônes de réseaux sociaux */}
              <div className="flex gap-3 pt-2">
                <a href="#facebook" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#2563EB] hover:border-blue-500 hover:text-white transition-all text-slate-400" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#twitter" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#2563EB] hover:border-blue-500 hover:text-white transition-all text-slate-400" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#linkedin" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#2563EB] hover:border-blue-500 hover:text-white transition-all text-slate-400" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#github" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#2563EB] hover:border-blue-500 hover:text-white transition-all text-slate-400" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bande de bas de page avec la mention de version technique */}
        <div className="border-t border-slate-900 bg-[#070b14] py-6 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-slate-500 font-mono">
            <div>
              &copy; 2026 CampusTech Corporation. Établissement agréé d'enseignement supérieur.
            </div>
            <div className="flex gap-4">
              <span>Optimisé pour réseaux mobiles 3G/4G/5G</span>
              <span>&bull;</span>
              <span className="text-[#10B981] font-bold">Légèreté assurée</span>
            </div>
          </div>
        </div>

      </footer>

    </div>
  );
}
