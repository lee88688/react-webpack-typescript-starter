interface Obj {
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  
  appendChild: (child: Obj) => void;
}

interface Label extends Obj {
  setText: (text: string) => void;
}

declare const createLvglObj: () => Obj;
declare const createLvglLabel: () => Label;