import ReactReconciler from 'react-reconciler';

const reconciler = ReactReconciler({
  supportsMutation: true,
  createInstance(type, props) {
    switch (type) {
      case 'obj': {
        return createLvglObj(props);
      }
      case 'label': {
        const {text, style} = props;
        const label = createLvglLabel(props);
        label.setText(text);
        return label;
      }
      default: break;
    }
    return createLvglObj();
  },
  createTextInstance(text) {
    throw new Error("not support text instance.");
    // return text;
  },
  appendChildToContainer(container: any, child: Obj) {
    container.appendChild(child);
  },
  appendInitialChild(parent: Obj, child: Obj) {
    parent.appendChild(child);
  },
  appendChild(parent: Obj, child: Obj) {
    parent.appendChild(child);
  },
  removeChild(parent: Obj, child: Obj) {
    parent.removeChild(child);
  },
  insertBefore(parent, child, before) {
    parent.insertBefore(child, before);
  },
  getRootHostContext() { return {}; },
  getChildHostContext() { return {}; },
  shouldSetTextContent() { return false; },
  resetTextContent(instance: Label) {
    instance.resetText();
  },
  prepareForCommit() { return null },
  clearContainer() {},
  resetAfterCommit() {},
  finalizeInitialChildren () {},
});

export function render(element, root) {
  const container = reconciler.createContainer(root, 0, false, null);
  reconciler.updateContainer(element, container, null, null);
}
