import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, FileText, Check, Lock, Loader2, Smartphone, ShieldCheck, Brain } from 'lucide-react';
import { Button } from './Button';
import { CHECKOUT_URL, N8N_UPLOAD_WEBHOOK_URL, PRODUCT_PRICE_NUMBER } from '../../constants';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UploadModal: React.FC<UploadModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: ''
  });
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Iniciando...');

  const processingTexts = [
    "Lendo arquivo de conversa...",
    "Identificando participantes...",
    "Analisando padrões de comunicação...",
    "Detectando gatilhos emocionais...",
    "Calculando compatibilidade...",
    "Gerando gráficos de sentimento...",
    "Compilando relatório final..."
  ];

  // Reset state on close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setFile(null);
        setProgress(0);
      }, 500);
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const simulateProcessing = () => {
    setStep(3);
    let currentProgress = 0;
    
    const interval = setInterval(() => {
      currentProgress += Math.random() * 5;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => setStep(4), 1000);
      }
      
      setProgress(Math.min(currentProgress, 100));
      const textIndex = Math.floor((currentProgress / 100) * processingTexts.length);
      setLoadingText(processingTexts[Math.min(textIndex, processingTexts.length - 1)]);
    }, 200);
  };

  // Handler do Passo 1: Dados Pessoais -> Torna-se um LEAD
  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  // Handler do Passo 2: Upload -> Personalização do Produto
  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    // Enviar dados para n8n
    const data = new FormData();
    data.append('file', file);
    data.append('name', formData.name);
    data.append('whatsapp', formData.whatsapp);
    data.append('email', formData.email);
    data.append('source', window.location.hostname);

    try {
      if (N8N_UPLOAD_WEBHOOK_URL && !N8N_UPLOAD_WEBHOOK_URL.includes("PLACEHOLDER")) {
        fetch(N8N_UPLOAD_WEBHOOK_URL, {
          method: 'POST',
          body: data
        }).catch(err => console.error("Erro upload n8n:", err));
      }
      
      simulateProcessing();
    } catch (error) {
      console.error(error);
      simulateProcessing();
    }
  };

  // Handler do Passo 4: Pagamento -> Início do Checkout
  const handlePaymentClick = () => {
    window.open(CHECKOUT_URL, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl z-10"
      >
        {/* Header */}
        <div className="bg-brand-light p-4 flex justify-between items-center border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧬</span>
            <span className="font-bold text-gray-900">Análise de DNA</span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Steps Content */}
        <div className="p-6 md:p-8">
          
          {/* STEP 1: Dados Pessoais */}
          {step === 1 && (
            <form onSubmit={handleLeadSubmit}>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Quem vai receber o relatório?</h3>
              <p className="text-gray-500 mb-6 text-sm">Insira seus dados para onde devemos enviar a análise completa.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Seu Nome</label>
                  <input 
                    required
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all"
                    placeholder="Ex: Maria Silva"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp (com DDD)</label>
                  <input 
                    required
                    type="tel" 
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all"
                    placeholder="Ex: 11 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input 
                    required
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all"
                    placeholder="Ex: maria@email.com"
                  />
                </div>
              </div>

              <div className="mt-8">
                 <Button type="submit" fullWidth>Continuar <Check className="w-5 h-5 ml-2" /></Button>
              </div>
            </form>
          )}

          {/* STEP 2: Upload */}
          {step === 2 && (
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Envie sua conversa</h3>
              <p className="text-gray-500 mb-6 text-sm">
                Vá no WhatsApp &gt; Configurações da Conversa &gt; Exportar Conversa &gt; <b>Sem Mídia</b>.
              </p>

              <label className="block w-full border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-brand-purple hover:bg-brand-purple/5 transition-all cursor-pointer group">
                <input 
                  type="file" 
                  accept=".txt,.zip" 
                  onChange={handleFileChange}
                  className="hidden" 
                />
                <div className="flex flex-col items-center">
                  {file ? (
                    <>
                      <FileText className="w-12 h-12 text-brand-purple mb-2" />
                      <p className="font-semibold text-gray-900">{file.name}</p>
                      <p className="text-sm text-green-600 mt-1">Arquivo selecionado!</p>
                    </>
                  ) : (
                    <>
                      <Upload className="w-10 h-10 text-gray-400 group-hover:text-brand-purple mb-2 transition-colors" />
                      <p className="font-medium text-gray-700">Clique para escolher o arquivo</p>
                      <p className="text-xs text-gray-400 mt-1">Suporta .txt ou .zip</p>
                    </>
                  )}
                </div>
              </label>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Seus dados são criptografados e apagados após análise.</span>
              </div>

              <div className="mt-8">
                <Button 
                  onClick={handleUploadSubmit} 
                  fullWidth 
                  disabled={!file}
                >
                  Analisar Conversa Agora
                </Button>
              </div>
              
              <button onClick={() => setStep(1)} className="mt-4 text-sm text-gray-400 hover:text-gray-600">
                Voltar
              </button>
            </div>
          )}

          {/* STEP 3: Processing Simulation */}
          {step === 3 && (
            <div className="text-center py-8">
              <div className="relative w-24 h-24 mx-auto mb-6">
                 {/* Spinner Circle */}
                 <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
                 <div className="absolute inset-0 border-4 border-brand-purple rounded-full border-t-transparent animate-spin"></div>
                 <Brain className="absolute inset-0 m-auto w-10 h-10 text-brand-purple animate-pulse" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">Gerando Relatório...</h3>
              <p className="text-brand-purple font-medium animate-pulse mb-6 h-6">{loadingText}</p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-brand-purple to-brand-pink h-full rounded-full transition-all duration-200 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-right text-xs text-gray-400 font-mono">{Math.floor(progress)}%</p>
            </div>
          )}

          {/* STEP 4: Paywall / Success */}
          {step === 4 && (
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-[bounce_1s_infinite]">
                <Check className="w-10 h-10 text-green-600" strokeWidth={3} />
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                Relatório Gerado com Sucesso!
              </h3>
              <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                Sua análise de <b>{file?.name || 'conversa'}</b> está pronta. Detectamos padrões importantes sobre a dinâmica do casal.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-8 text-left relative overflow-hidden">
                <div className="absolute inset-0 backdrop-blur-[2px] bg-white/60 flex flex-col items-center justify-center z-10">
                   <Lock className="w-8 h-8 text-gray-400 mb-2" />
                   <span className="font-bold text-gray-800">Conteúdo Bloqueado</span>
                </div>
                <div className="opacity-40 blur-sm select-none pointer-events-none">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
                  <div className="h-32 bg-gray-200 rounded w-full mt-4"></div>
                </div>
              </div>

              <Button 
                variant="success" 
                fullWidth 
                size="lg" 
                onClick={handlePaymentClick}
                className="animate-pulse shadow-green-200"
              >
                🔓 Liberar Acesso e Baixar PDF
              </Button>
              
              <p className="text-xs text-gray-500 mt-4">
                Pagamento único de {CHECKOUT_URL ? `R$ ${PRODUCT_PRICE_NUMBER.toString().replace('.', ',')}` : "valor promocional"}. Acesso imediato via E-mail e WhatsApp.
              </p>
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
};