
# Reactive update cycle

    - In addition to the standard custom element lifecycle, Lit components also implement a reactive update cycle.

    The reactive update cycle is triggered when a reactive property changes or when the requestUpdate() method is explicitly called. Lit performs updates asynchronously so property changes are batched — if more properties change after an update is requested, but before the update starts, all of the changes are captured in the same update.

    Updates happen at microtask timing, which means they occur before the browser paints the next frame to the screen. See Jake Archibald's article on microtasks for more information about browser timing.

    At a high level, the reactive update cycle is:

    An update is scheduled when one or more properties change or when requestUpdate() is called.
    The update is performed prior to the next frame being painted.
    Reflecting attributes are set.
    The component’s render method is called to update its internal DOM.
    The update is completed and the updateComplete promise is resolved.
    In more detail, it looks like this: