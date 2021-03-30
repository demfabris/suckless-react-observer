type observeFn = (target: HTMLElement) => void;
interface ObserverHook {
  (
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit,
    wrapper?: HTMLElement
  ): { observe: observeFn; unobserve: observeFn };
}

export const useIntersectionObserver: ObserverHook = (cb, options, wrapper) => {
  const observer = new IntersectionObserver(cb, {
    root: wrapper ?? document,
    ...options
  })

  return {
    observe: (target: HTMLElement) => observer.observe(target),
    unobserve: (target: HTMLElement) => observer.unobserve(target)
  }
}
