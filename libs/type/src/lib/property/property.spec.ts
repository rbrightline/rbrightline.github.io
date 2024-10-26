import { PropertyOptions } from './property';

describe('PropertyOptions', () => {
  describe('As Parameter', () => {
    it('should be used as paramter', () => {
      function sample(options: PropertyOptions) {
        const { type, active, canActivate, clickedAt } = options;
        let result = [type, active, canActivate, clickedAt];
      }
    });
  });

  describe('Ad Value', () => {
    it('should be string property', () => {
      const strintType: PropertyOptions = {
        type: 'string',
        minLength: 3,
        maxLength: 100,
      };
    });

    it('should be number property', () => {
      const strintType: PropertyOptions = {
        type: 'number',
        minimum: 100,
        maximum: 1000,
      };
    });

    it('should be boolean property', () => {
      const strintType: PropertyOptions = {
        type: 'boolean',
      };
    });

    it('should be date property', () => {
      const strintType: PropertyOptions = {
        type: 'date',
      };
    });

    it('should be object property', () => {
      const strintType: PropertyOptions = {
        type: 'object',
        target: () => {
          throw new Error('');
        },
        targetName: 'Sample',
      };
    });
  });

  describe('UI', () => {
    it('should provide interaction properties', () => {
      const value: PropertyOptions = {
        type: 'string',
        onClick: () => null,
        onHover: () => null,
        clickedAt: Date.now(),
        active: true,
        selected: true,
        confirm: true,
        canActivate: () => true,
        visible: true,
        hidden: true,

        label: 'Some label',

        prefixIcon: '10k',
        prefixText: 'Some prefix text',

        suffixIcon: '10k',
        suffixText: 'Some suffix text',
      };
    });
  });
});
