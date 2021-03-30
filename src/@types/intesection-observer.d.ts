/** provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport. */
interface IntersectionObserver {
  readonly root: Element | Document | null;
  readonly rootMargin: string;
  readonly thresholds: ReadonlyArray<number>;
  disconnect(): void;
  observe(target: Element): void;
  takeRecords(): IntersectionObserverEntry[];
  unobserve(target: Element): void;
}

declare const IntersectionObserver: {
  prototype: IntersectionObserver;
  new (
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ): IntersectionObserver;
}

/** This Intersection Observer API interface describes the intersection between the target element and its root container at a specific moment of transition. */
interface IntersectionObserverEntry {
  readonly boundingClientRect: DOMRectReadOnly;
  readonly intersectionRatio: number;
  readonly intersectionRect: DOMRectReadOnly;
  readonly isIntersecting: boolean;
  readonly rootBounds: DOMRectReadOnly | null;
  readonly target: Element;
  readonly time: number;
}

declare var IntersectionObserverEntry: {
  prototype: IntersectionObserverEntry;
  new (
    intersectionObserverEntryInit: IntersectionObserverEntryInit
  ): IntersectionObserverEntry;
}
