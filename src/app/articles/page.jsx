import Feed from "@/components/feed";

export const metadata = {
  title: 'Space Flights - Articles'
}

export default function Articles() {
  return (
    <div className="row">
      <div className="col-8 offset-2">
        <h1 className="text-center mb-3">Articles</h1>
        <Feed endpoint='articles' />
      </div>
    </div>
  )
}
