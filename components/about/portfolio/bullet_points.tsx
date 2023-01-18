
const BulletPoints = (props: { points: string[] }) => {
  const listItems = props.points.map((point, index) => <li className="ml-[1em]" key={index}>{point}</li>)

  return (
    <ul className="list-disc list-outside">{listItems}</ul>
  )
}

export default BulletPoints
