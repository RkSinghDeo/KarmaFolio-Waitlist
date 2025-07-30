"use client";

import React from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Leaf, Target, HeartHandshake, ShieldCheck, Globe, Trees } from "lucide-react";

// Dummy data to populate the mockup
const monthlyGivingData = [
  { month: "J", amount: 40 },
  { month: "F", amount: 60 },
  { month: "M", amount: 50 },
  { month: "A", amount: 80 },
  { month: "M", amount: 75 },
  { month: "J", amount: 95 },
  { month: "J", amount: 85 },
];

const charityPortfolio = [
  {
    name: "Ocean Cleanup",
    logo: <Globe className="h-5 w-5 text-chart-3" />,
    percentage: 45,
    color: "bg-chart-3",
  },
  {
    name: "Amazon Watch",
    logo: <Trees className="h-5 w-5 text-chart-2" />,
    percentage: 35,
    color: "bg-chart-2",
  },
  {
    name: "Global Health",
    logo: <HeartHandshake className="h-5 w-5 text-chart-1" />,
    percentage: 20,
    color: "bg-chart-1",
  },
];

const impactMetrics = [
  {
    icon: <HeartHandshake className="h-7 w-7 text-sage" />,
    value: "2,847",
    label: "Lives Impacted",
  },
  {
    icon: <Target className="h-7 w-7 text-sage" />,
    value: "12",
    label: "Projects Funded",
  },
  {
    icon: <Leaf className="h-7 w-7 text-sage" />,
    value: "5.2 tons",
    label: "Carbon Offset",
  },
];

// Reusable component for the animated bar chart
const BarChart = () => (
  <div className="flex h-40 w-full items-end justify-between gap-x-3 sm:gap-x-4 pt-4">
    {monthlyGivingData.map((data, index) => (
      <div key={data.month} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
        <motion.div
          className="w-full rounded-t-md"
          style={{ backgroundColor: "var(--color-sage)" }}
          initial={{ height: "0%", opacity: 0 }}
          whileInView={{ height: `${data.amount}%`, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: index * 0.08, ease: 'easeOut' }}
        />
        <span className="text-xs font-medium text-muted-foreground">{data.month}</span>
      </div>
    ))}
  </div>
);

// Reusable component for charity logos
const CharityLogo = ({ icon }: { icon: React.ReactNode }) => (
  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
    {icon}
  </div>
);

export default function KarmafolioPreview() {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Your Personal Impact Dashboard
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Track your giving, see real results, and discover new causes that align with your values.
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-12 max-w-6xl"
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="overflow-hidden rounded-xl border border-border bg-white shadow-2xl shadow-primary/10">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col gap-6 lg:flex-row">
                {/* Left Column */}
                <div className="flex w-full flex-col gap-6 lg:w-[60%]">
                  <Card className="bg-[rgba(143,171,146,0.08)]">
                    <CardHeader>
                      <CardTitle className="text-base font-semibold text-primary sm:text-lg">Monthly Giving</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <BarChart />
                    </CardContent>
                  </Card>
                  <Card className="bg-[rgba(143,171,146,0.08)]">
                    <CardHeader>
                      <CardTitle className="text-base font-semibold text-primary sm:text-lg">Your Portfolio</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      {charityPortfolio.map((charity) => (
                        <div key={charity.name} className="flex items-center gap-4">
                          <CharityLogo icon={charity.logo} />
                          <div className="flex-grow">
                            <p className="font-medium text-foreground">{charity.name}</p>
                            <div className="mt-1.5 h-2 w-full rounded-full bg-muted">
                              <motion.div
                                className={`${charity.color} h-2 rounded-full`}
                                initial={{ width: '0%' }}
                                whileInView={{ width: `${charity.percentage}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                              />
                            </div>
                          </div>
                          <p className="font-semibold text-primary">{charity.percentage}%</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
                {/* Right Column */}
                <div className="flex w-full flex-col gap-6 lg:w-[40%]">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    {impactMetrics.map((metric) => (
                      <Card key={metric.label} className="bg-[rgba(143,171,146,0.08)] p-5">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0">{metric.icon}</div>
                          <div>
                            <p className="text-2xl font-bold text-primary">{metric.value}</p>
                            <p className="text-sm text-muted-foreground">{metric.label}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <Card className="bg-[rgba(143,171,146,0.08)]">
                    <CardHeader>
                      <CardTitle className="text-base font-semibold text-primary sm:text-lg">Trust & Transparency</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-sage" />
                        <span className="flex-grow font-medium text-foreground">Verified Giving</span>
                        <Badge variant="secondary" className="bg-sage/20 text-sage">Enabled</Badge>
                      </div>
                      <div className="flex items-center gap-3">
                        <ShieldCheck className="h-5 w-5 text-sage" />
                        <span className="flex-grow font-medium text-foreground">Transparency Rating</span>
                        <span className="font-semibold text-primary">95/100</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}