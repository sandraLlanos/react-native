export const Functions = () => {

  const sum = (a: number, b: number): number => {
    return a + b
  }
  
  return (
    <>
        <h3>Functions</h3>
        <span>Result: {sum(10, 5)} </span>
    </>

  )
}
