import { Expectation, IFileRange, SyntaxError } from "./parser/parser";

interface IError {
  start: number;
  end: number;
  text: string;
  parse: null;
  error: SyntaxError;
}

interface IErrorArr {
  start: number;
  end: number;
  text: string;
  parse: null;
  error: SyntaxError[];
}

interface IParse {
  start: number;
  end: number;
  text: string;
  parse: any;
  error: null;
}

type IResult = IParse | IError;
