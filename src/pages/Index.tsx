import { CheckCircle, AlertTriangle, BookOpen, Star, Lock, Zap, FileText } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import heroWoman from "@/assets/hero-woman.png";
import garantiaSelo from "@/assets/garantia-7-dias.png";
import bonusMensagens from "@/assets/bonus-kit-mensagens.png";
import bonusDocumentos from "@/assets/bonus-lista-documentos.png";

const CTA_LINK = "https://pay.kiwify.com.br/RqplLuC";

const CTAButton = ({ children }: { children: React.ReactNode }) => (
  <a
    href={CTA_LINK}
    className="inline-block bg-primary text-primary-foreground font-extrabold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-xl animate-pulse-cta hover:brightness-110 transition-all shadow-xl"
  >
    {children}
  </a>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container max-w-4xl mx-auto px-4 py-16 sm:py-24 relative z-10 text-center">
          <img src={heroWoman} alt="Especialista em rescisão trabalhista" className="mx-auto mb-8 max-w-sm sm:max-w-md md:max-w-lg rounded-xl" />
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground mb-6">
            Pare de perder dinheiro na sua{" "}
            <span className="text-primary">rescisão trabalhista!</span>
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Descubra exatamente quanto você tem direito a receber e aprenda a calcular cada detalhe da sua rescisão para não ser passado para trás.
          </p>
          <CTAButton>👉 QUERO GARANTIR MEU GUIA AGORA</CTAButton>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-10">
            {[
              { icon: Star, text: "12 MIL cópias vendidas" },
              { icon: BookOpen, text: "Guia prático e direto" },
              { icon: CheckCircle, text: "Linguagem simples" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm sm:text-base text-foreground">
                <Icon className="w-5 h-5 text-primary shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Bônus Exclusivos */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-primary/30" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-background px-4 text-primary font-extrabold text-lg sm:text-2xl uppercase tracking-wide">
                  🎁 Bônus GRÁTIS por tempo limitado
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-xl mx-auto">
              Comprando HOJE você leva esses <strong className="text-foreground">2 bônus exclusivos</strong> sem pagar nada a mais!
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  img: bonusMensagens,
                  title: "Kit Mensagens Prontas para o RH",
                  desc: "Modelos prontos para você se comunicar com o RH da empresa de forma profissional e assertiva.",
                  value: "R$ 47,00",
                },
                {
                  img: bonusDocumentos,
                  title: "Lista de Documentos Importantes",
                  desc: "Checklist completo com todos os documentos que você precisa reunir para garantir seus direitos.",
                  value: "R$ 37,00",
                },
              ].map((bonus) => (
                <div
                  key={bonus.title}
                  className="relative bg-card rounded-2xl border-2 border-primary/40 shadow-lg overflow-hidden group hover:border-primary hover:shadow-xl transition-all"
                >
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                    Grátis
                  </div>
                  <div className="p-4 flex justify-center bg-gradient-to-b from-primary/5 to-transparent">
                    <img src={bonus.img} alt={bonus.title} className="w-48 sm:w-56 object-contain drop-shadow-md" />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-bold text-foreground text-base sm:text-lg mb-2">{bonus.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{bonus.desc}</p>
                    <p className="text-sm">
                      <span className="line-through text-muted-foreground/60">{bonus.value}</span>{" "}
                      <span className="text-primary font-extrabold text-lg">GRÁTIS</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Countdown */}
      <CountdownTimer />

      {/* Pain Section */}
      <section className="py-14 sm:py-20">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <AlertTriangle className="w-20 h-20 text-urgency mx-auto mb-6" />
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-6">
            Você sabe se estão te pagando tudo o que é seu por direito?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Muitos trabalhadores descobrem tarde demais que receberam menos do que deveriam.
            Erros no cálculo, falta de informação e desconhecimento dos seus direitos podem fazer você perder dinheiro que é seu por lei.
          </p>
          <p className="text-foreground font-semibold text-lg sm:text-xl">
            Não seja mais um que sai no prejuízo.
          </p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-14 sm:py-20 bg-warm">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-foreground mb-10">
            💡 O que você vai aprender
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Como calcular saldo de salário",
              "Férias vencidas e proporcionais",
              "13º salário proporcional",
              "Aviso prévio",
              "Multa de 40% do FGTS",
              "Descontos legais",
              "Tipos de demissão e seus direitos",
              "Como conferir se a empresa calculou certo",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-card rounded-lg p-4 shadow-sm">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton>👉 QUERO APRENDER AGORA</CTAButton>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-14 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-foreground mb-3">
            🏆 Recorde: 12 MIL vendidos em 2025
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
            Milhares de trabalhadores já utilizaram este guia para entender seus direitos e evitar prejuízos.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { name: "Carlos M.", city: "São Paulo, SP", text: "Descobri que a empresa tinha errado no cálculo das minhas férias. Recuperei mais de R$ 1.200!", initials: "CM" },
              { name: "Ana Paula S.", city: "Belo Horizonte, MG", text: "Linguagem super simples. Consegui conferir tudo sozinha e fiquei tranquila.", initials: "AP" },
              { name: "Roberto L.", city: "Curitiba, PR", text: "Melhor investimento que fiz. Valeu cada centavo. Recomendo demais!", initials: "RL" },
            ].map((d) => (
              <div key={d.name} className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <div className="flex text-primary mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 italic">"{d.text}"</p>
                <div className="flex items-center gap-3">
                  <Avatar className="w-9 h-9">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">{d.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-foreground font-semibold text-sm">{d.name}</p>
                    <p className="text-muted-foreground text-xs">{d.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-14 sm:py-20 bg-warm">
        <div className="container max-w-2xl mx-auto px-4 text-center">
          <img src={garantiaSelo} alt="Garantia de 7 dias" className="mx-auto mb-6 w-36 sm:w-44" />
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Garantia incondicional de 7 dias
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo nosso.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-primary/10 to-primary/5">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-8">
            NÃO PERCA MAIS DINHEIRO<br />COM RESCISÃO!
          </h2>
          <CTAButton>🔥 QUERO ME PROTEGER AGORA</CTAButton>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { icon: Lock, text: "Compra 100% segura" },
              { icon: Zap, text: "Acesso imediato" },
              { icon: FileText, text: "Material em PDF" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="w-4 h-4" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-muted-foreground border-t border-border">
        <p>© 2025 Rescisão Trabalhista Sem Enganação. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Index;
