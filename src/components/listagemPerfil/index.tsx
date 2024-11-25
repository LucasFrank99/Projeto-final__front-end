import {
  Botao,
  ContainerImagem,
  ContainerTituloNota,
  ContainerDescriçao,
  Imagem,
  ListaContainer,
  TextoDescricao,
  Titulo,
  LinkPerfil,
  CardPerfil
} from '../listagem/styles'

import pizzaIMG from '../../imagens/pizza.png'

const pratos = [
  {
    id: 1,
    imagem: pizzaIMG,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    link: '/perfil',
    className: 'pizza'
  },
  {
    id: 2,
    imagem: pizzaIMG,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    link: '/perfil',
    className: 'pizza'
  },
  {
    id: 3,
    imagem: pizzaIMG,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    link: '/perfil',
    className: 'pizza'
  },
  {
    id: 4,
    imagem: pizzaIMG,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    link: '/perfil',
    className: 'pizza'
  },
  {
    id: 5,
    imagem: pizzaIMG,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    link: '/perfil',
    className: 'pizza'
  },
  {
    id: 6,
    imagem: pizzaIMG,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    link: '/perfil',
    className: 'pizza'
  }
]

export const PratosLista = () => (
  <ListaContainer className="perfil">
    {pratos.map((prato) => (
      <CardPerfil key={prato.id}>
        <ContainerImagem>
          <Imagem className={prato.className}>
            <img src={prato.imagem} alt={prato.titulo} />
          </Imagem>
        </ContainerImagem>

        <ContainerDescriçao className="perfil">
          <ContainerTituloNota>
            <Titulo className="perfil">{prato.titulo}</Titulo>
          </ContainerTituloNota>

          <TextoDescricao className="perfil">{prato.descricao}</TextoDescricao>
          <Botao className="perfil">
            <LinkPerfil className="perfil" to={prato.link}>
              Adcionar ao Carrinho
            </LinkPerfil>
          </Botao>
        </ContainerDescriçao>
      </CardPerfil>
    ))}
  </ListaContainer>
)
