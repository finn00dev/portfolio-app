"use client";

import Button from "./Button";

export default function Links() {
  return (
    <div className="mx-auto flex flex-row items-center gap-8 sm:gap-11 lg:gap-15">
      <img src="/links/links.png" alt="Links" className="w-40 sm:w-32 lg:w-46"/>
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5 lg:flex-col">
        <Button label="resume" href="/Resume_Ferguson.pdf" />
        <Button label="linkedin" href="www.linkedin.com/in/finn-ferguson" />
        <Button label="github" href="https://github.com/finn00dev" />
      </div>
    </div>
  );
}
