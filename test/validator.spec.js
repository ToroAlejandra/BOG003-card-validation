// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it('debería retornar true para "4083952015263"', () => {
      expect(validator.isValid('4083952015263')).toBe(true);
    });

    it('debería retornar true para "79927398713"', () => {
      expect(validator.isValid('79927398713')).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      expect(validator.isValid('1234567890')).toBe(false);
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify('4556364607935616')).toBe('############5616');
    });

    it('Debería retornar "1" para "1"', () => {
      expect(validator.maskify('1')).toBe('1');
    });

    it('Debería retornar "######orld" para "helloworld"', () => {
      expect(validator.maskify('helloworld')).toBe('######orld');
    });
  });

  describe('validator.isNumber', () =>{
    it('debería ser una función', () => {
      expect(typeof validator.isNumber).toBe('function');
    });

    it('Debería retornar true para "4556364607935616"', () => {
      expect(validator.isNumber('4556364607935616')).toBe(true);
    });

    it('Debería retornar true para "helloworld"', () => {
      expect(validator.isNumber('helloworld')).toBe(false);
    });

    it('Debería retornar true para "12.2358.320"', () => {
      expect(validator.isNumber('12.2358.320')).toBe(false);
    });

    it('Debería retornar true para "11 111 111"', () => {
      expect(validator.isNumber('11 111 111')).toBe(false);
    });
  });
});
