import { parse as parser, SyntaxError } from "./parser";

export default function (
  text: string
): { parse: any; error: SyntaxError | null } {
  try {
    return { parse: parser(text), error: null };
  } catch (error) {
    return { parse: null, error: error };
  }
}
