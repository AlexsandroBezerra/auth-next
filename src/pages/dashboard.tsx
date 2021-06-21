import { useContext } from "react"
import { Can } from "../components/Can"

import { AuthContext } from "../contexts/AuthContext"
import { withSSRAuth } from "../utils/withSSRAuth"

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext)

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>
      <button type="button" onClick={signOut}>Sign out</button>

      <Can permissions={['metrics.list']}>
        <h1>Métricas</h1>
      </Can>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {}
  }
})
