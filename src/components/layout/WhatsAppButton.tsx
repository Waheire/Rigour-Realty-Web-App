import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Rigour%20Realty!%20I'm%20interested%20in%20your%20services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
