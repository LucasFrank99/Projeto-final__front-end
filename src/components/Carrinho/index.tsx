import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { RootReducer } from '../../store'
import { FiTrash } from 'react-icons/fi'
import {
  BarraLateral,
  BarraLateralContainer,
  ItemCarrinho,
  CarrinhoOverlay,
  ConteudoCarrinho,
  BotaoExcluirItem,
  ValorTotal,
  BotaoPagamento,
  ContainerForm
} from './styles'

import { close, remove } from '../../store/reducers/carrinho'
import { cores } from '../../styles'
import { useState } from 'react'
import { usePurchaseMutation } from '../../services/api'
import { useFormik } from 'formik'

const Carrinho = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.carrinho)
  const [step, setStep] = useState<
    'carrinho' | 'endereco' | 'pagamento' | 'confirmacao'
  >('carrinho')
  const [purchase, { data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipcode: '',
      numberEndereco: 12,
      complement: '',
      name: '',
      numberCartao: '',
      code: 123,
      expires: 12,
      year: 1234
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('O campo é obrigatorio'),
      description: Yup.string().required('O campo é obrigatorio'),
      city: Yup.string().required('O campo é obrigatorio'),
      zipcode: Yup.number().required('O campo é obrigatorio'),
      numberEndereco: Yup.number().required('O campo é obrigatorio'),
      complement: Yup.string(),
      name: Yup.string().required('O campo é obrigatorio'),
      numberCartao: Yup.number().required('O campo é obrigatorio'),
      code: Yup.number().required('O campo é obrigatorio'),
      expires: Yup.number().required('O campo é obrigatorio'),
      year: Yup.number().required('O campo é obrigatorio')
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: '',
          email: '',
          name: values.receiver
        },
        delivery: {
          email: ''
        },
        payment: {
          installments: '',
          card: {
            active: true,
            code: Number(values.code),
            name: values.name,
            number: values.numberCartao,
            owner: {
              document: '',
              name: values.name
            },
            expires: {
              month: Number(values.expires),
              year: Number(values.year)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 0
          }
        ]
      })
      setStep('confirmacao')
    }
  })

  const getMensagemDeErro = (fieldName: string, message?: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }

  const dispatch = useDispatch()

  const fecharCarrinho = () => {
    dispatch(close())
  }

  const getValorTotal = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <BarraLateralContainer className={isOpen ? 'is-open' : ''}>
      <CarrinhoOverlay onClick={fecharCarrinho} />
      <BarraLateral>
        {step === 'carrinho' && (
          <>
            <ul>
              {items.map((item) => (
                <ItemCarrinho key={item.id}>
                  <img src={item.foto}></img>
                  <ConteudoCarrinho>
                    <h1>{item.nome}</h1>
                    <span>R$ {item.preco}0</span>
                  </ConteudoCarrinho>
                  <BotaoExcluirItem
                    onClick={() => removeItem(item.id!)}
                    type="button"
                  >
                    <FiTrash size={30} color={cores.vermelho}></FiTrash>
                  </BotaoExcluirItem>
                </ItemCarrinho>
              ))}
            </ul>
            <ValorTotal>
              <p>Valor Total</p>
              <p>R$ {getValorTotal()}0</p>
            </ValorTotal>
            <BotaoPagamento onClick={() => setStep('endereco')}>
              Continuar com a entrega
            </BotaoPagamento>
          </>
        )}
        <form onSubmit={form.handleSubmit}>
          {step === 'endereco' && (
            <>
              <ContainerForm>
                <h2>Entrega</h2>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  type="text"
                  id="receiver"
                  name="receiver"
                  value={form.values.receiver}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {(getMensagemDeErro('receiver'), form.errors.receiver)}
                </small>
              </ContainerForm>
              <ContainerForm>
                <label htmlFor="description">Endereço</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={form.values.description}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {(getMensagemDeErro('description'), form.errors.description)}
                </small>
              </ContainerForm>
              <ContainerForm>
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{(getMensagemDeErro('city'), form.errors.city)}</small>
              </ContainerForm>
              <ContainerForm className="secondary">
                <div>
                  <label htmlFor="zipcode">CEP</label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    value={form.values.zipcode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {(getMensagemDeErro('zipcode'), form.errors.zipcode)}
                  </small>
                </div>
                <div>
                  <label htmlFor="numberEndereco">Número</label>
                  <input
                    type="number"
                    id="number"
                    name="numberEndereco"
                    value={form.values.numberEndereco}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {
                      (getMensagemDeErro('numberEndereco'),
                      form.errors.numberEndereco)
                    }
                  </small>
                </div>
              </ContainerForm>
              <ContainerForm>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </ContainerForm>
              <BotaoPagamento onClick={() => setStep('pagamento')}>
                Continuar com o pagamento
              </BotaoPagamento>
              <BotaoPagamento onClick={() => setStep('carrinho')}>
                Voltar para o carrinho
              </BotaoPagamento>
            </>
          )}

          {step === 'pagamento' && (
            <>
              <ContainerForm>
                <h2>Pagamento</h2>
                <label htmlFor="name">Nome no cartão</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.values.name}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{(getMensagemDeErro('name'), form.errors.name)}</small>
              </ContainerForm>
              <ContainerForm>
                <label htmlFor="numberCartao">Número do cartão</label>
                <input
                  type="text"
                  id="number"
                  name="numberCartao"
                  value={form.values.numberCartao}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {
                    (getMensagemDeErro('numberCartao'),
                    form.errors.numberCartao)
                  }
                </small>
              </ContainerForm>
              <ContainerForm>
                <label htmlFor="code">CVV</label>
                <input
                  type="number"
                  id="code"
                  name="code"
                  value={form.values.code}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{(getMensagemDeErro('code'), form.errors.code)}</small>
              </ContainerForm>
              <ContainerForm>
                <label htmlFor="month">Mês de vencimento</label>
                <input
                  type="number"
                  id="month"
                  name="month"
                  value={form.values.expires}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {(getMensagemDeErro('month'), form.errors.expires)}
                </small>
                <label htmlFor="year">Ano de vencimento</label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  value={form.values.year}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{(getMensagemDeErro('year'), form.errors.year)}</small>
              </ContainerForm>
              <BotaoPagamento type="submit">Finalizar pagamento</BotaoPagamento>
              <BotaoPagamento onClick={() => setStep('endereco')}>
                Voltar para a edição de endereço
              </BotaoPagamento>
            </>
          )}
        </form>
        {step === 'confirmacao' && (
          <>
            <ContainerForm>
              <h1>Pedido realizado - {data?.orderId}</h1>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </ContainerForm>
            <BotaoPagamento onClick={fecharCarrinho}>Concluir</BotaoPagamento>
          </>
        )}
      </BarraLateral>
    </BarraLateralContainer>
  )
}

export default Carrinho
