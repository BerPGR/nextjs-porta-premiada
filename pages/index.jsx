import PortaModel from "../model/porta";
import Porta from "../components/Porta";
import Presente from "../components/Presente";

export default function Home() {

  const p1 = new PortaModel(1, false, true)
  const p2 = new PortaModel(2)

  return (
    <div style={{display: 'flex'}}>
      <Porta porta={p1} />
      <Porta porta={p2} />
      {/*<Presente />*/}
    </div>
  )
}
