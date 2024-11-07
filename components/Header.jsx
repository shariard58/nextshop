import LowerHeader from "./LowerHeader";
import UpperHeader from "./UpperHeader";

export default function Header() {
  return (
    <div className="hidden md:block">
      <UpperHeader />
      <LowerHeader />
    </div>
  );
}
