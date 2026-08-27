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

/**
 * @example
 * ```ts
 * // 1. Add your size variants (names) here
 * type MySizeVariants = 'XS' | 'SM' | 'M' | 'L' | 'XL' | 'XXL';
 *
 * // 2. Pass them to the interface
 * type MySize = ISize<MySizeVariants>;
 *
 * // 3. Add the interface to your component's props
 * defineProps<MySize>();
 * ```
 *
 * @example
 * ```vue
 * <!-- Use in section -->
 * <MyComponent size="M" />
 * <MyComponent :size="100" />
 * <MyComponent :size="{ width: '100%', height: '300px' }" />
 * ```
 */
export interface ISize<T extends Variant = never> {
  size?: T | SizeValue;
}
