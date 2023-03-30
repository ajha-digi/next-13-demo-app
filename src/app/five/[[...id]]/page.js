export default function Home(props) {
  const {id} = props.params;

    return (
      <main>
        hello five world !!
        <div>
        {JSON.stringify(id, null, 4)}
        </div>
      </main>
    )
  }
  