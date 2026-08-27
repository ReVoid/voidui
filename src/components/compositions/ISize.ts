type Variant = 'XSmall' | 'Small' | 'Medium' | 'Large' | 'XLarge'

type SizeUnit = number | `${number}${'px' | '%' | 'em' | 'vh' | 'vw'}` | 'auto';


type _SizeValue = {
  width: SizeUnit;
  height: SizeUnit;
};

type SizeValue =
  | SizeUnit
  | _SizeValue
  | Pick<_SizeValue, 'width'>
  | Pick<_SizeValue, 'height'>;

export interface ISize<T extends Variant = never> {
  size?: T | SizeValue;
}
