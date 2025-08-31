"use client";

import Link from 'next/link';

const WhatsAppIcon = (props: React.ComponentProps<'svg'>) => (
  <svg viewBox="0 0 32 32" {...props}>
    <path
      d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.044-.53-.044-.315 0-.76.214-1.146.817-.287.43-.787.96-1.045 1.46-.287.545-.6.99-.6 1.49 0 .214.072.46.214.665l.004.004a9.352 9.352 0 0 0 2.25 3.18c.21.28.84.99 1.46 1.62.58.58 1.145.977 1.87 1.255.43.158.9.27 1.39.27.43 0 1.146-.215 1.518-.488.516-.402.978-.977 1.46-1.87a7.6 7.6 0 0 0 .287-2.04c-.072-1.147-.214-1.318-.69-1.318z"
      fill="currentColor"
    ></path>
    <path
      d="M27.344 4.656a16 16 0 0 0-22.628 0A16 16 0 0 0 4.656 27.344L3.43 32l4.84-1.218a15.953 15.953 0 0 0 7.73 2.068h.005a16 16 0 0 0 16-16c0-4.32-1.7-8.382-4.658-11.344zm-5.83 18.77a12.63 12.63 0 0 1-7.177 3.425h-.004a12.634 12.634 0 0 1-6.526-1.75l-.46-.273-4.882 1.22 1.24-4.756-.305-.488a12.64 12.64 0 0 1-1.9-6.83c0-6.96 5.662-12.632 12.63-12.632a12.58 12.58 0 0 1 8.93 3.7A12.63 12.63 0 0 1 30 15.997c0 6.96-5.662 12.63-12.632 12.63z"
      fill="currentColor"
    ></path>
  </svg>
);

export function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/919398624736"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </Link>
  );
}
