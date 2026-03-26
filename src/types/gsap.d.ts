declare module "gsap/SplitText" {
  export default class SplitText {
    chars: any[];
    words: any[];
    lines: any[];
    constructor(target: any, vars?: any);
    revert(): void;
  }
}
