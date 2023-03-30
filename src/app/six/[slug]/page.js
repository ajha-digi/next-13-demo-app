export default function Home(props) {
  const {slug} = props.params;
    return (
      <main>
        hello Six world !!
        <div>
        {JSON.stringify(slug, null, 4)}
        </div>
      </main>
    )
  }
  