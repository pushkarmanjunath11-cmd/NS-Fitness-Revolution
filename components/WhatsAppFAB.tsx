"use client";

export default function WhatsAppFAB() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918861153632";
  
  if (!phoneNumber || !/^\d+$/.test(phoneNumber)) {
    return null;
  }

  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const ariaLabel = `Chat on WhatsApp: ${phoneNumber}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-fab" aria-label={ariaLabel}>
      💬
    </a>
  );
}