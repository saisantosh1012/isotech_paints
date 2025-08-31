import Image from "next/image";

export const Icons = {
  logo: (props: React.ComponentProps<"img">) => (
     <Image src="/logo.svg" alt="Isotech Vision Logo" width={150} height={40} {...props}/>
  ),
};
