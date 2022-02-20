const name: string = 'Sandra';
const age: number = 32;
const isActive: boolean = true;
const powers: string[] = ['Fly','Disappear'];

export const BasicTypes = () => {
  return (
    <>
        <h3>Basic Types</h3>
        {name}, {age}, {(isActive) ? 'active' : 'inactive'}
        <br />
        {powers.join(', ')}
    </>
  )
}
