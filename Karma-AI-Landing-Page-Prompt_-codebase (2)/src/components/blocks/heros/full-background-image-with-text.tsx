"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function FullBackgroundImageWithText({
  gradientFade = true,
}: {
  gradientFade?: boolean;
}) {
  const logos = [
    {
      name: "Aceternity UI",
      image: "https://assets.aceternity.com/pro/logos/aceternity-ui.png",
    },
    {
      name: "Gamity",
      image: "https://assets.aceternity.com/pro/logos/gamity.png",
    },
    {
      name: "Host it",
      image: "https://assets.aceternity.com/pro/logos/hostit.png",
    },
    {
      name: "Asteroid Kit",
      image: "https://assets.aceternity.com/pro/logos/asteroid-kit.png",
    },
  ];
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-10 bg-[var(--color-background)]">
      <div className="absolute inset-0 h-full w-full bg-[var(--color-primary)] opacity-80"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.3] }}
        transition={{ duration: 2 }}
        className="absolute inset-0 h-full w-full"
      >
        <BlurImage
          src="https://assets.aceternity.com/pro/image-background.jpg"
          className={cn(
            "pointer-events-none absolute inset-0 h-full w-full select-none object-cover mix-blend-multiply",
            gradientFade &&
              "[mask-image:radial-gradient(200px_at_center,transparent,black)]"
          )}
          width={1000}
          height={1000}
          alt="header"
        />
        <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-[var(--color-primary)] to-transparent"></div>
      </motion.div>
      <h1 className="relative z-10 max-w-5xl text-balance bg-gradient-to-b from-[var(--color-sage)] via-[var(--color-primary-foreground)] to-[var(--color-primary-foreground)] bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-7xl md:leading-tight">
        The best community for <br />
        Indie Hackers
      </h1>
      <p className="relative z-10 mt-2 max-w-2xl text-center text-[var(--color-sage)] md:mt-6 md:text-xl">
        We&apos;re building a community of indie hackers to help each other
        succeed. Get in touch with us to join the community.
      </p>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <Button as={Link} href="#" variant="accent">
          Join Community
        </Button>
        <Button as={Link} href="#" variant="simple" target="_blank">
          Add your product
        </Button>
      </div>
      <div className="relative z-10 mt-10 flex flex-wrap justify-center gap-10">
        {logos.map((logo) => (
          <BlurImage
            key={logo.name}
            src={logo.image}
            width={100}
            height={100}
            alt={logo.name}
            className="w-24 object-contain invert filter md:w-40"
          />
        ))}
      </div>
    </div>
  );
}

export const Button = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType | any;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "simple" | "accent";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "no-underline flex space-x-2 group cursor-pointer relative border-none transition duration-200 rounded-full p-px text-xs font-semibold leading-6 px-4 py-2";

  const variantStyles = {
    primary:
      "w-full sm:w-44 h-10 rounded-lg text-sm text-center items-center justify-center relative z-20 bg-[var(--color-primary)] text-[var(--color-primary-foreground)]",
    secondary:
      "relative z-20 text-sm bg-[var(--color-background)] text-[var(--color-primary)] w-full sm:w-44 h-10 flex items-center justify-center rounded-lg hover:-translate-y-0.5 ",
    simple:
      "relative z-20 text-sm bg-transparent text-[var(--color-primary-foreground)] w-full sm:w-44 h-10 flex items-center justify-center rounded-lg border border-[var(--color-primary-foreground)] hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)] hover:-translate-y-0.5 ",
    accent:
      "relative z-20 text-sm bg-[var(--color-accent)] text-[var(--color-accent-foreground)] w-full sm:w-44 h-10 flex items-center justify-center rounded-lg hover:-translate-y-0.5",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

import Image from "next/image";

export const BlurImage = (props: React.ComponentProps<typeof Image>) => {
  const [isLoading, setLoading] = useState(true);

  const { src, width, height, alt, layout, ...rest } = props;
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "opacity-0" : "opacity-100",
        props.className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={src as string}
      layout={layout}
      alt={alt ? alt : "Avatar"}
      {...rest}
    />
  );
};