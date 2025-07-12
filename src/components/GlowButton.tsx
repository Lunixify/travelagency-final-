import React from "react";

type GlowButtonProps =
  | (Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "href"> & {
      as?: "button";
      children: React.ReactNode;
      className?: string;
    })
  | (Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "type"> & {
      as: "a";
      children: React.ReactNode;
      className?: string;
      href: string;
    });

export function GlowButton(props: GlowButtonProps) {
  const { as = "button", children, className = "", ...rest } = props as any;
  const base =
    "px-4 py-2 rounded font-medium transition shadow-lg focus:outline-none bg-[#56DFCF] text-gray-900 border-2 border-[#56DFCF] hover:shadow-[0_0_16px_4px_#56DFCF99] focus:ring-2 focus:ring-[#56DFCF]/60 disabled:opacity-60 disabled:cursor-not-allowed";
  const style = { boxShadow: "0 0 16px 2px #56DFCF" };

  if (as === "a") {
    const { href, ...anchorProps } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        href={href}
        className={`${base} ${className}`}
        style={style}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`${base} ${className}`}
      style={style}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
