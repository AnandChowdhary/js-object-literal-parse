declare module 'js-object-literal-parse' {
  const parseObjectLiteral: (literal: string) => [string, string | undefined][];
  export default parseObjectLiteral;
}