import {
  createSingleLineScopeTokens,
  findEmptyLines,
  createTokens,
  findScopes,
} from "../tokens";
import mocks from "../../__tests__/mocks";

describe("createSingleLineScopeTokens()", () => {
  it("returns nothing if no scopes on a single line", () => {
    expect(createSingleLineScopeTokens(mocks[2].text)).toEqual([]);
  });

  it("returns if a scope is on a single line", () => {
    expect(createSingleLineScopeTokens(mocks[3].text)).toEqual(["SCOPE"]);
  });
});
