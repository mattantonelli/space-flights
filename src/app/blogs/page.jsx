import Feed from "@/components/feed";
import InfiniteFeed from "@/components/infiniteFeed";

export const metadata = {
  title: 'Space Flights - Blogs'
}

export default function Blogs() {
  return (
    <div className="row">
      <div className="col-8 offset-2">
        <h1 className="text-center mb-3">Blogs</h1>
        <Feed endpoint='blogs' />
        <InfiniteFeed endpoint='blogs' />
      </div>
    </div>
  )
}
