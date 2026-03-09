declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    constructor(target: string | Element | Element[] | string[], vars?: Record<string, unknown>);
    revert(): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars?: Record<string, unknown>): ScrollSmoother;
    static refresh(soft?: boolean): void;
    scrollTop(value?: number): number;
    paused(value?: boolean): boolean;
    scrollTo(target: string | number | Element, smooth?: boolean, position?: string): void;
  }
}
