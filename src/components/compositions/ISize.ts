type Variant = 'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge'

type SizeUnit = number | `${number}${'px' | '%' | 'em' | 'vh' | 'vw'}` | 'auto';

type SizeValue = {
  width: SizeUnit;
  height: SizeUnit;
};

export interface ISize<T extends Variant = never> {
  size?: T | SizeValue;
}
