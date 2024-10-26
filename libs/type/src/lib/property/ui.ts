import { Handler } from '../function';
import { Icon } from './icon';
import { InputType } from './input-type';

export type UIPropertyOptions = {
  /**
   * Text placed before the property value
   */
  prefixText: string;

  /**
   * Text placed after the property value
   */
  suffixText: string;

  /**
   * Icon placed before the property value
   */
  prefixIcon: Icon;

  /**
   * Icon placed after the property value {@link Icon}
   */
  suffixIcon: Icon;

  /**
   * Input hint
   */
  hint?: string;

  /**
   * Input hints
   */
  hints?: string[];

  /**
   * Input tooltip
   */
  tooltip?: string;

  /**
   * Visible value of the property
   */
  label?: string;

  /**
   * When true, the property is visible
   */
  visible: boolean;

  /**
    /**
     * When true, the property is hidden
     */
  hidden: boolean;

  /**
   * When true, the property is selected
   */
  selected: boolean;

  /**
   * When true, the property is active
   */
  active: boolean;

  /**
   * Store the timestamp of last-click-time
   */
  clickedAt: number;

  /**
   * Request value confirmation
   */
  confirm: boolean;

  /**
   * Type of form input type {@link InputType}
   */
  inputType: InputType;

  /**
   * onClick handler
   * @param args
   * @returns
   */
  onClick: Handler;

  /**
   * onHover handler
   * @param args
   * @returns
   */
  onHover: Handler;
};
