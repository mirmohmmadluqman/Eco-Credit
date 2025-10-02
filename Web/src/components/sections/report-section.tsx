"use client"

import { useState, useEffect } from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import type { ChartConfig } from "@/components/ui/chart"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Skeleton } from "@/components/ui/skeleton"

const chartConfig = {
  usage: {
    label: "ECT Usage",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function ReportSection() {
  const [reportData, setReportData] = useState<any[]>([])

  useEffect(() => {
    const data = [
      { month: "Jan", usage: Math.floor(Math.random() * 5000) + 1000 },
      { month: "Feb", usage: Math.floor(Math.random() * 5000) + 1000 },
      { month: "Mar", usage: Math.floor(Math.random() * 5000) + 1000 },
      { month: "Apr", usage: Math.floor(Math.random() * 5000) + 1000 },
      { month: "May", usage: Math.floor(Math.random() * 5000) + 1000 },
      { month: "Jun", usage: Math.floor(Math.random() * 5000) + 1000 },
    ]
    setReportData(data)
  }, [])


  return (
    <section id="report" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Usage Report</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Tracking the on-chain activity and adoption of the EcoCredit token.
            </p>
        </div>

        <Card className="glass-card shadow-lg shadow-primary/10">
          <CardHeader>
            <CardTitle>Monthly Token Volume</CardTitle>
            <CardDescription>Volume of EcoCredit Tokens (ECT) transacted over the last 6 months.</CardDescription>
          </CardHeader>
          <CardContent>
            {reportData.length > 0 ? (
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <AreaChart
                  accessibilityLayer
                  data={reportData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => `${Number(value) / 1000}k`}
                  />
                  <Tooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                  <defs>
                      <linearGradient id="fillUsage" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--color-usage)" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="var(--color-usage)" stopOpacity={0.1}/>
                      </linearGradient>
                  </defs>
                  <Area
                    dataKey="usage"
                    type="natural"
                    fill="url(#fillUsage)"
                    stroke="var(--color-usage)"
                    stackId="a"
                  />
                </AreaChart>
              </ChartContainer>
            ) : (
                <div className="h-[300px] w-full">
                    <Skeleton className="h-full w-full" />
                </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
