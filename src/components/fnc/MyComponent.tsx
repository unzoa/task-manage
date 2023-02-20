export default (props: any, { slots, emit, attrs}: any) => {
  console.log('props', props)
  console.log('attrs', attrs)

  const clickEvent = () => {
    emit('ince', '2')
    console.log(111);
  }

  return <div className='my-component' id="aaa">
    <button onClick={clickEvent}>my-component</button>
  </div>
}
