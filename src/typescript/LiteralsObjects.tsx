interface Person {
    name: string,
    age: number,
    address: Address,
}
interface Address {
    country: string,
    houseNo: number,
}

export const LiteralsObjects = () => {

  const person: Person = {
      name: 'Sandra',
      age: 32,
      address: {
          country: 'Colombia',
          houseNo: 615
      }
  }  
  return (
    <>
        <h3>Literals Objects</h3>
        <code>
            <pre>
                { JSON.stringify( person, null, 2)}
            </pre>
        </code>
    </>
  )
}
