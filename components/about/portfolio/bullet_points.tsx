
const BulletPoints = (props: { points: string[] }) => {
  const listItems = props.points.map((point, index) => <li key={index}>{point}</li>)

  return (
    <div className="ml-10" >
      <ul className="list-disc list-outside">{listItems}</ul>
    </div>
  )
}

export default BulletPoints
