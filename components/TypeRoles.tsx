"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

export default function TypeRoles() {
  const [text, setText] = useState("");
  const [ri, setRi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const role = profile.roles[ri % profile.roles.length];
    let delay = del ? 35 : 70;
    if (!del && ci === role.length) delay = 1400;
    if (del && ci === 0) delay = 300;

    const t = setTimeout(() => {
      if (!del && ci < role.length) {
        setText(role.slice(0, ci + 1));
        setCi(ci + 1);
      } else if (!del && ci === role.length) {
        setDel(true);
      } else if (del && ci > 0) {
        setText(role.slice(0, ci - 1));
        setCi(ci - 1);
      } else {
        setDel(false);
        setRi(ri + 1);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [ci, del, ri]);

  return (
    <span>
      <span className="mr-2 opacity-60">&gt;</span>
      <span className="text-glow">{text}</span>
      <span className="cursor-blink ml-1 inline-block h-5 w-2.5 translate-y-1 bg-[#33ff33]" />
    </span>
  );
}
