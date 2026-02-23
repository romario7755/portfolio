"use client"


import { useState, useEffect } from "react"
import Link from "next/link"
import Loading from "./components/Loading"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Image from "next/image"




export default function Home() {
const [form, setForm]=useState({
            name:"",
            email:"",
            message:"",

});
     const handlesubmit = async (e:React.FormEvent) => {
                e.preventDefault();
                await fetch("/api/content",{
                    method:"POST",
                    headers:{"content-type":"application/json"},
                    body: JSON.stringify(form),
                  });
                  alert("Message envoyer !!")

     };
  
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0) // Initialize currentIndex

  

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen flex items-center pt-16 hero-mobile">
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Advanced animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-morphing-advanced"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-hero-glow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-complex-float"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-morphing-advanced animation-delay-4000"></div>
        </div>

        {/* Enhanced floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-60 animate-particle-float"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-blue-300 rounded-full opacity-80 animate-complex-float"></div>
          <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-purple-300 rounded-full opacity-40 animate-particle-float animation-delay-500"></div>
          <div className="absolute top-60 right-1/4 w-1 h-1 bg-cyan-300 rounded-full opacity-70 animate-complex-float animation-delay-1000"></div>
          <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-pink-400 rounded-full opacity-50 animate-particle-float animation-delay-2000"></div>
          <div className="absolute bottom-1/3 right-1/6 w-1 h-1 bg-indigo-400 rounded-full opacity-60 animate-complex-float animation-delay-4000"></div>
          <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-yellow-400 rounded-full opacity-40 animate-particle-float animation-delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24 text-center z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 tracking-tight animate-title-pulse hero-title-mobile">
              <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                TASSDEV
              </span>
            </h1>
            <div className="text-2xl md:text-3xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed hero-subtitle-mobile mobile-text-xl">
              <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-purple-200 bg-clip-text text-transparent font-semibold">
                 bonjour je suis TASSDEV  un developpeur fullstack avec 5 ans expérience , utilisant React Next.js
                 Node.js,Prisma,Mongodb,SQLlite              </span>
            </div>
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-cyan-400 animate-pulse"></div>
              <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-purple-400 to-pink-400 animate-pulse"></div>
            </div>

            {/* Decorative npmfloating icons */}
            <div className="absolute top-10 left-10 text-blue-300 opacity-20 animate-complex-float">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="absolute top-20 right-20 text-purple-300 opacity-20 animate-particle-float">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="absolute bottom-10 left-20 text-cyan-300 opacity-20 animate-complex-float animation-delay-2000">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
          </div>
          
           
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in-up animation-delay-500">
              <Link
                 href="#contact"
                className="group relative overflow-hidden inline-flex items-center px-10 py-5 text-lg font-bold rounded-full text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 transition-all duration-700 shadow-2xl hover:shadow-blue-500/40 transform hover:-translate-y-3 hover:scale-105 border border-blue-500/20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400 before:to-cyan-400 before:opacity-0 before:transition-opacity before:duration-700 hover:before:opacity-20"
              >
                <span className="relative z-10 mr-2">Me contacter</span>
                <svg className="relative z-10 w-5 h-5 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
              </Link>
              
            </div>
          
          
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium mb-2 opacity-80">Découvrez mon parcour</span>
            <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <div className="inline-block p-2 bg-blue-100 rounded-full mb-6">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Pourquoi choisir ENRE ?
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une expérience dans la conception de plusieur projets  <span className="text-blue-600 font-semibold">révolutionnaire</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            <div className="group text-center p-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 border border-white/50 hover:border-blue-200/70 transform hover:-translate-y-6 hover:scale-105 hover:rotate-1 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-50/30 before:to-cyan-50/30 before:opacity-0 before:transition-opacity before:duration-700 hover:before:opacity-100 feature-card-mobile mobile-shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-300/50 relative z-10 feature-icon-mobile">
                <svg className="w-10 h-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 group-hover:text-blue-600 transition-colors duration-500 relative z-10">applications web Vérifiés</h3>
              <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300 relative z-10">Toutes les applications web dévelloppé  sont inspectés et certifiés par des utilisateurs pour votre tranquillité d'esprit</p>
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full group-hover:w-20 group-hover:h-1.5 transition-all duration-500 relative z-10"></div>

              {/* Micro-interactions - particles */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              </div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-500">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="group text-center p-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-700 border border-white/50 hover:border-green-200/70 transform hover:-translate-y-6 hover:scale-105 hover:rotate-1 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-green-50/30 before:to-emerald-50/30 before:opacity-0 before:transition-opacity before:duration-700 hover:before:opacity-100 feature-card-mobile mobile-shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-green-300/50 relative z-10">
                <svg className="w-10 h-10 text-green-600 group-hover:text-green-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 group-hover:text-green-600 transition-colors duration-500 relative z-10">applications web  Sécurisées</h3>
              <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300 relative z-10"> je developpe les application fullstack securisée avec implémentatation authentification JWT validations stricte des entrées et sécurisation des APIs JWT</p>
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full group-hover:w-20 group-hover:h-1.5 transition-all duration-500 relative z-10"></div>

              {/* Micro-interactions - particles */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-600">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="group text-center p-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 border border-white/50 hover:border-purple-200/70 transform hover:-translate-y-6 hover:scale-105 hover:rotate-1 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-50/30 before:to-pink-50/30 before:opacity-0 before:transition-opacity before:duration-700 hover:before:opacity-100 feature-card-mobile mobile-shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-300/50 relative z-10">
                <svg className="w-10 h-10 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 group-hover:text-purple-600 transition-colors duration-500 relative z-10">Service Rapide </h3>
              <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300 relative z-10">le respect du cahier de charge et du delais de livraison fait partir de nos exigences</p>
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full group-hover:w-20 group-hover:h-1.5 transition-all duration-500 relative z-10"></div>

              {/* Micro-interactions - particles */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
              </div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-700">
                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      
      

      {/* Testimonials Section */}
      <div className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1000ms'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Des milliers de clients satisfaits nous font confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 hover:rotate-1 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/10 before:to-cyan-500/10 before:opacity-0 before:transition-opacity before:duration-700 hover:before:opacity-100">
              <div className="flex items-center mb-6 relative z-10">
                <div className="flex text-yellow-400 group-hover:text-yellow-300 transition-colors duration-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current group-hover:scale-110 transition-transform duration-300"
                      style={{transitionDelay: `${i * 100}ms`}}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-white/90 text-lg mb-6 leading-relaxed group-hover:text-white transition-colors duration-500 relative z-10">
                "Service exceptionnel ! TASSDEV  a développé mon application dans le respect des delais et du cahier des charges. TASSDEV est vraiment professionnelle."
              </p>
              <div className="flex items-center relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-400/50">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                  <p className="text-white font-semibold group-hover:text-blue-100 transition-colors duration-300">Marie Dubois</p>
                  <p className="text-blue-200 text-sm group-hover:text-cyan-200 transition-colors duration-300">Cliente depuis 2023</p>
                </div>
              </div>

              {/* Micro-interactions */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              </div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 hover:rotate-1 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-green-500/10 before:to-emerald-500/10 before:opacity-0 before:transition-opacity before:duration-700 hover:before:opacity-100">
              <div className="flex items-center mb-6 relative z-10">
                <div className="flex text-yellow-400 group-hover:text-yellow-300 transition-colors duration-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current group-hover:scale-110 transition-transform duration-300"
                      style={{transitionDelay: `${i * 100}ms`}}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-white/90 text-lg mb-6 leading-relaxed group-hover:text-white transition-colors duration-500 relative z-10">
                "Transaction ultra-sécurisée et rapide. Je recommande vivement TASSDEV pour tout vos application web."
              </p>
              <div className="flex items-center relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-green-400/50">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <div>
                  <p className="text-white font-semibold group-hover:text-green-100 transition-colors duration-300">Pierre Martin</p>
                  <p className="text-blue-200 text-sm group-hover:text-emerald-200 transition-colors duration-300">Client depuis 2022</p>
                </div>
              </div>

              {/* Micro-interactions */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-500">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 hover:rotate-1 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-500/10 before:to-pink-500/10 before:opacity-0 before:transition-opacity before:duration-700 hover:before:opacity-100">
              <div className="flex items-center mb-6 relative z-10">
                <div className="flex text-yellow-400 group-hover:text-yellow-300 transition-colors duration-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current group-hover:scale-110 transition-transform duration-300"
                      style={{transitionDelay: `${i * 100}ms`}}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-white/90 text-lg mb-6 leading-relaxed group-hover:text-white transition-colors duration-500 relative z-10">
                "Interface intuitive et de qualité exceptionnelle pour tout vos applications web. TASSDEV a dépassé toutes mes attentes !"
              </p>
              <div className="flex items-center relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-400/50">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <p className="text-white font-semibold group-hover:text-purple-100 transition-colors duration-300">Sophie Laurent</p>
                  <p className="text-blue-200 text-sm group-hover:text-pink-200 transition-colors duration-300">Cliente depuis 2023</p>
                </div>
              </div>

              {/* Micro-interactions */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
              </div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-700">
                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-blue-200">application web vendus</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-blue-200">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200">Support client</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5⭐</div>
              <div className="text-blue-200">Note moyenne</div>
            </div>
          </div>
        </div>
      </div>

      {/* apropos Section */}
      <div id="apropos" className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              A propos
            </h2>
            <p className="text-xl text-gray-600 mb-16 leading-relaxed">
                Je suis développeur fullstack passionné par la créatio d'applications web et mobiles performentes et sécurisées
                . j'interviens sur l'ensemble du cycle de dévelloppement: de la conception de l'architecture jusqu'au déploiement
                en production.<br/>
                Mon objectif est de concevoir des sollutions robustes,évolutives et centrées sur l'expérience utiliisateur
                ,tout en intégrant les meilleures pratique de sécurité dès la phase de développement

            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">ce que je propose :</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Développement frontent moderne et responsive</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">conception d'APIs sécurisées et performantes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Architecture backend scalable</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Optimisation des performance et protection des données</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Ma valeurs</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rigoureux, organisé et orienté résultats, je m'engage à respecter les délais et le cahier 
                  des charges afin de livre des projets fiables et de qualité
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Transparence totale</h4>
                      <p className="text-gray-600 text-sm">Historique complet et inspection détaillée pour chaque cahier de charge</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Rapidité</h4>
                      <p className="text-gray-600 text-sm">Processus optimisé pour une expérience fluide et rapide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
       <div id="experience" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes experiences</h2>
      
            </div>
            
            <div className="space-y-8">
            <div className="bg-white rounded-3xl p-2 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">les technologies utiliser</h3>

              <div className="space-y-6">    
                </div>
                

                    <div className="flex items-start space-x-4">
                         <div className="flex items-start space-x-4">
                           <div className="w-20 h-20 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Image src="/nodejs.jpg" alt="mongo" height={100} width={200}/>
                            </div>
                         <div className="flex items-start space-x-4">
                           <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Nodejs</h4>
                              <p className="text-gray-600"></p>
                           </div>
                         </div>
                    </div>
                    <div className="flex items-start space-x-4">
                       <div className="flex items-start space-x-4">
                          <div className="w-20 h-20 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Image src="/Next.jpeg" alt="mongo" height={100} width={200}/>
                           </div>
                           <div className="flex items-start space-x-4">
                             <div>
                                 <h4 className="font-semibold text-gray-900 mb-1">Nextjs</h4>
                                 <p className="text-gray-600"></p>
                            </div>
                         </div>
                       </div>
                     <div className="w-20 h-20 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Image src="/React.jpeg" alt="mongo" height={100} width={200}/>
                     </div>
                    <div>
                         <h4 className="font-semibold text-gray-900 mb-1">React</h4>
                         <p className="text-gray-600"></p>
                    </div>
                 </div>
                 </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-18 h-20 bg-purple-18 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Image src="/prisma.png" alt="mongo" height={100} width={200}/>
                      </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-1">prisma</h4>
                        <p className="text-gray-600"></p>
                    </div>
                    <div className="w-20 h-20 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Image src="/Aws.png" alt="mongo" height={100} width={200}/>
                      </div>
                      <div>
                         <h4 className="font-semibold text-gray-900 mb-1">Aws</h4>
                         
                      </div>    
                      <div className="w-15 h-17 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                         
                           <Image src="/mongodb.jpg" alt="mongo" height={80} width={80}/>
                        
                      </div>
                      <div className="flex items-start space-x-4">
                        <div>
                           <h4 className="font-semibold text-gray-900 mb-1">Mongodb</h4>
                           
                        </div>
                     </div>
              </div>
              
            </div>
            
            
          </div>
          </div>
        </div>
      </div>

                
                {/* Contact Section */}
      <><div id="apropos" className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contactez-moi</h2>
          <p className="text-xl text-gray-600">Je suis  là pour vous accompagner</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Nom</label>
                  <input type="text" className="form-input" placeholder="Votre nom"
                  onChange={(e) => setForm({...form,name:e.target.value})} required />
                </div>
                <div>
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" placeholder="votre@email.com" 
                  onChange={(e) => setForm({...form,email:e.target.value})} required />
                </div>
              </div>
              
              <div>
                <label className="form-label">Message</label>
                <textarea
                  className="form-input min-h-[120px] resize-y"
                  placeholder="Décrivez votre demande..."
                  rows={5}
                  onChange={(e) => setForm({...form,message:e.target.value})} 
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8" id="contact">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                    <p className="text-gray-600">+237 677 79 87 99</p>
                    <p className="text-sm text-gray-500">Du lundi au vendredi, 9h-18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">atassieromario5@gmail.com</p>
                    <p className="text-sm text-gray-500">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                    <p className="text-gray-600">Cameroun<br />Douala</p>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  </div></>
    <Footer />
  </div>
  )
}
