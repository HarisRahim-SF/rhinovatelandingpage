// React + Tailwind ROI Calculator for Rhinovate
import React from 'react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

export default function ROICalculator() {
  const [consults, setConsults] = useState(50);
  const [conversionBefore, setConversionBefore] = useState(30);
  const [conversionIncrease, setConversionIncrease] = useState(20);
  const [avgRevenue, setAvgRevenue] = useState(7000);
  const [revisionCost, setRevisionCost] = useState(5000);
  const [revisionsPrevented, setRevisionsPrevented] = useState(2);
  const [planCost, setPlanCost] = useState(1000);

  const conversionDelta = (conversionIncrease / 100);
  const newConversions = consults * (conversionDelta);
  const newRevenue = newConversions * avgRevenue;
  const savings = revisionsPrevented * revisionCost;
  const roi = newRevenue + savings - planCost;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 py-10 px-4 flex items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full max-w-3xl">
        <Card className="shadow-2xl rounded-2xl p-6">
          <CardContent>
            <h2 className="text-3xl font-bold mb-6 text-center">Clinic ROI Calculator</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Monthly Consultations</Label>
                <Input type="number" value={consults} onChange={e => setConsults(+e.target.value)} />
              </div>
              <div>
                <Label>Conversion Rate (Before Rhinovate) %</Label>
                <Input type="number" value={conversionBefore} onChange={e => setConversionBefore(+e.target.value)} />
              </div>
              <div>
                <Label>Expected Conversion Increase %</Label>
                <Input type="number" value={conversionIncrease} onChange={e => setConversionIncrease(+e.target.value)} />
              </div>
              <div>
                <Label>Avg. Revenue per Surgery ($)</Label>
                <Input type="number" value={avgRevenue} onChange={e => setAvgRevenue(+e.target.value)} />
              </div>
              <div>
                <Label>Revisions Prevented / Month</Label>
                <Input type="number" value={revisionsPrevented} onChange={e => setRevisionsPrevented(+e.target.value)} />
              </div>
              <div>
                <Label>Avg. Cost per Revision ($)</Label>
                <Input type="number" value={revisionCost} onChange={e => setRevisionCost(+e.target.value)} />
              </div>
              <div>
                <Label>Rhinovate Plan Cost / Month ($)</Label>
                <Input type="number" value={planCost} onChange={e => setPlanCost(+e.target.value)} />
              </div>
            </div>
            <div className="mt-8 bg-slate-50 p-6 rounded-xl shadow-inner text-center">
              <h3 className="text-xl font-semibold">Estimated ROI:</h3>
              <p className="text-2xl font-bold text-green-600 mt-2">${roi.toLocaleString()}</p>
              <p className="text-sm text-slate-600 mt-1">Includes ${newRevenue.toLocaleString()} in new revenue and ${savings.toLocaleString()} in cost savings.</p>
            </div>
            <div className="flex justify-center mt-6">
              <Button className="text-lg px-8 py-2">Share Estimate</Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
