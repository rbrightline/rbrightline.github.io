/**
 * User interface options
 */
export class UIPropertyOptions {
  /**
   * define a prefix text that displayed right next to the value.
   */
  prefix: string;

  /**
   * define a suffix text that displayed right next to the value.
   */
  suffix: string;

  /**
   * define a prefix `icon` that displayed right next to the input element.
   */
  prefixIcon: string;

  /**
   * define a suffix `icon` that displayed right next to the input element.
   */
  suffixIcon: string;

  /**
   * define a hint text that displayed below the input element.
   */
  hint: string;

  /**
   * define a label text that displayed above the input element.
   */
  label: string;

  /**
   * define the associated form input is visible or not.
   */
  hideInput: boolean;

  /**
   * define the associated table column is visible or not.
   */
  hideValue: boolean;

  /**
   * define the associated form input is disabled or not.
   */
  disabled: boolean;

  /**
   * define a tooltip text displayed when hover over the input element
   */
  tooltip: string;
}
