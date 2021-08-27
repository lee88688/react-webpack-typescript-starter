let g: any = global;

const creator = (name) => (props) => {
  console.log(`create ${name}`, props);
  return new Proxy(
    {},
    {
      get(target, prop) {
        return (...argv) => console.log(name, prop, argv);
      }
    }
  )
};
g.createContainer = creator('container');
g.createLvglObj = creator('obj');
g.createLvglLabel = creator('label');