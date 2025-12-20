import { 
  Heart, 
  MessageCircle, 
  AlertTriangle, 
  RefreshCcw, 
  DollarSign, 
  HelpCircle,
  Brain,
  ShieldCheck,
  Zap,
  Target
} from 'lucide-react';

/**
 * DNA DO CASAL - CONFIGURAÇÕES GERAIS
 */

// ⚠️ CHECKOUT: Troque pelo seu link da Hotmart, Kiwify, Eduzz, etc.
export const CHECKOUT_URL = "https://pay.hotmart.com/PLACEHOLDER_LINK"; 

// ⚠️ WEBHOOK N8N: Link fornecido pelo usuário.
// DICA: Para produção, ative o workflow no n8n e troque 'webhook-test' por 'webhook'
export const N8N_WEBHOOK_URL: string = "https://automacao.agenciadedicada.com.br/webhook-test/db8752de-56d7-4cf3-a5a0-c52242fac27d"; 

export const PRODUCT_PRICE = "R$ 29,97";
export const ORIGINAL_PRICE = "R$ 97,00";

export const PAIN_POINTS = [
  {
    icon: RefreshCcw,
    text: "Vocês brigam sempre pelas mesmas coisas e não entendem por quê"
  },
  {
    icon: MessageCircle,
    text: "Você sente que fala, fala, mas seu parceiro(a) não te entende"
  },
  {
    icon: AlertTriangle,
    text: "Toda vez que discutem, segue o mesmo padrão: briga → silêncio → volta"
  },
  {
    icon: Heart,
    text: "Vocês se amam, mas parece que falam idiomas diferentes"
  },
  {
    icon: HelpCircle,
    text: "Você suspeita que pode estar num relacionamento tóxico mas não tem certeza"
  },
  {
    icon: DollarSign,
    text: "Terapia de casal é cara demais ou vocês não têm tempo"
  }
];

export const BENEFITS = [
  {
    title: "Perfil Completo de Cada Um",
    description: "Como cada pessoa pensa, ama e se comunica. Pontos fortes e gatilhos emocionais.",
    icon: Target
  },
  {
    title: "Linguagens do Amor",
    description: "Como você demonstra amor e como você PRECISA receber. O ranking de 1º a 5º.",
    icon: Heart
  },
  {
    title: "O Ciclo das Brigas",
    description: "O padrão que se repete e vocês não veem. Como quebrar esse ciclo vicioso.",
    icon: RefreshCcw
  },
  {
    title: "Insights Personalizados",
    description: "Revelações tipo 'Nossa, é EXATAMENTE isso!'. A raiz dos seus conflitos.",
    icon: Brain
  },
  {
    title: "Plano de Ação Específico",
    description: "5-10 ações práticas. Scripts de conversas difíceis e frases de emergência.",
    icon: Zap
  },
  {
    title: "Sinais de Alerta",
    description: "Identificação de comportamentos tóxicos (se houver) e nível de gravidade.",
    icon: ShieldCheck
  }
];

export const FAQS = [
  {
    question: "Meu parceiro precisa saber que fiz a análise?",
    answer: "Não necessariamente. A análise é confidencial. Mas recomendamos transparência pra usar os insights juntos."
  },
  {
    question: "Precisa de muitas mensagens?",
    answer: "Recomendamos pelo menos 30 dias de conversa, mas funciona com menos também. Quanto mais dados, mais preciso."
  },
  {
    question: "Vocês vão ler minhas mensagens?",
    answer: "Não. A análise é feita automaticamente por Inteligência Artificial segura. Seus dados não ficam salvos após a entrega."
  },
  {
    question: "Funciona pra qualquer tipo de casal?",
    answer: "Sim! Namoro, noivado, casamento, união estável - qualquer relacionamento que usa WhatsApp."
  },
  {
    question: "E se eu não gostar?",
    answer: "Garantia incondicional de 7 dias. Se não ficar satisfeito, devolvemos 100% do valor."
  },
  {
    question: "Como eu envio a conversa depois que pagar?",
    answer: "Assim que o pagamento for confirmado, você recebe um e-mail com o link exclusivo. É só clicar, fazer upload do arquivo .txt da conversa do WhatsApp e pronto! Em 10 minutos você recebe o relatório."
  },
  {
    question: "Vocês vão compartilhar minha conversa com alguém?",
    answer: "NUNCA. Sua conversa é processada automaticamente por IA e apagada logo após gerar o relatório. Nenhum humano tem acesso, e não compartilhamos com absolutamente ninguém. Somos 100% conformes com a LGPD."
  },
  {
    question: "Funciona no iPhone?",
    answer: "Sim! No iPhone: abra a conversa > toque no nome do contato no topo > role até 'Exportar Conversa' > escolha 'Sem Mídia'. O resto é igual."
  },
  {
    question: "Posso analisar um relacionamento que já terminou?",
    answer: "Sim! Muitas pessoas fazem a análise para entender o que deu errado e evitar os mesmos padrões no próximo relacionamento. É uma forma poderosa de autoconhecimento."
  },
  {
    question: "Precisa ser em português?",
    answer: "Sim, no momento analisamos apenas conversas em português (Brasil). Estamos trabalhando para adicionar outros idiomas em breve."
  }
];