import React, { useState } from 'react';
import { X, Github, Copy, Check, ExternalLink, Globe, FileCode, Terminal } from 'lucide-react';

interface GitHubExportGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubExportGuideModal: React.FC<GitHubExportGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedStep, setCopiedStep] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, stepId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepId);
    setTimeout(() => setCopiedStep(null), 2500);
  };

  const gitCommands = `# 1. Initialize Git repository
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial release: English For Kids website"

# 4. Set main branch
git branch -M main

# 5. Connect to your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/english-for-kids.git

# 6. Push code to GitHub
git push -u origin main`;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-gray-900 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#1b1c15] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
              <Github className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-fredoka text-white flex items-center gap-2">
                GitHub Pages එකට Public කරන්නේ මෙහෙමයි
              </h2>
              <p className="text-xs text-gray-300">
                How to publish your "English For Kids" website publicly on GitHub
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 text-gray-800">
          {/* Sinhala Instruction Notice */}
          <div className="bg-[#f9e534]/20 border border-[#f9e534] rounded-2xl p-4 space-y-1.5">
            <h3 className="text-sm font-bold text-[#706500] font-fredoka flex items-center gap-1.5">
              <span>සුදු පාටින් Load වීම (White Screen) නිරාකරණය කර React Code එකම Deploy කරන්නේ මෙහෙමයි:</span>
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed font-medium">
              Vite + React ව්‍යාපෘතියක TypeScript source files සෘජුවම බ්‍රවුසරයකට ධාවනය කළ නොහැකි නිසා සහ asset paths සකස් විය යුතු නිසා, GitHub Actions මඟින් ස්වයංක්‍රීයව <code className="bg-white/80 px-1 py-0.5 rounded font-mono">npm run build</code> වී deploy වන පරිදි <strong>.github/workflows/deploy.yml</strong> සහ <code className="bg-white/80 px-1 py-0.5 rounded font-mono">vite.config.ts (base: './')</code> සකස් කර ඇත!
            </p>
          </div>

          {/* Step 1: Push latest code */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#0061a4] text-white text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h4 className="text-sm font-bold text-gray-900">
                නවතම Code එක GitHub Repo එකට Push කරන්න
              </h4>
            </div>
            <div className="ml-8 space-y-2">
              <p className="text-xs text-gray-600">
                Terminal එකේ පහත commands run කරන්න (දැන් <code className="font-mono bg-gray-100 px-1 rounded">.github/workflows/deploy.yml</code> සහ <code className="font-mono bg-gray-100 px-1 rounded">base: './'</code> අඩංගු වේ):
              </p>
              <div className="relative bg-gray-900 text-gray-100 rounded-xl p-3 font-mono text-xs overflow-x-auto">
                <pre>{`git add .
git commit -m "Configure GitHub Actions and relative base path for GitHub Pages"
git push origin main`}</pre>
              </div>
            </div>
          </div>

          {/* Step 2: Select GitHub Actions in Settings */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#ff5748] text-white text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h4 className="text-sm font-bold text-gray-900">
                GitHub Settings වල Pages Source එක "GitHub Actions" ලෙස වෙනස් කරන්න (වැදගත්ම පියවර!)
              </h4>
            </div>
            <div className="ml-8 text-xs text-gray-600 space-y-2">
              <p>1. ඔබගේ GitHub Repository (<code className="font-mono text-[#0061a4]">English-For-Kids</code>) එකේ <strong>Settings</strong> ටැබ් එකට යන්න.</p>
              <p>2. වම් පස මෙනුවේ ඇති <strong>Pages</strong> ක්ලික් කරන්න.</p>
              <p>3. <strong>"Build and deployment"</strong> යටතේ ඇති <strong>Source</strong> dropdown එකෙන් <strong className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">"GitHub Actions"</strong> තෝරන්න (කලින් තිබූ "Deploy from a branch" වෙනුවට).</p>
              <p className="text-xs text-emerald-700 font-medium bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                🎉 මෙය තේරූ පසු, ඔබ push කරන සෑම විටම GitHub Actions මඟින් ස්වයංක්‍රීයව React App එක build කර GitHub Pages වෙත deploy කරනු ඇත. සුදු පාට screen එක වෙනුවට සම්පූර්ණ වෙබ් අඩවිය load වේ!
              </p>
            </div>
          </div>

          {/* Step 3: Check Actions tab */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#2E7D32] text-white text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h4 className="text-sm font-bold text-gray-900">
                Actions ටැබ් එකෙන් Build Progress එක බලාගන්න
              </h4>
            </div>
            <div className="ml-8 text-xs text-gray-600 space-y-1">
              <p>1. Repo එකේ උඩ ඇති <strong>Actions</strong> ටැබ් එකට ගොස් "Deploy to GitHub Pages" workflow එක කොළ පාටින් (Success) අවසන් වන තෙක් තත්පර 30-60ක් සිටින්න.</p>
              <p>2. ඉන්පසු ඔබගේ සබැඳිය විවෘත කරන්න: <a href="https://jayasankha-dev.github.io/English-For-Kids/" target="_blank" rel="noreferrer" className="text-blue-600 underline font-mono">https://jayasankha-dev.github.io/English-For-Kids/</a></p>
            </div>
          </div>

          {/* Standalone index.html info */}
          <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
            <div className="text-xs text-gray-500">
              <span className="font-bold text-gray-700">Standalone index.html:</span> Project එකේ <code className="font-mono bg-gray-100 px-1 rounded">index.html</code> සහ <code className="font-mono bg-gray-100 px-1 rounded">standalone-github-pages.html</code> සූදානම් කර ඇත.
            </div>
            <button
              onClick={onClose}
              className="tactile-btn py-2 px-6 rounded-xl bg-[#0061a4] text-white font-fredoka font-bold text-sm"
            >
              තේරුණා (Got it)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
