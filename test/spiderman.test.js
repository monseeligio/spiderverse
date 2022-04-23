const spiderman = require("../app/spiderman");

describe("Unit tests for Spiderman class", () => {
    test('!) Create a spiderman object', () => {
      const andrewGarfield= new spiderman("spiderman sony",31,"Andrew Garfield",2, "Sony")
      expect(andrewGarfield.name).toBe("spiderman sony");
      expect(andrewGarfield.age).toBe(31);
      expect(andrewGarfield.actor).toBe("Andrew Garfield");
      expect(andrewGarfield.Number_movies).toBe(2);
      expect(andrewGarfield.studio).toBe("Sony");
    });
  })

  