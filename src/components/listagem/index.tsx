import { Props } from '../listagemPerfil'
import {
  Botao,
  Card,
  ContainerImagem,
  ContainerTituloNota,
  ContainerDescriçao,
  Imagem,
  ListaContainer,
  Nota,
  Tag,
  TextoDescricao,
  Titulo,
  LinkPerfil,
  TagDestaque
} from './styles'

export const RestaurantesLista = ({ restaurante }: Props) => {
  return (
    <ListaContainer>
      {restaurante.map((restaurante) => (
        <Card key={restaurante.id}>
          <ContainerImagem>
            {restaurante.destacado && (
              <TagDestaque destacado={true}>Destaque</TagDestaque>
            )}

            <Tag id={`tag-${restaurante.id}`}>{restaurante.tipo}</Tag>

            <Imagem>
              <img src={restaurante.capa} alt={restaurante.titulo} />
            </Imagem>
          </ContainerImagem>

          <ContainerDescriçao>
            <ContainerTituloNota>
              <Titulo>{restaurante.titulo}</Titulo>
              <Nota>
                {restaurante.avaliacao} <span className="estrela">⭐</span>
              </Nota>
            </ContainerTituloNota>

            <TextoDescricao>{restaurante.descricao}</TextoDescricao>

            <Botao>
              <LinkPerfil type="link" to={`restaurantes/${restaurante.id}`}>
                Saiba mais
              </LinkPerfil>
            </Botao>
          </ContainerDescriçao>
        </Card>
      ))}
    </ListaContainer>
  )
}
