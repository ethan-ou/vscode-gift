export function recursionLimits(text, nextLine) {
	return (
	  (nextLine && nextLine.offset && nextLine.offset > 1000000) ||
	  (nextLine && nextLine.line && nextLine.line > 100000) ||
	  (nextLine && nextLine.offset && nextLine.offset > text.length - 1)
	);
  }
  
  export function processError(error, options) {
	const offset = (options && options.offset) || 0;
	const line = (options && options.line) || 1;
  
	error.location.start = {
	  offset: error.location.start.offset + offset,
	  line: error.location.start.line + line - 1,
	  column: error.location.start.column
	};
  
	error.location.end = {
	  offset: error.location.end.offset + offset,
	  line: error.location.end.line + line - 1,
	  column: error.location.end.column
	};
  
	return error;
  }
  