import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  type ReactNode,
} from "react";

interface ToggleProps {
  children: ReactNode;
  className?: string;
  isActive: boolean;
  setIsActive: (active: boolean) => void;
  side?: "left" | "right";
  duration?: number;
  delay?: number;
  ease?: string;
}

export interface ToggleRef {
  open: () => void;
  close: () => void;
}

const Toggle = forwardRef<ToggleRef, ToggleProps>(
  (
    {
      children,
      className = "",
      isActive,
      setIsActive,
      side = "right",
      duration = 0.5,
      delay = 0,
      ease = "power2.out",
    },
    ref,
  ) => {
    const sideRef = useRef<HTMLElement | null>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    const direction = side === "right" ? "100%" : "-100%";

    const open = () => {
      if (!sideRef.current) return;

      timelineRef.current?.kill();

      gsap.fromTo(
        sideRef.current,
        { x: direction },
        {
          x: "0%",
          duration,
          delay,
          ease,
          overwrite: true,
        },
      );
    };

    const close = () => {
      if (!sideRef.current) return;

      timelineRef.current?.kill();

      gsap.to(sideRef.current, {
        x: direction,
        duration,
        delay,
        ease: "power2.in",
        overwrite: true,
        onComplete: () => {
          setIsActive(false);
        },
      });
    };

    useImperativeHandle(ref, () => ({
      open,
      close,
    }));

    useGSAP(
      () => {
        if (!sideRef.current || !isActive) return;

        open();
      },
      {
        dependencies: [isActive],
        scope: sideRef,
      },
    );

    if (!isActive) return null;

    return (
      <aside
        ref={sideRef}
        className={`fixed inset-y-0 ${
          side === "right" ? "right-0" : "left-0"
        } z-50 min-h-dvh w-full  bg-white ${className}`}
        style={{ transform: `translateX(${direction})` }}
      >
        {children}
      </aside>
    );
  },
);

Toggle.displayName = "Toggle";

export default Toggle;
