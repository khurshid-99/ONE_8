import type { Dispatch, RefObject, SetStateAction } from "react";
import Toggle, { type ToggleRef } from "../../toggleComponents/Toggle";

interface Props {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  ref: RefObject<ToggleRef | null>;
}

const MobileMenu = ({ isActive, setIsActive, ref }: Props) => {
  return (
    <Toggle
      ref={ref}
      isActive={isActive}
      setIsActive={setIsActive}
      side="left"
      duration={0.5}
      className="max-w-100 top-70p"
    >
      <div className="flex items-center justify-between p-6">
        <h2>Navigation</h2>
      </div>

      <nav className="flex flex-col gap-4 p-6">
        <a href="/">Home</a>
        <a href="/collections/women-all">Women</a>
        <a href="/collections/men-all">Men</a>
      </nav>
    </Toggle>
  );
};

export default MobileMenu;
