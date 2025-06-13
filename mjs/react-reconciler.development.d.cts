declare function _exports($$$config: any): {};
declare namespace _exports {
    export function attemptContinuousHydration(fiber: any): void;
    export function attemptHydrationAtCurrentPriority(fiber: any): void;
    export function attemptSynchronousHydration(fiber: any): void;
    export function batchedUpdates(fn: any, a: any): any;
    export function createComponentSelector(component: any): {
        $$typeof: number;
        value: any;
    };
    export function createContainer(containerInfo: any, tag: any, hydrationCallbacks: any, isStrictMode: any, concurrentUpdatesByDefaultOverride: any, identifierPrefix: any, onUncaughtError: any, onCaughtError: any, onRecoverableError: any, transitionCallbacks: any): any;
    export function createHasPseudoClassSelector(selectors: any): {
        $$typeof: number;
        value: any;
    };
    export function createHydrationContainer(initialChildren: any, callback: any, containerInfo: any, tag: any, hydrationCallbacks: any, isStrictMode: any, concurrentUpdatesByDefaultOverride: any, identifierPrefix: any, onUncaughtError: any, onCaughtError: any, onRecoverableError: any, transitionCallbacks: any, formState: any): any;
    export function createPortal(children: any, containerInfo: any, implementation: any, ...args: any[]): {
        $$typeof: symbol;
        key: string | null;
        children: any;
        containerInfo: any;
        implementation: any;
    };
    export function createRoleSelector(role: any): {
        $$typeof: number;
        value: any;
    };
    export function createTestNameSelector(id: any): {
        $$typeof: number;
        value: any;
    };
    export function createTextSelector(text: any): {
        $$typeof: number;
        value: any;
    };
    export function defaultOnCaughtError(error: any): void;
    export function defaultOnRecoverableError(error: any): void;
    export function defaultOnUncaughtError(error: any): void;
    export function deferredUpdates(fn: any): any;
    export function discreteUpdates(fn: any, a: any, b: any, c: any, d: any): any;
    export { findAllNodes };
    export function findBoundingRects(hostRoot: any, selectors: any): any;
    export function findHostInstance(component: any): any;
    export function findHostInstanceWithNoPortals(fiber: any): any;
    export function findHostInstanceWithWarning(component: any, methodName: any): any;
    export { flushPendingEffects as flushPassiveEffects };
    export function flushSyncFromReconciler(fn: any): any;
    export { flushSyncWork };
    export function focusWithin(hostRoot: any, selectors: any): boolean;
    export function getFindAllNodesFailureDescription(hostRoot: any, selectors: any): string | null;
    export function getPublicRootInstance(container: any): any;
    export function injectIntoDevTools(): boolean;
    export function isAlreadyRendering(): boolean;
    export function observeVisibleRects(hostRoot: any, selectors: any, callback: any, options: any): {
        disconnect: () => void;
    };
    export function shouldError(fiber: any): null;
    export function shouldSuspend(fiber: any): boolean;
    export function startHostTransition(formFiber: any, pendingState: any, action: any, formData: any): void;
    export function updateContainer(element: any, container: any, parentComponent: any, callback: any): any;
    export { updateContainerSync };
    export default module.exports;
    export let __esModule: boolean;
}
export = _exports;
declare function findAllNodes(hostRoot: any, selectors: any): any;
declare function flushPendingEffects(wasDelayedCommit: any): boolean;
declare function flushSyncWork(): boolean;
declare function updateContainerSync(element: any, container: any, parentComponent: any, callback: any): number;
declare namespace exports {
    export { attemptContinuousHydration, attemptHydrationAtCurrentPriority, attemptSynchronousHydration, batchedUpdates, createComponentSelector, createContainer, createHasPseudoClassSelector, createHydrationContainer, createPortal, createRoleSelector, createTestNameSelector, createTextSelector, defaultOnCaughtError, defaultOnRecoverableError, defaultOnUncaughtError, deferredUpdates, discreteUpdates, findAllNodes, findBoundingRects, findHostInstance, findHostInstanceWithNoPortals, findHostInstanceWithWarning, flushPendingEffects as flushPassiveEffects, flushSyncFromReconciler, flushSyncWork, focusWithin, getFindAllNodesFailureDescription, getPublicRootInstance, injectIntoDevTools, isAlreadyRendering, observeVisibleRects, shouldError, shouldSuspend, startHostTransition, updateContainer, updateContainerSync, exports as default, __esModule };
}
declare namespace module { }
