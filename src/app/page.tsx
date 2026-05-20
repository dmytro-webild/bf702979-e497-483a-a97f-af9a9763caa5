"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="aurora"
        cardStyle="glass-depth"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "الرئيسية",
          id: "hero",
        },
        {
          name: "المتجر",
          id: "products",
        },
        {
          name: "من نحن",
          id: "about",
        },
        {
          name: "اتصل بنا",
          id: "contact",
        },
      ]}
      brandName="Elixir Cosmooo"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "radial-gradient",
      }}
      title="جمالك يبدأ من هنا"
      description="استكشفي تشكيلة من أرقى منتجات التجميل والعناية بالبشرة، الأصلية 100%، لتتألقي دائماً بجمال ساحر."
      kpis={[
        {
          value: "4.7",
          label: "تقييم العميل",
        },
        {
          value: "100%",
          label: "منتجات أصلية",
        },
        {
          value: "سريع",
          label: "توصيل للعراق",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "تسوق الآن",
          href: "#products",
        },
        {
          text: "اطلب عبر واتساب",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/gold-glitter-dull-pink-brushstroke_53876-101901.jpg"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/transparent-long-crystal-dual-pink-background_23-2147948637.jpg",
          alt: "Luxury model 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/dried-floral-natural-design-space_53876-95509.jpg",
          alt: "Luxury model 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/view-frame-with-facial-beauty-products-copy-space_23-2148299562.jpg",
          alt: "Luxury model 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/gold-rose-brown-earth-tone-background_53876-104012.jpg",
          alt: "Luxury model 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-skincare-products-arrangement_23-2149249526.jpg",
          alt: "Luxury model 5",
        },
      ]}
      avatarText="انضمي لأكثر من 5000 عميلة سعيدة"
      marqueeItems={[
        {
          type: "text",
          text: "توصيل سريع",
        },
        {
          type: "text",
          text: "دفع آمن",
        },
        {
          type: "text",
          text: "جودة عالمية",
        },
        {
          type: "text",
          text: "خدمة عملاء 24/7",
        },
        {
          type: "text",
          text: "ضمان استرجاع",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="وجهتك الأولى للفخامة في العراق"
      buttons={[
        {
          text: "تواصل معنا",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "سيروم النضارة",
          price: "$25",
          imageSrc: "http://img.b2bpic.net/free-photo/make-up-concept-with-lipstick_23-2149030357.jpg",
        },
        {
          id: "p2",
          name: "أحمر شفاه مخملي",
          price: "$15",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-lipstick-arrangement-plain-background_23-2148306680.jpg",
        },
        {
          id: "p3",
          name: "مجموعة العناية",
          price: "$45",
          imageSrc: "http://img.b2bpic.net/free-photo/optics-objects-beige-background_23-2148320346.jpg",
        },
        {
          id: "p4",
          name: "عطر الفخامة",
          price: "$60",
          imageSrc: "http://img.b2bpic.net/free-photo/women-s-day-still-life-with-makeup-jewelry_23-2149263171.jpg",
        },
        {
          id: "p5",
          name: "فرش احترافية",
          price: "$30",
          imageSrc: "http://img.b2bpic.net/free-photo/view-assortment-brushes-with-brown-paint_23-2150351814.jpg",
        },
        {
          id: "p6",
          name: "بخاخ مرطب",
          price: "$20",
          imageSrc: "http://img.b2bpic.net/free-photo/young-female-pajamas-sleep-mask-holding-make-up-spray-pink_140725-30143.jpg",
        },
      ]}
      title="منتجاتنا الأكثر مبيعاً"
      description="اكتشفي تشكيلتنا المختارة بعناية لتجديد جمالك"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Microsoft",
        "Google",
        "Apple",
        "Amazon",
        "Nike",
        "Adidas",
        "Chanel",
      ]}
      title="شركاؤنا في الجودة"
      description="نحن نتعامل فقط مع أفضل الشركات العالمية لتوفير منتجات أصلية وموثوقة"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "سارة علي",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-woman-long-brown-dress-smiling-street-outdoor-shot-emotional-female-model-with-elegant-makeup_197531-11294.jpg",
        },
        {
          id: "t2",
          name: "نور الهدى",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-bride-before-wedding_23-2149860779.jpg",
        },
        {
          id: "t3",
          name: "ليلى حسن",
          imageSrc: "http://img.b2bpic.net/free-photo/make-up-artist-showing-palette-woman_23-2148332516.jpg",
        },
        {
          id: "t4",
          name: "زينة خالد",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-serene-young-woman-with-beautiful-olive-skin-curly-hair-ideal-skin-brown-eyes-studio_633478-999.jpg",
        },
        {
          id: "t5",
          name: "هبة محمد",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-blond-hair-holding-powder-making-makeup_23-2148113249.jpg",
        },
      ]}
      cardTitle="ماذا يقول عملاؤنا"
      cardAnimation="slide-up"
      cardTag="تقييمات"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "هل المنتجات أصلية؟",
          content: "نعم، جميع منتجاتنا أصلية 100% ومستوردة من الوكلاء المعتمدين.",
        },
        {
          id: "q2",
          title: "كيف أطلب المنتج؟",
          content: "يمكنك الطلب مباشرة من المتجر أو عبر مراسلتنا على واتساب.",
        },
        {
          id: "q3",
          title: "كم يستغرق التوصيل؟",
          content: "يستغرق التوصيل داخل العراق من يومين إلى أربعة أيام عمل.",
        },
      ]}
      title="أسئلة شائعة"
      description="هل لديك استفسارات حول منتجاتنا أو التوصيل؟"
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="تواصل معنا"
      title="جاهزة لجمال مختلف؟"
      description="اطلبي الآن عبر واتساب واستمتعي بخدمة عملاء متميزة وسرعة في التوصيل."
      buttons={[
        {
          text: "واتساب الآن",
          href: "https://wa.me/yournumber",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Elixir Cosmooo"
      columns={[
        {
          title: "روابط سريعة",
          items: [
            {
              label: "الرئيسية",
              href: "#hero",
            },
            {
              label: "المتجر",
              href: "#products",
            },
          ],
        },
        {
          title: "خدماتنا",
          items: [
            {
              label: "التوصيل",
              href: "#",
            },
            {
              label: "السياسات",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
