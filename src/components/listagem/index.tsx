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
  TagS,
  TextoDescricao,
  Titulo,
  LinkPerfil
} from './styles'

import massaIMG from '../../imagens/massa.png'
import sushiIMG from '../../imagens/sushiimg.png'

const restaurantes = [
  {
    id: 1,
    tags: ['Destaque da Semana', 'Japonesa'],
    imagem: sushiIMG,
    titulo: 'Hioki Sushi',
    nota: '4.9',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    link: '/perfil'
  },
  {
    id: 2,
    tags: ['Italiana'],
    imagem: massaIMG,
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '/perfil',
    className: 'italiana'
  },
  {
    id: 3,
    tags: ['Italiana'],
    imagem: massaIMG,
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '/perfil',
    className: 'italiana'
  },
  {
    id: 4,
    tags: ['Italiana'],
    imagem: massaIMG,
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '/perfil',
    className: 'italiana'
  },
  {
    id: 5,
    tags: ['Italiana'],
    imagem: massaIMG,
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '/perfil',
    className: 'italiana'
  },
  {
    id: 6,
    tags: ['Italiana'],
    imagem: massaIMG,
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '/perfil',
    className: 'italiana'
  }
]

export const RestaurantesLista = () => (
  <>
    <ListaContainer>
      {restaurantes.map((restaurante) => (
        <Card key={restaurante.id}>
          <ContainerImagem>
            <TagS>
              {restaurante.tags.map((tag, index) => (
                <Tag className={restaurante.className || ''} key={index}>
                  {tag}
                </Tag>
              ))}
            </TagS>
            <Imagem>
              <img src={restaurante.imagem} alt={restaurante.titulo} />
            </Imagem>
          </ContainerImagem>

          <ContainerDescriçao>
            <ContainerTituloNota>
              <Titulo>{restaurante.titulo}</Titulo>
              <Nota>
                {restaurante.nota} <span className="estrela">⭐</span>
              </Nota>
            </ContainerTituloNota>

            <TextoDescricao>{restaurante.descricao}</TextoDescricao>

            <Botao>
              <LinkPerfil to={restaurante.link}>Saiba mais</LinkPerfil>
            </Botao>
          </ContainerDescriçao>
        </Card>
      ))}
    </ListaContainer>
  </>
)
