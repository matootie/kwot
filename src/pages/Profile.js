import ApplicationShell from "components/util/ApplicationShell"
import { useAuthor } from "utils/api/authors"
import { useRelationship } from "utils/api/friends"
import Loading from "components/util/Loading"
import ProfileHeading from "components/profiles/ProfileHeading"
import ProfileQuotes from "components/profiles/ProfileQuotes"

export default function Profile(props) {

  const username = props.match.params.nickname

  const profile = useAuthor(username)
  const relationship = useRelationship(username)

  if (profile.isLoading) {
    return <Loading />
  }

  if (profile.error) {
    return <div>Something went wrong...</div>
  }

  if (profile.data.status !== 200) {
    return (
      <ApplicationShell>
        <article>
          <div>{profile.data.message}</div>
        </article>
      </ApplicationShell>
    )
  }

  if (relationship.isLoading) {
    return <Loading />
  }

  if (relationship.error) {
    return <div>Something went wrong...</div>
  }

  return (
    <ApplicationShell>
      <article>
        <ProfileHeading
          picture={profile.data.result.author.picture}
          username={profile.data.result.author.username}
          relationship={relationship.data.result}
        />
        <div className="max-w-md my-16 mx-auto">
          <ProfileQuotes
            username={username}
          />
        </div>
      </article>
    </ApplicationShell>
  )
}
