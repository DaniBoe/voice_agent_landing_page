import React from 'react';

export default function Testimonial({ name, role, quote }: { name: string; role: string; quote: string }) {
  return (
    <blockquote className="bg-white/80 ring-1 ring-gray-200 rounded-lg p-6 shadow-sm">
      <p className="text-gray-800">“{quote}”</p>
      <footer className="mt-4 text-sm text-gray-600">— {name}, {role}</footer>
    </blockquote>
  );
}
