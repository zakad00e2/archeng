import {
  type CSSProperties,
  type ComponentPropsWithoutRef,
  type ElementType,
  useEffect,
  useRef,
  useState,
} from 'react';

type RevealProps<T extends ElementType> = {
  as?: T;
  delay?: number;
  distance?: number;
  once?: boolean;
} & ComponentPropsWithoutRef<T>;

export function Reveal<T extends ElementType = 'div'>({
  as,
  children,
  className,
  delay = 0,
  distance = 32,
  once = true,
  style,
  ...props
}: RevealProps<T>) {
  const Component = (as ?? 'div') as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once]);

  return (
    <Component
      ref={ref}
      className={['reveal', isVisible ? 'is-visible' : '', className].filter(Boolean).join(' ')}
      style={
        {
          '--reveal-delay': `${delay}ms`,
          '--reveal-distance': `${distance}px`,
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </Component>
  );
}
