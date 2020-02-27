import parser from "./parser";
import error from "./error";

export default function(text) {
  return parser(text);
}