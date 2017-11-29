var fn = require("../index.js");

describe("findString", () => {
  describe("retrun value test", () => {
    it("basic test", () => {
      const exp = fn("test");
      expect(exp).toEqual(/t[eèéêë][sß]t/gi);
    });
    it("basic with flag test", () => {
      const exp = fn("test", "gi");
      expect(exp).toEqual(/t[eèéêë][sß]t/gi);
    });
    it("all character test", () => {
      const exp = fn("abcdefghijklmnopqrstuvwxyz");
      expect(exp).toEqual(/[aàáâãäå]b[cç]d[eèéêë]fgh[iìíîï]jklm[nñ][oòóôõöø]pqr[sß]t[uùúûü]vwx[yÿ]z/gi);
    });
    it("all character test with flag", () => {
      const exp = fn("abcdefghijklmnopqrstuvwxyz", "iu");
      expect(exp).toEqual(/[aàáâãäå]b[cç]d[eèéêë]fgh[iìíîï]jklm[nñ][oòóôõöø]pqr[sß]t[uùúûü]vwx[yÿ]z/iu);
    });
  });
});
