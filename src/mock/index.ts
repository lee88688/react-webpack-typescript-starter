const g: any = global;

const creator = (name) => (props) => {
  console.log(`create ${name}`, props);
  return new Proxy(
    {},
    {
      get(target, prop) {
        return (...argv) => console.log(name, prop, argv);
      },
    },
  );
};
g.createContainer = creator('container');
g.createLvglObj = creator('obj');
g.createLvglLabel = creator('label');

function Creator(name) {
  return function (props) {
    console.log(`create ${name}`, props);
    return new Proxy(
      {},
      {
        get(target, prop) {
          return (...argv) => console.log(name, prop, argv);
        },
      },
    );
  };
}

g.LvglObj = Creator('obj');
g.LvglLabel = Creator('label');
