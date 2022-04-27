//components drawer e tabela, tabela será passado como o conteudo principal
import Drawer from '../components/Drawer';
import TableProducts from '../components/TableProducts';

export default function Products(){
  return(
    <>
      <Drawer mainContent={TableProducts()}/>
    </>
  )

  
}