declare const _exports: {
    ($$$config: any): {};
    attemptContinuousHydration: (fiber: any) => void;
    attemptHydrationAtCurrentPriority: (fiber: any) => void;
    attemptSynchronousHydration: (fiber: any) => void;
    batchedUpdates: (fn: any, a: any) => any;
    createComponentSelector: (component: any) => {
        $$typeof: number;
        value: any;
    };
    createContainer: (containerInfo: any, tag: any, hydrationCallbacks: any, isStrictMode: any, concurrentUpdatesByDefaultOverride: any, identifierPrefix: any, onUncaughtError: any, onCaughtError: any, onRecoverableError: any, transitionCallbacks: any) => any;
    createHasPseudoClassSelector: (selectors: any) => {
        $$typeof: number;
        value: any;
    };
    createHydrationContainer: (initialChildren: any, callback: any, containerInfo: any, tag: any, hydrationCallbacks: any, isStrictMode: any, concurrentUpdatesByDefaultOverride: any, identifierPrefix: any, onUncaughtError: any, onCaughtError: any, onRecoverableError: any, transitionCallbacks: any, formState: any) => any;
    createPortal: (children: any, containerInfo: any, implementation: any, ...args: any[]) => {
        $$typeof: symbol;
        key: string | null;
        children: any;
        containerInfo: any;
        implementation: any;
    };
    createRoleSelector: (role: any) => {
        $$typeof: number;
        value: any;
    };
    createTestNameSelector: (id: any) => {
        $$typeof: number;
        value: any;
    };
    createTextSelector: (text: any) => {
        $$typeof: number;
        value: any;
    };
    defaultOnCaughtError: (error: any) => void;
    defaultOnRecoverableError: (error: any) => void;
    defaultOnUncaughtError: (error: any) => void;
    deferredUpdates: (fn: any) => any;
    discreteUpdates: (fn: any, a: any, b: any, c: any, d: any) => any;
    findAllNodes: (hostRoot: any, selectors: any) => any;
    findBoundingRects: (hostRoot: any, selectors: any) => any;
    findHostInstance: (component: any) => any;
    findHostInstanceWithNoPortals: (fiber: any) => any;
    findHostInstanceWithWarning: (component: any) => any;
    flushPassiveEffects: (wasDelayedCommit: any) => boolean;
    flushSyncFromReconciler: (fn: any) => any;
    flushSyncWork: () => boolean;
    focusWithin: (hostRoot: any, selectors: any) => boolean;
    getFindAllNodesFailureDescription: (hostRoot: any, selectors: any) => string | null;
    getPublicRootInstance: (container: any) => any;
    injectIntoDevTools: () => {
        bundleType: number;
        version: any;
        rendererPackageName: any;
        currentDispatcherRef: any;
        reconcilerVersion: string;
    };
    isAlreadyRendering: () => boolean;
    observeVisibleRects: (hostRoot: any, selectors: any, callback: any, options: any) => {
        disconnect: () => void;
    };
    shouldError: () => null;
    shouldSuspend: () => boolean;
    startHostTransition: (formFiber: any, pendingState: any, action: any, formData: any) => void;
    updateContainer: (element: any, container: any, parentComponent: any, callback: any) => any;
    updateContainerSync: (element: any, container: any, parentComponent: any, callback: any) => number;
    default: any;
    readonly __esModule: boolean;
} | {
    ($$$config: any): {};
    attemptContinuousHydration: (fiber: any) => void;
    attemptHydrationAtCurrentPriority: (fiber: any) => void;
    attemptSynchronousHydration: (fiber: any) => void;
    batchedUpdates: (fn: any, a: any) => any;
    createComponentSelector: (component: any) => {
        $$typeof: number;
        value: any;
    };
    createContainer: (containerInfo: any, tag: any, hydrationCallbacks: any, isStrictMode: any, concurrentUpdatesByDefaultOverride: any, identifierPrefix: any, onUncaughtError: any, onCaughtError: any, onRecoverableError: any, transitionCallbacks: any) => any;
    createHasPseudoClassSelector: (selectors: any) => {
        $$typeof: number;
        value: any;
    };
    createHydrationContainer: (initialChildren: any, callback: any, containerInfo: any, tag: any, hydrationCallbacks: any, isStrictMode: any, concurrentUpdatesByDefaultOverride: any, identifierPrefix: any, onUncaughtError: any, onCaughtError: any, onRecoverableError: any, transitionCallbacks: any, formState: any) => any;
    createPortal: (children: any, containerInfo: any, implementation: any, ...args: any[]) => {
        $$typeof: symbol;
        key: string | null;
        children: any;
        containerInfo: any;
        implementation: any;
    };
    createRoleSelector: (role: any) => {
        $$typeof: number;
        value: any;
    };
    createTestNameSelector: (id: any) => {
        $$typeof: number;
        value: any;
    };
    createTextSelector: (text: any) => {
        $$typeof: number;
        value: any;
    };
    defaultOnCaughtError: (error: any) => void;
    defaultOnRecoverableError: (error: any) => void;
    defaultOnUncaughtError: (error: any) => void;
    deferredUpdates: (fn: any) => any;
    discreteUpdates: (fn: any, a: any, b: any, c: any, d: any) => any;
    findAllNodes: (hostRoot: any, selectors: any) => any;
    findBoundingRects: (hostRoot: any, selectors: any) => any;
    findHostInstance: (component: any) => any;
    findHostInstanceWithNoPortals: (fiber: any) => any;
    findHostInstanceWithWarning: (component: any, methodName: any) => any;
    flushPassiveEffects: (wasDelayedCommit: any) => boolean;
    flushSyncFromReconciler: (fn: any) => any;
    flushSyncWork: () => boolean;
    focusWithin: (hostRoot: any, selectors: any) => boolean;
    getFindAllNodesFailureDescription: (hostRoot: any, selectors: any) => string | null;
    getPublicRootInstance: (container: any) => any;
    injectIntoDevTools: () => boolean;
    isAlreadyRendering: () => boolean;
    observeVisibleRects: (hostRoot: any, selectors: any, callback: any, options: any) => {
        disconnect: () => void;
    };
    shouldError: (fiber: any) => null;
    shouldSuspend: (fiber: any) => boolean;
    startHostTransition: (formFiber: any, pendingState: any, action: any, formData: any) => void;
    updateContainer: (element: any, container: any, parentComponent: any, callback: any) => any;
    updateContainerSync: (element: any, container: any, parentComponent: any, callback: any) => number;
    default: any;
    readonly __esModule: boolean;
};
export = _exports;
