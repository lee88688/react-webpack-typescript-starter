interface Obj {
  setWidth(width: number): void;
  setHeight(height: number): void;
  
  appendChild(child: Obj): void;
  removeChild(child: Obj): void;
}

interface Label extends Obj {
  setText(text: string): void;
  resetText(): void;
}

declare const createLvglObj: (props: any) => Obj;
declare const createLvglLabel: (props: any) => Label;