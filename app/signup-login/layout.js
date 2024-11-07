import Header from "@/components/Header";
import MobileFooter from "@/components/MobileFooter";
import MobileHeader from "@/components/MobileHeader";
export default function SignupLoginLayout({ children }) {
  return (
    <div className="relative h-[100vh] mb-[40px]">
      <Header className="hidden md:block" />
      <MobileHeader />
      <MobileFooter />
      <div>{children}</div>
    </div>
  );
}
