import ReactReconciler from 'react-reconciler'

const reconciler = ReactReconciler({
  supportsMutation: true,
  createInstance(type, props) {
    switch (type) {
      case 'obj': {
        return createLvglObj();
      }
      case 'label': {
        return createLvglLabel();
      }
      default: break;
    }
    return createLvglObj();
  },
  createTextInstance(text) {
    return createLvglLabel();
  },
  appendChildToContainer(container, child) {
    container.appendChild(child);
  },
  appendInitialChild(parent: Obj, child: Obj) {
    parent.appendChild(child);
  },
  appendChild(parent: Obj, child: Obj) {
    parent.appendChild(child);
  },
  removeChild(parent, child) {
    parent.removeChild(child);
  },
  insertBefore(parent, child, before) {
    parent.insertBefore(child, before);
  },
  getRootHostContext() { return {}; },
  getChildHostContext() { return {}; },
  shouldSetTextContent() { return false; },
  prepareForCommit() {},
  clearContainer() {},
  resetAfterCommit() {},
  finalizeInitialChildren () {},
});

export function render(element, root) {
  const container = reconciler.createContainer(root, false, false);
  reconciler.updateContainer(element, container, null, null);
}
