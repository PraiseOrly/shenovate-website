import { motion } from 'framer-motion';
import React from 'react';
import { Button } from './ui/Button';

export function Community() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center text-slate-800 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join The Community
            </h2>
            <p className="text-lg md:text-xl text-slate-600">
              Become a STEM Sister and Shine with Us!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
          >
            {/* First Name and Last Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="flex h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
                <p className="mt-1 text-xs text-slate-500">
                  This is a hint text to help user.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="flex h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
                <p className="mt-1 text-xs text-slate-500">
                  This is a hint text to help user.
                </p>
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="you@gmail.com"
                className="flex h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
              <p className="mt-1 text-xs text-slate-500">
                This is a hint text to help user.
              </p>
            </div>

            {/* Phone Number Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Phone number <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <select className="flex h-11 w-20 rounded-lg border border-slate-300 bg-white px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                  <option value="NG">NG</option>
                </select>
                <input
                  type="tel"
                  placeholder="+234 000 0000 00"
                  className="flex-1 h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
              </div>
              <p className="mt-1 text-xs text-slate-500">
                This is a hint text to help user.
              </p>
            </div>

            {/* Why are you joining us */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Why are you joining us <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Tell us why you should be accepted..."
                rows={4}
                className="flex w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                required
              />
              <p className="mt-1 text-xs text-slate-500">
                This is a hint text to help user.
              </p>
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="mb-4">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded border-slate-300 text-pink-600 focus:ring-pink-500"
                  required
                />
                <span className="text-sm text-slate-600">
                  You agree to our friendly privacy policy.
                </span>
              </label>
            </div>

            {/* Save Login Details Checkbox */}
            <div className="mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 text-pink-600 focus:ring-pink-500"
                />
                <span className="text-sm text-slate-600">
                  Save my login details for next time.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-pink-600 hover:bg-pink-700 border-none shadow-lg text-lg"
            >
              Request to Join
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

