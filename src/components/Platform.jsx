import React, { useState } from "react";
import { Button, Tabs } from "antd";
import {
  ArrowRight,
  Settings,
  Database,
  TrendingUp,
  Activity,
} from "lucide-react";

const Platform = () => {
  const [activeTab, setActiveTab] = useState("fusion");

  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Infinite Data Quality",
      description:
        "Fusion combines industry experts with advanced technologies and processes to provide seamless data ingestion with unmatched data quality transparency for driving continuous improvement across your operations.",
      cta: "Learn More",
      image:
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Data Ingestion",
      description:
        "Fusion's proprietary data ingestion platform seamlessly aggregates well information management system data, stream data, and vendor data in real-time, and rapidly flags data quality issues related to incoming data.",
      cta: "Get Setup",
      image:
        "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Data Quality Operations",
      description:
        "Fusion is guided by 50+ energy experts dedicated to monitoring our customer's data quality 24/7, 365.",
      cta: "Explore Fusion",
      image:
        "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Health Score",
      description:
        "As part of Fusion, Corva has developed the industry's first data quality scoring system to increase visibility of data quality across various ingested sources. Our goal is to reach the highest data quality score in the fastest amount of time.",
      cta: "Start Scoring",
      image:
        "https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <section className="section-padding bg-dark-800 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary-400 tracking-wider uppercase mb-4 block">
            Platform
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Power Your Growth with <br />
            <span className="gradient-text">
              Devop360’s Integrated Technology Platform
            </span>
          </h2>
        </div>

        {/* Platform Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-dark-700 rounded-lg p-2">
            <button
              className={`px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === "fusion"
                  ? "bg-primary-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab("fusion")}
            >
              <div className="w-6 h-6 rounded border-2 border-current flex items-center justify-center">
                <div className="w-2 h-2 bg-current rounded-full"></div>
              </div>
              Fusion
            </button>
            <button
              className={`px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === "dev-center"
                  ? "bg-primary-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab("dev-center")}
            >
              <Settings className="w-5 h-5" />
              Dev Center
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card glass-card rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-400">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <Button className="btn-outline inline-flex items-center gap-2 font-medium">
                      {feature.cta}
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>

                {index === 0 && (
                  <div className="mt-auto">
                    <div className="glass-card rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-400 text-sm font-medium">
                          DATA QUALITY
                        </span>
                        <span className="text-primary-400 text-2xl font-bold">
                          100%
                        </span>
                      </div>
                      <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full w-full"></div>
                      </div>
                      <div className="flex gap-4 mt-4 text-xs text-gray-400">
                        <span>METRICS</span>
                        <span>TIMELINE</span>
                      </div>
                    </div>
                  </div>
                )}

                {index === 3 && (
                  <div className="mt-auto">
                    <div className="glass-card rounded-xl p-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-blue-500/10"></div>
                      <div className="relative">
                        <div className="w-full h-32 rounded-lg bg-gradient-to-r from-primary-500/20 to-blue-500/20 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-400 to-blue-400 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platform;
